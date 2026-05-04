import withDataFetching from './withDataFetching';
import ProductList from '../Issue/ProductsList';
import ProductsAnalytics from '../Issue/ProductsAnalytics';

const MoviesListHoc = withDataFetching(ProductList);
const MoviesAnalyticsHoc = withDataFetching(ProductsAnalytics);

const HigerOrderComp = () => {
  return (
    <div>
      <MoviesListHoc />
      <MoviesAnalyticsHoc />
    </div>
  );
};

export default HigerOrderComp;
