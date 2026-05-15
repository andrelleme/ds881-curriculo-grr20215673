import SectionLabel from './SectionLabel';
import styles from './Education.module.css';

export default function Education({ items }) {
  return (
    <section className={styles.section}>
      <SectionLabel>Educação</SectionLabel>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.school}>{item.school}</div>
          <div className={styles.location}>{item.location}</div>
          <div className={styles.degree}>{item.degree}</div>
          <div className={styles.period}>{item.period}</div>
        </div>
      ))}
    </section>
  );
}
