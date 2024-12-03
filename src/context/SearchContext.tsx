import { createContext, ReactNode, useContext, useState } from 'react';

interface SearchContextProps {
  searchedValue: string;
  setSearchedValue: (value: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchedValue, setSearchedValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchedValue, setSearchedValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
