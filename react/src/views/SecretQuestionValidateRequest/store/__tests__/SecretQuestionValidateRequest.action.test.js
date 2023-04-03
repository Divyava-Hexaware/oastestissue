import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import store from 'store/store'
import {
    fetchSecretQuestionValidateRequest,
    addSecretQuestionValidateRequest,
    editSecretQuestionValidateRequest,
    deleteSecretQuestionValidateRequest,
} from '../secretQuestionValidateRequest.action'

const getSecretQuestionValidateRequestListResponse = [
    {
        id: 1,
        UserId: 97,
        SecretQuestionId: 96,
        Answer: 'Answer',
    },
]

const addSecretQuestionValidateRequestListResponse = (data) => {
    return { id: 2, ...data }
}
const editSecretQuestionValidateRequestListResponse = (data) => {
    return data
}

describe('should test SecretQuestionValidateRequest redux tooklit asyncThunk api action and redux store updation', () => {
    const mock = new MockAdapter(axios)
    const endPoint = 'secretQuestionValidateRequest'
    test('Should be able to fetch the secretQuestionValidateRequest list and update secretQuestionValidateRequest redux store', async () => {
        mock.onGet(`/${endPoint}`).reply(
            200,
            getSecretQuestionValidateRequestListResponse
        )
        const result = await store.dispatch(
            fetchSecretQuestionValidateRequest()
        )
        const secretQuestionValidateRequestList = result.payload
        expect(result.type).toBe(
            'secretQuestionValidateRequest/fetchSecretQuestionValidateRequest/fulfilled'
        )
        expect(secretQuestionValidateRequestList).toEqual(
            getSecretQuestionValidateRequestListResponse
        )

        const state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toEqual(secretQuestionValidateRequestList)
    })

    test('Should be able to add new secretQuestionValidateRequest to list and make post api and update secretQuestionValidateRequest redux store', async () => {
        const body = {
            UserId: 26,
            SecretQuestionId: 38,
            Answer: 'Answer',
        }
        mock.onPost(`/${endPoint}`, body).reply(
            201,
            addSecretQuestionValidateRequestListResponse(body)
        )
        const result = await store.dispatch(
            addSecretQuestionValidateRequest(body)
        )
        const secretQuestionValidateRequestItem = result.payload
        expect(result.type).toBe(
            'secretQuestionValidateRequest/addSecretQuestionValidateRequest/fulfilled'
        )
        expect(secretQuestionValidateRequestItem).toEqual(
            addSecretQuestionValidateRequestListResponse(body)
        )

        const state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toContainEqual(
            addSecretQuestionValidateRequestListResponse(body)
        )
    })

    test('Should be able to edit secretQuestionValidateRequest in list and make put api call and update secretQuestionValidateRequest redux store', async () => {
        const body = {
            id: 1,
            UserId: 50,
            SecretQuestionId: 82,
            Answer: 'Answer',
        }
        mock.onPut(`/${endPoint}/${body.id}`, body).reply(
            201,
            editSecretQuestionValidateRequestListResponse(body)
        )
        const result = await store.dispatch(
            editSecretQuestionValidateRequest(body)
        )
        const secretQuestionValidateRequestItem = result.payload
        expect(result.type).toBe(
            'secretQuestionValidateRequest/editSecretQuestionValidateRequest/fulfilled'
        )
        expect(secretQuestionValidateRequestItem).toEqual(
            editSecretQuestionValidateRequestListResponse(body)
        )

        const state = store.getState().secretQuestionValidateRequest
        let changedSecretQuestionValidateRequest = state.entities.find(
            (p) => p.id === body.id
        )
        expect(changedSecretQuestionValidateRequest.name).toEqual(body.name)
    })

    test('Should be able to delete secretQuestionValidateRequest in list and update secretQuestionValidateRequest redux store', async () => {
        const input = {
            id: 2,
        }
        mock.onDelete(`/${endPoint}/${input.id}`, input).reply(200)
        let state = store.getState().secretQuestionValidateRequest
        const initialLength = state.entities.length
        const result = await store.dispatch(
            deleteSecretQuestionValidateRequest(input)
        )
        const deletId = result.payload
        expect(result.type).toBe(
            'secretQuestionValidateRequest/deleteSecretQuestionValidateRequest/fulfilled'
        )
        expect(deletId).toEqual(input.id)

        state = store.getState().secretQuestionValidateRequest
        const updateLength = initialLength - 1
        expect(state.entities.length).toEqual(updateLength)
    })
})
