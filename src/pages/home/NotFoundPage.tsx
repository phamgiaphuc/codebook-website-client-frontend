import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className='h-[calc(100vh-72px)] flex flex-col gap-2 justify-center items-center'>
      <span className='text-5xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>
        404
      </span>
      <span className='text-2xl font-semibold'>Opps, Page Not Found!</span>
      <div className='flex gap-4'>
        <Button onClick={() => navigate(-1)} className='w-32'>
          Go back
        </Button>
        <Button onClick={() => navigate('/')} className='w-32'>
          Go home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
