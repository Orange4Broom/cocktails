import { useSearch } from '@/context/SearchContext';
import { FC } from 'react';

export const NavigationSearch: FC = () => {
  const { searchedValue, setSearchedValue } = useSearch();
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
