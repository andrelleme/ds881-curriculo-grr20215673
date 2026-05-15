import SectionLabel from './SectionLabel';
import styles from './Skills.module.css';

export default function Skills({ items }) {
  return (
    <section className={styles.section}>
      <SectionLabel>Habilidades</SectionLabel>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.category}>{item.category}</div>
            <div className={styles.tags}>
              {item.tags.map((tag, j) => (
                <span key={j} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
