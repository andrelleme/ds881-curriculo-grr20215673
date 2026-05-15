import SectionLabel from './SectionLabel';
import styles from './Languages.module.css';

export default function Languages({ items }) {
  return (
    <section className={styles.section}>
      <SectionLabel>Idiomas</SectionLabel>
      <div className={styles.row}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot} style={{ background: item.color }} />
            <span className={styles.name}>{item.name}</span>
            <span className={styles.level}>{item.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
