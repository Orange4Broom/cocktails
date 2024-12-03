import { Navigation } from '@blocks/navigation/Navigation';
import { FC, ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
  searchedValue: string;
  setSearchedValue: (value: string) => void;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, searchedValue, setSearchedValue }) => {
  return (
    <>
      <Navigation searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
      {children}
    </>
  );
}
