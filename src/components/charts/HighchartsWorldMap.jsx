import React, { useEffect, useRef } from 'react'
import Highcharts from 'highcharts'

// Import and initialize Highcharts modules
import 'highcharts/modules/map'
import 'highcharts/modules/variable-pie'

const HighchartsWorldMap = () => {
  const chartRef = useRef(null)

  // Drug abuse data by country (prevalence percentage and population)
  const drugAbuseData = [
    { name: 'United States of America', prevalence: 12.5, population: 334.9, deaths: 107000 },
    { name: 'Germany', prevalence: 6.4, population: 84.48, deaths: 5400 },
    { name: 'Italy', prevalence: 4.7, population: 58.76, deaths: 2800 },
    { name: 'France', prevalence: 5.9, population: 68.17, deaths: 4000 },
    { name: 'Russia', prevalence: 9.1, population: 143.83, deaths: 13000 },
    { name: 'China', prevalence: 2.3, population: 1410.71, deaths: 32000 },
    { name: 'Switzerland', prevalence: 3.2, population: 8.85, deaths: 280 },
    { name: 'Japan', prevalence: 1.8, population: 124.52, deaths: 2200 },
    { name: 'India', prevalence: 1.2, population: 1428.63, deaths: 17000 },
    { name: 'Netherlands', prevalence: 4.1, population: 17.88, deaths: 730 }
  ]

  // Calculate deaths per capita for variable pie
  const dataWithDeathsPerCapita = drugAbuseData.map(point => ({
    ...point,
    deathsPerCapita: Math.round(
      100 * point.deaths / (point.population * 1000000) * 1000000
    ) / 100
  })).sort((a, b) => b.deathsPerCapita - a.deathsPerCapita)

  const getGraticule = () => {
    const data = []

    // Meridians
    for (let x = -180; x <= 180; x += 15) {
      data.push({
        geometry: {
          type: 'LineString',
          coordinates:
            x % 90 === 0 ?
              [
                [x, -90],
                [x, 0],
                [x, 90]
              ] : [
                [x, -80],
                [x, 80]
              ]
        }
      })
    }

    // Latitudes
    for (let y = -90; y <= 90; y += 10) {
      const coordinates = []
      for (let x = -180; x <= 180; x += 5) {
        coordinates.push([x, y])
      }
      data.push({
        geometry: {
          type: 'LineString',
          coordinates
        },
        lineWidth: y === 0 ? 1 : undefined
      })
    }

    return data
  }

  useEffect(() => {
    const initializeChart = async () => {
      try {
        const topology = await fetch(
          'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
        ).then(response => response.json())
        
        const mapData = topology.objects.default.geometries.map(country => [
          country.properties['hc-key'],
          country.id
        ])
        
        const countries = topology.objects.default.geometries.filter(el =>
          dataWithDeathsPerCapita.map(c => c.name).includes(el.properties.name)
        )
        
        const rotation = countryName => {
          const countryProperties = countries.find(
            g => g.properties.name === countryName
          ).properties
          return [
            -countryProperties['hc-middle-lon'],
            -countryProperties['hc-middle-lat']
          ]
        }

        // Adjust data table view
        Highcharts.addEvent(Highcharts.Chart, 'exportData', function (e) {
          e.dataRows.forEach(function (el) {
            el.splice(0, 2)
          })
        })

        const chart = Highcharts.mapChart(chartRef.current, {
          chart: {
            map: topology,
            height: '80%',
            events: {
              load() {
                const chart = this
                chart.rotateToCountry = countryName => {
                  const point1 = chart.mapView.projection.options.rotation,
                    point2 = rotation(countryName),
                    distance = Highcharts.Projection.distance(point1, point2)

                  if (!distance) {
                    return
                  }
                  const stepDistance = distance / 1000,
                    geodesic = Highcharts.Projection.geodesic(
                      chart.mapView.projection.options.rotation,
                      rotation(countryName),
                      true,
                      stepDistance
                    )

                  chart.renderer.boxWrapper.animator = 0

                  const animateGlobe = () => new Promise(resolve => {
                    Highcharts.animate(
                      chart.renderer.boxWrapper,
                      { animator: 999 },
                      {
                        duration: 1000,
                        step: (now, fx) => {
                          const rotation = geodesic[Math.round(now)]
                          chart.mapView.update(
                            {
                              projection: {
                                rotation
                              }
                            },
                            true,
                            false
                          )

                          if (fx.pos === 1) {
                            resolve()
                          }
                        }
                      }
                    )
                  })

                  ;(async () => {
                    chart.isRotating = true
                    await animateGlobe()
                    chart.isRotating = false
                  })()
                }

                chart.findCountry = countryName =>
                  this.series[1].data.find(p => p.name === countryName)
              },
              redraw() {
                const chart = this
                chart.mapView.fitToBounds(undefined, undefined, false)
                chart.renderSea?.()
              },
              render() {
                const chart = this,
                  renderer = chart.renderer

                if (!chart.renderSea) {
                  chart.renderSea = () => {
                    let verb = 'animate'
                    if (!chart.sea) {
                      chart.sea = renderer
                        .circle()
                        .attr({
                          fill: {
                            radialGradient: {
                              cx: 0.4,
                              cy: 0.4,
                              r: 0.65,
                              fx: 0.3,
                              fy: 0.3
                            },
                            stops: [
                              [0, '#f0f9ff'],
                              [0.15, '#e0f2fe'],
                              [0.4, '#0891b2'],
                              [0.8, '#0369a1'],
                              [1, '#0c4a6e']
                            ]
                          },
                          zIndex: -1
                        })
                        .add(chart.get('graticule').group)
                      verb = 'attr'
                    }

                    const bounds = chart.get('graticule').bounds,
                      p1 = chart.mapView.projectedUnitsToPixels({
                        x: bounds.x1,
                        y: bounds.y1
                      }),
                      p2 = chart.mapView.projectedUnitsToPixels({
                        x: bounds.x2,
                        y: bounds.y2
                      })
                    chart.sea[verb]({
                      cx: (p1.x + p2.x) / 2,
                      cy: (p1.y + p2.y) / 2,
                      r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
                    })
                  }
                  chart.renderSea()
                }

                if (!chart.getStickyLabel) {
                  chart.getStickyLabel = () => {
                    const point = chart.getSelectedPoints()[0],
                      countryName = point.name,
                      text = `<b>${countryName}</b>
                        <br/><b>Drug Abuse Data</b>
                        <br/>Prevalence: <b>${point.y}%</b>
                        <br/>Population: <b>${Highcharts.numberFormat(point.population)}M</b>
                        <br/>Deaths: <b>${Highcharts.numberFormat(point.z)}</b>`

                    if (!chart.sticky) {
                      chart.sticky = renderer
                        .label()
                        .attr({
                          fill: {
                            linearGradient: {
                              x1: 0.1,
                              y2: 0.2
                            },
                            stops: [
                              [0.3, '#0891b2'],
                              [0.6, '#e0f2fe'],
                              [0.9, '#0891b2']
                            ]
                          }
                        })
                        .shadow(true)
                        .add()
                      chart.sticky.box.attr({
                        rx: 5
                      })
                    }

                    chart.sticky.attr({
                      text
                    })
                  }
                }

                if (!chart.isRotating || chart.justSelectedPoint) {
                  chart.justSelectedPoint = false
                  const pieSeries = chart.get('pieseries'),
                    [centerX, centerY, d, innerD] = pieSeries.center,
                    innerR = innerD / 2,
                    r = d / 2,
                    cx = centerX + chart.plotLeft,
                    cy = centerY + chart.plotTop,
                    fontSizeAxes = innerR > 85 ? '0.8em' : '0.5em',
                    fontSizeSticky = innerR > 85 ? '1em' : '0.7em'

                  chart.customAxes?.destroy()
                  chart.customAxes = renderer.g().add()

                  const radialAxis = renderer.path([
                    'M', cx - 3, cy - innerR, 'L', cx - 3, cy - r
                  ]).attr({
                    stroke: 'var(--highcharts-neutral-color-80, #444)',
                    'stroke-width': 2
                  }).add(chart.customAxes)

                  renderer.text('PREVALENCE %', 0, 0).attr({
                    'font-size': fontSizeAxes,
                    'font-weight': 'bold',
                    fill: 'var(--highcharts-neutral-color-80, #444)'
                  }).add(chart.customAxes)

                  const angularAxisR = innerR + 1
                  renderer.path([
                    'M', cx - angularAxisR, cy, 'A', angularAxisR,
                    angularAxisR, 0, 0, 1, cx - 2, cy - angularAxisR
                  ]).attr({
                    stroke: 'var(--highcharts-neutral-color-80, #444)',
                    'stroke-width': 2
                  }).add(chart.customAxes)

                  const angularAxisTitleR = angularAxisR + 3
                  const angularAxisTitlePath = renderer.path([
                    'M', cx - angularAxisTitleR, cy, 'A',
                    angularAxisTitleR, angularAxisTitleR,
                    0, 0, 1, cx, cy - angularAxisTitleR
                  ]).add(chart.customAxes)

                  renderer.text('DRUG ABUSE DEATHS', 0, 0)
                    .attr({
                      'font-size': fontSizeAxes,
                      'font-weight': 'bold',
                      fill: 'var(--highcharts-neutral-color-80, #444)'
                    })
                    .add(chart.customAxes)

                  if (chart.getSelectedPoints().length === 1) {
                    chart.getStickyLabel()

                    chart.sticky.css({
                      fontSize: fontSizeSticky
                    })
                    const labelWidth = chart.sticky.bBox.width,
                      x = cx - labelWidth - 40
                    chart.sticky.attr({
                      x: x > 0 ? x : 0,
                      y: cy - r
                    })
                  }
                }
              }
            }
          },

          credits: {
            enabled: false
          },

          title: {
            text: '2023 Global Drug Abuse Crisis - Interactive Globe',
            style: {
              fontSize: '28px'
            }
          },

          subtitle: {
            text: 'Drug abuse prevalence and deaths by country. Click on pie segments to rotate globe to that country.'
          },

          legend: {
            enabled: false
          },

          mapView: {
            padding: ['41%', '30%', '23%', '30%'],
            projection: {
              name: 'Orthographic',
              rotation: rotation('United States of America')
            }
          },

          plotOptions: {
            variablepie: {
              dataLabels: {
                style: {
                  fontSize: '1em'
                },
                connectorColor: 'var(--highcharts-neutral-color-80, #444)'
              },
              includeInDataExport: true
            },
            series: {
              animation: {
                duration: 1000
              },
              includeInDataExport: false
            }
          },

          exporting: {
            csv: {
              columnHeaderFormatter: (_, key) => ({
                population: 'Population (M)',
                y: 'Prevalence (%)',
                z: 'Deaths'
              }[key] || 'Country')
            }
          },

          tooltip: {
            style: {
              fontSize: '1em'
            },
            valueDecimals: 2,
            useHTML: true,
            headerFormat:
              `<table>
                <tr>
                  <th colspan="2" style="font-weight: bold">
                    {point.key}
                  </th>
                </tr>`,
            pointFormat:
              `<tr>
                <td>Population:</td>
                <td><b>{point.population} M</b></td>
              </tr>
              <tr>
                <td>Prevalence:</td>
                <td><b>{point.y}%</b></td>
              </tr>
              <tr>
                <td>Deaths:</td>
                <td><b>{point.z}</b></td>
              </tr>`,
            footerFormat: '</table>'
          },

          series: [
            {
              name: 'Graticule',
              id: 'graticule',
              type: 'mapline',
              data: getGraticule(),
              nullColor: '#22201520',
              accessibility: {
                enabled: false
              },
              enableMouseTracking: false,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            },
            {
              name: 'Map',
              data: mapData,
              keys: ['hc-key', 'id'],
              accessibility: {
                enabled: false
              },
              enableMouseTracking: false,
              borderColor: '#0891b2',
              borderWidth: 0.5,
              color: '#0369a1',
              states: {
                inactive: {
                  opacity: 1
                }
              }
            },
            {
              name: 'Countries',
              id: 'pieseries',
              type: 'variablepie',
              allowPointSelect: true,
              borderColor: '#0c4a6e',
              inactiveOtherPoints: false,
              cursor: 'pointer',
              innerSize: '45%',
              size: '100%',
              center: ['50%', '60%'],
              endAngle: 270,
              borderRadius: 5,
              keys: ['countryID', 'name', 'population', 'y', 'z'],
              data: dataWithDeathsPerCapita.map(pointData => [
                countries.find(
                  country => country.properties.name === pointData.name
                ).id,
                pointData.name,
                pointData.population,
                pointData.prevalence,
                pointData.deaths
              ]),
              colors: [
                '#ef4444',
                '#f59e0b',
                '#0891b2',
                '#10b981',
                '#8b5cf6',
                '#ec4899',
                '#6b7280',
                '#f97316',
                '#84cc16',
                '#06b6d4'
              ],
              point: {
                events: {
                  unselect() {
                    const point = this,
                      countryName = point.name,
                      mapPoint = chart.findCountry(countryName)
                    mapPoint.update({
                      color: null
                    })

                    if (countryName === chart.selectedCountry) {
                      chart.sticky = chart.sticky?.destroy()
                    }
                  },
                  select() {
                    const point = this,
                      selectedPoints = chart.getSelectedPoints(),
                      countryName = point.name,
                      mapPoint = chart.findCountry(countryName)
                    mapPoint.update({
                      color: '#ffffff99'
                    })
                    chart.selectedCountry = countryName
                    chart.justSelectedPoint = true

                    selectedPoints.forEach(point => {
                      if (point.name !== countryName) {
                        point.select(false)
                      }
                    })

                    chart.redraw({
                      defer: 500,
                      complete() {
                        if (!chart.isRotating) {
                          chart.rotateToCountry(countryName)
                        }
                      }
                    })
                  },
                  click(e) {
                    if (chart.isRotating) {
                      e.preventDefault()
                    }
                  }
                }
              }
            }
          ],

          responsive: {
            rules: [{
              condition: {
                maxWidth: 650
              },
              chartOptions: {
                chart: {
                  height: '120%'
                },
                plotOptions: {
                  variablepie: {
                    dataLabels: {
                      distance: 5,
                      connectorColor: 'transparent',
                      padding: 0,
                      style: {
                        fontSize: '1em'
                      },
                      format: '{point.countryID}'
                    }
                  }
                }
              }
            }]
          }
        })
      } catch (error) {
        console.error('Error loading world map:', error)
      }
    }

    initializeChart()
  }, [])

  return (
    <section className="world-map-section">
      <div className="world-map-container">
        <div className="world-map-header">
          <h2>Global Drug Abuse Crisis - Interactive 3D Globe</h2>
          <p>Click on pie segments to rotate the globe to that country and see detailed data</p>
        </div>
        
        <div className="highcharts-world-map">
          <div ref={chartRef} id="container" style={{ height: '600px', width: '100%' }}></div>
        </div>
        
        <div className="world-map-stats">
          <div className="stat-card">
            <h4>Key Insights</h4>
            <ul>
              <li>United States has the highest drug abuse prevalence at 12.5%</li>
              <li>China has the highest absolute number of deaths despite lower prevalence</li>
              <li>Russia shows high prevalence (9.1%) with significant death toll</li>
              <li>Interactive globe allows exploration of country-specific data</li>
              <li>Variable pie chart shows both prevalence and death statistics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighchartsWorldMap
