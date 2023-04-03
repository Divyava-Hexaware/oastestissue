import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const FormularyDocumentList = Loadable(
    lazy(() => import('./FormularyDocumentList'))
)
const EditFormularyDocument = Loadable(
    lazy(() => import('./EditFormularyDocument'))
)
const AddFormularyDocument = Loadable(
    lazy(() => import('./AddFormularyDocument'))
)

const FormularyDocumentRoutes = [
    {
        path: '/FormularyDocument',
        element: <FormularyDocumentList />,
    },
    {
        path: '/FormularyDocument/edit/:id',
        element: <EditFormularyDocument />,
    },
    {
        path: '/FormularyDocument/add',
        element: <AddFormularyDocument />,
    },
]

export default FormularyDocumentRoutes
