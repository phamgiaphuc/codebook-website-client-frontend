import WebsiteDarkLogo from '@/assets/logos/website-logo-black.svg';
import WebsiteLightLogo from '@/assets/logos/website-logo-white.svg';
import ThemeModeButton from '@/components/buttons/ThemeModeButton';
import { useTheme } from '@/hooks/useTheme';
import LanguageModeButton from '@/components/buttons/LanguageModeButton';
import NavHeaderButton from '@/components/buttons/NavHeaderButton';
import { Link } from 'react-router-dom';
import LinkButton from '@/components/buttons/LinkButton';

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className='fixed top-0 z-50 w-full bg-background'>
      <header className='container flex justify-between py-4'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img
            src={theme == 'light' ? WebsiteDarkLogo : WebsiteLightLogo}
            alt='codebook-logo'
            className='w-8 aspect-square'
          />
          <span className='text-xl font-bold'>Codebook</span>
        </Link>
        <div className='hidden md:flex gap-2 items-center'>
          <LinkButton variant='ghost' href='/about' content='btn.about' />
          <LinkButton variant='ghost' href='/signin' content='btn.signin' />
          <LinkButton variant='ghost' href='/signup' content='btn.signup' />
          <ThemeModeButton />
          <LanguageModeButton />
        </div>
        <div className='md:hidden'>
          <NavHeaderButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
