import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';

const QnASection = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-center gap-4 w-full'>
      <span className='text-3xl font-extrabold text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>
        Codebook Q&A
      </span>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-left'>{t('home.about.question_1.title')}</AccordionTrigger>
          <AccordionContent className='text-base'>{t('home.about.question_1.answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-left'>{t('home.about.question_2.title')}</AccordionTrigger>
          <AccordionContent className='text-base'>{t('home.about.question_2.answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-left'>{t('home.about.question_3.title')}</AccordionTrigger>
          <AccordionContent className='text-base'>{t('home.about.question_3.answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger className='text-left'>{t('home.about.question_4.title')}</AccordionTrigger>
          <AccordionContent className='text-base'>{t('home.about.question_4.answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger className='text-left'>{t('home.about.question_5.title')}</AccordionTrigger>
          <AccordionContent className='text-base'>{t('home.about.question_5.answer')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QnASection;
