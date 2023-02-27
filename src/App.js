import React from 'react';
import CadastroLogin from './pages/CadastroLogin';
import './styles/reset.css';
import './styles/normalize.css';
import InicioApp from './pages/InicioApp';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PopularItems from './pages/PopularItems';
import PaymentSuccess from './pages/PaymentSuccessful';
import PrePurchase from './pages/PrePurchase';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
      {/* <CadastroLogin /> */}
      {/* <Login /> */}
      {/* <CreateAccount /> */}
      {/* <InicioApp /> */}
      {/* <PopularItems /> */}
      {/* <PrePurchase /> */}
      <Payment />
      {/* <PaymentSuccess /> */}
    </div>
  );
}

export default App;
