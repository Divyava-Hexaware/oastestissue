import { createAsyncThunk } from '@reduxjs/toolkit'
import { showSuccess } from 'middleware/notification/store/notification.actions'
import axios from '../../../axios'

const endPoint = 'FormularyDocument'

export const fetchFormularyDocument = createAsyncThunk(
    'FormularyDocument/fetchFormularyDocument',
    async () => {
        const response = await axios.get(`/${endPoint}`)
        const FormularyDocument = await response.data
        return FormularyDocument
    }
)

export const addFormularyDocument = createAsyncThunk(
    'FormularyDocument/addFormularyDocument',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}`, data)
        const FormularyDocument = await response.data
        thunkAPI.dispatch(showSuccess('FormularyDocument added successfully'))
        return FormularyDocument
    }
)

export const editFormularyDocument = createAsyncThunk(
    'FormularyDocument/editFormularyDocument',
    async (data, thunkAPI) => {
        let body = {
            ...data,
        }

        delete body['id']

        const response = await axios.put(`/${endPoint}/${data.id}`, body)
        const FormularyDocument = await response.data
        thunkAPI.dispatch(showSuccess('FormularyDocument updated successfully'))
        return FormularyDocument
    }
)

export const deleteFormularyDocument = createAsyncThunk(
    'FormularyDocument/deleteFormularyDocument',
    async (data, thunkAPI) => {
        const response = await axios.delete(`/${endPoint}/${data.id}`)
        const status = await response.status
        if (status === 200) {
            thunkAPI.dispatch(
                showSuccess('Selected FormularyDocument deleted successfully.')
            )
            return data.id
        }
    }
)
