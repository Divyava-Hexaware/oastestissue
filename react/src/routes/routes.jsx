import NotFound from 'views/sessions/NotFound'
import SecretQuestionValidateRequestRoutes from 'views/SecretQuestionValidateRequest/SecretQuestionValidateRequestRoutes'
import FormularyDocumentRoutes from 'views/FormularyDocument/FormularyDocumentRoutes'
import sessionRoutes from 'views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import homeRoutes from 'views/home/HomeRoutes'
import { Navigate } from 'react-router-dom'
export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [
                ...homeRoutes,
                ...FormularyDocumentRoutes,
                ...SecretQuestionValidateRequestRoutes,
            ],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="home" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]
    return all_routes
}
