import ProductsContainer from './04-hof-hoc-pattern/Issue/ProductsContainer';
import HigerOrderComp from './04-hof-hoc-pattern/Fix/HigherOrderComp';
import CustomeHoodContainer from './05-custom-hooks/CustomeHookContainer';
import { useTheme } from './06-context-pattern/hooks/useTheme';
import LikeButton from './07-optimistic-pattern/LikeButton';

function App() {
  const { isDark, toggleDark } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
        height: '100%',
      }}
    >
      {/* <HigerOrderComp /> */}
      {/* <ProductsContainer /> */}
      {/* <CustomeHoodContainer /> */}

      <button onClick={toggleDark}>Toggle Theme</button>
      <LikeButton initialLike={0} />
    </div>
  );
}

export default App;
