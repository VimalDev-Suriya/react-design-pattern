import { BrowserRouter, Route, Routes } from 'react-router';
import ProductsContainer from './04-hof-hoc-pattern/Issue/ProductsContainer';
import HigerOrderComp from './04-hof-hoc-pattern/Fix/HigherOrderComp';
import CustomeHookContainer from './05-custom-hooks/CustomeHookContainer';
import CardContainer from './10-slot-pattern/named-slot-map/CardContainer';
import TableOfContent from './components/Navigation';
import OptimisticContainer from './07-optimistic-pattern/OptimisticContainer';
import PubSubContainer from './08-pub-sub-pattern/PubSubContainer';
import StateReducerContainer from './09-state-reducer-pattern/StateReducerContainer';
import AccordionContainer from './02-compound-pattern/v1/AccordionContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableOfContent />} />
          <Route
            path="/compound-design-pattern"
            element={<AccordionContainer />}
          />
          <Route path="/container-presentation-design-pattern" />
          <Route
            path="/higher-order-design-pattern"
            element={<HigerOrderComp />}
          />
          <Route
            path="/higher-order-design-pattern-1"
            element={<ProductsContainer />}
          />
          <Route
            path="/custom-hook-design-pattern"
            element={<CustomeHookContainer />}
          />
          <Route
            path="/optimistic-design-pattern"
            element={<OptimisticContainer />}
          />
          <Route path="/pub-sub-design-pattern" element={<PubSubContainer />} />
          <Route
            path="/state-reducer-design-pattern"
            element={<StateReducerContainer />}
          />
          <Route path="/slot-design-pattern" element={<CardContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
