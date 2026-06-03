import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5 & CSS3', level: 90, color: '#1a73e8' },
  { name: 'JavaScript (ES6+)', level: 78, color: '#1a73e8' },
  { name: 'React.js', level: 65, color: '#1a73e8' },
  { name: 'Node.js & Express', level: 55, color: '#4a90d9' },
  { name: 'SQL & MySQL', level: 62, color: '#4a90d9' },
  { name: 'Git & GitHub', level: 75, color: '#4a90d9' },
  { name: 'REST APIs', level: 60, color: '#1557b0' },
  { name: 'System Administration', level: 85, color: '#1557b0' },
];

const tools = ['VS Code', 'Git', 'GitHub', 'Postman', 'MySQL Workbench',
  'Active Directory', 'Windows Server', 'Linux'];

function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" style={{ background: '#f4f6f9' }} ref={ref}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem'
        }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: '#1a1a2e', fontSize: '1.1rem' }}>
              Technical proficiency
            </h3>
            {skills.map(skill => (
              <div key={skill.name} style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginBottom: '6px'
                }}>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{skill.name}</span>
                  <span style={{ color: '#1a73e8', fontWeight: 600, fontSize: '0.9rem' }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{
                  background: '#dde3ec', borderRadius: '999px', height: '8px'
                }}>
                  <div style={{
                    width: animated ? `${skill.level}%` : '0%',
                    height: '100%', borderRadius: '999px',
                    background: skill.color,
                    transition: 'width 1.2s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem', color: '#1a1a2e', fontSize: '1.1rem' }}>
              Tools & platforms
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {tools.map(tool => (
                <span key={tool} style={{
                  background: '#fff', border: '1px solid #dde3ec',
                  color: '#1a1a2e', padding: '0.5rem 1.1rem',
                  borderRadius: '999px', fontSize: '0.9rem', fontWeight: 500
                }}>
                  {tool}
                </span>
              ))}
            </div>

            <div style={{
              marginTop: '2rem', background: '#fff',
              borderRadius: '12px', padding: '1.5rem',
              border: '1px solid #dde3ec'
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#1a73e8' }}>Currently learning</h4>
              {['Python', 'AWS Cloud Basics', 'Spring Boot', 'Docker'].map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center',
                  gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem'
                }}>
                  <span style={{ color: '#1a73e8' }}>→</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;