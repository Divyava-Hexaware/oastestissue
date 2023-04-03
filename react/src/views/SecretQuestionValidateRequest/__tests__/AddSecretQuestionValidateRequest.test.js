const {
    render,
    screen,
    fireEvent,
    within,
    waitFor,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'
import AddSecretQuestionValidateRequest from '../AddSecretQuestionValidateRequest'

beforeEach(() => {
    const endPoint = 'SecretQuestionValidateRequest'
    const getStudentListResponse = [
        {
            id: 1,
            UserId: 5,
            SecretQuestionId: 22,
            Answer: 'Answer',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getStudentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AddSecretQuestionValidateRequest />
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

describe('testing view SecretQuestionValidateRequestAdd Component', () => {
    test('should render AddSecretQuestionValidateRequest and to display Add Form title', async () => {
        const headingNote = screen.getByText(/Add Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the add form', async () => {
        const addSecretQuestionValidateRequestButtonElement = screen.getByRole(
            'button',
            { name: /Add/i }
        )

        const UserIdElement = screen.getByLabelText(/UserId/i)
        const SecretQuestionIdElement =
            screen.getByLabelText(/SecretQuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        expect(
            addSecretQuestionValidateRequestButtonElement
        ).toBeInTheDocument()

        expect(UserIdElement).toBeInTheDocument()
        expect(SecretQuestionIdElement).toBeInTheDocument()
        expect(AnswerElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of SecretQuestionValidateRequest add form', async () => {
        const UserIdElement = screen.getByLabelText(/UserId/i)
        const SecretQuestionIdElement =
            screen.getByLabelText(/SecretQuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        fireEvent.change(UserIdElement, { target: { value: 90 } })
        fireEvent.change(SecretQuestionIdElement, { target: { value: 3 } })
        fireEvent.change(AnswerElement, { target: { value: 'Answer' } })
    })

    test('should return error message when add SecretQuestionValidateRequest button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const addSecretQuestionValidateRequestButtonElement = screen.getByRole(
            'button',
            { name: /Add/i }
        )

        await clickAndWait(addSecretQuestionValidateRequestButtonElement)

        let errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(3)
    })
})
