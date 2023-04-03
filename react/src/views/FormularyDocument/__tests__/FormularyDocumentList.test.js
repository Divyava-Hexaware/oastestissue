const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import FormularyDocumentList from '../FormularyDocumentList'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render FormularyDocument rows when api response has data', async () => {
    const endPoint = 'formularyDocument'
    const getFormularyDocumentListResponse = [
        {
            id: 1,
            DocumentID: 43,
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
    mock.onGet(`/${endPoint}`).reply(200, getFormularyDocumentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <FormularyDocumentList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const formularyDocumentDocumentIDCell = await screen.findByText(/43/i)

    expect(formularyDocumentDocumentIDCell).toHaveTextContent(/43/i)
    mock.reset()
})
