import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {LoginPage} from "../pages/LoginPage";
import {RegistrationPage} from "../pages/RegistrationPage";
import PrivateRoutes from "./PrivateRoutes";
import {ExchangeRatePage} from "../pages/ExchangeRatePage";
import {ProfilePage} from "../pages/ProfilePage";
import Examples from "../examples";
import {CurrencyExchangePage} from "../pages/CurrencyExchangePage";
import {WalletsPage} from "../pages/WalletsPage";
import {TransactionPage} from "../pages/TransactionPage";

// const routes = [
//   {
//     path: "/",
//     element: <MainPage/>,
//     children: [
//       {
//         path: "exchange-rate",
//         element: <ExchangeRatePage />,
//       },
//       {
//         path: "profile",
//         element: <WalletsPage />
//       },
//       {
//         path: "examples",
//         element: <Examples />
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/registration",
//     element: <RegistrationPage/>,
//   },
//   {
//     path: "*",
//     element: <Navigate to="/" replace />
//   },
// ];

const AppRouter = () => {
  return (
    <Routes>
      {/*<Route */}
      {/*  element={<PublicRoutes />} */}
      {/*>*/}
        <Route exact path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>

        <Route path="*" element={<Navigate to="/" replace />} />
      {/*</Route>*/}

      <Route element={<PrivateRoutes/>}>
        <Route path="/exchange-rate" element={<ExchangeRatePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/currency-exchange" element={<CurrencyExchangePage/>}/>
        <Route path="/wallets" element={<WalletsPage/>}/>
        <Route path="/transactions" element={<TransactionPage/>}/>

        <Route path="/examples" element={<Examples/>}/>

        <Route path="*" element={<Navigate to="/exchange-rate" replace />} />
      </Route>

    </Routes>
  );
};

export default AppRouter;