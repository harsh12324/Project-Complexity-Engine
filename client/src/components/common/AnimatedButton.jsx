import { motion } from 'framer-motion';
import { classNames } from '../../utils/helpers';

function AnimatedButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={classNames(
        'rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
