import { Breadcrumb, SimpleCard } from 'components'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    addFormularyDocument,
    fetchFormularyDocument,
} from './store/FormularyDocument.action'

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

const AddFormularyDocument = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [documentID, setDocumentID] = useState('')
    const [formularyID, setFormularyID] = useState('')
    const [rxCUI, setRxCUI] = useState('')
    const [description, setDescription] = useState('')
    const [documentName, setDocumentName] = useState('')
    const [languageType, setLanguageType] = useState('')
    const [gPI, setGPI] = useState('')
    const [createdDate, setCreatedDate] = useState('')
    const [documentType, setDocumentType] = useState('')

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
            addFormularyDocument({
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

    useEffect(() => {
        return () => {
            setDocumentID('')
            setFormularyID('')
            setRxCUI('')
            setDescription('')
            setDocumentName('')
            setLanguageType('')
            setGPI('')
            setCreatedDate('')
            setDocumentType('')
        }
    }, [])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'AddFormularyDocument',
                            path: '/FormularyDocument',
                        },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="number"
                                name="DocumentID"
                                id="documentIDInput"
                                onChange={handleDocumentID}
                                value={documentID || ''}
                                label="DocumentID"
                            />

                            <TextField
                                type="text"
                                name="FormularyID"
                                id="formularyIDInput"
                                onChange={handleFormularyID}
                                value={formularyID}
                                label="FormularyID"
                            />

                            <TextField
                                type="text"
                                name="RxCUI"
                                id="rxCUIInput"
                                onChange={handleRxCUI}
                                value={rxCUI}
                                label="RxCUI"
                            />

                            <TextField
                                type="text"
                                name="Description"
                                id="descriptionInput"
                                onChange={handleDescription}
                                value={description}
                                label="Description"
                            />

                            <TextField
                                type="text"
                                name="DocumentName"
                                id="documentNameInput"
                                onChange={handleDocumentName}
                                value={documentName}
                                label="DocumentName"
                            />

                            <TextField
                                type="text"
                                name="LanguageType"
                                id="languageTypeInput"
                                onChange={handleLanguageType}
                                value={languageType}
                                label="LanguageType"
                            />

                            <TextField
                                type="text"
                                name="GPI"
                                id="gPIInput"
                                onChange={handleGPI}
                                value={gPI}
                                label="GPI"
                            />

                            <TextField
                                type="date"
                                name="CreatedDate"
                                id="createdDateInput"
                                onChange={handleCreatedDate}
                                value={createdDate || ''}
                            />

                            <TextField
                                type="text"
                                name="DocumentType"
                                id="documentTypeInput"
                                onChange={handleDocumentType}
                                value={documentType}
                                label="DocumentType"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Add
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default AddFormularyDocument
