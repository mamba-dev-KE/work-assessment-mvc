import "./NavBar.scss";
import { MdAddBox } from "react-icons/md";
import { AiFillMinusSquare } from "react-icons/ai";
import { BsChatLeftQuote } from "react-icons/bs";
import { motion } from "framer-motion";
import { headerVariants } from "./Animation";

const NavBar = ({ isVisible, setIsVisible }) => {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="header grid"
    >
      <div className="container center">
        <nav className="nav flex ">
          <div className="logo flex">
            <BsChatLeftQuote className="logo__img" />
            <span>Quotes</span>
          </div>
          <ul className="nav__list flex">
            <motion.li
              className="nav__list-item flex pointer"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(!isVisible)}
            >
              <span>{isVisible ? "Hide Form" : "Add New"}</span>
              {isVisible ? (
                <AiFillMinusSquare className="nav__list-icon" />
              ) : (
                <MdAddBox className="nav__list-icon" />
              )}
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
