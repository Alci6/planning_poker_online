import React, { useState } from "react";
import "./Cartas.css";
import Modal from "./Modal.js";
import { motion } from "framer-motion";

function Cartas({ value }) {
  const [modal, setModal] = useState(false);

  const useModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1]
        }}
        transition={{ duration: 0.8 }}
        className="carta grow center ma1"
      >
        <p
          id="cardRender"
          onClick={useModal}
          value={value}
          className="noselect avenir dtc v-mid  tc w4 f1"
        >
          {value}
        </p>
      </motion.div>
      <div className="">
        <Modal modal={modal} valueCard={value} useModal={useModal} />
      </div>
    </>
  );
}

export default Cartas;
