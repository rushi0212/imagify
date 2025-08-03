import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { delay, motion, scale } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  useEffect(()=>{
    document.getElementById("demo").innerHTML = ''
    var i = 0;
    var txt = "small dog in a park";
    var speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  },[])

  return (
    <motion.div
      className="flex flex-row justify-center items-center text-center my-15 gap-5"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mt-10 text-start">
          Turn text to{" "}
          <span
            className="text-blue-600 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 2 }}
          >
            image
          </span>
          
        </motion.h1>

        <motion.button
          onClick={onClickHandler}
          className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            default: { duration: 0.5 },
            opacity: { delay: 0.8, duration: 1 },
          }}
        >
          Generate Images
          <img className="h-6" src={assets.star_group} alt="" />
        </motion.button>
      </div>
      <div>
        <img src={assets.dog} alt="" width={400} className="rounded-2xl" />

        <p className="mt-3 p-2 border border-zinc-800 rounded-full" id="demo">
          
        </p>
      </div>
    </motion.div>
  );
};

export default Header;
