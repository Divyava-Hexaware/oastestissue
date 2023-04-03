const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import SecretQuestionValidateRequestList from '../SecretQuestionValidateRequestList'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render SecretQuestionValidateRequest rows when api response has data', async () => {
    const endPoint = 'secretQuestionValidateRequest'
    const getSecretQuestionValidateRequestListResponse = [
        {
            id: 1,
            UserId: 78,
            SecretQuestionId: 10,
            Answer: 'Answer',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(
        200,
        getSecretQuestionValidateRequestListResponse
    )
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <SecretQuestionValidateRequestList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const secretQuestionValidateRequestUserIdCell = await screen.findByText(
        /78/i
    )

    expect(secretQuestionValidateRequestUserIdCell).toHaveTextContent(/78/i)
    mock.reset()
})
