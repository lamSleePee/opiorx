import React, { useEffect, useRef, useState } from 'react'
import Highcharts from 'highcharts'
import 'highcharts/modules/map'
import 'highcharts/modules/accessibility'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import LifeExpectancyMap from './LifeExpectancyMap'
import CountryDrugCrisis from '../sections/CountryDrugCrisis'

const WorldMap = () => {
  const chartRef = useRef(null)
  const scrollRef = useRef(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)

  // Drug abuse data by country (prevalence percentage)
  const data = [
    { name: 'United States of America', value: 1477 },
    { name: 'Brazil', value: 490 },
    { name: 'Mexico', value: 882 },
    { name: 'Canada', value: 161 },
    { name: 'Russia', value: 74 },
    { name: 'Argentina', value: 416 },
    { name: 'Bolivia', value: 789 },
    { name: 'Colombia', value: 805 },
    { name: 'Paraguay', value: 2011 },
    { name: 'Indonesia', value: 372 },
    { name: 'South Africa', value: 466 },
    { name: 'Papua New Guinea', value: 1239 },
    { name: 'Germany', value: 1546 },
    { name: 'China', value: 54 },
    { name: 'Chile', value: 647 },
    { name: 'Australia', value: 62 },
    { name: 'France', value: 844 },
    { name: 'United Kingdom', value: 1901 },
    { name: 'Venezuela', value: 503 },
    { name: 'Ecuador', value: 1560 },
    { name: 'India', value: 116 },
    { name: 'Iran', value: 208 },
    { name: 'Guatemala', value: 2716 },
    { name: 'Philippines', value: 828 },
    { name: 'Sweden', value: 563 },
    { name: 'Saudi Arabia', value: 100 },
    { name: 'Democratic Republic of the Congo', value: 87 },
    { name: 'Kenya', value: 346 },
    { name: 'Zimbabwe', value: 507 },
    { name: 'Peru', value: 149 },
    { name: 'Ukraine', value: 323 },
    { name: 'Angola', value: 141 },
    { name: 'Japan', value: 480 },
    { name: 'United Republic of Tanzania', value: 187 },
    { name: 'Costa Rica', value: 3153 },
    { name: 'Algeria', value: 66 },
    { name: 'Pakistan', value: 196 },
    { name: 'Spain', value: 301 },
    { name: 'Finland', value: 487 },
    { name: 'Nicaragua', value: 1225 },
    { name: 'Libya', value: 83 },
    { name: 'Cuba', value: 1211 },
    { name: 'Uruguay', value: 760 },
    { name: 'Oman', value: 426 },
    { name: 'Italy', value: 439 },
    { name: 'Czech Republic', value: 1657 },
    { name: 'Poland', value: 414 },
    { name: 'New Zealand', value: 465 },
    { name: 'Guyana', value: 594 },
    { name: 'Panama', value: 1574 },
    { name: 'Malaysia', value: 347 },
    { name: 'Namibia', value: 136 },
    { name: 'South Korea', value: 1145 },
    { name: 'Honduras', value: 921 },
    { name: 'Iraq', value: 233 },
    { name: 'Thailand', value: 198 },
    { name: 'Mozambique', value: 125 },
    { name: 'Turkey', value: 127 },
    { name: 'Iceland', value: 958 },
    { name: 'Kazakhstan', value: 36 },
    { name: 'Norway', value: 312 },
    { name: 'Syria', value: 484 },
    { name: 'Zambia', value: 118 },
    { name: 'South Sudan', value: 132 },
    { name: 'Egypt', value: 83 },
    { name: 'Madagascar', value: 143 },
    { name: 'North Korea', value: 681 },
    { name: 'Denmark', value: 1885 },
    { name: 'Greece', value: 589 },
    { name: 'Botswana', value: 131 },
    { name: 'Sudan', value: 43 },
    { name: 'Croatia', value: 1233 },
    { name: 'Bulgaria', value: 627 },
    { name: 'El Salvador', value: 3282 },
    { name: 'Belarus', value: 320 },
    { name: 'Myanmar', value: 98 },
    { name: 'Portugal', value: 700 },
    { name: 'Switzerland', value: 1575 },
    { name: 'The Bahamas', value: 6094 },
    { name: 'Lithuania', value: 973 },
    { name: 'Somalia', value: 97 },
    { name: 'Chad', value: 47 },
    { name: 'Ethiopia', value: 52 },
    { name: 'Yemen', value: 108 },
    { name: 'Morocco', value: 123 },
    { name: 'Suriname', value: 353 },
    { name: 'French Polynesia', value: 14110 },
    { name: 'Nigeria', value: 59 },
    { name: 'Uzbekistan', value: 125 },
    { name: 'Afghanistan', value: 80 },
    { name: 'Austria', value: 631 },
    { name: 'Belize', value: 2061 },
    { name: 'Israel', value: 2186 },
    { name: 'Nepal', value: 328 },
    { name: 'Uganda', value: 238 },
    { name: 'Romania', value: 196 },
    { name: 'Vietnam', value: 145 },
    { name: 'Gabon', value: 171 },
    { name: 'Mongolia', value: 28 },
    { name: 'United Arab Emirates', value: 514 },
    { name: 'Latvia', value: 675 },
    { name: 'Belgium', value: 1354 },
    { name: 'Hungary', value: 458 },
    { name: 'Laos', value: 178 },
    { name: 'Ireland', value: 581 },
    { name: 'Central African Republic', value: 63 },
    { name: 'Azerbaijan', value: 448 },
    { name: 'Taiwan', value: 1147 },
    { name: 'Dominican Republic', value: 745 },
    { name: 'Solomon Islands', value: 1286 },
    { name: 'Slovakia', value: 728 },
    { name: 'Cameroon', value: 70 },
    { name: 'Malawi', value: 340 },
    { name: 'Vanuatu', value: 2543 },
    { name: 'Mauritania', value: 29 },
    { name: 'Niger', value: 24 },
    { name: 'Liberia', value: 301 },
    { name: 'Netherlands', value: 856 },
    { name: 'Puerto Rico', value: 3237 },
    { name: 'Tunisia', value: 187 },
    { name: 'Fiji', value: 1532 },
    { name: 'Jamaica', value: 2585 },
    { name: 'Kyrgyzstan', value: 146 },
    { name: 'Republic of the Congo', value: 79 },
    { name: 'Ivory Coast', value: 85 },
    { name: 'Republic of Serbia', value: 336 },
    { name: 'Turkmenistan', value: 55 },
    { name: 'Mali', value: 20 },
    { name: 'New Caledonia', value: 1368 },
    { name: 'Bosnia and Herzegovina', value: 469 },
    { name: 'Lesotho', value: 791 },
    { name: 'Tajikistan', value: 170 },
    { name: 'Antarctica', value: 2 },
    { name: 'Burkina Faso', value: 84 },
    { name: 'Georgia', value: 316 },
    { name: 'Senegal', value: 104 },
    { name: 'Kiribati', value: 23428 },
    { name: 'Sri Lanka', value: 294 },
    { name: 'Bangladesh', value: 138 },
    { name: 'Estonia', value: 425 },
    { name: 'Jordan', value: 203 },
    { name: 'Cambodia', value: 91 },
    { name: 'Guinea', value: 65 },
    { name: 'Slovenia', value: 794 },
    { name: 'Northern Cyprus', value: 1623 },
    { name: 'Greenland', value: 7 },
    { name: 'Marshall Islands', value: 82873 },
    { name: 'Swaziland', value: 814 },
    { name: 'Haiti', value: 508 },
    { name: 'Seychelles', value: 30769 },
    { name: 'Djibouti', value: 561 },
    { name: 'Eritrea', value: 129 },
    { name: 'Armenia', value: 390 },
    { name: 'Cook Islands', value: 46610 },
    { name: 'Ghana', value: 44 },
    { name: 'Macedonia', value: 393 },
    { name: 'Cape Verde', value: 2232 },
    { name: 'Maldives', value: 30201 },
    { name: 'Singapore', value: 12690 },
    { name: 'Guinea Bissau', value: 284 },
    { name: 'Lebanon', value: 782 },
    { name: 'Sierra Leone', value: 112 },
    { name: 'Togo', value: 147 },
    { name: 'Turks and Caicos Islands', value: 8439 },
    { name: 'Burundi', value: 273 },
    { name: 'Equatorial Guinea', value: 250 },
    { name: 'Falkland Islands', value: 575 },
    { name: 'Kuwait', value: 393 },
    { name: 'Moldova', value: 213 },
    { name: 'Rwanda', value: 284 },
    { name: 'Benin', value: 54 },
    { name: 'East Timor', value: 403 },
    { name: 'Kosovo', value: 551 },
    { name: 'Micronesia', value: 8547 },
    { name: 'Qatar', value: 518 },
    { name: 'Saint Vincent and the Grenadines', value: 15424 },
    { name: 'Tonga', value: 8368 },
    { name: 'Western Sahara', value: 23 },
    { name: 'Guam', value: 9191 },
    { name: 'Mauritius', value: 2463 },
    { name: 'Montenegro', value: 372 },
    { name: 'Northern Mariana Islands', value: 10776 },
    { name: 'Albania', value: 146 },
    { name: 'Bahrain', value: 5263 },
    { name: 'British Virgin Islands', value: 26490 },
    { name: 'Comoros', value: 1790 },
    { name: 'French Southern and Antarctic Lands', value: 522 },
    { name: 'Samoa', value: 1418 },
    { name: 'Spratly Islands', value: 800000 },
    { name: 'Svalbard', value: 64 },
    { name: 'Trinidad and Tobago', value: 780 },
    { name: 'American Samoa', value: 13393 },
    { name: 'Antigua and Barbuda', value: 6778 },
    { name: 'Cayman Islands', value: 11364 },
    { name: 'Grenada', value: 8721 },
    { name: 'Palau', value: 6536 },
    { name: 'Palestinian Territories', value: 500 },
    { name: 'Anguilla', value: 21978 },
    { name: 'Bhutan', value: 52 },
    { name: 'Dominica', value: 2663 },
    { name: 'Guernsey', value: 25608 },
    { name: 'Hong Kong', value: 1864 },
    { name: 'Luxembourg', value: 773 },
    { name: 'Saint Kitts and Nevis', value: 7663 },
    { name: 'Saint Lucia', value: 3300 },
    { name: 'Saint Pierre and Miquelon', value: 8264 },
    { name: 'São Tomé and Príncipe', value: 2075 },
    { name: 'Virgin Islands of the U.S.', value: 5780 },
    { name: 'Wallis and Futuna', value: 14085 },
    { name: 'Aruba', value: 5556 },
    { name: 'Barbados', value: 2326 },
    { name: 'Bermuda', value: 18657 },
    { name: 'British Indian Ocean Territory', value: 16667 },
    { name: 'Brunei', value: 190 },
    { name: 'Faroe Islands', value: 718 },
    { name: 'Gambia', value: 99 },
    { name: 'Gibraltar', value: 153846 },
    { name: 'Jan Mayen', value: 2653 },
    { name: 'Jersey', value: 8621 },
    { name: 'Macau', value: 35461 },
    { name: 'Malta', value: 3165 },
    { name: 'Isle of Man', value: 1748 },
    { name: 'Montserrat', value: 9804 },
    { name: 'Nauru', value: 47170 },
    { name: 'Niue', value: 3846 },
    { name: 'Paracel Islands', value: 129032 },
    { name: 'Saint Barthelemy', value: 40000 },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', value: 2538 },
    { name: 'Saint Martin', value: 18382 },
    { name: 'Sint Maarten', value: 29412 },
    { name: 'Tuvalu', value: 39063 },
    { name: 'Wake Island', value: 153846 }
  ]

  const getGraticule = () => {
    const data = []

    // Meridians
    for (let x = -180; x <= 180; x += 15) {
      data.push({
        geometry: {
          type: 'LineString',
          coordinates: x % 90 === 0 ? [
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
        lineWidth: y === 0 ? 2 : undefined
      })
    }

    return data
  }


  useEffect(() => {
    if (chartRef.current) {
      fetch('https://code.highcharts.com/mapdata/custom/world.topo.json')
        .then(response => response.json())
        .then(topology => {
          const chart = Highcharts.mapChart(chartRef.current, {
            chart: {
              map: topology
            },

            title: {
              text: 'Drug Abuse Prevalence per Country',
              floating: true,
              align: 'left',
              style: {
                textOutline: '2px contrast'
              }
            },

            subtitle: {
              text: 'Source: Global Drug Abuse Statistics<br>' +
                  'Click and drag to rotate globe<br>',
              floating: true,
              y: 34,
              align: 'left'
            },

            legend: {
              enabled: false
            },

            mapNavigation: {
              enabled: true,
              enableDoubleClickZoomTo: true,
              buttonOptions: {
                verticalAlign: 'bottom'
              }
            },

            mapView: {
              maxZoom: 30,
              projection: {
                name: 'Orthographic',
                rotation: [60, -30]
              }
            },

            colorAxis: {
              tickPixelInterval: 100,
              minColor: '#E0F2FE',
              maxColor: '#0C4A6E',
              max: 1000
            },

            tooltip: {
              pointFormat: '{point.name}: {point.value} cases per million'
            },

            plotOptions: {
              series: {
                animation: {
                  duration: 750
                },
                clip: false
              }
            },

            series: [{
              name: 'Graticule',
              id: 'graticule',
              type: 'mapline',
              data: getGraticule(),
              nullColor: 'rgba(0, 0, 0, 0.05)',
              accessibility: {
                enabled: false
              },
              enableMouseTracking: false
            }, {
              data,
              joinBy: 'name',
              name: 'Drug abuse cases per million',
              states: {
                hover: {
                  color: '#7DD3FC',
                  borderColor: '#0C4A6E'
                }
              },
              dataLabels: {
                enabled: false,
                format: '{point.name}'
              },
              accessibility: {
                exposeAsGroupOnly: true
              }
            }]
          })

          // Render a circle filled with a radial gradient behind the globe to
          // make it appear as the sea around the continents
          const renderSea = () => {
            let verb = 'animate'
            if (!chart.sea) {
              chart.sea = chart.renderer
                .circle()
                .attr({
                  fill: {
                    radialGradient: {
                      cx: 0.4,
                      cy: 0.4,
                      r: 1
                    },
                    stops: [
                      [0, '#F0F9FF'],
                      [1, '#0EA5E9']
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
          renderSea()
          Highcharts.addEvent(chart, 'redraw', renderSea)
        })
        .catch(error => {
          console.error('Error loading world map data:', error)
        })
    }
  }, [])

  // Scroll functionality
  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const checkScrollPosition = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
      setShowScrollIndicator(!isAtBottom)
    }

    scrollElement.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition() // Check initial state

    return () => {
      scrollElement.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  const handleCountrySelect = (countryName) => {
    setSelectedCountry(countryName)
    // Scroll to the country crisis panel
    setTimeout(() => {
      const crisisPanel = document.querySelector('.country-crisis-panel')
      if (crisisPanel) {
        crisisPanel.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleCloseCountryPanel = () => {
    setSelectedCountry(null)
  }

  return (
    <section className="world-map-section">
      <div className="world-map-container">
        <div className="world-map-header">
          <h2>Global Drug Abuse Crisis Visualization</h2>
          <p>Interactive 3D world map showing drug abuse prevalence by country</p>
        </div>
        
        <div className="highcharts-world-map">
          <div id="container" ref={chartRef}></div>
        </div>
        
        <div className="life-expectancy-section">
          <div className="world-map-header">
            <h2>Global Drug Abuse Cases Analysis</h2>
            <p>Drug abuse cases per million population by country - interactive 2D map</p>
          </div>
          <div className="life-expectancy-content">
            <div className="life-expectancy-map">
              <LifeExpectancyMap onCountryClick={handleCountrySelect} />
            </div>
            <div className="references-panel">
              <div className="scrollable-content" ref={scrollRef}>
                <h3>Data Sources & References</h3>
                
                <h4>Primary Data Sources</h4>
                <ul>
                  <li><a href="https://www.unodc.org" className="source-link" target="_blank" rel="noopener noreferrer">UNODC Global Drug Report 2023</a> - Comprehensive statistics on drug abuse prevalence worldwide</li>
                  <li><a href="https://www.who.int" className="source-link" target="_blank" rel="noopener noreferrer">World Health Organization (WHO)</a> - Health impact assessments and population data</li>
                  <li><a href="https://www.whitehouse.gov" className="source-link" target="_blank" rel="noopener noreferrer">National Drug Control Agencies</a> - Country-specific reporting and enforcement data</li>
                  <li><a href="https://www.nature.com" className="source-link" target="_blank" rel="noopener noreferrer">Academic Research Institutions</a> - Peer-reviewed studies on drug abuse patterns</li>
                </ul>
                
                <h4>Methodology</h4>
                <ul>
                  <li>Data normalized per million population for accurate comparison</li>
                  <li>Figures represent reported cases and estimated prevalence</li>
                  <li>Coverage: 195+ countries and territories</li>
                  <li>Risk levels: High (&gt;1000), Medium (500-1000), Low (&lt;500) cases per million</li>
                </ul>
                
                <div className="methodology-note">
                  <strong>Note:</strong> Data may include underreporting in some regions due to stigma and varying reporting standards across countries. Figures represent the best available estimates as of December 2023.
                </div>
                
                <h4>Key Definitions</h4>
                <ul>
                  <li><strong>Drug Abuse Cases:</strong> Reported incidents of substance misuse requiring medical or legal intervention</li>
                  <li><strong>Per Million Population:</strong> Standardized metric for cross-country comparison</li>
                  <li><strong>Interactive Features:</strong> Hover for detailed country information</li>
                </ul>
                
                <h4>Data Quality & Limitations</h4>
                <ul>
                  <li>Underreporting in some regions due to social stigma</li>
                  <li>Varying reporting standards across countries</li>
                  <li>Data may not capture all forms of substance abuse</li>
                  <li>Some countries have limited data collection infrastructure</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <ul>
                  <li>Interactive map powered by Highcharts</li>
                  <li>Real-time data visualization</li>
                  <li>Responsive design for all devices</li>
                  <li>Accessibility compliant interface</li>
                </ul>
                
                <div className="last-updated">
                  Last updated: December 2023
                </div>
              </div>
              
              <button 
                className={`scroll-indicator ${showScrollIndicator ? 'visible' : ''}`}
                onClick={scrollToBottom}
                title="Scroll to see more content"
              >
                <FontAwesomeIcon icon={faChevronDown} size="lg" />
              </button>
            </div>
          </div>
        </div>

        <CountryDrugCrisis 
          selectedCountry={selectedCountry} 
          onClose={handleCloseCountryPanel} 
        />
        
        {/* Key Insights section removed as requested */}
      </div>
    </section>
  )
}

export default WorldMap
