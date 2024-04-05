import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRouter from './pages/ProtectedRouter';
import SpinnerFullPage from './component/SpinnerFullPage';

import CountryList from "./component/CountryList";
import CityList from "./component/CityList";
import Form from "./component/Form";
import City from "./component/City";

// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import('./pages/Homepage'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Product = lazy(() => import('./pages/Product'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const AppLayout = lazy(() => import('./pages/AppLayout'))
const Login = lazy(() => import('./pages/Login'))

// const BASE_URL = "http://localhost/9000"

function App() {

  return (
    <>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="product" element={<Product />} />
                <Route path="app"
                  element={<ProtectedRouter>
                    <AppLayout />
                  </ProtectedRouter>}>

                  <Route index element={<Navigate replace to='cities' />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </>
  );
}
export default App;
