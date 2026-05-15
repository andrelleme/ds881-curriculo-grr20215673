import SectionLabel from './SectionLabel';
import styles from './Projects.module.css';

export default function Projects({ items }) {
  return (
    <section className={styles.section}>
      <SectionLabel>Projetos</SectionLabel>
      {items.map((item, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.year}>{item.year}</div>
          </div>
          <div className={styles.stack}>{item.stack}</div>
          {item.github && (
            <a href={item.github} target="_blank" rel="noreferrer" className={styles.ghlink}>
              ↗ Ver no GitHub
            </a>
          )}
          <ul className={styles.bullets}>
            {item.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
