import { motion } from "framer-motion";
import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import Link from "../Link";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const SmallScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex md:hidden"
    >
      <motion.button
        className="flex items-center justify-between w-[90vw] p-2 text-black bg-white rounded-md"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="flex flex-col w-full py-4 space-y-1 bg-white rounded-md"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.3,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none", color: "black" }}
      >
        <motion.li variants={itemVariants} className="menu-li">
          <Link path="/add-articles" title="Add Articles" />
        </motion.li>
        <motion.li variants={itemVariants} className="menu-li">
          <Link path="/subscription" title=" Subscription" />
        </motion.li>
        <motion.li variants={itemVariants} className="menu-li">
          <Link path="/Premium-articles" title="Premium Articles" />
        </motion.li>
        <motion.li variants={itemVariants} className="menu-li">
          <Link path="/all-article" title="All Articles" />
        </motion.li>
        <motion.li variants={itemVariants} className="menu-li">
          <Link path="/dashboard" title="Dashboard" />
        </motion.li>
        <motion.li variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full p-1 px-4 font-semibold text-white bg-indigo-500"
          >
            Logout
          </motion.button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default SmallScreenMenu;
