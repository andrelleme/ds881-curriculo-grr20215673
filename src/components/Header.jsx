import styles from './Header.module.css';

export default function Header({ data, language, setLanguage }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>
          {data.name.split(' ')[0]} <em>{data.name.split(' ')[1]}</em>
        </h1>

        <p className={styles.role}>{data.role}</p>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.languageSwitch}>
          <button
            className={language === 'pt' ? styles.active : ''}
            onClick={() => setLanguage('pt')}
          >
            PT
          </button>

          <span>|</span>

          <button
            className={language === 'en' ? styles.active : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

        <div className={styles.links}>
          <a href={`mailto:${data.email}`}>✉ {data.email}</a>

          <a href={data.linkedin} target="_blank" rel="noreferrer">
            ↗ {data.linkedinLabel}
          </a>

          <a href={data.github} target="_blank" rel="noreferrer">
            ↗ {data.githubLabel}
          </a>

          <span className={styles.location}>{data.location}</span>
        </div>
      </div>
    </header>
  );
}