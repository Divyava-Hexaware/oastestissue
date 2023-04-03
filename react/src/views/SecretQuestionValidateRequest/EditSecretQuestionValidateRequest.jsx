import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {
    editSecretQuestionValidateRequest,
    fetchSecretQuestionValidateRequest,
} from './store/SecretQuestionValidateRequest.action'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const EditSecretQuestionValidateRequest = () => {
    const { id: SecretQuestionValidateRequestId } = useParams()

    const SecretQuestionValidateRequest = useSelector((state) =>
        state.SecretQuestionValidateRequest.entities.find(
            (SecretQuestionValidateRequest) =>
                SecretQuestionValidateRequest.id.toString() ===
                SecretQuestionValidateRequestId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [UserId, setUserId] = useState(SecretQuestionValidateRequest.UserId)

    const [SecretQuestionId, setSecretQuestionId] = useState(
        SecretQuestionValidateRequest.SecretQuestionId
    )

    const [Answer, setAnswer] = useState(SecretQuestionValidateRequest.Answer)

    const handleUserId = (e) => setUserId(parseInt(e.target.value))
    const handleSecretQuestionId = (e) =>
        setSecretQuestionId(parseInt(e.target.value))
    const handleAnswer = (e) => setAnswer(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            editSecretQuestionValidateRequest({
                id: SecretQuestionValidateRequestId,
                userId,
                secretQuestionId,
                answer,
            })
        ).then(() => {
            dispatch(fetchSecretQuestionValidateRequest())
        })
        navigate('/SecretQuestionValidateRequest')
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'EditSecretQuestionValidateRequest',
                            path: '/SecretQuestionValidateRequest',
                        },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="number"
                                name="UserId"
                                id="userIdInput"
                                onChange={handleUserId}
                                value={userId || ''}
                                validators={['required']}
                                label="UserId"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                type="number"
                                name="SecretQuestionId"
                                id="secretQuestionIdInput"
                                onChange={handleSecretQuestionId}
                                value={secretQuestionId || ''}
                                validators={['required']}
                                label="SecretQuestionId"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Answer"
                                id="answerInput"
                                onChange={handleAnswer}
                                value={answer}
                                validators={['required']}
                                label="Answer"
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>send</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Save
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default EditSecretQuestionValidateRequest
