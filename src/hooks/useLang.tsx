import { LanguageProviderContext } from '@/components/providers/LanguageProvider';
import { useContext } from 'react';

const useLang = () => {
  const context = useContext(LanguageProviderContext);
  if (context === undefined) throw new Error('useLang must be used within a LanguageProvider');
  return context;
};

export default useLang;
