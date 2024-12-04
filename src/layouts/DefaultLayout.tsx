import { Footer } from '@/components/blocks/footer/Footer';
import { Navigation } from '@blocks/navigation/Navigation';
import { FC, ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {/* Use virtualization for the fetched data */}
      {children}
      <Footer />
    </>
  );
}
