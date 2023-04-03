import { createAsyncThunk } from '@reduxjs/toolkit'
import { showSuccess } from 'middleware/notification/store/notification.actions'
import axios from '../../../axios'

const endPoint = 'SecretQuestionValidateRequest'

export const fetchSecretQuestionValidateRequest = createAsyncThunk(
    'SecretQuestionValidateRequest/fetchSecretQuestionValidateRequest',
    async () => {
        const response = await axios.get(`/${endPoint}`)
        const SecretQuestionValidateRequest = await response.data
        return SecretQuestionValidateRequest
    }
)

export const addSecretQuestionValidateRequest = createAsyncThunk(
    'SecretQuestionValidateRequest/addSecretQuestionValidateRequest',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}`, data)
        const SecretQuestionValidateRequest = await response.data
        thunkAPI.dispatch(
            showSuccess('SecretQuestionValidateRequest added successfully')
        )
        return SecretQuestionValidateRequest
    }
)

export const editSecretQuestionValidateRequest = createAsyncThunk(
    'SecretQuestionValidateRequest/editSecretQuestionValidateRequest',
    async (data, thunkAPI) => {
        let body = {
            ...data,
        }

        delete body['id']

        const response = await axios.put(`/${endPoint}/${data.id}`, body)
        const SecretQuestionValidateRequest = await response.data
        thunkAPI.dispatch(
            showSuccess('SecretQuestionValidateRequest updated successfully')
        )
        return SecretQuestionValidateRequest
    }
)

export const deleteSecretQuestionValidateRequest = createAsyncThunk(
    'SecretQuestionValidateRequest/deleteSecretQuestionValidateRequest',
    async (data, thunkAPI) => {
        const response = await axios.delete(`/${endPoint}/${data.id}`)
        const status = await response.status
        if (status === 200) {
            thunkAPI.dispatch(
                showSuccess(
                    'Selected SecretQuestionValidateRequest deleted successfully.'
                )
            )
            return data.id
        }
    }
)
