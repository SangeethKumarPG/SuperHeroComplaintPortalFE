import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import homeImage from "../assets/superhero-minimalist.png";
import superFast from "../assets/superhero-flyby.png";
import petRescue from "../assets/superhero-pet.png";
import superHeroSave from "../assets/superhero-save.png";
import superHeroCrime from "../assets/superhero-crime.png";
import Map from "./Map";
import { useNavigate } from "react-router-dom";


function Home() {
  const sentence = "Welcome to the Ultraman Help Desk!";
  const subheading = "Your One-Stop Portal to Request Help from the real hero!";

  const [isHeadingComplete, setIsHeadingComplete] = useState(false);

  const navigate = useNavigate();

  const handleNavigateToHelp = () => {
    navigate("/help");
  }
  useEffect(()=>{
    if(window.location.hash === "#services"){
      const servicesSection = document.getElementById("services");
      if(servicesSection){
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  },[])

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const handleAnimationComplete = () => {};
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        className="d-flex justify-content-center align-items-center hero-container"
        whileHover={{ scale: 0.95, borderRadius: "2rem" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div className="content d-flex flex-column flex-md-row align-items-center justify-content-between w-100 h-100">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <motion.h1
              className="animated-text"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "3rem",
                marginTop: "30px",
                textAlign: "center",
                zIndex: 1,
              }}
              onAnimationComplete={() => setIsHeadingComplete(true)}
            >
              {sentence.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="animated-text"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHeadingComplete ? 1 : 0,
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5 },
              }}
              style={{
                fontSize: "1rem",
                marginTop: "30px",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {subheading}
            </motion.p>
            <div>
              <motion.button
                className="btn btn-primary btn-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
                onClick={handleNavigateToHelp}
              >
                Request Help
              </motion.button>
            </div>
          </div>

          <motion.img
            src={homeImage}
            alt="Bouncing"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "20rem",
              maxHeight: "30rem",
              margin: "50px auto",
              objectFit: "contain",
            }}
            animate={{
              y: ["0%", "-10%", "0%"],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 4,
              repeatType: "loop",
              onAnimationComplete: handleAnimationComplete,
            }}
          ></motion.img>
        </div>
      </motion.div>

      <section style={{ width: "100vw" }} id="services">
        <motion.h2
          className="text-center mb-2"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          About us
        </motion.h2>
        {/* First Section */}
        <motion.div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={superFast}
            initial={{ opacity: 0, scale: 0.8 }}
            style={{ width: "50%", height: "auto" }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-12 col-md-6 order-first order-md-last"
          />
          <motion.div
            className="d-flex flex-column align-items-center justify-content-center p-5 col-12 col-md-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-center fw-bold">Super Fast Responses</h3>
            <p className="text-center">
              Ultraman provides you with fast rescues and support. We are here
              to help you in any way possible.
            </p>
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="d-flex flex-column align-items-center justify-content-center p-5 col-12 col-md-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-center fw-bold">Pet Rescue</h3>
            <p className="text-center">
              <strong>Lost your pet?</strong> Ultraman can help you rescue your
              pet day or night 24x7.
            </p>
          </motion.div>
          <motion.img
            src={petRescue}
            initial={{ opacity: 0, scale: 0.8 }}
            style={{ width: "50%", height: "auto" }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-12 col-md-6 order-first order-md-first"
          />
        </motion.div>

        {/* Third Section */}
        <motion.div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={superHeroSave}
            initial={{ opacity: 0, scale: 0.8 }}
            style={{ width: "50%", height: "auto" }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-12 col-md-6 order-first order-md-last"
          />
          <motion.div
            className="d-flex flex-column align-items-center justify-content-center p-5 col-12 col-md-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-center fw-bold">Disaster Rescue</h3>
            <p className="text-center">
              <strong>Fell in a disaster?</strong> Ultraman can rescue you from
              any disaster, weather it be natural or man-made.
            </p>
          </motion.div>
        </motion.div>

        {/* Fourth Section */}
        <motion.div
          className="d-flex flex-column flex-md-row align-items-center justify-content-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="d-flex flex-column align-items-center justify-content-center p-5 col-12 col-md-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-center fw-bold">Protection from Criminals</h3>
            <p className="text-center">
              <strong>Concerned about safety?</strong> We provide assistance in
              safeguarding you from potential dangers. The Ultraman is here to
              protect you from harm.
            </p>
          </motion.div>
          <motion.img
            src={superHeroCrime}
            initial={{ opacity: 0, scale: 0.8 }}
            style={{ width: "50%", height: "auto" }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-12 col-md-6 order-first order-md-first"
          />
        </motion.div>
      </section>
    </>
  );
}

export default Home;
