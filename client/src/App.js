import './App.css';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Tienda from './pages/Tienda';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Citas from './views/Citas';
import FAQ from './views/FAQ';

const Layout = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Citas",
        element:<Citas />
      },
      {
        path:"/faq",
        element:<FAQ />
      },
      {
        path:"/Tienda",
        element:<Tienda />
      },
      
      {
        path:"/productos/:id",
        element:<Productos />
      },
      {
        path:"/producto/:id",
        element:<Producto />
      },
    ]
  },
])

function App() {
  return (
    <div className='animate__animated animate__fadeIn animate__slower'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
