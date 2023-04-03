import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import store from 'store/store'
import {
    fetchFormularyDocument,
    addFormularyDocument,
    editFormularyDocument,
    deleteFormularyDocument,
} from '../formularyDocument.action'

const getFormularyDocumentListResponse = [
    {
        id: 1,
        DocumentID: 17,
        FormularyID: 'FormularyID',
        RxCUI: 'RxCUI',
        Description: 'Description',
        DocumentName: 'DocumentName',
        LanguageType: 'LanguageType',
        GPI: 'GPI',
        CreatedDate: 'CreatedDate',
        DocumentType: 'DocumentType',
    },
]

const addFormularyDocumentListResponse = (data) => {
    return { id: 2, ...data }
}
const editFormularyDocumentListResponse = (data) => {
    return data
}

describe('should test FormularyDocument redux tooklit asyncThunk api action and redux store updation', () => {
    const mock = new MockAdapter(axios)
    const endPoint = 'formularyDocument'
    test('Should be able to fetch the formularyDocument list and update formularyDocument redux store', async () => {
        mock.onGet(`/${endPoint}`).reply(200, getFormularyDocumentListResponse)
        const result = await store.dispatch(fetchFormularyDocument())
        const formularyDocumentList = result.payload
        expect(result.type).toBe(
            'formularyDocument/fetchFormularyDocument/fulfilled'
        )
        expect(formularyDocumentList).toEqual(getFormularyDocumentListResponse)

        const state = store.getState().formularyDocument
        expect(state.entities).toEqual(formularyDocumentList)
    })

    test('Should be able to add new formularyDocument to list and make post api and update formularyDocument redux store', async () => {
        const body = {
            DocumentID: 96,
            FormularyID: 'FormularyID',
            RxCUI: 'RxCUI',
            Description: 'Description',
            DocumentName: 'DocumentName',
            LanguageType: 'LanguageType',
            GPI: 'GPI',
            CreatedDate: 'CreatedDate',
            DocumentType: 'DocumentType',
        }
        mock.onPost(`/${endPoint}`, body).reply(
            201,
            addFormularyDocumentListResponse(body)
        )
        const result = await store.dispatch(addFormularyDocument(body))
        const formularyDocumentItem = result.payload
        expect(result.type).toBe(
            'formularyDocument/addFormularyDocument/fulfilled'
        )
        expect(formularyDocumentItem).toEqual(
            addFormularyDocumentListResponse(body)
        )

        const state = store.getState().formularyDocument
        expect(state.entities).toContainEqual(
            addFormularyDocumentListResponse(body)
        )
    })

    test('Should be able to edit formularyDocument in list and make put api call and update formularyDocument redux store', async () => {
        const body = {
            id: 1,
            DocumentID: 36,
            FormularyID: 'FormularyID',
            RxCUI: 'RxCUI',
            Description: 'Description',
            DocumentName: 'DocumentName',
            LanguageType: 'LanguageType',
            GPI: 'GPI',
            CreatedDate: 'CreatedDate',
            DocumentType: 'DocumentType',
        }
        mock.onPut(`/${endPoint}/${body.id}`, body).reply(
            201,
            editFormularyDocumentListResponse(body)
        )
        const result = await store.dispatch(editFormularyDocument(body))
        const formularyDocumentItem = result.payload
        expect(result.type).toBe(
            'formularyDocument/editFormularyDocument/fulfilled'
        )
        expect(formularyDocumentItem).toEqual(
            editFormularyDocumentListResponse(body)
        )

        const state = store.getState().formularyDocument
        let changedFormularyDocument = state.entities.find(
            (p) => p.id === body.id
        )
        expect(changedFormularyDocument.name).toEqual(body.name)
    })

    test('Should be able to delete formularyDocument in list and update formularyDocument redux store', async () => {
        const input = {
            id: 2,
        }
        mock.onDelete(`/${endPoint}/${input.id}`, input).reply(200)
        let state = store.getState().formularyDocument
        const initialLength = state.entities.length
        const result = await store.dispatch(deleteFormularyDocument(input))
        const deletId = result.payload
        expect(result.type).toBe(
            'formularyDocument/deleteFormularyDocument/fulfilled'
        )
        expect(deletId).toEqual(input.id)

        state = store.getState().formularyDocument
        const updateLength = initialLength - 1
        expect(state.entities.length).toEqual(updateLength)
    })
})
