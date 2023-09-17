import React, { useRef } from 'react';
import { motion, useDragControls, useAnimation } from 'framer-motion';
import type { StudentType } from '@xxx/types/studentsGroup';
import { useAppDispatch } from 'apps/client/features/redux/reduxHooks';
import { changeDayAction } from 'apps/client/features/redux/slices/reviewSlice';

export type ReviewTableProps = {
  student: StudentType;
};

export default function DndItem({ student }: ReviewTableProps): JSX.Element {
  const controls = useAnimation();
  const dragControls = useDragControls();
  const dispatch = useAppDispatch();
  const refFrom = useRef<{ dayId: string; teacherId: string } | null>(null);

  return (
    <motion.div
      key={student.id}
      drag
      onDragStart={(e, info) => {
        const element = e.target as HTMLElement;
        element.style.visibility = 'hidden';
        const pickFrom = document.elementFromPoint(info.point.x, info.point.y);
        const check = pickFrom?.closest('[data-dayid]');
        element.style.visibility = 'visible';
        if (!check) {
          void controls.start({ x: 0, y: 0 });
          refFrom.current = null;
          return;
        }
        const dayId = check.getAttribute('data-dayid');
        const teacherId = check.getAttribute('data-teacher');
        if (!dayId || !teacherId) {
          void controls.start({ x: 0, y: 0 });
          refFrom.current = null;
          return;
        }
        refFrom.current = { dayId: dayId!, teacherId: teacherId! };
      }}
      onDragEnd={(e, info) => {
        const element = e.target as HTMLElement;
        element.style.visibility = 'hidden';
        const droppedOverElement = document.elementFromPoint(info.point.x, info.point.y);
        const check = droppedOverElement?.closest('[data-dayid]');
        element.style.visibility = 'visible';
        if (!check) {
          void controls.start({ x: 0, y: 0 });
          refFrom.current = null;
          return;
        }
        const dayId = check.getAttribute('data-dayid');
        const teacherId = check.getAttribute('data-teacher');
        if (dayId === refFrom.current?.dayId && teacherId === refFrom.current?.teacherId) {
          void controls.start({ x: 0, y: 0 });
          refFrom.current = null;
          return;
        }
        if (!dayId || !teacherId || !refFrom.current?.dayId) {
          void controls.start({ x: 0, y: 0 });
          refFrom.current = null;
          return;
        }
        dispatch(
          changeDayAction({
            from: refFrom.current!,
            to: { dayId: dayId!, teacherId: teacherId!, student: student },
          }),
        );
        refFrom.current = null;
      }}
      dragControls={dragControls}
      animate={controls}
      layout
      className="hover:cursor-grab hover:rounded rounded"
      dragElastic={0}
      whileHover={{ backgroundColor: '#7C3AED', opacity: 0.3 }}
      whileTap={{ scale: 0.9, cursor: 'grabbing' }}
      dragMomentum={false}
    >
      {student?.name}
    </motion.div>
  );
}
