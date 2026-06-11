import { useMemo } from 'react';
import portfolioData from '../data/data.json';

const usePortfolioData = () => {
  return useMemo(() => portfolioData, []);
};

export default usePortfolioData;
