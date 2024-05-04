import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  }])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
