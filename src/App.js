import React from 'react';
import { Button } from 'antd';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './pages/LogoPage';
import MainPage from './pages/MainPage';

//import Payment from './Payment';
import PaymentPage from './pages/PaymentPage';
import About from './pages/PaymentPage';

// import Routes from "./routes/Routes";


  

function App() {
  return (
    // <Routes />
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<LogoPage />}></Route>
			  <Route path="/main" element={<MainPage />}></Route>
			  {/* <Route exact path="/" component={Home} /> */}
			  <Route path="/payments" element={<PaymentPage />}></Route>
			  {/*<Route exact path="/payments" element={<Payment></Payment>} /> */}
		  </Routes>
	</BrowserRouter>
  );
}

export default App;