import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {
    editFormularyDocument,
    fetchFormularyDocument,
} from './store/FormularyDocument.action'
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

const EditFormularyDocument = () => {
    const { id: FormularyDocumentId } = useParams()

    const FormularyDocument = useSelector((state) =>
        state.FormularyDocument.entities.find(
            (FormularyDocument) =>
                FormularyDocument.id.toString() ===
                FormularyDocumentId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [DocumentID, setDocumentID] = useState(FormularyDocument.DocumentID)

    const [FormularyID, setFormularyID] = useState(
        FormularyDocument.FormularyID
    )

    const [RxCUI, setRxCUI] = useState(FormularyDocument.RxCUI)

    const [Description, setDescription] = useState(
        FormularyDocument.Description
    )

    const [DocumentName, setDocumentName] = useState(
        FormularyDocument.DocumentName
    )

    const [LanguageType, setLanguageType] = useState(
        FormularyDocument.LanguageType
    )

    const [GPI, setGPI] = useState(FormularyDocument.GPI)

    const [CreatedDate, setCreatedDate] = useState(
        FormularyDocument.CreatedDate.split('T')[0]
    )

    const [DocumentType, setDocumentType] = useState(
        FormularyDocument.DocumentType
    )

    const handleDocumentID = (e) => setDocumentID(parseInt(e.target.value))
    const handleFormularyID = (e) => setFormularyID(e.target.value)
    const handleRxCUI = (e) => setRxCUI(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleDocumentName = (e) => setDocumentName(e.target.value)
    const handleLanguageType = (e) => setLanguageType(e.target.value)
    const handleGPI = (e) => setGPI(e.target.value)
    const handleCreatedDate = (e) => setCreatedDate(e.target.value)
    const handleDocumentType = (e) => setDocumentType(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            editFormularyDocument({
                id: FormularyDocumentId,
                documentID,
                formularyID,
                rxCUI,
                description,
                documentName,
                languageType,
                gPI,
                createdDate,
                documentType,
            })
        ).then(() => {
            dispatch(fetchFormularyDocument())
        })
        navigate('/FormularyDocument')
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'EditFormularyDocument',
                            path: '/FormularyDocument',
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
                                name="DocumentID"
                                id="documentIDInput"
                                onChange={handleDocumentID}
                                value={documentID || ''}
                                validators={['required']}
                                label="DocumentID"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="FormularyID"
                                id="formularyIDInput"
                                onChange={handleFormularyID}
                                value={formularyID}
                                validators={['required']}
                                label="FormularyID"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="RxCUI"
                                id="rxCUIInput"
                                onChange={handleRxCUI}
                                value={rxCUI}
                                validators={['required']}
                                label="RxCUI"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Description"
                                id="descriptionInput"
                                onChange={handleDescription}
                                value={description}
                                validators={['required']}
                                label="Description"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="DocumentName"
                                id="documentNameInput"
                                onChange={handleDocumentName}
                                value={documentName}
                                validators={['required']}
                                label="DocumentName"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="LanguageType"
                                id="languageTypeInput"
                                onChange={handleLanguageType}
                                value={languageType}
                                validators={['required']}
                                label="LanguageType"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="GPI"
                                id="gPIInput"
                                onChange={handleGPI}
                                value={gPI}
                                validators={['required']}
                                label="GPI"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                type="date"
                                name="CreatedDate"
                                id="createdDateInput"
                                onChange={handleCreatedDate}
                                value={createdDate}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="DocumentType"
                                id="documentTypeInput"
                                onChange={handleDocumentType}
                                value={documentType}
                                validators={['required']}
                                label="DocumentType"
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

export default EditFormularyDocument
