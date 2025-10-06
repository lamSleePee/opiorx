import React from 'react'

const teamData = {
  pis: [
    {
      name: 'Dr. Anup Atul Kale', role: 'Primary PI', title: 'Principal Investigator', department: 'Biomedical Engineering',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?auto=format&fit=crop&w=1080&q=80', specialization: 'Synthetic Biology & Biosensor Development'
    },
    {
      name: 'Dr. Shilpa Chapadgaonkar', role: 'Secondary PI', title: 'Co-Principal Investigator', department: 'Molecular Biology',
      image: 'https://images.unsplash.com/photo-1527384025924-f30fc2ac98e3?auto=format&fit=crop&w=1080&q=80', specialization: 'Computational Biology & Drug Detection'
    }
  ],
  instructors: [
    {
      name: 'Amrita', role: 'Research Instructor', department: 'Biotechnology',
      image: 'https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?auto=format&fit=crop&w=1080&q=80', specialization: 'Wet Lab Techniques & Protocols'
    },
    {
      name: 'Dr. Shreeram Joglekar', role: 'Technical Instructor', department: 'Chemical Engineering',
      image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?auto=format&fit=crop&w=1080&q=80', specialization: 'Process Engineering & Optimization'
    },
    {
      name: 'Madhu', role: 'Lab Coordinator', department: 'Research Support',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization: 'Equipment Management & Safety'
    }
  ],
  advisor: {
    name: 'Dr. Prashant Malavadkar', role: 'Research Advisor', department: 'Clinical Medicine',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?auto=format&fit=crop&w=1080&q=80', specialization: 'Translational Medicine & Clinical Applications'
  },
  studentLeader: {
    name: 'Meetrayu Raut', role: 'Student Leader', year: 'Final Year', department: 'Biomedical Engineering',
    image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80', specialization: 'Project Management & Team Coordination'
  },
  students: [
    { name:'Aarya Kunnure', year:'3rd Year', department:'Biotechnology', image:'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80', specialization:'Molecular Biology' },
    { name:'Animesh', year:'3rd Year', department:'Computer Science', image:'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization:'Computational Biology' },
    { name:'Arya Bundi', year:'2nd Year', department:'Biomedical Engineering', image:'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80', specialization:'Biosensor Design' },
    { name:'Ayushi Mishra', year:'3rd Year', department:'Chemistry', image:'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization:'Analytical Chemistry' },
    { name:'Gargi Mulay', year:'Final Year', department:'Biotechnology', image:'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80', specialization:'Protein Engineering' },
    { name:'Lalit Sinha', year:'3rd Year', department:'Electronics Engineering', image:'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization:'Hardware Integration' },
    { name:'Payal', year:'2nd Year', department:'Microbiology', image:'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80', specialization:'Microbial Systems' },
    { name:'Rui Agashe', year:'Final Year', department:'Biomedical Engineering', image:'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization:'Data Analysis' },
    { name:'Sanskriti', year:'2nd Year', department:'Biochemistry', image:'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80', specialization:'Biochemical Analysis' },
    { name:'Sharvari Bhosale', year:'3rd Year', department:'Biotechnology', image:'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization:'Synthetic Biology' },
    { name:'Tushar', year:'Final Year', department:'Chemical Engineering', image:'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80', specialization:'Process Optimization' }
  ]
}

const PersonCard = ({ person, large }) => (
  <div className={`team-card ${large ? 'large' : ''}`}>
    <div className="team-card-img">
      <img src={person.image} alt={person.name} />
      <div className="team-role">{person.role || person.year}</div>
    </div>
    <div className="team-card-body">
      <h4>{person.name}</h4>
      <div className="muted">{person.department}</div>
      {person.specialization && <p className="spec">{person.specialization}</p>}
    </div>
  </div>
)

const TeamPage = () => {
  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-inner">
          <div className="team-badge">Meet Our Team</div>
          <h1 className="team-title">The OPIO‑RX Research Team</h1>
          <p className="team-lead">A multidisciplinary team of researchers, advisors, and students creating meaningful impact in opioid detection.</p>
          <div className="team-stats">
            <div className="team-stat"><div className="val">2</div><div className="lbl">Principal Investigators</div></div>
            <div className="team-stat"><div className="val">3</div><div className="lbl">Instructors</div></div>
            <div className="team-stat"><div className="val">1</div><div className="lbl">Advisor</div></div>
            <div className="team-stat"><div className="val">1</div><div className="lbl">Student Leader</div></div>
            <div className="team-stat"><div className="val">11</div><div className="lbl">Students</div></div>
          </div>
        </div>
      </section>

      <div className="team-container">
        <section>
          <h2 className="team-section-title purple">Principal Investigators</h2>
          <div className="team-grid2 center">
            {teamData.pis.map((p, i) => <PersonCard key={`pi-${i}`} person={p} large />)}
          </div>
        </section>

        <section>
          <h2 className="team-section-title blue">Instructors</h2>
          <div className="team-grid3">
            {teamData.instructors.map((p, i) => <PersonCard key={`inst-${i}`} person={p} />)}
          </div>
        </section>

        <section>
          <h2 className="team-section-title green">Research Advisor</h2>
          <div className="team-grid1 center">
            <PersonCard person={teamData.advisor} large />
          </div>
        </section>

        <section>
          <h2 className="team-section-title orange">Student Leader</h2>
          <div className="team-grid1 center">
            <PersonCard person={teamData.studentLeader} large />
          </div>
        </section>

        <section>
          <h2 className="team-section-title cyan">Research Students</h2>
          <div className="team-grid4">
            {teamData.students.map((p, i) => <PersonCard key={`stud-${i}`} person={p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeamPage


