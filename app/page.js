"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const transitionDuration = 0.5; // Duration of animations in seconds

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [hasContent, setHasContent] = useState(false);

  const handleTabClick = (id) => {
    setActiveTab(id === activeTab ? null : id);
  };

  useEffect(() => {
    setHasContent(activeTab ? true : false);
  }, [activeTab]);

  const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <div className={styles.page}>
      <Header
        items={menuItems}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <main>
        <motion.div
          className={styles.mainContent}
          initial="hidden"
          animate={activeTab ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "aboutMe" && (
              <motion.div
                key="aboutMe"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: transitionDuration }}
              >
                <AboutMe />
              </motion.div>
            )}
            {activeTab === "publications" && (
              <motion.div
                key="publications"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: transitionDuration }}
              >
                <Publications />
              </motion.div>
            )}
            {/* {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: transitionDuration }}
              >
                <Projects />
              </motion.div>
            )} */}
          </AnimatePresence>
        </motion.div>
        <Footer hasContent={hasContent} />
      </main>
    </div>
  );
}
