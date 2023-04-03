import { createSlice } from '@reduxjs/toolkit'
import { fetchSecretQuestionValidateRequest } from './SecretQuestionValidateRequest.action'
import { addSecretQuestionValidateRequest } from './SecretQuestionValidateRequest.action'
import { editSecretQuestionValidateRequest } from './SecretQuestionValidateRequest.action'
import { deleteSecretQuestionValidateRequest } from './SecretQuestionValidateRequest.action'

const fetchSecretQuestionValidateRequestExtraReducer = {
    [fetchSecretQuestionValidateRequest.pending]: (state, action) => {
        state.loading = true
    },
    [fetchSecretQuestionValidateRequest.fulfilled]: (state, action) => {
        state.entities = [...action.payload]
        state.loading = false
    },
    [fetchSecretQuestionValidateRequest.rejected]: (state, action) => {
        state.loading = false
    },
}

const addSecretQuestionValidateRequestExtraReducer = {
    [addSecretQuestionValidateRequest.pending]: (state, action) => {
        state.loading = true
    },
    [addSecretQuestionValidateRequest.fulfilled]: (state, action) => {
        state.entities.push(action.payload)
        state.loading = false
    },
    [addSecretQuestionValidateRequest.rejected]: (state, action) => {
        state.loading = false
    },
}

const editSecretQuestionValidateRequestExtraReducer = {
    [editSecretQuestionValidateRequest.pending]: (state, action) => {
        state.loading = true
    },
    [editSecretQuestionValidateRequest.fulfilled]: (state, action) => {
        const { id, userId, secretQuestionId, answer } = action.payload
        const existingSecretQuestionValidateRequest = state.entities.find(
            (SecretQuestionValidateRequest) =>
                SecretQuestionValidateRequest?.id?.toString() === id?.toString()
        )
        if (existingSecretQuestionValidateRequest) {
            existingSecretQuestionValidateRequest.userId = userId
            existingSecretQuestionValidateRequest.secretQuestionId =
                secretQuestionId
            existingSecretQuestionValidateRequest.answer = answer
        }
        state.loading = false
    },
    [editSecretQuestionValidateRequest.rejected]: (state, action) => {
        state.loading = false
    },
}

const deleteSecretQuestionValidateRequestExtraReducer = {
    [deleteSecretQuestionValidateRequest.pending]: (state, action) => {
        state.loading = true
    },
    [deleteSecretQuestionValidateRequest.fulfilled]: (state, action) => {
        const id = action.payload
        const existingSecretQuestionValidateRequest = state.entities.find(
            (SecretQuestionValidateRequest) =>
                SecretQuestionValidateRequest.id.toString() === id.toString()
        )
        if (existingSecretQuestionValidateRequest) {
            state.entities = state.entities.filter(
                (SecretQuestionValidateRequest) =>
                    SecretQuestionValidateRequest.id !== id
            )
        }
        state.loading = false
    },
    [deleteSecretQuestionValidateRequest.rejected]: (state, action) => {
        state.loading = false
    },
}
const SecretQuestionValidateRequestSlice = createSlice({
    name: 'SecretQuestionValidateRequest',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        SecretQuestionValidateRequestAdded(state, action) {
            state.entities.push(action.payload)
        },
        SecretQuestionValidateRequestUpdated(state, action) {
            const { id, userId, secretQuestionId, answer } = action.payload
            const existingSecretQuestionValidateRequest = state.entities.find(
                (SecretQuestionValidateRequest) =>
                    SecretQuestionValidateRequest.id.toString() ===
                    id.toString()
            )
            if (existingSecretQuestionValidateRequest) {
                existingSecretQuestionValidateRequest.userId = userId
                existingSecretQuestionValidateRequest.secretQuestionId =
                    secretQuestionId
                existingSecretQuestionValidateRequest.answer = answer
            }
        },
        SecretQuestionValidateRequestDeleted(state, action) {
            const { id } = action.payload
            const existingSecretQuestionValidateRequest = state.entities.find(
                (SecretQuestionValidateRequest) =>
                    SecretQuestionValidateRequest.id.toString() ===
                    id.toString()
            )
            if (existingSecretQuestionValidateRequest) {
                state.entities = state.entities.filter(
                    (SecretQuestionValidateRequest) =>
                        SecretQuestionValidateRequest.id !== id
                )
            }
        },
    },
    extraReducers: {
        ...fetchSecretQuestionValidateRequestExtraReducer,
        ...addSecretQuestionValidateRequestExtraReducer,
        ...editSecretQuestionValidateRequestExtraReducer,
        ...deleteSecretQuestionValidateRequestExtraReducer,
    },
})

export const {
    SecretQuestionValidateRequestAdded,
    SecretQuestionValidateRequestUpdated,
    SecretQuestionValidateRequestDeleted,
} = SecretQuestionValidateRequestSlice.actions

export default SecretQuestionValidateRequestSlice.reducer
