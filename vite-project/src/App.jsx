import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from '../../vite-project/src/Components/Navbar/Navbar'
import Footer from '../../vite-project/src/Components/Footer/Footer'
import Home from '../../vite-project/src/Pages/Home'
import Ourstory from '../../vite-project/src/Pages/Ourstory/Ourstory'
import Menu from '../../vite-project/src/Pages/Menu/Menu'
import './App.css'

function App() {
  //Layout for all pages to have the navbar and the footer appear 
  const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [ //pages listed as children of the layout element
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/ourstory",
          element: <Ourstory/>,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
      ]
    },
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/ourstory",
      element: <Ourstory/>,
    },
    {
      path: "/menu",
      element: <Menu/>,
    },
  ]);

  return (
    <div>
   <RouterProvider router={router} />   
    </div>
  )
}

export default App
