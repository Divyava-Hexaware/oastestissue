const {
    render,
    screen,
    fireEvent,
    within,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import EditSecretQuestionValidateRequest from '../EditSecretQuestionValidateRequest'
import { SecretQuestionValidateRequestAdded } from '../store/SecretQuestionValidateRequestSlice'
beforeAll(() => {
    store.dispatch(
        SecretQuestionValidateRequestAdded({
            id: 1,
            UserId: 64,
            SecretQuestionId: 49,
            Answer: 'Answer',
        })
    )
})

beforeEach(() => {
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Navigate
                                        to="SecretQuestionValidateRequest/edit/1"
                                        replace
                                    />
                                }
                            />
                            <Route
                                path="SecretQuestionValidateRequest/edit/:id"
                                element={<EditSecretQuestionValidateRequest />}
                            />
                        </Routes>
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
})

const clickAndWait = async (element) => {
    await act(async () => {
        fireEvent.click(element)
    })

    await act(async () => {
        jest.runOnlyPendingTimers()
    })
}

afterEach(cleanup)

describe('testing view of SecretQuestionValidateRequestEdit Component', () => {
    test('should render EditSecretQuestionValidateRequest and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveSecretQuestionValidateRequestButtonElement = screen.getByRole(
            'button',
            { name: /save/i }
        )
        const UserIdElement = screen.getByLabelText(/UserId/i)
        const SecretQuestionIdElement =
            screen.getByLabelText(/SecretQuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        expect(
            saveSecretQuestionValidateRequestButtonElement
        ).toBeInTheDocument()

        expect(UserIdElement).toBeInTheDocument()
        expect(SecretQuestionIdElement).toBeInTheDocument()
        expect(AnswerElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of SecretQuestionValidateRequest edit form', async () => {
        const UserIdElement = screen.getByLabelText(/UserId/i)
        const SecretQuestionIdElement =
            screen.getByLabelText(/SecretQuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        fireEvent.change(UserIdElement, { target: { value: 65 } })
        fireEvent.change(SecretQuestionIdElement, { target: { value: 81 } })
        fireEvent.change(AnswerElement, { target: { value: 'Answer' } })

        expect(UserIdElement.value).toBe(65)
        expect(SecretQuestionIdElement.value).toBe(81)
        expect(AnswerElement.value).toBe('Answer')
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const UserIdElement = screen.getByLabelText(/UserId/i)
        const SecretQuestionIdElement =
            screen.getByLabelText(/SecretQuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        fireEvent.change(UserIdElement, { target: { value: '' } })
        fireEvent.change(SecretQuestionIdElement, { target: { value: '' } })
        fireEvent.change(AnswerElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveSecretQuestionValidateRequestButtonElement = screen.getByRole(
            'button',
            { name: /save/i }
        )

        await clickAndWait(saveSecretQuestionValidateRequestButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(3)
    })
})
