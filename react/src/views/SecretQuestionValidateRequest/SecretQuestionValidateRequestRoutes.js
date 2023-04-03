import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const SecretQuestionValidateRequestList = Loadable(
    lazy(() => import('./SecretQuestionValidateRequestList'))
)
const EditSecretQuestionValidateRequest = Loadable(
    lazy(() => import('./EditSecretQuestionValidateRequest'))
)
const AddSecretQuestionValidateRequest = Loadable(
    lazy(() => import('./AddSecretQuestionValidateRequest'))
)

const SecretQuestionValidateRequestRoutes = [
    {
        path: '/SecretQuestionValidateRequest',
        element: <SecretQuestionValidateRequestList />,
    },
    {
        path: '/SecretQuestionValidateRequest/edit/:id',
        element: <EditSecretQuestionValidateRequest />,
    },
    {
        path: '/SecretQuestionValidateRequest/add',
        element: <AddSecretQuestionValidateRequest />,
    },
]

export default SecretQuestionValidateRequestRoutes
