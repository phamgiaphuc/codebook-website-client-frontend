import ContactForm from '@/components/forms/ContactForm';
import QnASection from '@/components/home/QnASection';
import PopUpMotion from '@/components/motions/PopUpMotion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const AboutPage = () => {
  const [emailForm, setEmailForm] = useState(false);

  return (
    <div className='relative overflow-hidden'>
      <div className='h-[calc(100vh-72px)] gap-8 flex flex-col justify-center items-center'>
        <div className='max-w-screen-md w-full flex flex-col'>
          <PopUpMotion>
            <QnASection />
          </PopUpMotion>
        </div>
        <PopUpMotion>
          <span className='font-normal text-center w-full'>
            If you have any questions, you can send us via an email.
            <Button onClick={() => setEmailForm(true)} variant='link' className='pl-1 text-base font-normal'>
              Click here
            </Button>
          </span>
        </PopUpMotion>
      </div>
      {emailForm && <ContactForm setEmailForm={setEmailForm} />}
    </div>
  );
};

export default AboutPage;
