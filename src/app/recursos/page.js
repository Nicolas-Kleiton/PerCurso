"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const PercursosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const disciplines = [
    { name: "📘 Cálculo diferencial e integral I", slug: 'calculo1' },
    { name: "🖥️ Introdução à programação", slug: 'ip' },
    { name: "📚 Metodologia do trabalho científico", slug: 'metodologia' },
    { name: "🔢 Matemática discreta", slug: 'discreta' },
    { name: "📐 Cálculo vetorial e geometria analítica", slug: 'vetorial' },
    { name: "💻 Introdução à ciência da computação", slug: 'ic' },
  ];

  const filteredDisciplines = disciplines.filter(discipline =>
    discipline.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <img src="./././girl_studying.svg" alt="Imagem ilustrativa do PerCurso" className={styles.bannerImage} />
          <div className={styles.introText}>
            <h2 className={styles.title}>📂 Materiais de Estudo</h2>
            <p className={styles.title_p}>
              Para começar, basta escolher uma matéria e explorar os <strong className={styles.accent}>conteúdos e recursos</strong> disponíveis. Aqui você encontrará uma variedade de conteúdos, para facilitar sua revisão e aprofundamento nos temas abordados em aula. Aproveite todos os recursos para <strong className={styles.accent}>aprender</strong> de maneira eficiente e agradável!
            </p>
          </div>
          <div className={styles.introText}>
            <h2 className={styles.title}>✨ Contribua com o PerCurso!</h2>
            <p className={styles.title_p}>
              Tem materiais úteis, sugestões ou atividades para compartilhar? Você pode <strong className={styles.accent}>colaborar</strong> com o PerCurso enviando conteúdo que possa ajudar outros estudantes por meio do botão <strong className={styles.accent}>“editar”</strong> em cada disciplina.<strong className={styles.accent}>Seu apoio</strong> é muito bem-vindo para construir uma comunidade de aprendizado ainda mais rica!
            </p>
          </div>
        </section>

        <section className={styles.resourcesSection}>
          <h2 className={styles.sectionTitle}>RECURSOS</h2>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Pesquisar cadeira..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton}>
              🔍
            </button>
          </div>

          <div className={styles.resourceCards}>
            {filteredDisciplines.map((discipline, index) => (
              <Link href={`/recursos/${discipline.slug}`} key={index} passHref>
                <div className={styles.card}>
                  {discipline.name}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 PerCurso, Todos os direitos reservados</p>
        <a href="#politica" className={styles.footerLink}>Políticas de Privacidade</a>
      </footer>
    </div>
  );
};

export default PercursosPage;
