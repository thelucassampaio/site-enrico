"use client";

import styles from "./page.module.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import AboutMe from "./components/content/AboutMe/AboutMe";
import Publications from "./components/content/Publications/Publications";
import Projects from "./components/content/Projects/Projects";

import { useState, useEffect, useRef } from "react";

const menuItems = [
  { title: "Sobre mim", id: "aboutMe" },
  { title: "Publicações", id: "publications" },
  { title: "Projetos", id: "projects" },
  { title: "Etcetera", id: "etcetera" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  const [previousTab, setPreviousTab] = useState(null);
  const contentRef = useRef(null);

  const handleTabClick = (id) => {
    setPreviousTab(activeTab);
    setCurrentTab(id === activeTab ? null : id);
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentElement = contentRef.current;

      // Função para iniciar a animação de abertura
      const animateOpen = () => {
        const height = contentElement.scrollHeight;
        contentElement.style.height = "0px"; // Inicia com altura zero
        contentElement.style.overflow = "hidden";
        contentElement.style.transition = "height 1s ease";

        // Aguarda um frame para iniciar a animação de abertura
        requestAnimationFrame(() => {
          contentElement.style.height = `${height}px`;
          contentElement.style.opacity = "1";
        });

        // Remove a altura após a transição para ajuste automático
        const handleTransitionEnd = () => {
          contentElement.style.height = "auto";
        };
        contentElement.addEventListener("transitionend", handleTransitionEnd);

        return () =>
          contentElement.removeEventListener(
            "transitionend",
            handleTransitionEnd
          );
      };

      // Função para iniciar a animação de fechamento
      const animateClose = () => {
        const height = contentElement.scrollHeight;
        contentElement.style.height = `${height}px`; // Define a altura atual
        contentElement.style.transition = "height 1s ease";

        // Aguarda um frame e define a altura para zero para iniciar a animação de fechamento
        requestAnimationFrame(() => {
          contentElement.style.height = "0px";
          contentElement.style.opacity = "0";
        });
      };

      // Se existe uma aba ativa e o conteúdo está sendo mudado
      if (previousTab && previousTab !== activeTab) {
        animateClose(); // Inicia a animação de fechamento
        // Aguarda a duração do fechamento antes de abrir a nova aba
        setTimeout(() => {
          animateOpen();
        }, 1000); // Aguarda 1 segundo para completar a animação de fechamento

        setTimeout(() => {
          setActiveTab(currentTab);
        }, 0); // Aguarda 1 segundo para completar a animação de fechamento
      } else {
        animateOpen();
        setTimeout(() => {
          setActiveTab(currentTab);
        }, 0);
      }
    }
  }, [currentTab, previousTab]); // Reexecuta sempre que a aba ativa ou anterior muda

  return (
    <div className={styles.page}>
      <Header
        items={menuItems}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <main>
        <div ref={contentRef} className={styles.mainContent}>
          {activeTab === "aboutMe" && <AboutMe />}
          {activeTab === "publications" && <Publications />}
          {/* {activeTab === "projects" && <Projects />} */}
          {/* Adicione outros conteúdos conforme necessário */}
        </div>
        <Footer />
      </main>
    </div>
  );
}
