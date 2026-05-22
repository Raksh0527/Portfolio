import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 999,
      background: scrolled ? '#fff' : 'transparent',
      borderBottom: scrolled ? '1px solid #dde3ec' : 'none',
      transition: 'all 0.3s ease',
      padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <a href="#hero" style={{
        fontWeight: 800, fontSize: '1.3rem',
        color: '#1a73e8', letterSpacing: '-0.5px'
      }}>
        Rakshith<span style={{ color: '#1a1a2e' }}>.dev</span>
      </a>

      <ul style={{
        display: 'flex', gap: '2rem',
        listStyle: 'none', alignItems: 'center'
      }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              color: '#1a1a2e', fontWeight: 500, fontSize: '0.95rem',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = '#1a73e8'}
              onMouseLeave={e => e.target.style.color = '#1a1a2e'}
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            background: '#1a73e8', color: '#fff',
            padding: '0.5rem 1.25rem', borderRadius: '6px',
            fontWeight: 600, fontSize: '0.9rem',
            transition: 'background 0.2s'
          }}
            onMouseEnter={e => e.target.style.background = '#1557b0'}
            onMouseLeave={e => e.target.style.background = '#1a73e8'}
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;