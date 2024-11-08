import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
