import { NavigationSearch } from '@elements/navigationSearch/NavigationSearch';
import { FC } from 'react';
import './navigation.scss';
import { useSearch } from '@/context/SearchContext';

export const Navigation: FC = () => {
  const { searchedValue } = useSearch();
  return (
    <nav className='navigation'>
      <form className='navigation__content' onSubmit={() => console.log("bruh")}>
        <NavigationSearch />
        <button className='navigation__submit' type='submit' disabled={searchedValue.length >= 3}>
          Hledat
        </button>
      </form>
    </nav>
  )
}
