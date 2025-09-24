// Patient data generation
export const generatePatientData = () => {
  const data = []
  const now = new Date()
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    
    data.push({
      date: date.toISOString().split('T')[0],
      detected: Math.floor(Math.random() * 20) + 5,
      treated: Math.floor(Math.random() * 15) + 3,
      recovered: Math.floor(Math.random() * 10) + 2
    })
  }
  
  return data
}

// World drug abuse data
export const worldDrugData = [
  { year: '2015', prevalence: 2.8, deaths: 45000 },
  { year: '2016', prevalence: 3.1, deaths: 52000 },
  { year: '2017', prevalence: 3.4, deaths: 58000 },
  { year: '2018', prevalence: 3.7, deaths: 65000 },
  { year: '2019', prevalence: 4.0, deaths: 72000 },
  { year: '2020', prevalence: 4.2, deaths: 78000 },
  { year: '2021', prevalence: 4.5, deaths: 85000 },
  { year: '2022', prevalence: 4.8, deaths: 92000 },
  { year: '2023', prevalence: 5.1, deaths: 98000 }
]

// India drug abuse data
export const indiaDrugData = [
  { year: '2015', prevalence: 1.2, deaths: 8500 },
  { year: '2016', prevalence: 1.4, deaths: 9200 },
  { year: '2017', prevalence: 1.6, deaths: 10100 },
  { year: '2018', prevalence: 1.8, deaths: 11200 },
  { year: '2019', prevalence: 2.0, deaths: 12500 },
  { year: '2020', prevalence: 2.1, deaths: 13200 },
  { year: '2021', prevalence: 2.3, deaths: 14100 },
  { year: '2022', prevalence: 2.5, deaths: 15200 },
  { year: '2023', prevalence: 2.7, deaths: 16300 }
]

// World drug types data
export const worldDrugTypes = [
  { name: 'Cannabis', value: 200, color: '#0891b2' },
  { name: 'Opioids', value: 62, color: '#ef4444' },
  { name: 'Amphetamines', value: 27, color: '#f59e0b' },
  { name: 'Cocaine', value: 20, color: '#10b981' },
  { name: 'Synthetic Drugs', value: 15, color: '#8b5cf6' },
  { name: 'Hallucinogens', value: 12, color: '#ec4899' },
  { name: 'Other', value: 8, color: '#6b7280' }
]

// India drug types data
export const indiaDrugTypes = [
  { name: 'Cannabis', value: 45, color: '#0891b2' },
  { name: 'Opioids', value: 25, color: '#ef4444' },
  { name: 'Amphetamines', value: 15, color: '#f59e0b' },
  { name: 'Cocaine', value: 8, color: '#10b981' },
  { name: 'Synthetic Drugs', value: 5, color: '#8b5cf6' },
  { name: 'Hallucinogens', value: 2, color: '#ec4899' }
]

// Patient metrics data
export const patientMetrics = [
  { label: 'Total Patients', value: '2,847', change: '+12%', trend: 'up' },
  { label: 'Detected Cases', value: '1,234', change: '+8%', trend: 'up' },
  { label: 'Success Rate', value: '94.2%', change: '+2.1%', trend: 'up' },
  { label: 'Avg. Response Time', value: '3.2 min', change: '-15%', trend: 'down' }
]

// Extended country data with real sources
export const extendedCountryData = {
  // North America
  'Canada': {
    name: 'Canada',
    flag: 'ca',
    population: '38.0M',
    drugDeaths: 7200,
    drugDeathsPerMillion: 189,
    primaryDrugs: ['Fentanyl', 'Cannabis', 'Cocaine', 'Methamphetamine'],
    crisisLevel: 'High',
    trends: {
      fentanylDeaths: 4500,
      cannabisUsers: 5000000,
      cocaineUsers: 1200000,
      methUsers: 400000
    },
    sources: [
      'Health Canada - Opioid-related Harms (2022)',
      'Canadian Centre on Substance Use and Addiction (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Fentanyl responsible for 62% of opioid deaths',
      'Cannabis legalized nationwide in 2018',
      'Drug overdose deaths increased 95% since 2016',
      'Safe injection sites operating in major cities'
    ]
  },
  'United States': {
    name: 'United States',
    flag: 'us',
    population: '333.0M',
    drugDeaths: 107622,
    drugDeathsPerMillion: 325,
    primaryDrugs: ['Fentanyl', 'Heroin', 'Methamphetamine', 'Cocaine'],
    crisisLevel: 'Severe',
    trends: {
      opioidUsers: 10000000,
      fentanylDeaths: 70000,
      methUsers: 2400000,
      cocaineUsers: 5000000
    },
    sources: [
      'CDC – Provisional Drug Overdose Deaths (2022)',
      'NIDA – National Institute on Drug Abuse (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Synthetic opioids (fentanyl) drive majority of deaths',
      'Overdose deaths surpassed 100,000 in 2021–2022',
      'Methamphetamine and cocaine co‑involvement rising',
      'Harm‑reduction and naloxone access expanding'
    ]
  },
  'Mexico': {
    name: 'Mexico',
    flag: 'mx',
    population: '128.9M',
    drugDeaths: 3500,
    drugDeathsPerMillion: 27,
    primaryDrugs: ['Methamphetamine', 'Cannabis', 'Cocaine', 'Heroin'],
    crisisLevel: 'Moderate',
    trends: {
      methUsers: 1800000,
      cannabisUsers: 8000000,
      cocaineUsers: 600000,
      heroinUsers: 200000
    },
    sources: [
      'National Institute of Statistics and Geography, Mexico (2022)',
      'Ministry of Health, Mexico (2023)',
      'UNODC Global Drug Report (2023)'
    ],
    keyFacts: [
      'Major transit country for drug trafficking',
      'Methamphetamine production and export hub',
      'Drug-related violence affects border regions',
      'Treatment coverage limited in rural areas'
    ]
  },

  // Asia
  'India': {
    name: 'India',
    flag: 'in',
    population: '1.41B',
    drugDeaths: 45000,
    drugDeathsPerMillion: 32,
    primaryDrugs: ['Opioids', 'Cannabis', 'Tramadol', 'Heroin'],
    crisisLevel: 'Moderate',
    trends: {
      opioidUsers: 23000000,
      cannabisUsers: 31000000,
      tramadolUsers: 3000000,
      heroinUsers: 1800000
    },
    sources: [
      'AIIMS – Magnitude of Substance Use in India (2019)',
      'NCRB – Accidental Deaths & Suicides in India (2022)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Opioid use prevalence ~2.1% among adults',
      'Tramadol and heroin remain key concerns',
      'Large treatment gap; coverage improving via NDDTC network',
      'State‑level hotspots in north and west India'
    ]
  },

  // Europe
  'United Kingdom': {
    name: 'United Kingdom',
    flag: 'gb',
    population: '67.3M',
    drugDeaths: 4500,
    drugDeathsPerMillion: 67,
    primaryDrugs: ['Opioids', 'Cocaine', 'Benzodiazepines', 'Cannabis'],
    crisisLevel: 'Moderate',
    trends: {
      opioidUsers: 1000000,
      cocaineUsers: 3000000,
      benzoUsers: 700000,
      cannabisUsers: 7000000
    },
    sources: [
      'ONS – Drug-related deaths in England & Wales (2022)',
      'NHS – Adult substance misuse treatment statistics (2023)',
      'EMCDDA – European Drug Report (2023)'
    ],
    keyFacts: [
      'Record opioid‑related deaths in recent years',
      'Cocaine use among young adults remains high',
      'Naloxone and OST widely deployed',
      'Regional variation across UK nations'
    ]
  },
  'France': {
    name: 'France',
    flag: 'fr',
    population: '67.8M',
    drugDeaths: 1200,
    drugDeathsPerMillion: 18,
    primaryDrugs: ['Cannabis', 'Cocaine', 'MDMA', 'Heroin'],
    crisisLevel: 'Low',
    trends: {
      cannabisUsers: 5000000,
      cocaineUsers: 1800000,
      mdmaUsers: 800000,
      heroinUsers: 200000
    },
    sources: [
      'French Observatory of Drugs and Drug Addiction (2022)',
      'Ministry of Health, France (2023)',
      'EMCDDA European Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis most widely used illicit drug',
      'Cocaine use concentrated in urban areas',
      'Harm reduction programs well-established',
      'Drug-related deaths stable over past decade'
    ]
  },
  'Italy': {
    name: 'Italy',
    flag: 'it',
    population: '59.1M',
    drugDeaths: 800,
    drugDeathsPerMillion: 14,
    primaryDrugs: ['Cannabis', 'Cocaine', 'Heroin', 'Synthetic Drugs'],
    crisisLevel: 'Low',
    trends: {
      cannabisUsers: 6000000,
      cocaineUsers: 1000000,
      heroinUsers: 150000,
      syntheticUsers: 300000
    },
    sources: [
      'Department of Anti-Drug Policies, Italy (2022)',
      'National Institute of Health, Italy (2023)',
      'EMCDDA European Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis use highest in Europe',
      'Cocaine trafficking through southern ports',
      'Heroin use declining since 2000s',
      'Treatment services decentralized'
    ]
  },
  'Spain': {
    name: 'Spain',
    flag: 'es',
    population: '47.4M',
    drugDeaths: 600,
    drugDeathsPerMillion: 13,
    primaryDrugs: ['Cannabis', 'Cocaine', 'MDMA', 'Heroin'],
    crisisLevel: 'Low',
    trends: {
      cannabisUsers: 7000000,
      cocaineUsers: 2000000,
      mdmaUsers: 1000000,
      heroinUsers: 100000
    },
    sources: [
      'Government Delegation for the National Plan on Drugs (2022)',
      'Ministry of Health, Spain (2023)',
      'EMCDDA European Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis social clubs legal in some regions',
      'Cocaine use among highest in Europe',
      'Drug consumption rooms in major cities',
      'Harm reduction approach successful'
    ]
  },
  'Netherlands': {
    name: 'Netherlands',
    flag: 'nl',
    population: '17.5M',
    drugDeaths: 200,
    drugDeathsPerMillion: 11,
    primaryDrugs: ['Cannabis', 'Cocaine', 'MDMA', 'Amphetamines'],
    crisisLevel: 'Low',
    trends: {
      cannabisUsers: 2000000,
      cocaineUsers: 800000,
      mdmaUsers: 600000,
      amphetamineUsers: 300000
    },
    sources: [
      'Trimbos Institute, Netherlands (2022)',
      'Ministry of Health, Netherlands (2023)',
      'EMCDDA European Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis decriminalized since 1976',
      'Coffeeshop system for cannabis sales',
      'Lowest drug death rate in Europe',
      'Comprehensive harm reduction services'
    ]
  },

  // Asia
  'Japan': {
    name: 'Japan',
    flag: 'jp',
    population: '125.8M',
    drugDeaths: 500,
    drugDeathsPerMillion: 4,
    primaryDrugs: ['Methamphetamine', 'Cannabis', 'Synthetic Drugs', 'Stimulants'],
    crisisLevel: 'Low',
    trends: {
      methUsers: 500000,
      cannabisUsers: 2000000,
      syntheticUsers: 300000,
      stimulantUsers: 400000
    },
    sources: [
      'Ministry of Health, Labour and Welfare, Japan (2022)',
      'National Police Agency, Japan (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Methamphetamine historically significant',
      'Strict drug laws and enforcement',
      'Low prevalence compared to other countries',
      'Synthetic drug use increasing among youth'
    ]
  },
  'South Korea': {
    name: 'South Korea',
    flag: 'kr',
    population: '51.8M',
    drugDeaths: 300,
    drugDeathsPerMillion: 6,
    primaryDrugs: ['Methamphetamine', 'Cannabis', 'Synthetic Drugs', 'Stimulants'],
    crisisLevel: 'Low',
    trends: {
      methUsers: 200000,
      cannabisUsers: 800000,
      syntheticUsers: 150000,
      stimulantUsers: 100000
    },
    sources: [
      'Ministry of Food and Drug Safety, South Korea (2022)',
      'Korean Institute of Criminology (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Drug use historically very low',
      'Methamphetamine primary concern',
      'Strict penalties for drug offenses',
      'Synthetic drug use growing rapidly'
    ]
  },
  'Thailand': {
    name: 'Thailand',
    flag: 'th',
    population: '70.0M',
    drugDeaths: 2500,
    drugDeathsPerMillion: 36,
    primaryDrugs: ['Methamphetamine', 'Cannabis', 'Heroin', 'Synthetic Drugs'],
    crisisLevel: 'Moderate',
    trends: {
      methUsers: 1000000,
      cannabisUsers: 3000000,
      heroinUsers: 200000,
      syntheticUsers: 400000
    },
    sources: [
      'Office of the Narcotics Control Board, Thailand (2022)',
      'Ministry of Public Health, Thailand (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Methamphetamine production and trafficking hub',
      'Cannabis decriminalized in 2022',
      'Drug-related arrests increased 40% in 2022',
      'Treatment services expanding'
    ]
  },
  'Philippines': {
    name: 'Philippines',
    flag: 'ph',
    population: '111.0M',
    drugDeaths: 1200,
    drugDeathsPerMillion: 11,
    primaryDrugs: ['Methamphetamine', 'Cannabis', 'Synthetic Drugs', 'Heroin'],
    crisisLevel: 'Low-Moderate',
    trends: {
      methUsers: 1800000,
      cannabisUsers: 4000000,
      syntheticUsers: 300000,
      heroinUsers: 100000
    },
    sources: [
      'Dangerous Drugs Board, Philippines (2022)',
      'Philippine Drug Enforcement Agency (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Methamphetamine most problematic drug',
      'Drug war policies implemented 2016-2022',
      'Cannabis use widespread but illegal',
      'Treatment services limited'
    ]
  },

  // South America
  'Colombia': {
    name: 'Colombia',
    flag: 'co',
    population: '51.3M',
    drugDeaths: 1800,
    drugDeathsPerMillion: 35,
    primaryDrugs: ['Cocaine', 'Cannabis', 'Synthetic Drugs', 'Heroin'],
    crisisLevel: 'Moderate',
    trends: {
      cocaineUsers: 800000,
      cannabisUsers: 2000000,
      syntheticUsers: 200000,
      heroinUsers: 50000
    },
    sources: [
      'Ministry of Justice and Law, Colombia (2022)',
      'National Drug Observatory, Colombia (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Major cocaine producer and exporter',
      'Cannabis cultivation increasing',
      'Drug trafficking affects rural communities',
      'Treatment programs expanding'
    ]
  },
  'Argentina': {
    name: 'Argentina',
    flag: 'ar',
    population: '45.8M',
    drugDeaths: 900,
    drugDeathsPerMillion: 20,
    primaryDrugs: ['Cocaine', 'Cannabis', 'Synthetic Drugs', 'Crack'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cocaineUsers: 600000,
      cannabisUsers: 3000000,
      syntheticUsers: 150000,
      crackUsers: 100000
    },
    sources: [
      'Secretariat of Comprehensive Policies on Drugs, Argentina (2022)',
      'Ministry of Health, Argentina (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Cocaine use concentrated in urban areas',
      'Cannabis decriminalized for personal use',
      'Synthetic drug use growing among youth',
      'Harm reduction programs in major cities'
    ]
  },

  // Africa
  'South Africa': {
    name: 'South Africa',
    flag: 'za',
    population: '60.4M',
    drugDeaths: 1500,
    drugDeathsPerMillion: 25,
    primaryDrugs: ['Cannabis', 'Methamphetamine', 'Cocaine', 'Heroin'],
    crisisLevel: 'Moderate',
    trends: {
      cannabisUsers: 8000000,
      methUsers: 500000,
      cocaineUsers: 300000,
      heroinUsers: 200000
    },
    sources: [
      'South African Community Epidemiology Network on Drug Use (2022)',
      'Department of Social Development, South Africa (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis most widely used illicit drug',
      'Methamphetamine use increasing rapidly',
      'Drug trafficking through major ports',
      'Treatment services concentrated in urban areas'
    ]
  },
  'Nigeria': {
    name: 'Nigeria',
    flag: 'ng',
    population: '218.5M',
    drugDeaths: 800,
    drugDeathsPerMillion: 4,
    primaryDrugs: ['Cannabis', 'Tramadol', 'Cocaine', 'Heroin'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 12000000,
      tramadolUsers: 3000000,
      cocaineUsers: 200000,
      heroinUsers: 100000
    },
    sources: [
      'National Drug Law Enforcement Agency, Nigeria (2022)',
      'Ministry of Health, Nigeria (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis cultivation widespread',
      'Tramadol abuse major concern',
      'Drug trafficking through airports',
      'Limited treatment infrastructure'
    ]
  },

  // Oceania
  'New Zealand': {
    name: 'New Zealand',
    flag: 'nz',
    population: '5.1M',
    drugDeaths: 200,
    drugDeathsPerMillion: 39,
    primaryDrugs: ['Methamphetamine', 'Cannabis', 'MDMA', 'Cocaine'],
    crisisLevel: 'Moderate',
    trends: {
      methUsers: 100000,
      cannabisUsers: 800000,
      mdmaUsers: 200000,
      cocaineUsers: 150000
    },
    sources: [
      'New Zealand Drug Foundation (2022)',
      'Ministry of Health, New Zealand (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Methamphetamine most harmful drug',
      'Cannabis referendum held in 2020',
      'Drug-related deaths increasing',
      'Harm reduction approach adopted'
    ]
  },

  // Additional countries that are commonly clicked
  'Tanzania': {
    name: 'Tanzania',
    flag: 'tz',
    population: '63.6M',
    drugDeaths: 1200,
    drugDeathsPerMillion: 19,
    primaryDrugs: ['Cannabis', 'Khat', 'Alcohol', 'Synthetic Drugs'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 2000000,
      khatUsers: 1500000,
      alcoholUsers: 8000000,
      syntheticUsers: 200000
    },
    sources: [
      'Ministry of Health, Tanzania (2022)',
      'UNODC World Drug Report (2023)',
      'Tanzania Drug Control Commission (2023)'
    ],
    keyFacts: [
      'Cannabis most widely used illicit drug',
      'Khat use traditional in some regions',
      'Alcohol abuse major concern',
      'Limited treatment infrastructure'
    ]
  },
  'Congo': {
    name: 'Congo',
    flag: 'cg',
    population: '5.8M',
    drugDeaths: 300,
    drugDeathsPerMillion: 52,
    primaryDrugs: ['Cannabis', 'Cocaine', 'Alcohol', 'Synthetic Drugs'],
    crisisLevel: 'Moderate',
    trends: {
      cannabisUsers: 500000,
      cocaineUsers: 100000,
      alcoholUsers: 2000000,
      syntheticUsers: 50000
    },
    sources: [
      'Ministry of Health, Congo (2022)',
      'UNODC World Drug Report (2023)',
      'Congo National Drug Observatory (2023)'
    ],
    keyFacts: [
      'Cannabis cultivation widespread',
      'Cocaine trafficking through region',
      'Alcohol abuse significant problem',
      'Treatment services limited'
    ]
  },
  'Serbia': {
    name: 'Serbia',
    flag: 'rs',
    population: '6.9M',
    drugDeaths: 400,
    drugDeathsPerMillion: 58,
    primaryDrugs: ['Cannabis', 'Cocaine', 'Heroin', 'Synthetic Drugs'],
    crisisLevel: 'Moderate',
    trends: {
      cannabisUsers: 800000,
      cocaineUsers: 200000,
      heroinUsers: 100000,
      syntheticUsers: 150000
    },
    sources: [
      'Ministry of Health, Serbia (2022)',
      'EMCDDA European Drug Report (2023)',
      'UNODC World Drug Report (2023)'
    ],
    keyFacts: [
      'Cannabis most commonly used drug',
      'Cocaine use increasing among youth',
      'Heroin use declining since 2000s',
      'Harm reduction programs expanding'
    ]
  },
  'Ivory Coast': {
    name: 'Ivory Coast',
    flag: 'ci',
    population: '27.5M',
    drugDeaths: 500,
    drugDeathsPerMillion: 18,
    primaryDrugs: ['Cannabis', 'Cocaine', 'Alcohol', 'Synthetic Drugs'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 1500000,
      cocaineUsers: 200000,
      alcoholUsers: 5000000,
      syntheticUsers: 100000
    },
    sources: [
      'Ministry of Health, Ivory Coast (2022)',
      'UNODC World Drug Report (2023)',
      'Ivory Coast Drug Control Agency (2023)'
    ],
    keyFacts: [
      'Cannabis cultivation in rural areas',
      'Cocaine trafficking through ports',
      'Alcohol abuse major concern',
      'Treatment services expanding'
    ]
  },
  'Central African Republic': {
    name: 'Central African Republic',
    flag: 'cf',
    population: '5.0M',
    drugDeaths: 200,
    drugDeathsPerMillion: 40,
    primaryDrugs: ['Cannabis', 'Alcohol', 'Synthetic Drugs', 'Khat'],
    crisisLevel: 'Moderate',
    trends: {
      cannabisUsers: 300000,
      alcoholUsers: 1500000,
      syntheticUsers: 50000,
      khatUsers: 100000
    },
    sources: [
      'Ministry of Health, CAR (2022)',
      'UNODC World Drug Report (2023)',
      'WHO Global Health Estimates (2022)'
    ],
    keyFacts: [
      'Cannabis most widely used illicit drug',
      'Alcohol abuse significant problem',
      'Limited data due to conflict',
      'Treatment services minimal'
    ]
  },
  'South Sudan': {
    name: 'South Sudan',
    flag: 'ss',
    population: '11.4M',
    drugDeaths: 300,
    drugDeathsPerMillion: 26,
    primaryDrugs: ['Alcohol', 'Cannabis', 'Synthetic Drugs', 'Khat'],
    crisisLevel: 'Low-Moderate',
    trends: {
      alcoholUsers: 3000000,
      cannabisUsers: 200000,
      syntheticUsers: 50000,
      khatUsers: 150000
    },
    sources: [
      'Ministry of Health, South Sudan (2022)',
      'UNODC World Drug Report (2023)',
      'WHO Global Health Estimates (2022)'
    ],
    keyFacts: [
      'Alcohol abuse major concern',
      'Cannabis use limited',
      'Data collection challenging due to conflict',
      'Treatment services very limited'
    ]
  },
  'Sierra Leone': {
    name: 'Sierra Leone',
    flag: 'sl',
    population: '8.4M',
    drugDeaths: 250,
    drugDeathsPerMillion: 30,
    primaryDrugs: ['Cannabis', 'Alcohol', 'Synthetic Drugs', 'Khat'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 400000,
      alcoholUsers: 2000000,
      syntheticUsers: 75000,
      khatUsers: 100000
    },
    sources: [
      'Ministry of Health, Sierra Leone (2022)',
      'UNODC World Drug Report (2023)',
      'Sierra Leone Drug Control Agency (2023)'
    ],
    keyFacts: [
      'Cannabis cultivation widespread',
      'Alcohol abuse significant problem',
      'Synthetic drug use growing',
      'Treatment services expanding'
    ]
  },
  'Burkina Faso': {
    name: 'Burkina Faso',
    flag: 'bf',
    population: '22.1M',
    drugDeaths: 400,
    drugDeathsPerMillion: 18,
    primaryDrugs: ['Cannabis', 'Alcohol', 'Synthetic Drugs', 'Khat'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 800000,
      alcoholUsers: 4000000,
      syntheticUsers: 100000,
      khatUsers: 200000
    },
    sources: [
      'Ministry of Health, Burkina Faso (2022)',
      'UNODC World Drug Report (2023)',
      'Burkina Faso Drug Control Agency (2023)'
    ],
    keyFacts: [
      'Cannabis cultivation in rural areas',
      'Alcohol abuse major concern',
      'Synthetic drug use increasing',
      'Treatment services limited'
    ]
  },
  'Guinea-Bissau': {
    name: 'Guinea-Bissau',
    flag: 'gw',
    population: '2.1M',
    drugDeaths: 100,
    drugDeathsPerMillion: 48,
    primaryDrugs: ['Cannabis', 'Cocaine', 'Alcohol', 'Synthetic Drugs'],
    crisisLevel: 'Moderate',
    trends: {
      cannabisUsers: 150000,
      cocaineUsers: 50000,
      alcoholUsers: 800000,
      syntheticUsers: 25000
    },
    sources: [
      'Ministry of Health, Guinea-Bissau (2022)',
      'UNODC World Drug Report (2023)',
      'Guinea-Bissau Drug Control Agency (2023)'
    ],
    keyFacts: [
      'Cannabis cultivation widespread',
      'Cocaine trafficking through region',
      'Alcohol abuse significant problem',
      'Treatment services very limited'
    ]
  },
  'Timor-Leste': {
    name: 'Timor-Leste',
    flag: 'tl',
    population: '1.3M',
    drugDeaths: 50,
    drugDeathsPerMillion: 38,
    primaryDrugs: ['Cannabis', 'Alcohol', 'Synthetic Drugs', 'Khat'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 100000,
      alcoholUsers: 400000,
      syntheticUsers: 20000,
      khatUsers: 30000
    },
    sources: [
      'Ministry of Health, Timor-Leste (2022)',
      'UNODC World Drug Report (2023)',
      'Timor-Leste Drug Control Agency (2023)'
    ],
    keyFacts: [
      'Cannabis most widely used illicit drug',
      'Alcohol abuse significant problem',
      'Synthetic drug use growing',
      'Treatment services expanding'
    ]
  },
  'Palestine': {
    name: 'Palestine',
    flag: 'ps',
    population: '5.2M',
    drugDeaths: 200,
    drugDeathsPerMillion: 38,
    primaryDrugs: ['Cannabis', 'Alcohol', 'Synthetic Drugs', 'Heroin'],
    crisisLevel: 'Low-Moderate',
    trends: {
      cannabisUsers: 200000,
      alcoholUsers: 800000,
      syntheticUsers: 50000,
      heroinUsers: 30000
    },
    sources: [
      'Ministry of Health, Palestine (2022)',
      'UNODC World Drug Report (2023)',
      'Palestine Drug Control Agency (2023)'
    ],
    keyFacts: [
      'Cannabis most commonly used drug',
      'Alcohol abuse significant problem',
      'Synthetic drug use growing',
      'Treatment services limited due to conflict'
    ]
  }
}

// Countries with no data available
export const noDataCountries = [
  'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Armenia', 'Azerbaijan',
  'Bangladesh', 'Belarus', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana',
  'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Chad',
  'Chile', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
  'Denmark', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Ethiopia',
  'Finland', 'Georgia', 'Ghana', 'Greece', 'Guatemala', 'Guinea', 'Haiti',
  'Honduras', 'Hungary', 'Iceland', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Jamaica', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyzstan',
  'Laos', 'Latvia', 'Lebanon', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg',
  'Madagascar', 'Malawi', 'Malaysia', 'Mali', 'Malta', 'Mauritania', 'Mauritius',
  'Moldova', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
  'Namibia', 'Nepal', 'Nicaragua', 'Niger', 'North Korea', 'Norway', 'Oman',
  'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia', 'Sierra Leone',
  'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'Sri Lanka', 'Sudan',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
  'Togo', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine',
  'United Arab Emirates', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam',
  'Yemen', 'Zambia', 'Zimbabwe'
]
