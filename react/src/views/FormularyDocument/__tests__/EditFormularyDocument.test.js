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
import EditFormularyDocument from '../EditFormularyDocument'
import { FormularyDocumentAdded } from '../store/FormularyDocumentSlice'
beforeAll(() => {
    store.dispatch(
        FormularyDocumentAdded({
            id: 1,
            DocumentID: 29,
            FormularyID: 'FormularyID',
            RxCUI: 'RxCUI',
            Description: 'Description',
            DocumentName: 'DocumentName',
            LanguageType: 'LanguageType',
            GPI: 'GPI',
            CreatedDate: 'CreatedDate',
            DocumentType: 'DocumentType',
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
                                        to="FormularyDocument/edit/1"
                                        replace
                                    />
                                }
                            />
                            <Route
                                path="FormularyDocument/edit/:id"
                                element={<EditFormularyDocument />}
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

describe('testing view of FormularyDocumentEdit Component', () => {
    test('should render EditFormularyDocument and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveFormularyDocumentButtonElement = screen.getByRole('button', {
            name: /save/i,
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

        expect(saveFormularyDocumentButtonElement).toBeInTheDocument()

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

    test('should be able to give inputs to all fields of FormularyDocument edit form', async () => {
        const DocumentIDElement = screen.getByLabelText(/DocumentID/i)
        const FormularyIDElement = screen.getByLabelText(/FormularyID/i)
        const RxCUIElement = screen.getByLabelText(/RxCUI/i)
        const DescriptionElement = screen.getByLabelText(/Description/i)
        const DocumentNameElement = screen.getByLabelText(/DocumentName/i)
        const LanguageTypeElement = screen.getByLabelText(/LanguageType/i)
        const GPIElement = screen.getByLabelText(/GPI/i)
        const CreatedDateElement = screen.getByLabelText(/CreatedDate/i)
        const DocumentTypeElement = screen.getByLabelText(/DocumentType/i)

        fireEvent.change(DocumentIDElement, { target: { value: 95 } })
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

        expect(DocumentIDElement.value).toBe(95)
        expect(FormularyIDElement.value).toBe('FormularyID')

        expect(RxCUIElement.value).toBe('RxCUI')

        expect(DescriptionElement.value).toBe('Description')

        expect(DocumentNameElement.value).toBe('DocumentName')

        expect(LanguageTypeElement.value).toBe('LanguageType')

        expect(GPIElement.value).toBe('GPI')

        expect(CreatedDateElement.value).toBe('CreatedDate')
        expect(DocumentTypeElement.value).toBe('DocumentType')
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const DocumentIDElement = screen.getByLabelText(/DocumentID/i)
        const FormularyIDElement = screen.getByLabelText(/FormularyID/i)
        const RxCUIElement = screen.getByLabelText(/RxCUI/i)
        const DescriptionElement = screen.getByLabelText(/Description/i)
        const DocumentNameElement = screen.getByLabelText(/DocumentName/i)
        const LanguageTypeElement = screen.getByLabelText(/LanguageType/i)
        const GPIElement = screen.getByLabelText(/GPI/i)
        const CreatedDateElement = screen.getByLabelText(/CreatedDate/i)
        const DocumentTypeElement = screen.getByLabelText(/DocumentType/i)

        fireEvent.change(DocumentIDElement, { target: { value: '' } })
        fireEvent.change(FormularyIDElement, { target: { value: '' } })
        fireEvent.change(RxCUIElement, { target: { value: '' } })
        fireEvent.change(DescriptionElement, { target: { value: '' } })
        fireEvent.change(DocumentNameElement, { target: { value: '' } })
        fireEvent.change(LanguageTypeElement, { target: { value: '' } })
        fireEvent.change(GPIElement, { target: { value: '' } })
        fireEvent.change(CreatedDateElement, { target: { value: '' } })
        fireEvent.change(DocumentTypeElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveFormularyDocumentButtonElement = screen.getByRole('button', {
            name: /save/i,
        })

        await clickAndWait(saveFormularyDocumentButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(9)
    })
})
