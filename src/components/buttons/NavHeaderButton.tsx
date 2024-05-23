import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import ThemeModeButton from './ThemeModeButton';
import LanguageModeButton from './LanguageModeButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavHeaderButton = () => {
  const { t } = useTranslation('translation');
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>@Copyright 2024 Codebook by Acus</SheetDescription>
        </SheetHeader>
        <div className='flex flex-col mt-4 gap-2'>
          <SheetClose asChild>
            <Button asChild>
              <Link to={'/about'}>{t('btn.about')}</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild>
              <Link to={'/signin'}>{t('btn.signin')}</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild>
              <Link to={'/signup'}>{t('btn.signup')}</Link>
            </Button>
          </SheetClose>
          <div className='flex justify-center gap-4'>
            <ThemeModeButton />
            <LanguageModeButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavHeaderButton;
