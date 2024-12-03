import { NavigationSearch } from '@elements/navigationSearch/NavigationSearch';
import { FC } from 'react';

interface NavigationProps {
  searchedValue: string;
  setSearchedValue: (value: string) => void;
}

export const Navigation: FC<NavigationProps> = ({ setSearchedValue, searchedValue }) => {
  return (
    <nav className='navigation'>
      <form className='navigation__content' onSubmit={() => console.log("bruh")}>
        <button className='navigation__submit'>
          Alkoholické
        </button>
        <NavigationSearch searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
        <button className='navigation__submit'>
          Hledat
        </button>
      </form>
    </nav>
  )
}
