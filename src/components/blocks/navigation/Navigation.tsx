import { NavigationSearch } from '@elements/navigationSearch/NavigationSearch';
import { FC } from 'react';
import './navigation.scss';

export const Navigation: FC = () => {
  return (
    <nav className='navigation'>
      <form className='navigation__content' onSubmit={() => console.log("bruh")}>
        <button className='navigation__alcoholic' type='submit'>
          Alkoholické
        </button>
        <NavigationSearch />
        <button className='navigation__submit' type='submit'>
          Hledat
        </button>
      </form>
    </nav>
  )
}
