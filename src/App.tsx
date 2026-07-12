import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence, motion } from "motion/react";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {

    if (isLoading) return;


    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "project",
      "education",
      "softskills",
      "contact"
    ];


    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }

    );



    sections.forEach((id)=>{

      const element = document.getElementById(id);

      if(element){

        observer.observe(element);

      }

    });



    return ()=>{

      observer.disconnect();

    };


  },[isLoading]);




  return (

    <div className="w-full min-h-screen overflow-x-hidden">


      <AnimatePresence mode="wait">


      {
        isLoading ? (

          <motion.div
            key="loader"
            className="w-full h-screen"
          >

            <LoadingScreen
              onComplete={()=>setIsLoading(false)}
            />

          </motion.div>


        ) : (


          <motion.div

            key="content"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:0.6
            }}

            className="flex flex-col min-h-screen"

          >


            {/* Navbar */}

            <Navbar
              activeSection={activeSection}
            />




            {/* Portfolio Sections */}

            <main className="flex-1 scroll-smooth">


              <section 
                id="home"
                className="scroll-mt-20"
              >
                <Hero />
              </section>



              <section 
                id="about"
                className="scroll-mt-20"
              >
                <About />
              </section>



              <section 
                id="skills"
                className="scroll-mt-20"
              >
                <Skills />
              </section>



              <section 
                id="experience"
                className="scroll-mt-20"
              >
                <Experience />
              </section>



              <section 
                id="project"
                className="scroll-mt-20"
              >
                <Projects />
              </section>



              <section 
                id="education"
                className="scroll-mt-20"
              >
                <Education />
              </section>



              <section 
                id="softskills"
                className="scroll-mt-20"
              >
                <SoftSkills />
              </section>



              <section 
                id="contact"
                className="scroll-mt-20"
              >
                <Contact />
              </section>



            </main>




            <Footer />

            <ScrollToTop />


          </motion.div>


        )

      }


      </AnimatePresence>


    </div>

  );

}