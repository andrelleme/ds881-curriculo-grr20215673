import { useEffect, useState } from 'react';
import { ptData } from './data/pt';
import { enData } from './data/en';

import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';

export default function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'pt'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const data = language === 'pt' ? ptData : enData;

  return (
    <>
      <Header
        data={data}
        language={language}
        setLanguage={setLanguage}
      />

      <Summary text={data.summary} />
      <Experience items={data.experience} />
      <Projects items={data.projects} />
      <Skills items={data.skills} />
      <Education items={data.education} />
      <Languages items={data.languages} />
    </>
  );
}