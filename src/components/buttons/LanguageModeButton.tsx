import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import VietnamFlag from '@/assets/flags/vietnam.svg';
import EnglishFlag from '@/assets/flags/english.svg';
import useLang from '@/hooks/useLang';
import { useTranslation } from 'react-i18next';

const LanguageModeButton = () => {
  const { setLanguage, language } = useLang();
  const { t } = useTranslation('translation');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          {language == 'eng' ? (
            <div className='flex gap-2'>
              <img src={EnglishFlag} alt='english-lang' className='w-5' />
              EN
            </div>
          ) : (
            <div className='flex gap-2'>
              <img src={VietnamFlag} alt='vietnamese-lang' className='w-5' />
              VN
            </div>
          )}
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setLanguage('eng')} className='gap-2'>
          <img src={EnglishFlag} alt='english-lang' className='w-5' />
          {t('btn.eng')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('vie')} className='gap-2'>
          <img src={VietnamFlag} alt='vietnamese-lang' className='w-5' />
          {t('btn.vie')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageModeButton;
