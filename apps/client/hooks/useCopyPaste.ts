import { useToast } from '@xxx/ui-components/Use-toast';
import { useAppSelector } from '../features/redux/reduxHooks';

export default function useCopyPaste(): {
  copyHandler: () => Promise<void>;
} {
  const review = useAppSelector((state) => state.review);
  const { toast } = useToast();

  const copyHandler = async (): Promise<void> => {
    let text = '';
    for (const teaher of review.teachers) {
      text += `${teaher.name}\n`;
      for (const dayRewiev of review.reviews) {
        text += `${dayRewiev.date}\n`;
        for (const students of dayRewiev.data[teaher.id]) {
          text += `${students.name}\n`;
        }
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: 'Скопировано',
        duration: 2000,
      });
    } catch (err) {
      console.log(err);
      toast({
        description: 'Ошибка копирования',
        duration: 2000,
      });
    }
  };

  return { copyHandler };
}
