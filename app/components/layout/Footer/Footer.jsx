import styles from "./Footer.module.css";

export default function Footer({ hasContent }) {
  return (
    <footer
      className={styles.footer}
      style={{
        borderTop: hasContent ? "2px solid #000" : "none",
      }}
    >
      <div className={styles.footerContent}>
        <div className={styles.contatos}>
          <a href="#" data-page="contatos" className={styles.contatos}>
            Contatos e links
          </a>
        </div>

        <div className={styles.attEm}>
          Atualizado&nbsp;em&nbsp;5&nbsp;de outubro&nbsp;de&nbsp;2024
        </div>
      </div>
    </footer>
  );
}
