// import ProductsContainer from './04-hof-hoc-pattern/Issue/ProductsContainer';
// import HigerOrderComp from './04-hof-hoc-pattern/Fix/HigherOrderComp';
// import CustomeHoodContainer from './05-custom-hooks/CustomeHookContainer';
import { useTheme } from './06-context-pattern/hooks/useTheme';
import LikeButton from './07-optimistic-pattern/LikeButton';
import CartBadge from './08-pub-sub-pattern/components/subscribers/CartBadge';
import AddToCartButton from './08-pub-sub-pattern/components/publishers/AddToCartButton';
import Toggle from './09-state-reducer-pattern/Toggle';
import { toggleReducer_v2 } from './09-state-reducer-pattern/reducers';
// import CardContainer from './09-slot-pattern/named-slot/CardContainer';
import CardContainer from './09-slot-pattern/named-slot-map/CardContainer';

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

      {/* Optimistic Pattern */}
      <button onClick={toggleDark}>Toggle Theme</button>
      <LikeButton initialLike={0} />

      {/* PUB SUB Pattern */}
      <AddToCartButton />
      <CartBadge />

      {/* State reducer pattern */}
      <h4>State reducer</h4>
      <Toggle />
      <p>Button will not increase more than 3 clicks</p>
      <Toggle reducer={toggleReducer_v2} />

      {/* Slot Pattern */}
      <CardContainer />
    </div>
  );
}

export default App;
