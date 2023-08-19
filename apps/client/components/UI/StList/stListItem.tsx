'use client';

import type { SeatStudent } from '@xxx/types/seatsTypes';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  student: SeatStudent;
  index: number;
};

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function StListItem({ student, index }: Props): JSX.Element {
  console.log('student', student);
  return (
    <AnimatePresence>
      <motion.li
        className="p-2"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: index * 0.1 }}
      >
        <span className="text-slate-300">{student.name}</span>{'  '}
        <span className="text-slate-500">место: {student.seat}</span>
      </motion.li>
    </AnimatePresence>
  );
}
