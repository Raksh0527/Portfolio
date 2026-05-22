function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e2a3a 0%, #1a73e8 100%)',
      display: 'flex', alignItems: 'center',
      padding: '0 2rem'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        <p style={{
          color: '#90caf9', fontWeight: 600,
          letterSpacing: '2px', fontSize: '0.9rem',
          marginBottom: '1rem', textTransform: 'uppercase'
        }}>
          👋 Hello, I'm
        </p>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: '#ffffff', marginBottom: '1rem', lineHeight: 1.1
        }}>
          Rakshith K
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: '#90caf9', fontWeight: 500, marginBottom: '1.5rem'
        }}>
          Full Stack Developer &amp; IT Support Engineer
        </h2>

        <p style={{
          color: '#b0c4de', fontSize: '1.1rem',
          maxWidth: '550px', marginBottom: '2.5rem', lineHeight: 1.8
        }}>
          Building responsive, scalable web applications with React, Node.js &amp; JavaScript.
          Based in Bengaluru, open to full-time opportunities.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            background: '#fff', color: '#1a73e8',
            padding: '0.85rem 2rem', borderRadius: '8px',
            fontWeight: 700, fontSize: '1rem',
            transition: 'transform 0.2s'
          }}>
            View My Work
          </a>
          <a href="#contact" style={{
            border: '2px solid #fff', color: '#fff',
            padding: '0.85rem 2rem', borderRadius: '8px',
            fontWeight: 600, fontSize: '1rem'
          }}>
            Contact Me
          </a>
        </div>

        <div style={{
          display: 'flex', gap: '2rem', marginTop: '4rem'
        }}>
          {[
            { num: '1+', label: 'Year Experience' },
            { num: '3+', label: 'Projects Built' },
            { num: '50+', label: 'Users Supported' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>{stat.num}</div>
              <div style={{ fontSize: '0.85rem', color: '#90caf9' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;