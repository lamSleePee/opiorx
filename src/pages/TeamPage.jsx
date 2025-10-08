import React from 'react'

const teamData = {
  pis: [
    {
      name: 'Dr. Anup Atul Kale',
      role: 'Primary PI',
      title: 'Principal Investigator',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Synthetic Biology & Biosensor Development',
      tasks: 'Analysis, Conceptualization, Investigation, Background Research, Data Curation, Project Administration, Fundraising, Public Engagement, Entrepreneurship, Writing, Visualization, Safety',
      description: 'Dr. Anup Kale, as the Primary Principal Investigator (PI) of the Opio-Rx project, provided exceptional leadership and direction throughout the research. He was responsible for designing and overseeing the entire research pipeline, bridging both wet lab experiments and dry lab data analysis to ensure integrated and comprehensive results. His guidance was pivotal in ideation and strategy development, as well as in mentoring the team on scientific rigor and project execution. Beyond research, Dr. Kale played an essential role in shaping the entrepreneurship aspect of the project, assisting from basic concepts to the formation of a successful, scalable business model. Additionally, he was actively involved in financing the project and designing outreach initiatives to maximize impact and engagement with broader scientific and stakeholder communities. As the PI, he also managed project resources and budgets, ensured compliance with ethical and regulatory standards, coordinated collaborative efforts, and maintained effective communication with institutional and funding bodies. His multifaceted responsibilities and strategic vision were critical to the seamless execution and success of the Opio-Rx project.'
    },
    {
      name: 'Dr. Shilpa Chapadgaonkar',
      role: 'Secondary PI',
      title: 'Co-Principal Investigator',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1527384025924-f30fc2ac98e3?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Computational Biology & Drug Detection',
      tasks: 'Project Administration, Analysis, Conceptualization, Background Research, Investigation, Data Curation, Entrepreneurship, Public Engagement, Writing, Safety',
      description: 'Dr. Shilpa S. Chapadgaonkar played a pivotal role in the success of the innovation project through her multifaceted contributions. She provided crucial guidance in refining the scientific concept and experimental methodology, ensuring a strong balance between technical rigor and innovation. Her mentorship greatly enhanced the project\'s scientific clarity and practical execution. In addition to her research guidance, Dr. Chapadgaonkar actively supported the team\'s outreach initiatives, shaping effective community engagement strategies that promoted awareness and participation. She also contributed significantly to resource mobilization by supporting fundraising efforts and helping the project maintain financial sustainability. Furthermore, she guided the team in navigating institutional and statutory compliance, facilitating timely approvals and ensuring adherence to ethical standards. Through her visionary mentorship, strategic input, and unwavering support, Dr. Chapadgaonkar empowered the team to achieve excellence and deliver meaningful scientific and social impact.'
    }
  ],
  instructors: [
    {
      name: 'Amrita Sinharay',
      role: 'Instructor',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Wet Lab Techniques & Protocols',
      tasks: 'Analysis, Investigation, Conceptualization, Data Curation, Project Administration, Writing, Visualization, Safety',
      description: 'Amrita Sinharay, our primary instructor, provided the strategic direction and technical oversight essential to our success. She established our end-to-end in silico pipeline—selecting software platforms, defining simulation workflows, and training team members on best practices for molecular dynamics and docking studies. In the wet lab, she guided the design and optimization of FRET-pair experiments, ensuring rigorous controls, reproducible protocols, and adherence to safety regulations. Amrita also validated our social media content for accuracy, helped plan and execute educational outreach events, and mentored each student in both computational and experimental methods, fostering a collaborative environment that emphasized scientific rigor and clear communication.'
    },
    {
      name: 'Dr. Shreeram Joglekar',
      role: 'Instructor',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Process Engineering & Optimization',
      tasks: 'Conceptualization, Investigation, Notebook/record keeping, Project Administration, Entrepreneurship, Writing',
      description: 'Developing ideas for the project, Analyzing data generated by the team, Mentoring the experiments being performed, collecting data, Guided to maintain the laboratory notebook, keeping a record of all laboratory activities, Developing business models and other commercially relevant materials, presenting the work, including Wiki design, and data visualization, editing content for the Wiki or other documents to be shared outside the team.'
    },
    {
      name: 'Madhu Choubey',
      role: 'Instructor',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Equipment Management & Safety',
      tasks: 'Project Administration, Entrepreneurship, Safety, Analysis, Investigation',
      description: 'Madhu Choubey played a pivotal role in the success of the innovation project through her leadership, mentorship, scientific excellence, and creative problem-solving. She brought remarkable depth to the research design and experimental framework, ensuring a perfect balance between innovation, technical precision, and practical applicability. Her insightful guidance strengthened the scientific foundation of the project while fostering an environment of curiosity and collaboration. Beyond her research contributions, she led impactful outreach and partnership initiatives that expanded the project\'s visibility and societal reach. She also contributed strategically to resource mobilization and compliance management, ensuring smooth execution. Through her dedication, foresight, and unwavering pursuit of scientific excellence.'
    }
  ],
  advisor: {
    name: 'Dr. Prashant Malavadkar',
    role: 'Advisor',
    department: 'Biosciences and Technology',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?auto=format&fit=crop&w=1080&q=80',
    specialization: 'Translational Medicine & Clinical Applications',
    tasks: 'Conceptualization, Background Research, Project Administration',
    description: 'Dr. Prashant Malavadkar contributed to the development of an AI-based model for in silico aptamer design. He helped build and optimize a computational pipeline that combines machine learning with molecular modeling to efficiently predict and improve aptamer binding properties. This streamlined approach accelerates the identification of effective aptamer sequences for our biosensor, enhancing both accuracy and speed in the design process.'
  },
  studentLeader: {
    name: 'Meetrayu Raut',
    role: 'Student Leader',
    year: 'Final Year',
    department: 'Biosciences and Technology',
    image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80',
    specialization: 'Project Management & Team Coordination',
    tasks: 'Analysis, Conceptualization, Investigation, Background Research, Data Curation, Notebook/record keeping, Project Administration, Public Engagement, Entrepreneurship, Visualization, Writing, Safety',
    description: 'Meetrayu led the Opio-Rx team as student leader, expertly balancing scientific direction and project management. In the dry lab, he spearheaded in silico aptamer design using a point-mutation strategy, conducted comprehensive data analysis, and validated top candidates through GROMACS molecular dynamics simulations. In the wet lab, he contributed to the FRET-based assay development by selecting optimal fluorophore–quencher pairs, optimizing concentration gradients, and interpreting fluorescence recovery data. Beyond the bench, Meetrayu managed the project budget, curated and refined the team\'s wiki content, and coordinated educational outreach initiatives such as the Rustomjee International Urban Outreach and a Computational Biology Masterclass. He also organized BioQuest and co-ordinated multiple iGEM community events, demonstrating leadership that seamlessly integrated technical innovation with broader community engagement.'
  },
  students: [
    {
      name: 'Aarya Kunnure',
      year: '3rd Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Molecular Biology',
      tasks: 'Notebook/record keeping, Investigation, Conceptualization, Writing, Safety, Analysis, Background Research, Data Curation, Hardware, Public Engagement',
      description: 'Aarya has contributed significantly through literature review, molecular docking studies, and detailed data analysis. Beyond her involvement in the in silico design of aptamers, she has worked extensively in the wet lab to develop an optical-based approach for the detection of synthetic opioids, while ensuring strict adherence to standard operating procedures. In addition to her diverse laboratory contributions, she has also maintained and systematically developed the laboratory notebook, supporting effective documentation and continuity of research.'
    },
    {
      name: 'Animesh Inamdar',
      year: '3rd Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Computational Biology',
      tasks: 'Analysis, Background Research, Data Curation, Conceptualization, Investigation, Project Administration, Public Engagement, Hardware',
      description: 'Animesh excelled at integrating computational modeling with hands-on experimentation. He pioneered a truncation strategy for aptamer design, systematically shortening sequences to enhance specificity and then running molecular dynamics simulations in GROMACS to assess structural stability over time. In the wet lab, he engineered and fine-tuned our FRET-based detection system—selecting optimal fluorophore-quencher pairs, and developing protocols to maximize signal-to-noise ratios. His analytical prowess was on full display as he processed large datasets from both simulations and fluorescence assays, extracting critical insights to refine our designs. Animesh also strengthened our collaborative network by coordinating joint experiments with other iGEM teams through BioQuest, fostering knowledge exchange and accelerating progress.'
    },
    {
      name: 'Arya Bundi',
      year: '2nd Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Biosensor Design',
      tasks: 'Analysis, Data Curation, Project Administration, Notebook/record keeping, Entrepreneurship, Public Engagement, Writing, Background Research, Conceptualization',
      description: 'Arya brought a unique blend of technical expertise and strategic vision to our project. In the dry lab, she designed aptamer targeting codeine through molecular docking, rigorously evaluating binding energies to select the most promising candidates. Her wet-lab efforts were multi-directed, where she optimised assay protocols and helped design a paper based assay. As our education and HP coordinator, Arya organized workshops, led campus-wide demonstrations, and forged partnerships with local NGOs, ensuring our work reached diverse audiences. She also drove our entrepreneurship initiatives by curating market data, analyzing regulatory landscapes, and preparing reports on commercialization pathways for our product.'
    },
    {
      name: 'Ayushi Mishra',
      year: '3rd Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Analytical Chemistry',
      tasks: 'Writing, Visualization, Analysis, Data Curation, Notebook/record keeping, Entrepreneurship',
      description: 'Ayushi has led the creation of multiple social media campaigns spanning from drug awareness reels to interview posts and STEM content, including Synbio Simplified and autism awareness initiatives aimed at promoting inclusivity and knowledge. She has played a key role in iGEM collaborations such as BioQuest, where she served as mentor, designer, coordinator, and organizer, working alongside teams like IIT-Bombay and Yale from ideation to execution. In education, Ayushi coordinated rural outreach activities, organized essay writing and poster making events for Overdose Awareness Day, and mentored participants in BioQuest Round 03. Her human practices contributions include conducting stakeholder interviews with de-addiction doctors and opioid addiction survivors at Muktangan Rehab Centre and optimizing survey tools to better understand stakeholder perspectives. Additionally, Ayushi contributed to wiki ideation and documentation, and enhanced the project\'s visibility by editing and animating promo videos, producing multiple podcasts and interviews, designing brand identity, and shaping the overall virtual team image.'
    },
    {
      name: 'Gargi Mulay',
      year: 'Final Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Protein Engineering',
      tasks: 'Public Engagement, Writing',
      description: 'Gargi contributed significantly to the iGEM MITWPU team across education, human practices, collaborations, and documentation. In Education, she was actively involved in planning, organizing, and conducting diverse events and competitions, including school outreach programs, poster contests, and essay competitions, thereby helping spread awareness of synthetic biology to younger audiences. She also played a key role in collaboration with Team VIT, strengthening inter-team connections and fostering knowledge exchange. Within Human Practices, Gargi was instrumental in reaching out to stakeholders and building meaningful connections that informed the socially responsible direction of our project. Additionally, in Documentation, she supported the development of outreach and human practices reports and contributed engaging write-ups for the Rubisco magazine, effectively communicating the team\'s initiatives to the wider community.'
    },
    {
      name: 'Lalit Sinha',
      year: '3rd Year',
      department: 'Computer Engineering and Technology',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Hardware Integration',
      tasks: 'Wiki Coding, Visualization, Writing',
      description: 'Lalit was integral to the wiki design, creating the homepage and the project section. He managed the main components of the project, ensuring a structured and user-friendly organization that effectively showcased the work and made navigation intuitive for all users. His efforts contributed to a polished and comprehensive wiki that served as a central repository and presentation platform for the team\'s research and achievements.'
    },
    {
      name: 'Payal Modi',
      year: '2nd Year',
      department: 'Computer Engineering and Technology',
      image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Microbial Systems',
      tasks: 'Visualization, Writing, Wiki Coding',
      description: 'Payal contributed significantly to the website by designing various sections beyond the homepage. She was responsible for the visual and functional design aspects, ensuring that the other parts of the site maintained a consistent and appealing aesthetic. Her design work focused on creating user-friendly and engaging interfaces that enhanced the overall website experience.'
    },
    {
      name: 'Rui Agashe',
      year: 'Final Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Data Analysis',
      tasks: 'Public Engagement, Writing',
      description: 'Rui made impactful contributions to iGEM MITWPU through her involvement in education, human practices, media, and documentation. In Education, she served as a mentor for BioQuest, developing associated educational material, and played a key role in Rural Outreach, where she organized interactive activities and taught students about synthetic biology in an engaging and accessible way. She further expanded outreach by hosting a Marathi podcast on epigenetics in collaboration with Team VIT, and supported various collaborations and workshops. Within Human Practices, Rui co-hosted a dedicated IPR Podcast featuring Mr. Ashutosh Prachand, where she explored the importance of intellectual property rights for innovation and iGEM projects. For Social Media, she created creative and educational content, most notably the Wonder Wednesday Series, which highlighted unique synthetic biology applications each week. She also contributed to Instagram content design and writing, helping the team strengthen its digital presence. In Documentation, Rui assisted in compiling reports and materials for multiple outreach and integrated human practices programs, ensuring their initiatives were effectively recorded and shared.'
    },
    {
      name: 'Sanskriti Khanna',
      year: '2nd Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1655977237812-ee6beb137203?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Biochemical Analysis',
      tasks: 'Writing, Public Engagement, Notebook/record keeping',
      description: 'As a part of IGEM MITWPU, Sanskriti has contributed to its growth and visibility through a variety of efforts, including hosting podcasts, organizing outreach events, and leading initiatives to engage with the wider community.'
    },
    {
      name: 'Sharvari Bhosale',
      year: '3rd Year',
      department: 'Biosciences and Technology',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Synthetic Biology',
      tasks: 'Analysis, Background Research, Investigation, Notebook/record keeping, Data Curation, Safety, Conceptualization, Project Administration, Public Engagement, Writing, Visualization',
      description: 'Sharvari contributed deeply to our computational investigations and data interpretation. She spearheaded the design of multiple aptamer candidates using structural prediction tools, rigorously analyzing binding affinities and molecular interaction profiles. To broaden our understanding of opioid–cell interactions, she performed additional molecular dynamics simulations that revealed conformational changes upon ligand binding. Sharvari\'s keen eye for data analysis allowed her to develop frameworks for comparing simulation outputs, guiding iterative improvements to our aptamer designs. Additionally, she engaged in outreach activities, presenting our computational findings in seminars and engaging prospective students in discussions about the power of in silico approaches in biosensor development.'
    },
    {
      name: 'Tushar Yerne',
      year: 'Final Year',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?auto=format&fit=crop&w=1080&q=80',
      specialization: 'Process Optimization',
      tasks: 'Wiki Coding, Visualization, Writing',
      description: 'Tushar contributed similarly to the website design by focusing specifically on the Human Practices (HP) section. He played a key role in designing this part of the site, ensuring it was visually cohesive and effectively communicated the human practices aspects of the project. His efforts complemented the overall website design by bringing consistency and user-friendly aesthetics to the HP section.'
    }
  ]
}

const PersonCard = ({ person, large }) => (
  <div className={`team-card-flip ${large ? 'large' : ''}`}>
    <div className="team-card-inner">
      {/* Front of card */}
      <div className="team-card-front">
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
      
      {/* Back of card */}
      <div className="team-card-back">
        <div className="team-card-back-content">
          <h4>{person.name}</h4>
          <div className="team-tasks-label">Tasks:</div>
          <p className="team-tasks">{person.tasks}</p>
          <div className="team-description-scroll">
            <p className="team-description">{person.description}</p>
          </div>
        </div>
      </div>
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
