import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import AppartmentPage from './pages/AppartmentPage';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const HeaderFooterLayout = () => { 
  return(
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
)
}
const router = createBrowserRouter([
  {
    path: "/",
    element:<HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/flats",
        element: <AppartmentPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
],
  }      
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
