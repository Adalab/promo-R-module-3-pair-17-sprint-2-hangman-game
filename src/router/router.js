import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import routes from './routes.js'

const router = createBrowserRouter(routes)

const Router = ({ children }) => (
  <RouterProvider
    router={ router }
  >{ children }</RouterProvider>
)

export default Router
