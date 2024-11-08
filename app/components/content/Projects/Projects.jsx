import styles from "./Projects.module.css";

export default function Projects({ isActive }) {
  return (
    <>
      <div
        className={`${styles.headerForehead} ${
          isActive && styles.headerForeheadCollapsed
        }`}
      />

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Olá,&nbsp;Enrico Chiosini&nbsp;aqui!</h1>

          <div className={styles.randomImageContainer}>
            <Image
              src="/archive/icons/imagem.jpeg"
              width={60}
              height={60}
              alt="bla"
            />
          </div>
        </div>
      </header>
    </>
  );
}
