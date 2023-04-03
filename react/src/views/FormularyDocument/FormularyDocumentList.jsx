import React, { useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    deleteFormularyDocument,
    fetchFormularyDocument,
} from './store/FormularyDocument.action'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import { CircularProgress, IconButton } from '@mui/material'
import { Button, Icon } from '@mui/material'

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

const FormularyDocumentList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { entities } = useSelector((state) => state.FormularyDocument)
    const loading = useSelector((state) => state.FormularyDocument.loading)

    const handleDelete = (id) => {
        dispatch(deleteFormularyDocument({ id }))
    }

    const handleEdit = (id) => {
        navigate(`/FormularyDocument/edit/${id}`)
    }

    const handleAdd = () => {
        navigate(`/FormularyDocument/add`)
    }

    useEffect(() => {
        dispatch(fetchFormularyDocument())
    }, [dispatch])

    const rows = entities.map((entity, idCounter) => {
        idCounter += 1
        return { id: idCounter, ...entity }
    })

    const columns = [
        { field: 'documentID', headerName: 'DocumentID', width: 200 },
        { field: 'formularyID', headerName: 'FormularyID', width: 200 },
        { field: 'rxCUI', headerName: 'RxCUI', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'documentName', headerName: 'DocumentName', width: 200 },
        { field: 'languageType', headerName: 'LanguageType', width: 200 },
        { field: 'gPI', headerName: 'GPI', width: 200 },
        { field: 'createdDate', headerName: 'CreatedDate', width: 200 },
        { field: 'documentType', headerName: 'DocumentType', width: 200 },
        {
            field: 'Actions',
            width: 200,
            renderCell: (cellValues) => {
                return (
                    <>
                        <IconButton
                            onClick={() => {
                                handleEdit(cellValues.row.id)
                            }}
                            aria-label="Example"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                handleDelete(cellValues.row.id)
                            }}
                            aria-label="Example"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </>
                )
            },
        },
    ]
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Entities', path: '/FormularyDocument' },
                        { name: 'FormularyDocument' },
                    ]}
                />
            </div>

            <Button
                onClick={() => {
                    handleAdd()
                }}
                color="primary"
                variant="contained"
            >
                <Icon>add</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                    Add FormularyDocument
                </Span>
            </Button>

            <SimpleCard title="FormularyDocument">
                {loading ? (
                    <div
                        title="loading"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <CircularProgress className="progress" />
                    </div>
                ) : (
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                )}
            </SimpleCard>
        </Container>
    )
}

export default FormularyDocumentList
