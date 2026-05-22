function About() {
  const facts = [
    { icon: '🎓', label: 'Education', value: 'B.Sc Computer Science, University of Mysore' },
    { icon: '💼', label: 'Experience', value: '1+ Year — IT Administrator, Unique Punch Systems' },
    { icon: '📍', label: 'Location', value: 'Bengaluru, Karnataka, India' },
    { icon: '📧', label: 'Email', value: 'aryarakshith95@gmail.com' },
  ];

  return (
    <section id="about" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My background and what drives me</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a73e8' }}>
              Developer with a real-world IT edge
            </h3>
            <p style={{ color: '#5a6a7e', lineHeight: 1.9, marginBottom: '1rem' }}>
              I'm a Full Stack Developer with a strong foundation in React.js, Node.js, and
              JavaScript, combined with 1+ year of hands-on IT support experience managing
              systems for 50+ users daily.
            </p>
            <p style={{ color: '#5a6a7e', lineHeight: 1.9, marginBottom: '2rem' }}>
              This dual background gives me a unique perspective — I understand how applications
              are built and how they perform in real-world environments. I hold a Full Stack
              Development certification and am actively seeking full-time developer roles.
            </p>
            <a href="#contact" style={{
              background: '#1a73e8', color: '#fff',
              padding: '0.75rem 1.75rem', borderRadius: '8px',
              fontWeight: 600, display: 'inline-block'
            }}>
              Download CV
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {facts.map(f => (
              <div key={f.label} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: '#f4f6f9', borderRadius: '10px', padding: '1rem 1.25rem',
                border: '1px solid #dde3ec'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{f.icon}</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#1a73e8', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '1px' }}>{f.label}</div>
                  <div style={{ fontSize: '0.95rem', color: '#1a1a2e', fontWeight: 500 }}>{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;