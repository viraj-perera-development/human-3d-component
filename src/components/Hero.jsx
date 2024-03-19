import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/fontawesome-free-solid'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-5">
    {/* <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Sono&nbsp;
          <span className="text-[#915eff]">
            Viraj Perera
          </span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Sviluppo Siti web dinamici, interfacce <br className="sm:block hidden"/>utente e applicazioni web.
        </p>
      </div>
    </div> */}

<ComputersCanvas/>

    {/* <div className="absolute md:bottom-0 bottom-40 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] md:h-[110px] flex justify-center items-start p-2">
          <motion.dev
            animate={{
              y: [ 0, 24, 0 ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className=""
          >

        <FontAwesomeIcon icon={faChevronDown} className="text-5xl"/>

          </motion.dev>
        </div>
      </a>
    </div> */}

    </section>
    )
  }
  
  export default Hero