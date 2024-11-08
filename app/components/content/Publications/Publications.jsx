import styles from "./Publications.module.css";

const publications = {
  eventos: [
    {
      authors:
        "CHIOSINI, Enrico; GHURON, Erick; OLIVEIRA, Matheus; LEITE, Cristina",
      title:
        "EXPECTATIVAS E PREOCUPAÇÕES DE ESTUDANTES DE GRADUAÇÃO EM FÍSICA ACERCA DO RETORNO PRESENCIAL PÓS-PANDEMIA DE COVID-19",
      link: "https://sec.sbfisica.org.br/eventos/epef/xx/sys/resumos/T0027-1.pdf",
      conference: "XX Encontro de Pesquisa em Ensino de Física",
      location: "Recife",
      year: 2024,
    },
    {
      authors: "CHIOSINI, Enrico; LEITE, Cristina",
      title:
        "O ENFOQUE ANTROPOLÓGICO DE JAFELICE E SUAS POTENCIALIDADES PARA O ENSINO DE ASTRONOMIA",
      link: "https://sec.sbfisica.org.br/eventos/snef/xxv/sys/resumos/T0189-2.pdf",
      conference: "Simpósio Nacional de Ensino de Física",
      location: "Rio de Janeiro",
      year: 2023,
    },
    {
      authors: "CHIOSINI, Enrico; GOMES, Mauro Lucas Santos; LEITE, Cristina",
      title:
        "IMPACTOS DA PANDEMIA DE COVID-19 E DO ENSINO REMOTO NOS ESTUDANTES DO IFUSP",
      link: "https://sec.sbfisica.org.br/eventos/snef/xxv/sys/resumos/T0189-1.pdf",
      conference: "Simpósio Nacional de Ensino de Física",
      location: "Rio de Janeiro",
      year: 2023,
    },
  ],
  capitulos: [
    {
      authors: "CHIOSINI, Enrico; CECILIA, Maria; LEITE, Cristina",
      title:
        "JORNAL DE CIÊNCIAS: UM PROJETO DO PROGRAMA RESIDÊNCIA PEDAGÓGICA DE FÍSICA NA ESCOLA ALBERTO TORRES",
      link: "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/962",
      bookTitle:
        "Os desafios para a formação inicial na pandemia de Covid-19: PIBID e PRP USP: caminhos e conquistas",
      edition: "1ª ed.",
      publisher: "Piracicaba: ESALQ-USP",
      year: 2023,
      pages: "p. 431 - 439",
    },
  ],
};

export default function Publications() {
  return (
    <div className={styles.publications}>
      <h2>Trabalhos em eventos 🗂️</h2>
      {publications.eventos.map((pub) => (
        <p key={pub.link}>
          <a href={pub.link} target="_blank" rel="noopener noreferrer">
            {pub.title}
          </a>
          .
          <br />
          {pub.authors}.
          <br />
          In: {pub.conference}, {pub.year}, {pub.location}.
        </p>
      ))}

      <h2>Capítulos de livro 📖</h2>
      {publications.capitulos.map((pub, index) => (
        <p key={index}>
          {pub.authors}. {pub.title}. In:{" "}
          <a href={pub.link} target="_blank" rel="noopener noreferrer">
            <b> {pub.bookTitle}</b>
          </a>
          . {pub.edition}. {pub.publisher}, {pub.year}, {pub.pages}.
        </p>
      ))}
    </div>
  );
}
