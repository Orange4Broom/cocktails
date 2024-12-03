import { FC } from 'react';

interface NavigationSearchProps {
  searchedValue: string;
  setSearchedValue: (value: string) => void;
}

export const NavigationSearch: FC<NavigationSearchProps> = ({ setSearchedValue, searchedValue }) => {
  return (
    <>
      <input
        className="navigation__search"
        type='text'
        placeholder='Search for cocktails'
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
      />
    </>
  );
}
