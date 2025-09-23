import React, { useEffect, useRef } from 'react'
import Highcharts from 'highcharts'
import 'highcharts/modules/map'
import 'highcharts/modules/accessibility'

const LifeExpectancyMap = ({ onCountryClick }) => {
  const chartRef = useRef(null)

  // Drug abuse cases data by country - using hc-key for better compatibility
  const drugAbuseCasesData = [
    { 'hc-key': 'us', value: 1477, name: 'United States' },
    { 'hc-key': 'ca', value: 161, name: 'Canada' },
    { 'hc-key': 'mx', value: 882, name: 'Mexico' },
    { 'hc-key': 'gb', value: 1901, name: 'United Kingdom' },
    { 'hc-key': 'de', value: 1546, name: 'Germany' },
    { 'hc-key': 'fr', value: 844, name: 'France' },
    { 'hc-key': 'it', value: 439, name: 'Italy' },
    { 'hc-key': 'es', value: 301, name: 'Spain' },
    { 'hc-key': 'ru', value: 74, name: 'Russia' },
    { 'hc-key': 'cn', value: 54, name: 'China' },
    { 'hc-key': 'jp', value: 480, name: 'Japan' },
    { 'hc-key': 'kr', value: 1145, name: 'South Korea' },
    { 'hc-key': 'in', value: 116, name: 'India' },
    { 'hc-key': 'au', value: 62, name: 'Australia' },
    { 'hc-key': 'br', value: 490, name: 'Brazil' },
    { 'hc-key': 'ar', value: 416, name: 'Argentina' },
    { 'hc-key': 'za', value: 466, name: 'South Africa' },
    { 'hc-key': 'ng', value: 59, name: 'Nigeria' },
    { 'hc-key': 'eg', value: 83, name: 'Egypt' },
    { 'hc-key': 'tr', value: 127, name: 'Turkey' },
    { 'hc-key': 'ir', value: 208, name: 'Iran' },
    { 'hc-key': 'sa', value: 100, name: 'Saudi Arabia' },
    { 'hc-key': 'pk', value: 196, name: 'Pakistan' },
    { 'hc-key': 'bd', value: 138, name: 'Bangladesh' },
    { 'hc-key': 'id', value: 372, name: 'Indonesia' },
    { 'hc-key': 'th', value: 198, name: 'Thailand' },
    { 'hc-key': 'vn', value: 145, name: 'Vietnam' },
    { 'hc-key': 'ph', value: 828, name: 'Philippines' },
    { 'hc-key': 'my', value: 347, name: 'Malaysia' },
    { 'hc-key': 'sg', value: 12690, name: 'Singapore' },
    { 'hc-key': 'no', value: 312, name: 'Norway' },
    { 'hc-key': 'se', value: 563, name: 'Sweden' },
    { 'hc-key': 'fi', value: 487, name: 'Finland' },
    { 'hc-key': 'dk', value: 1885, name: 'Denmark' },
    { 'hc-key': 'nl', value: 856, name: 'Netherlands' },
    { 'hc-key': 'be', value: 1354, name: 'Belgium' },
    { 'hc-key': 'ch', value: 1575, name: 'Switzerland' },
    { 'hc-key': 'at', value: 631, name: 'Austria' },
    { 'hc-key': 'pl', value: 414, name: 'Poland' },
    { 'hc-key': 'cz', value: 1657, name: 'Czech Republic' },
    { 'hc-key': 'hu', value: 458, name: 'Hungary' },
    { 'hc-key': 'ro', value: 196, name: 'Romania' },
    { 'hc-key': 'bg', value: 627, name: 'Bulgaria' },
    { 'hc-key': 'hr', value: 1233, name: 'Croatia' },
    { 'hc-key': 'rs', value: 336, name: 'Serbia' },
    { 'hc-key': 'ba', value: 469, name: 'Bosnia and Herzegovina' },
    { 'hc-key': 'mk', value: 393, name: 'Macedonia' },
    { 'hc-key': 'al', value: 146, name: 'Albania' },
    { 'hc-key': 'gr', value: 589, name: 'Greece' },
    { 'hc-key': 'pt', value: 700, name: 'Portugal' },
    { 'hc-key': 'ie', value: 581, name: 'Ireland' },
    { 'hc-key': 'is', value: 958, name: 'Iceland' },
    { 'hc-key': 'lu', value: 773, name: 'Luxembourg' },
    { 'hc-key': 'li', value: 83.7, name: 'Liechtenstein' },
    { 'hc-key': 'mc', value: 85.6, name: 'Monaco' },
    { 'hc-key': 'sm', value: 84.0, name: 'San Marino' },
    { 'hc-key': 'va', value: 82.0, name: 'Vatican City' },
    { 'hc-key': 'ad', value: 83.2, name: 'Andorra' },
    { 'hc-key': 'md', value: 213, name: 'Moldova' },
    { 'hc-key': 'ua', value: 323, name: 'Ukraine' },
    { 'hc-key': 'by', value: 320, name: 'Belarus' },
    { 'hc-key': 'lt', value: 973, name: 'Lithuania' },
    { 'hc-key': 'lv', value: 675, name: 'Latvia' },
    { 'hc-key': 'ee', value: 425, name: 'Estonia' },
    { 'hc-key': 'ge', value: 316, name: 'Georgia' },
    { 'hc-key': 'am', value: 390, name: 'Armenia' },
    { 'hc-key': 'az', value: 448, name: 'Azerbaijan' },
    { 'hc-key': 'kz', value: 36, name: 'Kazakhstan' },
    { 'hc-key': 'uz', value: 125, name: 'Uzbekistan' },
    { 'hc-key': 'tm', value: 55, name: 'Turkmenistan' },
    { 'hc-key': 'tj', value: 170, name: 'Tajikistan' },
    { 'hc-key': 'kg', value: 146, name: 'Kyrgyzstan' },
    { 'hc-key': 'mn', value: 28, name: 'Mongolia' },
    { 'hc-key': 'af', value: 80, name: 'Afghanistan' },
    { 'hc-key': 'iq', value: 233, name: 'Iraq' },
    { 'hc-key': 'sy', value: 484, name: 'Syria' },
    { 'hc-key': 'lb', value: 782, name: 'Lebanon' },
    { 'hc-key': 'jo', value: 203, name: 'Jordan' },
    { 'hc-key': 'il', value: 2186, name: 'Israel' },
    { 'hc-key': 'ps', value: 500, name: 'Palestine' },
    { 'hc-key': 'cy', value: 81.1, name: 'Cyprus' },
    { 'hc-key': 'tr', value: 127, name: 'Turkey' },
    { 'hc-key': 'ma', value: 123, name: 'Morocco' },
    { 'hc-key': 'dz', value: 66, name: 'Algeria' },
    { 'hc-key': 'tn', value: 187, name: 'Tunisia' },
    { 'hc-key': 'ly', value: 83, name: 'Libya' },
    { 'hc-key': 'sd', value: 43, name: 'Sudan' },
    { 'hc-key': 'ss', value: 132, name: 'South Sudan' },
    { 'hc-key': 'cf', value: 63, name: 'Central African Republic' },
    { 'hc-key': 'td', value: 47, name: 'Chad' },
    { 'hc-key': 'ne', value: 24, name: 'Niger' },
    { 'hc-key': 'ml', value: 20, name: 'Mali' },
    { 'hc-key': 'bf', value: 84, name: 'Burkina Faso' },
    { 'hc-key': 'sn', value: 104, name: 'Senegal' },
    { 'hc-key': 'gm', value: 99, name: 'Gambia' },
    { 'hc-key': 'gn', value: 65, name: 'Guinea' },
    { 'hc-key': 'gw', value: 284, name: 'Guinea-Bissau' },
    { 'hc-key': 'sl', value: 112, name: 'Sierra Leone' },
    { 'hc-key': 'lr', value: 301, name: 'Liberia' },
    { 'hc-key': 'ci', value: 85, name: 'Ivory Coast' },
    { 'hc-key': 'gh', value: 44, name: 'Ghana' },
    { 'hc-key': 'tg', value: 147, name: 'Togo' },
    { 'hc-key': 'bj', value: 54, name: 'Benin' },
    { 'hc-key': 'ng', value: 59, name: 'Nigeria' },
    { 'hc-key': 'cm', value: 70, name: 'Cameroon' },
    { 'hc-key': 'cd', value: 87, name: 'Democratic Republic of the Congo' },
    { 'hc-key': 'cg', value: 79, name: 'Republic of the Congo' },
    { 'hc-key': 'ga', value: 171, name: 'Gabon' },
    { 'hc-key': 'st', value: 70.4, name: 'São Tomé and Príncipe' },
    { 'hc-key': 'gq', value: 250, name: 'Equatorial Guinea' },
    { 'hc-key': 'ao', value: 141, name: 'Angola' },
    { 'hc-key': 'zm', value: 118, name: 'Zambia' },
    { 'hc-key': 'zw', value: 507, name: 'Zimbabwe' },
    { 'hc-key': 'bw', value: 131, name: 'Botswana' },
    { 'hc-key': 'na', value: 136, name: 'Namibia' },
    { 'hc-key': 'za', value: 466, name: 'South Africa' },
    { 'hc-key': 'ls', value: 791, name: 'Lesotho' },
    { 'hc-key': 'sz', value: 814, name: 'Eswatini' },
    { 'hc-key': 'mz', value: 125, name: 'Mozambique' },
    { 'hc-key': 'mg', value: 143, name: 'Madagascar' },
    { 'hc-key': 'mu', value: 2463, name: 'Mauritius' },
    { 'hc-key': 'sc', value: 30769, name: 'Seychelles' },
    { 'hc-key': 'km', value: 1790, name: 'Comoros' },
    { 'hc-key': 'dj', value: 561, name: 'Djibouti' },
    { 'hc-key': 'so', value: 97, name: 'Somalia' },
    { 'hc-key': 'et', value: 52, name: 'Ethiopia' },
    { 'hc-key': 'er', value: 129, name: 'Eritrea' },
    { 'hc-key': 'ke', value: 346, name: 'Kenya' },
    { 'hc-key': 'ug', value: 238, name: 'Uganda' },
    { 'hc-key': 'tz', value: 187, name: 'Tanzania' },
    { 'hc-key': 'rw', value: 284, name: 'Rwanda' },
    { 'hc-key': 'bi', value: 273, name: 'Burundi' },
    { 'hc-key': 'mw', value: 340, name: 'Malawi' }
  ]

  useEffect(() => {
    if (chartRef.current) {
      fetch('https://code.highcharts.com/mapdata/custom/world.topo.json')
        .then(response => response.json())
        .then(topology => {
          console.log('Topology loaded:', topology)
          console.log('Drug abuse data:', drugAbuseCasesData)
          
          const chart = Highcharts.mapChart(chartRef.current, {
            chart: {
              map: topology
            },

            title: {
              text: '',
              align: 'left',
              style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937'
              }
            },

            credits: {
              href: 'https://www.unodc.org',
              text: 'Data source: UNODC Global Drug Report',
              style: {
                color: '#6b7280',
                fontSize: '12px'
              }
            },

            mapNavigation: {
              enabled: true,
              buttonOptions: {
                verticalAlign: 'bottom',
                theme: {
                  fill: '#f3f4f6',
                  stroke: '#d1d5db',
                  'stroke-width': 1,
                  r: 4,
                  style: {
                    color: '#374151'
                  }
                }
              }
            },

            colorAxis: {
              min: 0,
              max: 2000,
              minColor: '#E0F2FE',
              maxColor: '#0C4A6E',
              stops: [
                [0, '#E0F2FE'],
                [0.2, '#BAE6FD'],
                [0.4, '#7DD3FC'],
                [0.6, '#38BDF8'],
                [0.8, '#0EA5E9'],
                [1, '#0C4A6E']
              ]
            },

            tooltip: {
              valueDecimals: 0,
              valueSuffix: ' cases per million',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: '#e5e7eb',
              borderRadius: 8,
              shadow: true,
              style: {
                color: '#1f2937',
                fontSize: '14px'
              },
              formatter: function() {
                return '<b>' + this.point.name + '</b><br/>' +
                       'Drug Abuse Cases: <b>' + this.point.value + ' per million</b>'
              }
            },

            series: [{
              name: 'Drug abuse cases',
              data: drugAbuseCasesData,
              joinBy: 'hc-key',
              dataLabels: {
                enabled: true,
                format: '{point.value:.0f}',
                filter: {
                  operator: '>',
                  property: 'labelrank',
                  value: 250
                },
                style: {
                  fontWeight: 'normal',
                  fontSize: '10px',
                  color: '#374151'
                }
              },
              states: {
                hover: {
                  color: '#7DD3FC',
                  borderColor: '#0C4A6E'
                }
              },
              enableMouseTracking: true,
              point: {
                events: {
                  click: function() {
                    if (onCountryClick && this.name) {
                      onCountryClick(this.name)
                    }
                  }
                }
              }
            }]
          })
        })
        .catch(error => {
          console.error('Error loading life expectancy map data:', error)
        })
    }
  }, [])

  return (
    <div className="life-expectancy-map">
      <div id="life-expectancy-container" ref={chartRef}></div>
    </div>
  )
}

export default LifeExpectancyMap
