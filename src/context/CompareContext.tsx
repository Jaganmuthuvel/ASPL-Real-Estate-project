import { createContext, useContext, useState, type ReactNode } from 'react';

// Project type
export interface Project {
  id: number;
  name: string;
  image: string;
  location: string;
  price: string;
  config: string;
  area?: string;
  possession?: string;
  amenities?: string[];
  status: string;
  type: string;
}

interface CompareContextType {
  compareList: Project[];
  addToCompare: (project: Project) => void;
  removeFromCompare: (id: number) => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<Project[]>([]);

  const addToCompare = (project: Project) => {
    if (compareList.length < 3 && !compareList.find(p => p.id === project.id)) {
      setCompareList([...compareList, project]);
      alert(`${project.name} added to compare!`);
    } else if (compareList.find(p => p.id === project.id)) {
      alert(`${project.name} is already in the compare list.`);
    } else {
      alert("You can only compare up to 3 projects at a time.");
    }
  };

  const removeFromCompare = (id: number) => {
    setCompareList(compareList.filter(project => project.id !== id));
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
