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
import AddFormularyDocument from '../AddFormularyDocument'

beforeEach(() => {
    const endPoint = 'FormularyDocument'
    const getStudentListResponse = [
        {
            id: 1,
            DocumentID: 100,
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
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getStudentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AddFormularyDocument />
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

describe('testing view FormularyDocumentAdd Component', () => {
    test('should render AddFormularyDocument and to display Add Form title', async () => {
        const headingNote = screen.getByText(/Add Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the add form', async () => {
        const addFormularyDocumentButtonElement = screen.getByRole('button', {
            name: /Add/i,
        })

        const DocumentIDElement = screen.getByLabelText(/DocumentID/i)
        const FormularyIDElement = screen.getByLabelText(/FormularyID/i)
        const RxCUIElement = screen.getByLabelText(/RxCUI/i)
        const DescriptionElement = screen.getByLabelText(/Description/i)
        const DocumentNameElement = screen.getByLabelText(/DocumentName/i)
        const LanguageTypeElement = screen.getByLabelText(/LanguageType/i)
        const GPIElement = screen.getByLabelText(/GPI/i)
        const CreatedDateElement = screen.getByLabelText(/CreatedDate/i)
        const DocumentTypeElement = screen.getByLabelText(/DocumentType/i)

        expect(addFormularyDocumentButtonElement).toBeInTheDocument()

        expect(DocumentIDElement).toBeInTheDocument()
        expect(FormularyIDElement).toBeInTheDocument()
        expect(RxCUIElement).toBeInTheDocument()
        expect(DescriptionElement).toBeInTheDocument()
        expect(DocumentNameElement).toBeInTheDocument()
        expect(LanguageTypeElement).toBeInTheDocument()
        expect(GPIElement).toBeInTheDocument()
        expect(CreatedDateElement).toBeInTheDocument()
        expect(DocumentTypeElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of FormularyDocument add form', async () => {
        const DocumentIDElement = screen.getByLabelText(/DocumentID/i)
        const FormularyIDElement = screen.getByLabelText(/FormularyID/i)
        const RxCUIElement = screen.getByLabelText(/RxCUI/i)
        const DescriptionElement = screen.getByLabelText(/Description/i)
        const DocumentNameElement = screen.getByLabelText(/DocumentName/i)
        const LanguageTypeElement = screen.getByLabelText(/LanguageType/i)
        const GPIElement = screen.getByLabelText(/GPI/i)
        const CreatedDateElement = screen.getByLabelText(/CreatedDate/i)
        const DocumentTypeElement = screen.getByLabelText(/DocumentType/i)

        fireEvent.change(DocumentIDElement, { target: { value: 69 } })
        fireEvent.change(FormularyIDElement, {
            target: { value: 'FormularyID' },
        })
        fireEvent.change(RxCUIElement, { target: { value: 'RxCUI' } })
        fireEvent.change(DescriptionElement, {
            target: { value: 'Description' },
        })
        fireEvent.change(DocumentNameElement, {
            target: { value: 'DocumentName' },
        })
        fireEvent.change(LanguageTypeElement, {
            target: { value: 'LanguageType' },
        })
        fireEvent.change(GPIElement, { target: { value: 'GPI' } })
        fireEvent.change(CreatedDateElement, {
            target: { value: 'CreatedDate' },
        })
        fireEvent.change(DocumentTypeElement, {
            target: { value: 'DocumentType' },
        })
    })

    test('should return error message when add FormularyDocument button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const addFormularyDocumentButtonElement = screen.getByRole('button', {
            name: /Add/i,
        })

        await clickAndWait(addFormularyDocumentButtonElement)

        let errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(9)
    })
})
