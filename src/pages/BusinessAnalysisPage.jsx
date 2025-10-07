import React from 'react';
import { 
  Package,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Target,
  Shield,
  Zap,
  Building,
  Heart,
  Globe,
  Rocket,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  ArrowRight,
  Award,
  Briefcase,
  Settings,
  Clock,
  Layers,
  Database,
  TrendingDown,
  Factory,
  ShoppingCart,
  Network
} from 'lucide-react';
import './BusinessAnalysisPage.css';

export function BusinessAnalysisPage() {
  // Financial projection data
  const financialData = [
    { year: 'Year 1', revenue: 25, costs: 57, netIncome: -32, devices: 1, tests: 500 },
    { year: 'Year 2', revenue: 220, costs: 160, netIncome: 60, devices: 8, tests: 4400 },
    { year: 'Year 3', revenue: 675, costs: 325, netIncome: 350, devices: 27, tests: 13500 }
  ];

  // Market stakeholder data
  const stakeholderData = [
    { name: 'Healthcare Institutions', value: 20.5, color: '#3B82F6', cagr: '14.2%' },
    { name: 'Commercial Labs', value: 13.9, color: '#10B981', cagr: '16.6%' },
    { name: 'Point-of-Care Centers', value: 8.1, color: '#8B5CF6', cagr: '15.1%' },
    { name: 'Law Enforcement', value: 6.1, color: '#F59E0B', cagr: '12.3%' },
    { name: 'Workplace Safety', value: 4.2, color: '#EF4444', cagr: '11.8%' }
  ];

  // Distribution channel data
  const distributionData = [
    { channel: 'Direct Hospital Sales', share: 28.5, growth: 'High', priority: 1 },
    { channel: 'Commercial Lab Networks', share: 22.3, growth: 'High', priority: 1 },
    { channel: 'Online B2B Platforms', share: 15.7, growth: 'Exponential', priority: 2 },
    { channel: 'Medical Device Distributors', share: 18.2, growth: 'Medium', priority: 1 },
    { channel: 'Government Procurement', share: 9.1, growth: 'Medium', priority: 2 },
    { channel: 'Pharmacy Chains', share: 6.2, growth: 'Low', priority: 3 }
  ];

  // Cost allocation data
  const costData = [
    { category: 'Innovation & Development', initial: 35, annual: 25 },
    { category: 'Regulatory & Quality', initial: 17, annual: 15 },
    { category: 'Manufacturing & Supply', initial: 22, annual: 28 },
    { category: 'Market Development', initial: 12, annual: 18 },
    { category: 'Operations & Admin', initial: 14, annual: 14 }
  ];

  // Production timeline phases
  const timelinePhases = [
    { phase: 'Innovation Genesis', duration: '1-3', color: 'blue', icon: Sparkles, tasks: ['Computational platform validation', 'IP strategy', 'Proof-of-concept'] },
    { phase: 'Technology Integration', duration: '4-11', color: 'purple', icon: Settings, tasks: ['Functional prototype', 'AI integration', 'Mobile app development'] },
    { phase: 'Clinical Translation', duration: '12-17', color: 'emerald', icon: Heart, tasks: ['Multi-site validation', 'Stability testing', 'Clinical studies'] },
    { phase: 'Regulatory Acceleration', duration: '18-23', color: 'orange', icon: Shield, tasks: ['FDA 510(k) submission', 'Breakthrough device designation'] },
    { phase: 'Manufacturing Scale-Up', duration: '24-27', color: 'cyan', icon: Factory, tasks: ['Partner qualification', 'Process validation', 'Supply chain'] },
    { phase: 'Market Launch', duration: '28-29', color: 'pink', icon: Rocket, tasks: ['Sales training', 'Distribution activation', 'Commercial launch'] }
  ];

  // Brand identity prism
  const brandPrism = [
    { aspect: 'Physique', icon: Package, description: 'Clean, modern design with shield logo. Blue (trust, science) and green (health, hope) palette. Portable, smartphone-compatible.', color: 'blue' },
    { aspect: 'Personality', icon: Sparkles, description: 'Compassionate, reliable, innovative, empowering—a trusted guardian in the opioid crisis.', color: 'purple' },
    { aspect: 'Culture', icon: Globe, description: 'Rooted in public health ethics, social responsibility, and cutting-edge biomedical innovation.', color: 'emerald' },
    { aspect: 'Relationship', icon: Heart, description: 'Built on trust, accuracy, and collaborative support, enhanced by AI-powered data and engagement.', color: 'pink' }
  ];

  // Competitive advantages
  const competitiveAdvantages = [
    { title: 'Technology Supremacy', description: 'Aptamer-based FRET detection: quantitative precision, superior sensitivity, multiplex capability', metric: '>99% specificity', icon: Zap },
    { title: 'Speed & Accuracy', description: 'Results in under 3 minutes vs. 15-30 minutes for competitors', metric: 'Under 3 min', icon: Clock },
    { title: 'AI-Powered Intelligence', description: 'Transforms complex data into intuitive, actionable insights for non-experts', metric: 'Unique differentiator', icon: Sparkles },
    { title: 'Adaptability', description: 'Computational aptamer design enables rapid response to new synthetic opioids', metric: 'Weeks not months', icon: Target }
  ];

  // Revenue streams
  const revenueStreams = [
    { stream: 'Device-as-a-Service', icon: Package, description: 'Subscription plans bundling hardware, support, and analytics', margin: 'High', recurring: true },
    { stream: 'Consumables & Tests', icon: ShoppingCart, description: 'Recurring revenue from single-use test cartridges', margin: 'Medium', recurring: true },
    { stream: 'Software Licensing', icon: Database, description: 'High-margin fees for licensing detection algorithms', margin: 'Very High', recurring: true },
    { stream: 'Value-Based Contracts', icon: Award, description: 'Payment tied to outcomes like reduced readmissions', margin: 'High', recurring: false },
    { stream: 'Professional Services', icon: Users, description: 'Training, certification, and integration consulting', margin: 'Medium', recurring: false }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'ba-blue-bg', border: 'ba-blue-border', text: 'ba-blue-text', accent: 'ba-blue-accent' },
      purple: { bg: 'ba-purple-bg', border: 'ba-purple-border', text: 'ba-purple-text', accent: 'ba-purple-accent' },
      emerald: { bg: 'ba-emerald-bg', border: 'ba-emerald-border', text: 'ba-emerald-text', accent: 'ba-emerald-accent' },
      orange: { bg: 'ba-orange-bg', border: 'ba-orange-border', text: 'ba-orange-text', accent: 'ba-orange-accent' },
      cyan: { bg: 'ba-cyan-bg', border: 'ba-cyan-border', text: 'ba-cyan-text', accent: 'ba-cyan-accent' },
      pink: { bg: 'ba-pink-bg', border: 'ba-pink-border', text: 'ba-pink-text', accent: 'ba-pink-accent' },
      red: { bg: 'ba-red-bg', border: 'ba-red-border', text: 'ba-red-text', accent: 'ba-red-accent' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="ba-page">
      {/* Hero Section */}
      <section className="ba-hero">
        <div className="ba-hero-bg"></div>
        <div className="ba-hero-blobs">
          <div className="ba-blob ba-blob-1"></div>
          <div className="ba-blob ba-blob-2"></div>
        </div>
        
        <div className="ba-hero-content">
          <div className="ba-badge">
            <BarChart3 className="ba-badge-icon" />
            Comprehensive Business Intelligence
          </div>
          
          <h1 className="ba-hero-title">
            Business Analysis
          </h1>
          <h2 className="ba-hero-subtitle">
            OPIO-RX: From Innovation to Market Leadership
          </h2>
          <p className="ba-hero-description">
            Strategic framework for commercial success through product excellence, market intelligence, 
            and sustainable revenue generation
          </p>
        </div>
      </section>

      <div className="ba-container">
        {/* Product & Brand Identity Section */}
        <section className="ba-section">
          <div className="ba-section-header">
            <h2 className="ba-section-title">
              Product & Brand Identity
            </h2>
            <p className="ba-section-description">
              Beyond technology: Building a brand that symbolizes hope and action in the opioid crisis
            </p>
          </div>

          <div className="ba-grid-2">
            {/* Product Card */}
            <div className="ba-card ba-card-blue">
              <div className="ba-card-header">
                <h3 className="ba-card-title">
                  <Package className="ba-card-icon" />
                  <span>The Product</span>
                </h3>
              </div>
              <div className="ba-card-content">
                <p className="ba-card-text">
                  OPIO-RX is a portable, AI-powered, paper-based biosensor for rapid and sensitive detection 
                  of synthetic opioids.
                </p>
                <div className="ba-feature-list">
                  <div className="ba-feature-item">
                    <CheckCircle className="ba-feature-icon" />
                    <span>Aptamer-based FRET biosensing technology</span>
                  </div>
                  <div className="ba-feature-item">
                    <CheckCircle className="ba-feature-icon" />
                    <span>Smartphone integration for seamless data connectivity</span>
                  </div>
                  <div className="ba-feature-item">
                    <CheckCircle className="ba-feature-icon" />
                    <span>Rapid fluorescence readout with AI-powered quantification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Promise Card */}
            <div className="ba-card ba-card-purple">
              <div className="ba-card-header">
                <h3 className="ba-card-title">
                  <Heart className="ba-card-icon" />
                  <span>The Brand Promise</span>
                </h3>
              </div>
              <div className="ba-card-content">
                <p className="ba-card-text">
                  OPIO-RX transcends being a mere device—it's a symbol of hope and action, humanizing technology 
                  as a compassionate companion for empowerment and recovery.
                </p>
                <div className="ba-feature-list">
                  <div className="ba-feature-item">
                    <Shield className="ba-feature-icon" />
                    <span>Closing the treatment gap with immediate intervention</span>
                  </div>
                  <div className="ba-feature-item">
                    <Heart className="ba-feature-icon" />
                    <span>Restoring lives and providing a shield against harm</span>
                  </div>
                  <div className="ba-feature-item">
                    <Sparkles className="ba-feature-icon" />
                    <span>Empowering healthcare providers with intelligent tools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Identity Prism */}
          <div className="ba-card ba-card-blue">
            <div className="ba-card-header">
              <h3 className="ba-card-title ba-card-title-center">
                <Layers className="ba-card-icon" />
                <span>Brand Identity Prism</span>
              </h3>
              <p className="ba-card-subtitle">
                Four pillars defining OPIO-RX's market positioning and emotional connection
              </p>
            </div>
            <div className="ba-card-content">
              <div className="ba-prism-grid">
                {brandPrism.map((item, index) => (
                  <div
                    key={item.aspect}
                    className={`ba-prism-item ${getColorClasses(item.color).bg} ${getColorClasses(item.color).border}`}
                  >
                    <item.icon className={`ba-prism-icon ${getColorClasses(item.color).text}`} />
                    <h4 className={`ba-prism-title ${getColorClasses(item.color).text}`}>{item.aspect}</h4>
                    <p className="ba-prism-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Strategy & Distribution */}
        <section className="ba-section">
          <div className="ba-section-header">
            <h2 className="ba-section-title ba-section-title-emerald">
              Marketing Strategy & Distribution
            </h2>
            <p className="ba-section-description">
              Multi-channel approach to maximize market penetration and revenue generation
            </p>
          </div>

          <div className="ba-grid-2">
            {/* Marketing Strategy */}
            <div className="ba-card ba-card-emerald">
              <div className="ba-card-header">
                <h3 className="ba-card-title">
                  <TrendingUp className="ba-card-icon" />
                  <span>Marketing Strategy</span>
                </h3>
              </div>
              <div className="ba-card-content">
                <div className="ba-strategy-list">
                  <div className="ba-strategy-item">
                    <div className="ba-strategy-header">
                      <Sparkles className="ba-strategy-icon" />
                      <h4 className="ba-strategy-title">Storytelling</h4>
                    </div>
                    <p className="ba-strategy-description">
                      Compelling brand narrative centered on human impact, recovery, and democratizing addiction science
                    </p>
                  </div>
                  <div className="ba-strategy-item">
                    <div className="ba-strategy-header">
                      <Globe className="ba-strategy-icon" />
                      <h4 className="ba-strategy-title">Digital Presence</h4>
                    </div>
                    <p className="ba-strategy-description">
                      Targeted webinars, SEO, and professional networks (LinkedIn) for lead generation and thought leadership
                    </p>
                  </div>
                  <div className="ba-strategy-item">
                    <div className="ba-strategy-header">
                      <Target className="ba-strategy-icon" />
                      <h4 className="ba-strategy-title">Segmented Campaigns</h4>
                    </div>
                    <p className="ba-strategy-description">
                      Tailored messaging for hospitals, labs, law enforcement, and regional public health schemes
                    </p>
                  </div>
                  <div className="ba-strategy-item">
                    <div className="ba-strategy-header">
                      <Heart className="ba-strategy-icon" />
                      <h4 className="ba-strategy-title">Customer Experience</h4>
                    </div>
                    <p className="ba-strategy-description">
                      Exceptional training, support, and responsive service driving satisfaction and advocacy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Channels Chart */}
            <div className="ba-card ba-card-cyan">
              <div className="ba-card-header">
                <h3 className="ba-card-title">
                  <Network className="ba-card-icon" />
                  <span>Distribution Channels</span>
                </h3>
              </div>
              <div className="ba-card-content">
                <div className="ba-distribution-list">
                  {distributionData.map((channel, index) => (
                    <div key={index} className="ba-distribution-item">
                      <div className="ba-distribution-header">
                        <span className="ba-distribution-name">{channel.channel}</span>
                        <span className="ba-distribution-badge">{channel.growth} Growth</span>
                      </div>
                      <div className="ba-distribution-bar">
                        <div className="ba-distribution-progress">
                          <div 
                            className="ba-distribution-fill"
                            style={{ width: `${channel.share}%` }}
                          ></div>
                        </div>
                        <span className="ba-distribution-percentage">{channel.share}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Stakeholders */}
        <section className="ba-section">
          <div className="ba-card ba-card-purple">
            <div className="ba-card-header">
              <h3 className="ba-card-title ba-card-title-center">
                <Users className="ba-card-icon" />
                Primary Stakeholders Analysis
              </h3>
              <p className="ba-card-subtitle">
                High-value market segments with compelling need for OPIO-RX technology
              </p>
            </div>
            <div className="ba-card-content">
              <div className="ba-stakeholder-list">
                {stakeholderData.map((stakeholder, index) => (
                  <div
                    key={stakeholder.name}
                    className="ba-stakeholder-item"
                  >
                    <div className="ba-stakeholder-header">
                      <div className="ba-stakeholder-info">
                        <div 
                          className="ba-stakeholder-dot" 
                          style={{ backgroundColor: stakeholder.color }}
                        ></div>
                        <h4 className="ba-stakeholder-name">{stakeholder.name}</h4>
                      </div>
                      <span className="ba-stakeholder-cagr">CAGR: {stakeholder.cagr}</span>
                    </div>
                    <div className="ba-stakeholder-content">
                      <div className="ba-stakeholder-value">
                        <span className="ba-stakeholder-amount">${stakeholder.value}B</span>
                        <span className="ba-stakeholder-label">Market Size</span>
                      </div>
                      <div 
                        className="ba-stakeholder-chart"
                        style={{ 
                          borderColor: stakeholder.color,
                          background: `conic-gradient(${stakeholder.color} 0deg ${(stakeholder.value / 52.8) * 360}deg, transparent ${(stakeholder.value / 52.8) * 360}deg)`
                        }}
                      >
                        <div className="ba-stakeholder-chart-inner">
                          <span className="ba-stakeholder-percentage">{((stakeholder.value / 52.8) * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Structure & Resources */}
        <section className="ba-section">
          <div className="ba-section-header">
            <h2 className="ba-section-title ba-section-title-orange">
              Cost Structure & Key Resources
            </h2>
            <p className="ba-section-description">
              Strategic investment allocation across 29-month development phase
            </p>
          </div>

          <div className="ba-stats-grid">
            <div className="ba-stat-card ba-stat-blue">
              <div className="ba-stat-header">
                <DollarSign className="ba-stat-icon" />
                <span>Total Investment</span>
              </div>
              <div className="ba-stat-content">
                <div className="ba-stat-value">$3.45M</div>
                <p className="ba-stat-label">29-Month Development Phase</p>
              </div>
            </div>

            <div className="ba-stat-card ba-stat-emerald">
              <div className="ba-stat-header">
                <TrendingUp className="ba-stat-icon" />
                <span>Annual Operating</span>
              </div>
              <div className="ba-stat-content">
                <div className="ba-stat-value">$2.37M</div>
                <p className="ba-stat-label">Sustainable Growth Framework</p>
              </div>
            </div>

            <div className="ba-stat-card ba-stat-purple">
              <div className="ba-stat-header">
                <Clock className="ba-stat-icon" />
                <span>Break-Even</span>
              </div>
              <div className="ba-stat-content">
                <div className="ba-stat-value">24-30</div>
                <p className="ba-stat-label">Months to Profitability</p>
              </div>
            </div>
          </div>

          {/* Cost Allocation Chart */}
          <div className="ba-card ba-card-orange">
            <div className="ba-card-header">
              <h3 className="ba-card-title">
                <PieChart className="ba-card-icon" />
                <span>Strategic Cost Allocation</span>
              </h3>
            </div>
            <div className="ba-card-content">
              <div className="ba-cost-list">
                {costData.map((cost, index) => (
                  <div key={index} className="ba-cost-item">
                    <h4 className="ba-cost-title">{cost.category}</h4>
                    <div className="ba-cost-bars">
                      <div className="ba-cost-bar">
                        <div className="ba-cost-bar-header">
                          <span className="ba-cost-bar-label">Initial Phase</span>
                          <span className="ba-cost-bar-value">{cost.initial}%</span>
                        </div>
                        <div className="ba-cost-bar-track">
                          <div 
                            className="ba-cost-bar-fill ba-cost-bar-orange"
                            style={{ width: `${cost.initial}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ba-cost-bar">
                        <div className="ba-cost-bar-header">
                          <span className="ba-cost-bar-label">Annual Operating</span>
                          <span className="ba-cost-bar-value">{cost.annual}%</span>
                        </div>
                        <div className="ba-cost-bar-track">
                          <div 
                            className="ba-cost-bar-fill ba-cost-bar-emerald"
                            style={{ width: `${cost.annual}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ba-roi-card">
                <div className="ba-roi-header">
                  <Award className="ba-roi-icon" />
                  <h4 className="ba-roi-title">ROI Projection</h4>
                </div>
                <p className="ba-roi-description">
                  300-500% returns over 5 years • Year 3: $12.5M revenue • Year 5: $28M revenue
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="ba-section">
          <div className="ba-section-header">
            <h2 className="ba-section-title ba-section-title-emerald">
              Revenue Model & Financial Plan
            </h2>
            <p className="ba-section-description">
              Diversified revenue streams maximizing customer value and business resilience
            </p>
          </div>

          {/* Revenue Streams */}
          <div className="ba-revenue-grid">
            {revenueStreams.map((stream, index) => (
              <div
                key={stream.stream}
                className={`ba-revenue-card ${stream.recurring ? 'ba-revenue-recurring' : 'ba-revenue-onetime'}`}
              >
                <div className="ba-revenue-header">
                  <stream.icon className={`ba-revenue-icon ${stream.recurring ? 'ba-revenue-icon-recurring' : 'ba-revenue-icon-onetime'}`} />
                  <span className={`ba-revenue-title ${stream.recurring ? 'ba-revenue-title-recurring' : 'ba-revenue-title-onetime'}`}>{stream.stream}</span>
                </div>
                <div className="ba-revenue-content">
                  <p className="ba-revenue-description">{stream.description}</p>
                  <div className="ba-revenue-footer">
                    <span className={`ba-revenue-badge ${stream.recurring ? 'ba-revenue-badge-recurring' : 'ba-revenue-badge-onetime'}`}>
                      {stream.recurring ? 'Recurring' : 'One-time'}
                    </span>
                    <span className="ba-revenue-margin">{stream.margin} Margin</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3-Year Financial Projection */}
          <div className="ba-card ba-card-emerald">
            <div className="ba-card-header">
              <h3 className="ba-card-title">
                <LineChart className="ba-card-icon" />
                <span>3-Year Financial Projection</span>
              </h3>
            </div>
            <div className="ba-card-content">
              <div className="ba-financial-grid">
                {financialData.map((year, index) => (
                  <div key={index} className="ba-financial-item">
                    <h4 className="ba-financial-year">{year.year}</h4>
                    <div className="ba-financial-details">
                      <div className="ba-financial-row">
                        <span className="ba-financial-label">Revenue:</span>
                        <span className="ba-financial-value ba-financial-positive">${year.revenue}K</span>
                      </div>
                      <div className="ba-financial-row">
                        <span className="ba-financial-label">Costs:</span>
                        <span className="ba-financial-value ba-financial-negative">${year.costs}K</span>
                      </div>
                      <div className="ba-financial-separator"></div>
                      <div className="ba-financial-row">
                        <span className="ba-financial-label">Net Income:</span>
                        <span className={`ba-financial-value ${year.netIncome >= 0 ? 'ba-financial-positive' : 'ba-financial-negative'}`}>
                          {year.netIncome >= 0 ? '+' : ''}{year.netIncome}K
                        </span>
                      </div>
                      <div className="ba-financial-meta">
                        <div className="ba-financial-meta-row">
                          <span className="ba-financial-meta-label">Devices:</span>
                          <span className="ba-financial-meta-value">{year.devices}</span>
                        </div>
                        <div className="ba-financial-meta-row">
                          <span className="ba-financial-meta-label">Tests:</span>
                          <span className="ba-financial-meta-value">{year.tests.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Production Timeline */}
        <section className="ba-section">
          <div className="ba-card ba-card-blue">
            <div className="ba-card-header">
              <h3 className="ba-card-title ba-card-title-center">
                <Calendar className="ba-card-icon" />
                Production Timeline: 29-Month Accelerated Pipeline
              </h3>
              <p className="ba-card-subtitle">
                Six strategic phases from innovation to market launch
              </p>
            </div>
            <div className="ba-card-content">
              <div className="ba-timeline">
                {timelinePhases.map((phase, index) => (
                  <div
                    key={phase.phase}
                    className="ba-timeline-item"
                  >
                    {/* Timeline connector */}
                    {index < timelinePhases.length - 1 && (
                      <div className="ba-timeline-connector"></div>
                    )}
                    
                    <div className={`ba-timeline-card ${getColorClasses(phase.color).bg} ${getColorClasses(phase.color).border}`}>
                      <div className="ba-timeline-icon">
                        <div className={`ba-timeline-icon-bg ${getColorClasses(phase.color).bg} ${getColorClasses(phase.color).border}`}>
                          <phase.icon className={`ba-timeline-icon-svg ${getColorClasses(phase.color).text}`} />
                        </div>
                      </div>
                      
                      <div className="ba-timeline-content">
                        <div className="ba-timeline-header">
                          <h4 className={`ba-timeline-title ${getColorClasses(phase.color).text}`}>{phase.phase}</h4>
                          <span className={`ba-timeline-badge ${getColorClasses(phase.color).border} ${getColorClasses(phase.color).text}`}>
                            Months {phase.duration}
                          </span>
                        </div>
                        <div className="ba-timeline-tasks">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="ba-timeline-task">
                              <CheckCircle className={`ba-timeline-task-icon ${getColorClasses(phase.color).text}`} />
                              <span className="ba-timeline-task-text">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="ba-section">
          <div className="ba-section-header">
            <h2 className="ba-section-title ba-section-title-purple">
              Competitive Analysis Landscape
            </h2>
            <p className="ba-section-description">
              Creating a new market category for intelligent, point-of-care opioid diagnostics
            </p>
          </div>

          {/* Competitive Advantages Grid */}
          <div className="ba-competitive-grid">
            {competitiveAdvantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="ba-competitive-card"
              >
                <div className="ba-competitive-header">
                  <advantage.icon className="ba-competitive-icon" />
                  <span className="ba-competitive-title">{advantage.title}</span>
                </div>
                <div className="ba-competitive-content">
                  <p className="ba-competitive-description">{advantage.description}</p>
                  <div className="ba-competitive-metric">
                    <span className="ba-competitive-badge">
                      {advantage.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Incumbent Weaknesses */}
          <div className="ba-card ba-card-red">
            <div className="ba-card-header">
              <h3 className="ba-card-title">
                <Target className="ba-card-icon" />
                <span>Incumbent Weaknesses & Market Opportunity</span>
              </h3>
            </div>
            <div className="ba-card-content">
              <div className="ba-incumbent-grid">
                <div className="ba-incumbent-item">
                  <h4 className="ba-incumbent-title">
                    <TrendingDown className="ba-incumbent-icon" />
                    Abbott, OraSure
                  </h4>
                  <ul className="ba-incumbent-list">
                    <li>• Conventional lateral flow immunoassays</li>
                    <li>• Qualitative or single-analyte only</li>
                    <li>• Lower accuracy (85-95%)</li>
                    <li>• No quantification capability</li>
                  </ul>
                </div>

                <div className="ba-incumbent-item">
                  <h4 className="ba-incumbent-title">
                    <Clock className="ba-incumbent-icon" />
                    Quest, LabCorp
                  </h4>
                  <ul className="ba-incumbent-list">
                    <li>• Centralized lab model</li>
                    <li>• Too slow for point-of-care urgency</li>
                    <li>• 15-30 minute turnaround</li>
                    <li>• Limited field deployment</li>
                  </ul>
                </div>

                <div className="ba-incumbent-item">
                  <h4 className="ba-incumbent-title">
                    <Target className="ba-incumbent-icon" />
                    Siemens, Roche
                  </h4>
                  <ul className="ba-incumbent-list">
                    <li>• Lack specialized opioid focus</li>
                    <li>• No multiplex detection</li>
                    <li>• Absent AI integration</li>
                    <li>• Slow response to new opioids</li>
                  </ul>
                </div>
              </div>

              <div className="ba-opportunity-card">
                <div className="ba-opportunity-header">
                  <Rocket className="ba-opportunity-icon" />
                  <h4 className="ba-opportunity-title">OPIO-RX: Market Category Creator</h4>
                </div>
                <p className="ba-opportunity-description">
                  Positioned not just to compete but to create a new market category for intelligent, 
                  point-of-care opioid diagnostics. Superior technology (aptamer-based FRET), unmatched 
                  speed (&lt;3 minutes), AI-powered insights, and rapid adaptability to emerging threats 
                  establish OPIO-RX as the clear market leader.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Summary */}
        <section className="ba-section">
          <div className="ba-card ba-card-blue">
            <div className="ba-card-header">
              <h3 className="ba-card-title ba-card-title-center">
                <Award className="ba-card-icon" />
                Strategic Business Excellence
              </h3>
            </div>
            <div className="ba-card-content">
              <div className="ba-excellence-grid">
                <div className="ba-excellence-item ba-excellence-blue">
                  <Package className="ba-excellence-icon" />
                  <h4 className="ba-excellence-title">Product Excellence</h4>
                  <p className="ba-excellence-description">
                    Breakthrough technology with clear brand identity and emotional connection
                  </p>
                </div>
                
                <div className="ba-excellence-item ba-excellence-emerald">
                  <Network className="ba-excellence-icon" />
                  <h4 className="ba-excellence-title">Market Penetration</h4>
                  <p className="ba-excellence-description">
                    Multi-channel distribution strategy targeting $52.8B total addressable market
                  </p>
                </div>
                
                <div className="ba-excellence-item ba-excellence-purple">
                  <DollarSign className="ba-excellence-icon" />
                  <h4 className="ba-excellence-title">Revenue Resilience</h4>
                  <p className="ba-excellence-description">
                    Diversified revenue streams with strong recurring revenue foundation
                  </p>
                </div>
                
                <div className="ba-excellence-item ba-excellence-orange">
                  <Rocket className="ba-excellence-icon" />
                  <h4 className="ba-excellence-title">Competitive Dominance</h4>
                  <p className="ba-excellence-description">
                    Category-creating innovation with sustainable technological advantages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
