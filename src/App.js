import './styles.css';
import Examples from "./examples";
import {MainPage} from "./pages/MainPage";
import {Routes, Route} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {ExchangeRatePage} from "./pages/ExchangeRatePage";


function App() {

  return (
    <Routes>
      <Route exact path="/" element={<MainPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/registration" element={<RegistrationPage/>}/>
      <Route path="/exchange-rate" element={<ExchangeRatePage/>}/>

      <Route path="/profile" element={<MainPage/>}/>


      <Route path="/examples" element={<Examples/>}/>


    </Routes>
  );
}

export default App;
