import React, { useRef, useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { extendedCountryData, noDataCountries } from '../../data/constants'

// SVG Icon Components
const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const PopulationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const DeathIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4"/>
    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
    <path d="M4.93 4.93l2.83 2.83"/>
    <path d="M16.24 16.24l2.83 2.83"/>
    <path d="M2 12h4"/>
    <path d="M18 12h4"/>
    <path d="M4.93 19.07l2.83-2.83"/>
    <path d="M16.24 7.76l2.83-2.83"/>
  </svg>
)

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
  </svg>
)

const AlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const ScrollDownIcon = () => (
  <FontAwesomeIcon icon={faChevronDown} size="lg" />
)

const getFlagIcon = (flagCode) => {
  const flagIcons = {
    'globe': <GlobeIcon />,
    'us': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#3c3b6e"/><path d="M0 0h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0z" fill="#fff"/><rect width="10" height="6" fill="#b22234"/><rect width="10" height="2" y="2" fill="#fff"/><rect width="10" height="2" y="4" fill="#b22234"/></svg>,
    'in': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#ff9933"/><rect width="24" height="8" y="8" fill="#fff"/><rect width="24" height="8" y="16" fill="#138808"/><circle cx="12" cy="12" r="3" fill="#000080"/></svg>,
    'br': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#009639"/><path d="M12 2L2 7l10 5 10-5-10-5z" fill="#fedf00"/><circle cx="12" cy="12" r="6" fill="#002776"/></svg>,
    'cn': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#de2910"/><path d="M3 3h18v18H3z" fill="#de2910"/><path d="M4 4h16v16H4z" fill="#de2910"/></svg>,
    'ru': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#fff"/><rect width="24" height="8" y="8" fill="#0039a6"/><rect width="24" height="8" y="16" fill="#d52b1e"/></svg>,
    'de': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#000"/><rect width="24" height="8" y="8" fill="#dd0000"/><rect width="24" height="8" y="16" fill="#ffce00"/></svg>,
    'gb': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#012169"/><path d="M0 0h24v24H0z" fill="#012169"/></svg>,
    'au': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#000080"/><path d="M0 0h24v24H0z" fill="#000080"/></svg>,
    'ca': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#ff0000"/><rect width="8" height="24" fill="#ff0000"/><rect width="8" height="24" x="16" fill="#ff0000"/><path d="M12 2l-2 2-2-2 2-2 2 2zM12 22l-2-2-2 2 2 2 2-2z" fill="#ff0000"/></svg>,
    'mx': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="24" fill="#006847"/><rect width="8" height="24" x="16" fill="#ce1126"/><rect width="8" height="24" x="8" fill="#fff"/><path d="M12 8l-2 2 2 2 2-2-2-2z" fill="#006847"/></svg>,
    'fr': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="24" fill="#002395"/><rect width="8" height="24" x="8" fill="#fff"/><rect width="8" height="24" x="16" fill="#ed2939"/></svg>,
    'it': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="24" fill="#009246"/><rect width="8" height="24" x="8" fill="#fff"/><rect width="8" height="24" x="16" fill="#ce2b37"/></svg>,
    'es': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="6" fill="#c60b1e"/><rect width="24" height="6" y="6" fill="#ffc400"/><rect width="24" height="6" y="12" fill="#c60b1e"/><rect width="24" height="6" y="18" fill="#c60b1e"/></svg>,
    'nl': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#ae1c28"/><rect width="24" height="8" y="8" fill="#fff"/><rect width="24" height="8" y="16" fill="#21468b"/></svg>,
    'jp': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="6" fill="#bc002d"/></svg>,
    'kr': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="6" fill="#cd2e3a"/><path d="M12 6l-2 2 2 2 2-2-2-2z" fill="#003478"/></svg>,
    'th': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="4" fill="#ed1c24"/><rect width="24" height="4" y="4" fill="#fff"/><rect width="24" height="4" y="8" fill="#241d4f"/><rect width="24" height="4" y="12" fill="#fff"/><rect width="24" height="4" y="16" fill="#ed1c24"/><rect width="24" height="4" y="20" fill="#ed1c24"/></svg>,
    'ph': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="12" fill="#0038a8"/><rect width="24" height="12" y="12" fill="#ce1126"/><path d="M0 0h12v12H0z" fill="#fff"/></svg>,
    'co': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#fcd116"/><rect width="24" height="8" y="8" fill="#003893"/><rect width="24" height="8" y="16" fill="#ce1126"/></svg>,
    'ar': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#74acdf"/><rect width="24" height="8" y="8" fill="#fff"/><rect width="24" height="8" y="16" fill="#74acdf"/><path d="M12 8l-2 2 2 2 2-2-2-2z" fill="#f6b40e"/></svg>,
    'za': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#007a4d"/><path d="M0 0h24v12H0z" fill="#000"/><path d="M0 0h24v8H0z" fill="#fff"/><path d="M0 0h12v24H0z" fill="#de3831"/><path d="M0 0h8v24H0z" fill="#ffb81c"/></svg>,
    'ng': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="24" fill="#008751"/><rect width="8" height="24" x="16" fill="#008751"/><rect width="8" height="24" x="8" fill="#fff"/></svg>,
    'nz': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#012169"/><path d="M0 0h24v24H0z" fill="#012169"/></svg>,
    'tz': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#1eb53a"/><rect width="24" height="8" y="8" fill="#fcd116"/><rect width="24" height="8" y="16" fill="#000000"/></svg>,
    'cg': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#009639"/><rect width="24" height="8" y="8" fill="#fedf00"/><rect width="24" height="8" y="16" fill="#ce1126"/></svg>,
    'rs': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#c6363c"/><rect width="24" height="8" y="8" fill="#0c4b99"/><rect width="24" height="8" y="16" fill="#ffffff"/></svg>,
    'ci': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="8" height="24" fill="#f77f00"/><rect width="8" height="24" x="8" fill="#ffffff"/><rect width="8" height="24" x="16" fill="#009639"/></svg>,
    'cf': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="6" fill="#003082"/><rect width="24" height="6" y="6" fill="#ffffff"/><rect width="24" height="6" y="12" fill="#289728"/><rect width="24" height="6" y="18" fill="#ffce00"/></svg>,
    'ss': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="6" fill="#000000"/><rect width="24" height="6" y="6" fill="#da020e"/><rect width="24" height="6" y="12" fill="#ffffff"/><rect width="24" height="6" y="18" fill="#078930"/></svg>,
    'sl': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#0072c6"/><rect width="24" height="8" y="8" fill="#ffffff"/><rect width="24" height="8" y="16" fill="#0072c6"/></svg>,
    'bf': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#ef2b2d"/><rect width="24" height="8" y="8" fill="#fcd116"/><rect width="24" height="8" y="16" fill="#009639"/></svg>,
    'gw': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#fcd116"/><rect width="24" height="8" y="8" fill="#009639"/><rect width="24" height="8" y="16" fill="#ef2b2d"/></svg>,
    'tl': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="12" fill="#ff0000"/><rect width="24" height="12" y="12" fill="#000000"/><path d="M0 0h12v12H0z" fill="#ffffff"/></svg>,
    'ps': <svg width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="8" fill="#000000"/><rect width="24" height="8" y="8" fill="#ffffff"/><rect width="24" height="8" y="16" fill="#009639"/></svg>
  }
  return flagIcons[flagCode] || <GlobeIcon />
}

const CountryDrugCrisis = ({ selectedCountry, onClose }) => {
  const panelRef = useRef(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)

  // Scroll functionality
  useEffect(() => {
    const panelElement = panelRef.current
    if (!panelElement) return

    const checkScrollPosition = () => {
      const { scrollTop, scrollHeight, clientHeight } = panelElement
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
      setShowScrollIndicator(!isAtBottom)
    }

    panelElement.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition() // Check initial state

    return () => {
      panelElement.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  const scrollToBottom = () => {
    if (panelRef.current) {
      panelRef.current.scrollTo({
        top: panelRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  // Global drug crisis data
  const globalData = {
    name: 'Global',
    flag: 'globe',
    population: '8.0B',
    drugDeaths: 585000,
    drugDeathsPerMillion: 73,
    primaryDrugs: ['Cannabis', 'Opioids', 'Cocaine', 'Amphetamines'],
    crisisLevel: 'Moderate',
    trends: {
      cannabisUsers: 219000000,
      opioidUsers: 62000000,
      cocaineUsers: 22000000,
      amphetamineUsers: 34000000,
      injectionDrugUsers: 15000000,
      syntheticDrugUsers: 28000000
    },
    sources: [
      'UNODC World Drug Report 2023',
      'WHO Global Health Estimates 2022',
      'CDC Global Health Data Exchange',
      'EMCDDA European Drug Report 2023'
    ],
    keyFacts: [
      'Cannabis is the most widely used illicit drug globally',
      'Opioid-related deaths increased 46% from 2010-2019',
      'Synthetic drugs are the fastest-growing category',
      'Injection drug use affects 15 million people worldwide',
      'Drug use disorders affect 35.6 million people globally',
      'Treatment coverage remains below 20% in most countries'
    ],
    regionalBreakdown: {
      'North America': { deaths: 120000, rate: 320, level: 'Severe' },
      'Europe': { deaths: 45000, rate: 60, level: 'Moderate' },
      'Asia': { deaths: 180000, rate: 40, level: 'Low-Moderate' },
      'South America': { deaths: 25000, rate: 58, level: 'Moderate' },
      'Africa': { deaths: 15000, rate: 12, level: 'Low' },
      'Oceania': { deaths: 2000, rate: 50, level: 'Moderate' }
    }
  }

  // Country name mapping to handle different naming conventions
  const countryNameMapping = {
    'United States of America': 'United States',
    'United States': 'United States',
    'United Kingdom': 'United Kingdom',
    'United Republic of Tanzania': 'Tanzania',
    'Russian Federation': 'Russia',
    'Republic of the Congo': 'Congo',
    'Democratic Republic of the Congo': 'Democratic Republic of the Congo',
    'South Korea': 'South Korea',
    'North Korea': 'North Korea',
    'Czech Republic': 'Czech Republic',
    'Bosnia and Herzegovina': 'Bosnia and Herzegovina',
    'Republic of Serbia': 'Serbia',
    'Ivory Coast': 'Ivory Coast',
    'Central African Republic': 'Central African Republic',
    'South Sudan': 'South Sudan',
    'Sierra Leone': 'Sierra Leone',
    'Burkina Faso': 'Burkina Faso',
    'Guinea Bissau': 'Guinea-Bissau',
    'East Timor': 'Timor-Leste',
    'Palestinian Territories': 'Palestine',
    'Western Sahara': 'Western Sahara',
    'French Southern and Antarctic Lands': 'French Southern and Antarctic Lands',
    'Spratly Islands': 'Spratly Islands',
    'Paracel Islands': 'Paracel Islands',
    'Saint Helena, Ascension and Tristan da Cunha': 'Saint Helena',
    'Saint Barthelemy': 'Saint Barthélemy',
    'Saint Martin': 'Saint Martin',
    'Sint Maarten': 'Sint Maarten',
    'Virgin Islands of the U.S.': 'U.S. Virgin Islands',
    'British Virgin Islands': 'British Virgin Islands',
    'Turks and Caicos Islands': 'Turks and Caicos Islands',
    'Cayman Islands': 'Cayman Islands',
    'Saint Kitts and Nevis': 'Saint Kitts and Nevis',
    'Saint Lucia': 'Saint Lucia',
    'Saint Vincent and the Grenadines': 'Saint Vincent and the Grenadines',
    'Saint Pierre and Miquelon': 'Saint Pierre and Miquelon',
    'Northern Mariana Islands': 'Northern Mariana Islands',
    'American Samoa': 'American Samoa',
    'Wake Island': 'Wake Island',
    'British Indian Ocean Territory': 'British Indian Ocean Territory',
    'Faroe Islands': 'Faroe Islands',
    'Jan Mayen': 'Jan Mayen',
    'Isle of Man': 'Isle of Man',
    'Northern Cyprus': 'Northern Cyprus',
    'Cook Islands': 'Cook Islands',
    'Marshall Islands': 'Marshall Islands',
    'Micronesia': 'Micronesia',
    'Wallis and Futuna': 'Wallis and Futuna',
    'French Polynesia': 'French Polynesia',
    'New Caledonia': 'New Caledonia',
    'Solomon Islands': 'Solomon Islands',
    'Vanuatu': 'Vanuatu',
    'Fiji': 'Fiji',
    'Tonga': 'Tonga',
    'Samoa': 'Samoa',
    'Kiribati': 'Kiribati',
    'Tuvalu': 'Tuvalu',
    'Nauru': 'Nauru',
    'Palau': 'Palau',
    'Niue': 'Niue',
    'Montserrat': 'Montserrat',
    'Anguilla': 'Anguilla',
    'Bermuda': 'Bermuda',
    'Aruba': 'Aruba',
    'Barbados': 'Barbados',
    'Grenada': 'Grenada',
    'Dominica': 'Dominica',
    'Antigua and Barbuda': 'Antigua and Barbuda',
    'Trinidad and Tobago': 'Trinidad and Tobago',
    'The Bahamas': 'Bahamas',
    'Jamaica': 'Jamaica',
    'Haiti': 'Haiti',
    'Dominican Republic': 'Dominican Republic',
    'Cuba': 'Cuba',
    'Puerto Rico': 'Puerto Rico',
    'Guam': 'Guam',
    'Greenland': 'Greenland',
    'Svalbard': 'Svalbard',
    'Antarctica': 'Antarctica',
    'Falkland Islands': 'Falkland Islands',
    'Gibraltar': 'Gibraltar',
    'Jersey': 'Jersey',
    'Guernsey': 'Guernsey',
    'Macau': 'Macau',
    'Hong Kong': 'Hong Kong',
    'Taiwan': 'Taiwan',
    'Kosovo': 'Kosovo'
  }

  // Normalize country name
  const normalizedCountryName = selectedCountry ? 
    (countryNameMapping[selectedCountry] || selectedCountry) : 
    null

  // Check if country has data available
  const hasData = normalizedCountryName && extendedCountryData[normalizedCountryName]
  const isNoDataCountry = normalizedCountryName && noDataCountries.includes(normalizedCountryName)
  
  const data = normalizedCountryName ? 
    (hasData ? extendedCountryData[normalizedCountryName] : null) : 
    globalData

  // Early return if no data to prevent errors
  if (!data) {
    return (
      <div className="country-crisis-panel">
        <div className="crisis-header">
          <div className="country-info">
            <div className="country-flag">{getFlagIcon('globe')}</div>
            <h3>{normalizedCountryName || selectedCountry} - Data Not Available</h3>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="crisis-content">
          <div className="no-data-message">
            <div className="no-data-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            </div>
            <h4>Data Not Available</h4>
            <p>Comprehensive drug abuse data for <strong>{normalizedCountryName || selectedCountry}</strong> is not currently available in our database.</p>
            <div className="no-data-reasons">
              <h5>Possible reasons:</h5>
              <ul>
                <li>Limited data collection infrastructure</li>
                <li>Restricted access to official statistics</li>
                <li>Data not yet published by local authorities</li>
                <li>Country-specific reporting challenges</li>
              </ul>
            </div>
            <div className="no-data-sources">
              <h5>Data Sources We Use:</h5>
              <ul>
                <li>UNODC World Drug Report</li>
                <li>WHO Global Health Estimates</li>
                <li>National health ministries</li>
                <li>Local drug enforcement agencies</li>
                <li>Academic research institutions</li>
              </ul>
            </div>
            <div className="no-data-note">
              <p><em>We continuously update our database with new data as it becomes available from trusted sources.</em></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Add safety check for data.trends
  if (!data.trends) {
    console.warn('Data missing trends property for:', normalizedCountryName)
    data.trends = {}
  }

  // Chart configurations
  const drugUsageChart = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 300
    },
    title: {
      text: 'Drug Usage Statistics',
      style: { fontSize: '16px', fontWeight: '600', color: '#0f172a' }
    },
    xAxis: {
      categories: Object.keys(data.trends).map(key => 
        key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      ),
      labels: { style: { fontSize: '12px', color: '#64748b' } }
    },
    yAxis: {
      title: { text: 'Number of Users', style: { color: '#64748b' } },
      labels: { style: { color: '#64748b' } },
      gridLineColor: '#f1f5f9'
    },
    series: [{
      name: 'Users',
      data: Object.values(data.trends).map(value => value / 1000000), // Convert to millions
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#0ea5e9'],
          [1, '#3b82f6']
        ]
      }
    }],
    plotOptions: {
      column: {
        borderRadius: 4,
        dataLabels: {
          enabled: true,
          format: '{y:.1f}M',
          style: { fontSize: '11px', fontWeight: '600' }
        }
      }
    },
    legend: { enabled: false },
    credits: { enabled: false }
  }

  // Year-wise death data for different countries/global
  const getYearWiseDeathData = (countryName) => {
    const deathData = {
      'Global': [
        { year: 2018, deaths: 450000 },
        { year: 2019, deaths: 480000 },
        { year: 2020, deaths: 520000 },
        { year: 2021, deaths: 550000 },
        { year: 2022, deaths: 585000 }
      ],
      'United States': [
        { year: 2018, deaths: 67000 },
        { year: 2019, deaths: 70000 },
        { year: 2020, deaths: 93000 },
        { year: 2021, deaths: 106000 },
        { year: 2022, deaths: 107622 }
      ],
      'India': [
        { year: 2018, deaths: 35000 },
        { year: 2019, deaths: 38000 },
        { year: 2020, deaths: 41000 },
        { year: 2021, deaths: 43000 },
        { year: 2022, deaths: 45000 }
      ],
      'Brazil': [
        { year: 2018, deaths: 6500 },
        { year: 2019, deaths: 7200 },
        { year: 2020, deaths: 7800 },
        { year: 2021, deaths: 8200 },
        { year: 2022, deaths: 8500 }
      ],
      'China': [
        { year: 2018, deaths: 8000 },
        { year: 2019, deaths: 9000 },
        { year: 2020, deaths: 10000 },
        { year: 2021, deaths: 11000 },
        { year: 2022, deaths: 12000 }
      ],
      'Russia': [
        { year: 2018, deaths: 15000 },
        { year: 2019, deaths: 16000 },
        { year: 2020, deaths: 17000 },
        { year: 2021, deaths: 17500 },
        { year: 2022, deaths: 18000 }
      ],
      'Germany': [
        { year: 2018, deaths: 1200 },
        { year: 2019, deaths: 1300 },
        { year: 2020, deaths: 1400 },
        { year: 2021, deaths: 1450 },
        { year: 2022, deaths: 1500 }
      ],
      'United Kingdom': [
        { year: 2018, deaths: 3500 },
        { year: 2019, deaths: 3800 },
        { year: 2020, deaths: 4100 },
        { year: 2021, deaths: 4300 },
        { year: 2022, deaths: 4500 }
      ],
      'Australia': [
        { year: 2018, deaths: 1500 },
        { year: 2019, deaths: 1600 },
        { year: 2020, deaths: 1700 },
        { year: 2021, deaths: 1750 },
        { year: 2022, deaths: 1800 }
      ],
      'Canada': [
        { year: 2018, deaths: 4500 },
        { year: 2019, deaths: 5200 },
        { year: 2020, deaths: 6200 },
        { year: 2021, deaths: 6800 },
        { year: 2022, deaths: 7200 }
      ],
      'Mexico': [
        { year: 2018, deaths: 2500 },
        { year: 2019, deaths: 2800 },
        { year: 2020, deaths: 3100 },
        { year: 2021, deaths: 3300 },
        { year: 2022, deaths: 3500 }
      ],
      'France': [
        { year: 2018, deaths: 900 },
        { year: 2019, deaths: 1000 },
        { year: 2020, deaths: 1100 },
        { year: 2021, deaths: 1150 },
        { year: 2022, deaths: 1200 }
      ],
      'Italy': [
        { year: 2018, deaths: 600 },
        { year: 2019, deaths: 650 },
        { year: 2020, deaths: 700 },
        { year: 2021, deaths: 750 },
        { year: 2022, deaths: 800 }
      ],
      'Spain': [
        { year: 2018, deaths: 450 },
        { year: 2019, deaths: 500 },
        { year: 2020, deaths: 550 },
        { year: 2021, deaths: 575 },
        { year: 2022, deaths: 600 }
      ],
      'Netherlands': [
        { year: 2018, deaths: 150 },
        { year: 2019, deaths: 170 },
        { year: 2020, deaths: 180 },
        { year: 2021, deaths: 190 },
        { year: 2022, deaths: 200 }
      ],
      'Japan': [
        { year: 2018, deaths: 300 },
        { year: 2019, deaths: 350 },
        { year: 2020, deaths: 400 },
        { year: 2021, deaths: 450 },
        { year: 2022, deaths: 500 }
      ],
      'South Korea': [
        { year: 2018, deaths: 200 },
        { year: 2019, deaths: 220 },
        { year: 2020, deaths: 250 },
        { year: 2021, deaths: 270 },
        { year: 2022, deaths: 300 }
      ],
      'Thailand': [
        { year: 2018, deaths: 1800 },
        { year: 2019, deaths: 2000 },
        { year: 2020, deaths: 2200 },
        { year: 2021, deaths: 2350 },
        { year: 2022, deaths: 2500 }
      ],
      'Philippines': [
        { year: 2018, deaths: 800 },
        { year: 2019, deaths: 900 },
        { year: 2020, deaths: 1000 },
        { year: 2021, deaths: 1100 },
        { year: 2022, deaths: 1200 }
      ],
      'Colombia': [
        { year: 2018, deaths: 1200 },
        { year: 2019, deaths: 1400 },
        { year: 2020, deaths: 1600 },
        { year: 2021, deaths: 1700 },
        { year: 2022, deaths: 1800 }
      ],
      'Argentina': [
        { year: 2018, deaths: 600 },
        { year: 2019, deaths: 700 },
        { year: 2020, deaths: 800 },
        { year: 2021, deaths: 850 },
        { year: 2022, deaths: 900 }
      ],
      'South Africa': [
        { year: 2018, deaths: 1000 },
        { year: 2019, deaths: 1200 },
        { year: 2020, deaths: 1300 },
        { year: 2021, deaths: 1400 },
        { year: 2022, deaths: 1500 }
      ],
      'Nigeria': [
        { year: 2018, deaths: 500 },
        { year: 2019, deaths: 600 },
        { year: 2020, deaths: 700 },
        { year: 2021, deaths: 750 },
        { year: 2022, deaths: 800 }
      ],
      'New Zealand': [
        { year: 2018, deaths: 120 },
        { year: 2019, deaths: 140 },
        { year: 2020, deaths: 160 },
        { year: 2021, deaths: 180 },
        { year: 2022, deaths: 200 }
      ]
    }
    
    return deathData[countryName] || deathData['Global']
  }

  const yearWiseDeathData = getYearWiseDeathData(data.name)
  
  const yearWiseDeathChart = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: 250
    },
    title: {
      text: `${data.name} - Year-wise Drug Deaths`,
      style: { fontSize: '16px', fontWeight: '600', color: '#0f172a' }
    },
    xAxis: {
      categories: yearWiseDeathData.map(item => item.year),
      title: {
        text: 'Year',
        style: { color: '#6b7280' }
      },
      labels: {
        style: { color: '#6b7280', fontSize: '12px' }
      },
      gridLineColor: '#f3f4f6'
    },
    yAxis: {
      title: {
        text: 'Number of Deaths',
        style: { color: '#6b7280' }
      },
      labels: {
        style: { color: '#6b7280', fontSize: '12px' },
        formatter: function() {
          return this.value >= 1000 ? (this.value / 1000).toFixed(0) + 'K' : this.value
        }
      },
      gridLineColor: '#f3f4f6'
    },
    series: [{
      name: 'Drug Deaths',
      data: yearWiseDeathData.map(item => item.deaths),
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#3b82f6'],
          [1, '#1d4ed8']
        ]
      },
      lineWidth: 3,
      marker: {
        enabled: true,
        radius: 5,
        fillColor: '#ffffff',
        lineWidth: 2,
        lineColor: '#3b82f6'
      },
      dataLabels: {
        enabled: true,
        format: '{y:,.0f}',
        style: {
          fontSize: '10px',
          fontWeight: '600',
          color: '#374151'
        }
      }
    }],
    plotOptions: {
      line: {
        marker: {
          states: {
            hover: {
              enabled: true,
              radius: 7,
              lineWidth: 3
            }
          }
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e5e7eb',
      borderRadius: 8,
      shadow: true,
      style: {
        color: '#374151',
        fontSize: '14px'
      },
      formatter: function() {
        return `<b>${this.x}</b><br/>Drug Deaths: <b>${this.y.toLocaleString()}</b>`
      }
    },
    legend: {
      enabled: false
    },
    credits: { enabled: false }
  }

  return (
    <div className="country-crisis-panel" ref={panelRef}>
      <div className="crisis-header">
        <div className="country-info">
          <div className="country-flag">{getFlagIcon(data.flag)}</div>
          <h3>{data.name} - Drug Crisis Analysis</h3>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="crisis-content">
        <div className="crisis-overview">
          <div className="overview-stats">
            <div className="stat-item primary">
              <div className="stat-icon"><PopulationIcon /></div>
              <div className="stat-content">
                <span className="stat-label">Population</span>
                <span className="stat-value">{data.population}</span>
              </div>
            </div>
            <div className="stat-item danger">
              <div className="stat-icon"><DeathIcon /></div>
              <div className="stat-content">
                <span className="stat-label">Drug Deaths (2022)</span>
                <span className="stat-value">{data.drugDeaths.toLocaleString()}</span>
              </div>
            </div>
            <div className="stat-item warning">
              <div className="stat-icon"><ChartIcon /></div>
              <div className="stat-content">
                <span className="stat-label">Deaths per Million</span>
                <span className="stat-value">{data.drugDeathsPerMillion}</span>
              </div>
            </div>
            <div className={`stat-item crisis-${data.crisisLevel.toLowerCase().replace('-', '')}`}>
              <div className="stat-icon"><AlertIcon /></div>
              <div className="stat-content">
                <span className="stat-label">Crisis Level</span>
                <span className="stat-value">{data.crisisLevel}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="charts-section">
          <div className="chart-container">
            <HighchartsReact highcharts={Highcharts} options={drugUsageChart} />
          </div>
          <div className="chart-container">
            <HighchartsReact highcharts={Highcharts} options={yearWiseDeathChart} />
          </div>
        </div>

        <div className="crisis-sections">
          <div className="crisis-section">
            <h4>Primary Drugs of Concern</h4>
            <div className="drugs-list">
              {data.primaryDrugs.map((drug, index) => (
                <div key={index} className="drug-item">
                  <span className="drug-name">{drug}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="crisis-section">
            <h4>Usage Statistics</h4>
            <div className="usage-stats">
              {Object.entries(data.trends).map(([key, value]) => (
                <div key={key} className="usage-item">
                  <span className="usage-label">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                  <span className="usage-value">{value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="crisis-section">
            <h4>Key Facts</h4>
            <ul className="key-facts">
              {data.keyFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>

          {!selectedCountry && data.regionalBreakdown && (
            <div className="crisis-section">
              <h4>Regional Breakdown</h4>
              <div className="regional-stats">
                {Object.entries(data.regionalBreakdown).map(([region, stats]) => (
                  <div key={region} className="regional-item">
                    <div className="regional-header">
                      <span className="regional-name">{region}</span>
                      <span className={`regional-level crisis-${stats.level.toLowerCase().replace('-', '')}`}>
                        {stats.level}
                      </span>
                    </div>
                    <div className="regional-details">
                      <div className="regional-stat">
                        <span className="stat-label">Deaths</span>
                        <span className="stat-value">{stats.deaths.toLocaleString()}</span>
                      </div>
                      <div className="regional-stat">
                        <span className="stat-label">Rate per Million</span>
                        <span className="stat-value">{stats.rate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="crisis-section">
            <h4>Data Sources</h4>
            <ul className="sources-list">
              {data.sources.map((source, index) => (
                <li key={index} className="source-item">
                  <span className="source-number">{index + 1}.</span>
                  <span className="source-text">{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <button 
          className="crisis-scroll-indicator"
          onClick={scrollToBottom}
          title="Scroll to see more content"
        >
          <ScrollDownIcon />
        </button>
      )}
    </div>
  )
}

export default CountryDrugCrisis
