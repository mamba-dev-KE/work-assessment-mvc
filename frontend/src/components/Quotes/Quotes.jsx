import "./Quotes.scss";
import { quotesContainerVariant } from "./Animation";
import Quote from "../Quote/Quote";
import { motion } from "framer-motion";

const Quotes = ({
  setCurrentID,
  quotesData,
  isUpdate,
  setIsUpdate,
  isVisible,
  setIsVisible,
}) => {
  return (
    <motion.section className="quotes" initial="hidden" animate="visible">
      <motion.h1 className="quotes__title">Quotes</motion.h1>
      <motion.div
        className="quotes__container container grid center"
        variants={quotesContainerVariant}
        layout
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
