import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface AlcoholContextProps {
  isAlcoholic: boolean;
  setIsAlcoholic: Dispatch<SetStateAction<boolean>>;
}

const AlcoholContext = createContext<AlcoholContextProps | undefined>(undefined);

export const AlcoholProvider = ({ children }: { children: ReactNode }) => {
  const [isAlcoholic, setIsAlcoholic] = useState<boolean>(true);

  return (
    <AlcoholContext.Provider value={{ isAlcoholic, setIsAlcoholic }}>
      {children}
    </AlcoholContext.Provider>
  );
};

export const useAlcohol = () => {
  const context = useContext(AlcoholContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
