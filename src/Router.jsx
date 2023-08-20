import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'

const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [
        {index: true, element: <Home />},
        {path: 'services', element: <Services />}
    ]
}])

export default router