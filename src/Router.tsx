import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:coinId/*' element={<Coin />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
