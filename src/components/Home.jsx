import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import homeImage from "../assets/superhero-minimalist.png";
import superFast from "../assets/superhero-flyby.png";
import petRescue from "../assets/superhero-pet.png";
import superHeroSave from "../assets/superhero-save.png";
import superHeroCrime from "../assets/superhero-crime.png";

function Home() {
  const sentence = "Welcome to the Superhero Help Desk!";
  const subheading = "Your One-Stop Portal to Request Help from Real Heroes!";

  const [isHeadingComplete, setIsHeadingComplete] = useState(false);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
        repeat: Infinity,
        repeatType: "loop",
      }}
    ></motion.img>
  </div>
</motion.div>

      <section style={{ width: "100vw" }}>
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
              We provide quick and efficient responses to your requests. Our
              team is always available to help you with any issues you may have.
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
              <strong>Lost your pet?</strong> We can help you find your lost
              pets. Superhero Help Desk can help you find the right heroes to
              rescue your pet.
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
              <strong>Fell in a disaster?</strong> We can help you find the
              right heroes to save your life. Superhero Help Desk can provide
              you with the right heroes to rescue you from the disaster.
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
              safeguarding you from potential dangers. The Superhero Help Desk
              is here to connect you with the right heroes who can protect you
              from harm.
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
