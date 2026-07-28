import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
