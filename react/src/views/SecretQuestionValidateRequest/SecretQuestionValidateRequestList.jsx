import React, { useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    deleteSecretQuestionValidateRequest,
    fetchSecretQuestionValidateRequest,
} from './store/SecretQuestionValidateRequest.action'
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

const SecretQuestionValidateRequestList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { entities } = useSelector(
        (state) => state.SecretQuestionValidateRequest
    )
    const loading = useSelector(
        (state) => state.SecretQuestionValidateRequest.loading
    )

    const handleDelete = (id) => {
        dispatch(deleteSecretQuestionValidateRequest({ id }))
    }

    const handleEdit = (id) => {
        navigate(`/SecretQuestionValidateRequest/edit/${id}`)
    }

    const handleAdd = () => {
        navigate(`/SecretQuestionValidateRequest/add`)
    }

    useEffect(() => {
        dispatch(fetchSecretQuestionValidateRequest())
    }, [dispatch])

    const rows = entities.map((entity, idCounter) => {
        idCounter += 1
        return { id: idCounter, ...entity }
    })

    const columns = [
        { field: 'userId', headerName: 'UserId', width: 200 },
        {
            field: 'secretQuestionId',
            headerName: 'SecretQuestionId',
            width: 200,
        },
        { field: 'answer', headerName: 'Answer', width: 200 },
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
                        {
                            name: 'Entities',
                            path: '/SecretQuestionValidateRequest',
                        },
                        { name: 'SecretQuestionValidateRequest' },
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
                    Add SecretQuestionValidateRequest
                </Span>
            </Button>

            <SimpleCard title="SecretQuestionValidateRequest">
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

export default SecretQuestionValidateRequestList
