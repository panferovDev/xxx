const [initialPos, setInitialPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
const [begin, setBegin] = useState<{ rId: string; tchId: string } | null>(null);
const dispatch = useAppDispatch();

const handleDragStart = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo,
  teacherId: string,
): void => {
  const divElement = event.target as HTMLElement;
  const tdElement = divElement.closest('td');

  if (!tdElement) return;

  setBegin({ rId: review.id, tchId: teacherId });
  const divRect = divElement.getBoundingClientRect();
  const tdRect = tdElement.getBoundingClientRect();

  setInitialPos({ x: divRect.left - tdRect.left, y: divRect.top - tdRect.top });
};

const handleDragEnd = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo,
  student: StudentType,
): void => {
  event.target.style.visibility = 'hidden';

  const droppedOverElement = document.elementFromPoint(info.point.x, info.point.y);

  event.target.style.visibility = 'visible';
  setInitialPos({ x: 0, y: 0 });
  if (!droppedOverElement) {
    return;
  }

  const elementWithDayId = droppedOverElement.closest('[data-dayid]');
  const teacherName = elementWithDayId?.closest('[data-teacher]');

  if (elementWithDayId) {
    // Здесь вы можете обработать найденный элемент
    const dayId = elementWithDayId.getAttribute('data-dayid');
    const tdElement = droppedOverElement.closest('td');
    if (tdElement) {
      const { cellIndex } = tdElement;
      const tableElement = tdElement.closest('table');
      if (tableElement) {
        const teacherNameElement = tableElement.querySelector(
          `thead th:nth-child(${cellIndex + 2})`,
        );
        if (teacherNameElement) {
          const teacherId = teacherNameElement.getAttribute('data-teacher');
          const teacName = teacherNameElement.textContent;
          if (!begin) return;
          dispatch(
            changeDayAction({
              from: {
                dayId: begin.rId,
                teacherId: begin.tchId,
              },
              to: {
                dayId,
                teacherId,
                student,
              },
            }),
          );
        }
      }
    }
  } else {
    // Если элемент не найден, возвращаем элемент на исходное место
    info.point.x = initialPos.x;
    info.point.y = initialPos.y;
  }
};
