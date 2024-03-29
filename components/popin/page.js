import { motion } from "framer-motion";

const Layout3 = ({ children }) => (
  <motion.div
  initial={{ opacity: 0 ,scale: 0.5}}
  whileInView={{ opacity: 1,scale: 1  }}
  transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
export default Layout3;