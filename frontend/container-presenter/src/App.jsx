import AppLayout from './components/AppLayout';
import ProductContainer from './components/ProductContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ProductContainer />} />
          {/* <Route path='cart' element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
