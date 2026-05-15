import SectionLabel from './SectionLabel';
import styles from './Summary.module.css';

export default function Summary({ text }) {
  return (
    <section className={styles.section}>
      <SectionLabel>Sobre</SectionLabel>
      <p className={styles.text}>{text}</p>
    </section>
  );
}
