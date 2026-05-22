function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Add EmailJS to make this real.');
  };

  return (
    <section id="contact" style={{ background: '#1e2a3a' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: '#fff' }}>Get In Touch</h2>
        <p className="section-subtitle" style={{ color: '#90caf9' }}>
          Open to full-time opportunities — let's talk
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'start'
        }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>
              Let's build something together
            </h3>
            <p style={{ color: '#b0c4de', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm currently looking for full-time Full Stack Developer roles.
              Whether you have a question or just want to say hi — my inbox is open!
            </p>
            {[
              { icon: '📧', label: 'aryarakshith95@gmail.com' },
              { icon: '📍', label: 'Bengaluru, Karnataka, India' },
              { icon: '💼', label: 'linkedin.com/in/rakshithk-27dec' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                marginBottom: '1rem', color: '#b0c4de'
              }}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{
            display: 'flex', flexDirection: 'column', gap: '1rem'
          }}>
            {[
              { name: 'name', placeholder: 'Your name', type: 'text' },
              { name: 'email', placeholder: 'Your email', type: 'email' },
            ].map(field => (
              <input key={field.name} name={field.name}
                type={field.type} placeholder={field.placeholder} required
                style={{
                  padding: '0.85rem 1rem', borderRadius: '8px',
                  border: '1px solid #2e3d50', background: '#243447',
                  color: '#fff', fontSize: '0.95rem', outline: 'none'
                }}
              />
            ))}
            <textarea name="message" placeholder="Your message"
              rows={5} required style={{
                padding: '0.85rem 1rem', borderRadius: '8px',
                border: '1px solid #2e3d50', background: '#243447',
                color: '#fff', fontSize: '0.95rem',
                resize: 'vertical', outline: 'none'
              }}
            />
            <button type="submit" style={{
              padding: '0.9rem', background: '#1a73e8',
              color: '#fff', border: 'none', borderRadius: '8px',
              fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              transition: 'background 0.2s'
            }}
              onMouseEnter={e => e.target.style.background = '#1557b0'}
              onMouseLeave={e => e.target.style.background = '#1a73e8'}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;