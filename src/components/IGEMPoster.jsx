import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Activity, BarChart3, Globe, DollarSign, Shield, Target } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./IGEMPoster.css";

const fundingData = [
  { name: "Grants", value: 30 },
  { name: "Venture Capital", value: 25 },
  { name: "Angel Investors", value: 20 },
  { name: "Loans", value: 15 },
  { name: "International Collaborations", value: 10 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626", "#9333ea"];

export default function IGEMPoster() {
  return (
    <div className="igem-poster">
      {/* Header */}
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="igem-poster-header">
        iGEM Entrepreneurship Poster: Point-of-Care Opioid Test Kit
      </motion.h1>

      {/* Vision */}
      <Card className="igem-card igem-card-blue">
        <CardContent className="igem-card-content">
          <div className="igem-card-header">
            <Target className="igem-icon igem-icon-blue" />
            <h2 className="igem-card-title">Project Vision</h2>
          </div>
          <p className="igem-card-text">
            A portable, point-of-care fentanyl test kit providing rapid, reliable results in clinical,
            emergency, and community settings. Designed to be accessible even in resource-limited areas.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="igem-card igem-card-green">
        <CardContent className="igem-card-content">
          <div className="igem-card-header">
            <CheckCircle className="igem-icon igem-icon-green" />
            <h2 className="igem-card-title">Key Features</h2>
          </div>
          <ul className="igem-list">
            <li className="igem-list-item">Adaptable for clinics, homes, ambulances, and remote sites</li>
            <li className="igem-list-item">Meets FDA, CLIA, ISO standards</li>
            <li className="igem-list-item">Assemble-to-Order (ATO) for flexible production</li>
            <li className="igem-list-item">Reliable supply through strategic partnerships</li>
          </ul>
        </CardContent>
      </Card>

      {/* Impact */}
      <Card className="igem-card igem-card-purple">
        <CardContent className="igem-card-content">
          <div className="igem-card-header">
            <Globe className="igem-icon igem-icon-purple" />
            <h2 className="igem-card-title">Impact & Opportunities</h2>
          </div>
          <ul className="igem-list">
            <li className="igem-list-item">Addresses global demand for drug detection</li>
            <li className="igem-list-item">Strengthens public health interventions</li>
            <li className="igem-list-item">Enables NGO & government collaborations</li>
            <li className="igem-list-item">Scalable from local to international markets</li>
          </ul>
        </CardContent>
      </Card>

      {/* Funding */}
      <Card className="igem-card igem-card-yellow">
        <CardContent className="igem-card-content">
          <div className="igem-card-header">
            <DollarSign className="igem-icon igem-icon-yellow" />
            <h2 className="igem-card-title">Business & Funding</h2>
          </div>
          <div className="igem-funding-grid">
            <ul className="igem-funding-list">
              <li className="igem-list-item">Revenue from hospitals, NGOs, law enforcement</li>
              <li className="igem-list-item">Funding: grants, VC, angel investors, loans</li>
              <li className="igem-list-item">Covers R&D, compliance, logistics, marketing</li>
            </ul>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={fundingData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                  {fundingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* SWOT */}
      <Card className="igem-card igem-card-indigo">
        <CardContent className="igem-card-content">
          <div className="igem-card-header">
            <BarChart3 className="igem-icon igem-icon-indigo" />
            <h2 className="igem-card-title">SWOT Summary</h2>
          </div>
          <div className="igem-swot-grid">
            <div className="igem-swot-item"><span className="igem-swot-strong">Strengths:</span> Customizable kit, regulatory compliance, stakeholder input</div>
            <div className="igem-swot-item"><span className="igem-swot-strong">Opportunities:</span> Global demand, partnerships, product expansion</div>
            <div className="igem-swot-item"><span className="igem-swot-strong">Weaknesses:</span> Supply chain dependency, early-stage brand recognition</div>
            <div className="igem-swot-item"><span className="igem-swot-strong">Threats:</span> Competition, regulatory shifts, misuse risks</div>
          </div>
        </CardContent>
      </Card>

      {/* Branding */}
      <Card className="igem-card igem-card-red">
        <CardContent className="igem-card-content">
          <div className="igem-card-header">
            <Shield className="igem-icon igem-icon-red" />
            <h2 className="igem-card-title">Branding & Outreach</h2>
          </div>
          <ul className="igem-list">
            <li className="igem-list-item">Brand built on trust, speed, accuracy</li>
            <li className="igem-list-item">Marketing via online campaigns, expos, tenders</li>
            <li className="igem-list-item">Educational outreach for opioid awareness</li>
            <li className="igem-list-item">Continuous feedback for product refinement</li>
          </ul>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="igem-card igem-card-teal">
        <CardContent className="igem-card-content igem-conclusion-card">
          <div className="igem-conclusion-icon">
            <Activity className="igem-icon igem-icon-teal" />
          </div>
          <h2 className="igem-conclusion-title">Conclusion</h2>
          <p className="igem-conclusion-text">
            Our iGEM project delivers a <span className="igem-conclusion-strong">scientifically robust, socially impactful, and commercially viable</span> POC fentanyl test kit. By merging synthetic biology with entrepreneurship, we aim to enhance global health and safety.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
