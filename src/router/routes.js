import HangMan from '../components/views/HangMan'
import Instructions from '../components/views/instructions/Instructions'

const routes = [
  {
    path: "/",
    element: <HangMan />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
  },
]

export default routes
