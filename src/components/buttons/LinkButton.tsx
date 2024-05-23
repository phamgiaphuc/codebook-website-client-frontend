import { Button, ButtonProps } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface LinkButtonProps extends ButtonProps {
  href?: string;
  content?: string;
}

const LinkButton = ({ variant = 'default', href = '/', content = 'default' }: LinkButtonProps) => {
  const { t } = useTranslation('translation');
  return (
    <Button variant={variant} asChild>
      <Link to={href}>{t(content)}</Link>
    </Button>
  );
};

export default LinkButton;
