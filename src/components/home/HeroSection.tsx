import { Button } from '@/components/ui/button';
import { LogIn, SquarePlus } from 'lucide-react';
import HeroImage1 from '@/assets/home/hero-image-1.avif';
import HeroImage2 from '@/assets/home/hero-image-2.avif';
import HeroImage3 from '@/assets/home/hero-image-3.avif';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('translation');
  return (
    <div className='h-[calc(100vh-72px)] relative flex justify-center items-center'>
      <div className='grid grid-cols-3 w-full gap-8'>
        <div className='animate-slidein col-span-3 md:col-span-2 flex flex-col gap-4 justify-center'>
          <span className='text-3xl text-center md:text-left md:text-4xl font-extrabold leading-tight'>
            {t('home.hero.title')}{' '}
            <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>
              Codebook
            </span>
          </span>
          <span className='text-lg md:text-xl text-center md:text-justify'>{t('home.hero.subtitle')}</span>
          <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
            <Button className='w-full md:w-36 gap-2 transition-all duration-300 ease-in-out lg:hover:w-48'>
              <LogIn size={16} />
              {t('home.hero.btn_join')}
            </Button>
            <Button
              variant='outline'
              className='w-full md:w-36 gap-2 border-black border-2 dark:border-white transition-all duration-300 ease-in-out lg:hover:w-48'
            >
              <SquarePlus size={16} />
              {t('home.hero.btn_register')}
            </Button>
          </div>
        </div>
        <div className='hidden animate-slideright md:grid grid-cols-2 gap-2 relative'>
          <div className='col-span-2'>
            <img
              src={HeroImage1}
              alt='code-meeting-img'
              className='rounded-2xl h-full lg:aspect-video border-black border-2 dark:border-white'
              loading='lazy'
            />
          </div>
          <div>
            <img
              src={HeroImage2}
              alt='eat-sleep-code-repeat-img'
              className='rounded-2xl border-black border-2 dark:border-white'
              loading='lazy'
            />
          </div>
          <div>
            <img
              src={HeroImage3}
              alt='code-screen-img'
              className='rounded-2xl border-black border-2 dark:border-white'
              loading='lazy'
            />
          </div>
          <div className='w-48 h-48 lg:w-64 lg:h-64 bg-blue-200 rounded-full absolute -bottom-16 -left-16 -z-10 light:mix-blend-multiply filter blur-xl'></div>
          <div className='w-64 h-64 lg:w-96 lg:h-96 bg-purple-200 rounded-full absolute -bottom-16 -right-16 -z-10 light:mix-blend-multiply filter blur-xl'></div>
          <div className='w-64 h-64 lg:w-72 lg:h-72 bg-orange-200 rounded-full absolute -top-16 -right-16 -z-10 light:mix-blend-multiply filter blur-xl'></div>
        </div>
      </div>
      <div className='absolute bottom-3 text-center'>
        ©Copyright 2024 Codebook by{' '}
        <a href='https://phamgiaphuc.github.io/' target='_blank' className='hover:underline hover:underline-offset-2'>
          Acus
        </a>
        . All Rights Reserved.
      </div>
    </div>
  );
};

export default HeroSection;
