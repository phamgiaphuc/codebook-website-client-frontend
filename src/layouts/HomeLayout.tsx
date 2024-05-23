import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div className='mt-[72px] container scroll-smooth'>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
