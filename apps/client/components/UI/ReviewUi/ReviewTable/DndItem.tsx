import React from 'react';
import { motion, useDragControls, useAnimation } from 'framer-motion';
import type { StudentType } from '@xxx/types/studentsGroup';

export type ReviewTableProps = {
  student: StudentType;
};

export default function DndItem({ student }: ReviewTableProps): JSX.Element {
  const controls = useAnimation();
  const dragControls = useDragControls();

  const handleDragEnd = (): void => {
    void controls.start({ x: 0, y: 0 });
  };

  return (
    <div>
      <motion.div
        drag
        onDragEnd={(e, info) => {
          e.target.style.visibility = 'hidden';
          const droppedOverElement = document.elementFromPoint(info.point.x, info.point.y);
          const check = droppedOverElement?.closest('[data-dayid]');
          if (!check) {
            void controls.start({ x: 0, y: 0 });
          }
          e.target.style.visibility = 'visible';
        }}
        dragControls={dragControls}
        animate={controls}
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
