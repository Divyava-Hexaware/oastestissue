import store from 'store/store'
import {
    formularyDocumentAdded,
    formularyDocumentDeleted,
    formularyDocumentUpdated,
} from '../formularyDocumentSlice'

describe('testing formularyDocument redux store reducers', () => {
    test('add formularyDocument to store test', () => {
        let state = store.getState().formularyDocument
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            DocumentID: 22,
            FormularyID: 'FormularyID',
            RxCUI: 'RxCUI',
            Description: 'Description',
            DocumentName: 'DocumentName',
            LanguageType: 'LanguageType',
            GPI: 'GPI',
            CreatedDate:
                'Mon Apr 03 2023 11:46:49 GMT+0000 (Coordinated Universal Time)',
            DocumentType: 'DocumentType',
        }
        store.dispatch(formularyDocumentAdded(initialInput))
        state = store.getState().formularyDocument
        expect(state.entities).toHaveLength(1)
    })

    test('update formularyDocument from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            DocumentID: 14,
            FormularyID: 'FormularyID',
            RxCUI: 'RxCUI',
            Description: 'Description',
            DocumentName: 'DocumentName',
            LanguageType: 'LanguageType',
            GPI: 'GPI',
            CreatedDate:
                'Mon Apr 03 2023 11:46:49 GMT+0000 (Coordinated Universal Time)',
            DocumentType: 'DocumentType',
        }
        store.dispatch(formularyDocumentAdded(initialInput))
        let state = store.getState().formularyDocument
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
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
        store.dispatch(formularyDocumentUpdated(updatedInput))
        state = store.getState().formularyDocument
        let changedFormularyDocument = state.entities.find((p) => p.id === 2)
        expect(changedFormularyDocument).toStrictEqual(updatedInput)
    })

    test('delete formularyDocument from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            DocumentID: 13,
            FormularyID: 'FormularyID',
            RxCUI: 'RxCUI',
            Description: 'Description',
            DocumentName: 'DocumentName',
            LanguageType: 'LanguageType',
            GPI: 'GPI',
            CreatedDate:
                'Mon Apr 03 2023 11:46:49 GMT+0000 (Coordinated Universal Time)',
            DocumentType: 'DocumentType',
        }
        store.dispatch(formularyDocumentAdded(initialInput))
        let state = store.getState().formularyDocument
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            formularyDocumentDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().formularyDocument
        expect(state.entities).toHaveLength(2)
    })
})
