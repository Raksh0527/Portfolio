function Footer() {
  return (
    <footer style={{
      background: '#111827', color: '#6b7280',
      textAlign: 'center', padding: '2rem'
    }}>
      <p style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
        © 2025 <span style={{ color: '#1a73e8', fontWeight: 600 }}>Rakshith K</span> · Built with React.js
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {[
          { label: 'GitHub', url: 'https://github.com/rakshith-k' },
          { label: 'LinkedIn', url: 'https://linkedin.com/in/rakshithk-27dec' },
          { label: 'Email', url: 'mailto:aryarakshith95@gmail.com' },
        ].map(link => (
          <a key={link.label} href={link.url}
            target="_blank" rel="noreferrer"
            style={{ color: '#6b7280', fontSize: '0.9rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#1a73e8'}
            onMouseLeave={e => e.target.style.color = '#6b7280'}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;