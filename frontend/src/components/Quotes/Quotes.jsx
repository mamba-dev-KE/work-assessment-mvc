import "./Quotes.scss";
import Quote from "../Quote/Quote";
import { motion, AnimatePresence } from "framer-motion";

const Quotes = ({
  setCurrentID,
  quotesData,
  isUpdate,
  setIsUpdate,
  isVisible,
  setIsVisible,
}) => {
  const quotesContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section className="quotes" initial="hidden" animate="visible">
      <motion.h1 className="quotes__title">Quotes</motion.h1>
      <motion.div
        className="quotes__container container grid center"
        variants={quotesContainerVariant}
      >
        {quotesData.map((quote) => (
          <Quote
            {...quote}
            key={quote._id}
            setCurrentID={setCurrentID}
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Quotes;
