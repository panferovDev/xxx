import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import type { StudentType } from '@xxx/types/studentsGroup';

export type ReviewTableProps = {
  student: StudentType;
};

export default function DndItem({ student }: ReviewTableProps): JSX.Element {
  const controls = useDragControls();
  return (
    <div onPointerDown={(event) => controls.start(event)}>
      <motion.div
        drag
        dragControls={controls}
        layout
        className="hover:cursor-grab"
        dragElastic={0}
        whileHover={{ backgroundColor: '#7C3AED', opacity: 0.3 }}
        whileTap={{ scale: 0.9, cursor: 'grabbing' }}
        dragMomentum={false}
      >
        {student?.name}
      </motion.div>
    </div>
  );
}
