import ai from '../../assets/gigaland.png';
import './Hero.css';
import { motion } from 'framer-motion';
const Hero = () => {
  const divVarients = {
    hidden: {
      opacity: 0,
      x: -200,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1.2,
      },
    },
  };

  const newVarients = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        damping: 20,
        type: 'spring',
        stiffness: 100,
        delay: 1.2,
      },
    },
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <motion.div
        className="gpt3__header-content"
        variants={divVarients}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        {/* <p> Retroverse is biggest MarketPlace to buy, sell and Create nft.</p> */}
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <button className="heroBtn">Explore</button>
      </motion.div>

      <motion.div
        variants={newVarients}
        initial="hidden"
        whileInView="show"
        className="gpt3__header-image"
      >
        <img src={ai} />
      </motion.div>
    </div>
  );
};

export default Hero;
