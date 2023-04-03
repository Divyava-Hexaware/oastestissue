import { createSlice } from '@reduxjs/toolkit'
import { fetchFormularyDocument } from './FormularyDocument.action'
import { addFormularyDocument } from './FormularyDocument.action'
import { editFormularyDocument } from './FormularyDocument.action'
import { deleteFormularyDocument } from './FormularyDocument.action'

const fetchFormularyDocumentExtraReducer = {
    [fetchFormularyDocument.pending]: (state, action) => {
        state.loading = true
    },
    [fetchFormularyDocument.fulfilled]: (state, action) => {
        state.entities = [...action.payload]
        state.loading = false
    },
    [fetchFormularyDocument.rejected]: (state, action) => {
        state.loading = false
    },
}

const addFormularyDocumentExtraReducer = {
    [addFormularyDocument.pending]: (state, action) => {
        state.loading = true
    },
    [addFormularyDocument.fulfilled]: (state, action) => {
        state.entities.push(action.payload)
        state.loading = false
    },
    [addFormularyDocument.rejected]: (state, action) => {
        state.loading = false
    },
}

const editFormularyDocumentExtraReducer = {
    [editFormularyDocument.pending]: (state, action) => {
        state.loading = true
    },
    [editFormularyDocument.fulfilled]: (state, action) => {
        const {
            id,
            documentID,
            formularyID,
            rxCUI,
            description,
            documentName,
            languageType,
            gPI,
            createdDate,
            documentType,
        } = action.payload
        const existingFormularyDocument = state.entities.find(
            (FormularyDocument) =>
                FormularyDocument?.id?.toString() === id?.toString()
        )
        if (existingFormularyDocument) {
            existingFormularyDocument.documentID = documentID
            existingFormularyDocument.formularyID = formularyID
            existingFormularyDocument.rxCUI = rxCUI
            existingFormularyDocument.description = description
            existingFormularyDocument.documentName = documentName
            existingFormularyDocument.languageType = languageType
            existingFormularyDocument.gPI = gPI
            existingFormularyDocument.createdDate = createdDate
            existingFormularyDocument.documentType = documentType
        }
        state.loading = false
    },
    [editFormularyDocument.rejected]: (state, action) => {
        state.loading = false
    },
}

const deleteFormularyDocumentExtraReducer = {
    [deleteFormularyDocument.pending]: (state, action) => {
        state.loading = true
    },
    [deleteFormularyDocument.fulfilled]: (state, action) => {
        const id = action.payload
        const existingFormularyDocument = state.entities.find(
            (FormularyDocument) =>
                FormularyDocument.id.toString() === id.toString()
        )
        if (existingFormularyDocument) {
            state.entities = state.entities.filter(
                (FormularyDocument) => FormularyDocument.id !== id
            )
        }
        state.loading = false
    },
    [deleteFormularyDocument.rejected]: (state, action) => {
        state.loading = false
    },
}
const FormularyDocumentSlice = createSlice({
    name: 'FormularyDocument',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        FormularyDocumentAdded(state, action) {
            state.entities.push(action.payload)
        },
        FormularyDocumentUpdated(state, action) {
            const {
                id,
                documentID,
                formularyID,
                rxCUI,
                description,
                documentName,
                languageType,
                gPI,
                createdDate,
                documentType,
            } = action.payload
            const existingFormularyDocument = state.entities.find(
                (FormularyDocument) =>
                    FormularyDocument.id.toString() === id.toString()
            )
            if (existingFormularyDocument) {
                existingFormularyDocument.documentID = documentID
                existingFormularyDocument.formularyID = formularyID
                existingFormularyDocument.rxCUI = rxCUI
                existingFormularyDocument.description = description
                existingFormularyDocument.documentName = documentName
                existingFormularyDocument.languageType = languageType
                existingFormularyDocument.gPI = gPI
                existingFormularyDocument.createdDate = createdDate
                existingFormularyDocument.documentType = documentType
            }
        },
        FormularyDocumentDeleted(state, action) {
            const { id } = action.payload
            const existingFormularyDocument = state.entities.find(
                (FormularyDocument) =>
                    FormularyDocument.id.toString() === id.toString()
            )
            if (existingFormularyDocument) {
                state.entities = state.entities.filter(
                    (FormularyDocument) => FormularyDocument.id !== id
                )
            }
        },
    },
    extraReducers: {
        ...fetchFormularyDocumentExtraReducer,
        ...addFormularyDocumentExtraReducer,
        ...editFormularyDocumentExtraReducer,
        ...deleteFormularyDocumentExtraReducer,
    },
})

export const {
    FormularyDocumentAdded,
    FormularyDocumentUpdated,
    FormularyDocumentDeleted,
} = FormularyDocumentSlice.actions

export default FormularyDocumentSlice.reducer
