import { useState } from 'react';
import { projects } from '../data/projects';

const filters = ['All', 'Frontend', 'Full Stack', 'Backend'];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tag === active);

  return (
    <section id="projects" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>

        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap'
        }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '0.5rem 1.25rem', borderRadius: '999px',
              border: '1.5px solid',
              borderColor: active === f ? '#1a73e8' : '#dde3ec',
              background: active === f ? '#1a73e8' : '#fff',
              color: active === f ? '#fff' : '#5a6a7e',
              fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}>
              {f}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {filtered.map(p => (
            <div key={p.id} style={{
              background: '#f4f6f9', borderRadius: '14px',
              padding: '1.75rem', border: '1px solid #dde3ec',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'default'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,115,232,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a1a2e' }}>{p.title}</h3>
                <span style={{
                  background: '#e8f0fe', color: '#1a73e8',
                  fontSize: '11px', padding: '3px 10px',
                  borderRadius: '999px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.5px'
                }}>{p.tag}</span>
              </div>

              <p style={{
                color: '#5a6a7e', fontSize: '0.92rem',
                lineHeight: 1.7, marginBottom: '1.25rem'
              }}>{p.description}</p>

              <div style={{
                display: 'flex', flexWrap: 'wrap',
                gap: '6px', marginBottom: '1.5rem'
              }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    background: '#fff', border: '1px solid #dde3ec',
                    color: '#1a73e8', padding: '3px 10px',
                    borderRadius: '999px', fontSize: '12px', fontWeight: 500
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  color: '#1a73e8', fontWeight: 600,
                  fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px'
                }}>
                  GitHub →
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{
                    color: '#5a6a7e', fontWeight: 600, fontSize: '0.9rem'
                  }}>
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;