import SectionLabel from './SectionLabel';
import styles from './Experience.module.css';

export default function Experience({ items }) {
  return (
    <section className={styles.section}>
      <SectionLabel>Experiência</SectionLabel>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.company}>{item.company}</div>
          <div className={styles.period}>{item.period}</div>
          <div className={styles.role}>{item.role} · {item.location}</div>
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
