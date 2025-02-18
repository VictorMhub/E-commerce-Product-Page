import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage.tsx';
import FavoritesPage from './pages/FavoritePage.tsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  // Add more routes here...
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>,
)
