
import { createBrowserRouter, RouterProvider } from 'react-router'

import Browse from './Browse'
import Login from './Login'
function Body() {

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
path:"/browse",
element:<Browse/>
  }
])


  return (
    <>
<RouterProvider router={appRouter}/>
    </>
  )
}

export default Body