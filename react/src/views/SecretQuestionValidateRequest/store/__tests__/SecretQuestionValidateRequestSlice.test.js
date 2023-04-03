import store from 'store/store'
import {
    secretQuestionValidateRequestAdded,
    secretQuestionValidateRequestDeleted,
    secretQuestionValidateRequestUpdated,
} from '../secretQuestionValidateRequestSlice'

describe('testing secretQuestionValidateRequest redux store reducers', () => {
    test('add secretQuestionValidateRequest to store test', () => {
        let state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            UserId: 75,
            SecretQuestionId: 44,
            Answer: 'Answer',
        }
        store.dispatch(secretQuestionValidateRequestAdded(initialInput))
        state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toHaveLength(1)
    })

    test('update secretQuestionValidateRequest from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            UserId: 7,
            SecretQuestionId: 20,
            Answer: 'Answer',
        }
        store.dispatch(secretQuestionValidateRequestAdded(initialInput))
        let state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
            UserId: 27,
            SecretQuestionId: 77,
            Answer: 'Answer',
        }
        store.dispatch(secretQuestionValidateRequestUpdated(updatedInput))
        state = store.getState().secretQuestionValidateRequest
        let changedSecretQuestionValidateRequest = state.entities.find(
            (p) => p.id === 2
        )
        expect(changedSecretQuestionValidateRequest).toStrictEqual(updatedInput)
    })

    test('delete secretQuestionValidateRequest from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            UserId: 61,
            SecretQuestionId: 30,
            Answer: 'Answer',
        }
        store.dispatch(secretQuestionValidateRequestAdded(initialInput))
        let state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            secretQuestionValidateRequestDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().secretQuestionValidateRequest
        expect(state.entities).toHaveLength(2)
    })
})
