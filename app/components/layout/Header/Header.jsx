import styles from "./Header.module.css";
import Image from "next/image";

export default function Header({ items, activeTab, handleTabClick }) {
  return (
    <>
      <div
        className={`${styles.headerForehead} ${
          activeTab !== null && styles.headerForeheadCollapsed
        }`}
      />

      <header className={styles.header}>
        <Title />

        <nav>
          <ul className={styles.menu}>
            {items.map((item) => (
              <li
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => handleTabClick(item.id)}
              >
                <div className={styles.menuItem}>
                  <span>
                    <a
                      className={activeTab === item.id ? styles.active : null}
                      href="#"
                      data-page={item.id}
                    >
                      {item.title}
                    </a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

function Title() {
  return (
    <div className={styles.headerContent}>
      <h1 className={styles.title}>Olá,&nbsp;Enrico Chiosini&nbsp;aqui!</h1>

      <div className={styles.randomImageContainer}>
        <Image
          src="/archive/icons/imagem.jpeg"
          width={60}
          height={60}
          alt="Desenho de um rosto"
          aria-hidden={true}
          priority
        />
      </div>
    </div>
  );
}
