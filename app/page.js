"use client";

import { useState, useRef } from "react";

import AboutMe from "./components/content/AboutMe/AboutMe";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Publications from "./components/content/Publications/Publications";
// import Projects from "./components/content/Projects/Projects";

import styles from "./page.module.css";

const menuItems = [
  { title: "Sobre mim", id: "aboutMe" },
  { title: "Publicações", id: "publications" },
  { title: "Projetos", id: "projects" },
  { title: "Etcetera", id: "etcetera" },
];

const transitionDuration = 0.5; // Change desired transition duration here

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const mainContentRef = useRef(null);

  const handleTabClick = (id) => {
    if (isTransitioning) return; // Prevent overlapping transitions

    if (!mainContentRef.current) {
      setActiveTab(id);
      setHasContent(true);
      return; // Exit early to prevent height manipulations
    }

    setIsTransitioning(true);

    // Start collapsing the main content
    if (mainContentRef.current) {
      mainContentRef.current.style.height = mainContentRef.current.scrollHeight
        ? `${mainContentRef.current.scrollHeight}px`
        : "70svh"; // On the first render scrollHeight doesn't exist, so 70% of the small viewport height is the default
      mainContentRef.current.style.transition = `height ${transitionDuration}s ease`;
      requestAnimationFrame(() => {
        mainContentRef.current.style.height = "0px";
      });
    }

    // Wait for the collapse transition to complete before changing the tab
    setTimeout(() => {
      setActiveTab(id === activeTab ? null : id);

      // Start expanding the main content
      if (mainContentRef.current) {
        mainContentRef.current.style.height = "0px"; // Ensure height starts at 0
        requestAnimationFrame(() => {
          mainContentRef.current.style.transition = `height ${transitionDuration}s ease`;
          const newHeight =
            mainContentRef.current.scrollHeight || id === activeTab
              ? `${mainContentRef.current.scrollHeight}px`
              : "70svh";

          mainContentRef.current.style.height = newHeight;

          setHasContent(newHeight !== "0px");
        });
      }

      // Wait for the expansion to finish
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration * 1000);
    }, transitionDuration * 1000);
  };

  return (
    <div className={styles.page}>
      <Header
        items={menuItems}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <main>
        <div className={styles.mainContent} ref={mainContentRef}>
          {activeTab === "aboutMe" && <AboutMe />}
          {activeTab === "publications" && <Publications />}
          {/* {activeTab === "projects" && <Projects />} */}
          {/* Add other contents as necessary */}
        </div>
        <Footer hasContent={hasContent} />
      </main>
    </div>
  );
}
