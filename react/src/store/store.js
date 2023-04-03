import { configureStore } from '@reduxjs/toolkit'
import SecretQuestionValidateRequestReducer from '../views/SecretQuestionValidateRequest/store/SecretQuestionValidateRequestSlice'
import FormularyDocumentReducer from '../views/FormularyDocument/store/FormularyDocumentSlice'
import { createLogger } from 'redux-logger'
import notificationReducer from '../middleware/notification/store/notificationSlice'
let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}
export default configureStore({
    reducer: {
        notification: notificationReducer,
        FormularyDocument: FormularyDocumentReducer,
        SecretQuestionValidateRequest: SecretQuestionValidateRequestReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})
