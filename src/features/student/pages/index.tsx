import {
    Button,
    InputAdornment,
    LinearProgress,
    Pagination,
    TextField,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { columns } from 'features/dashboard/components/StudentTable';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { studentAction } from '../studentSlice';

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { DataGrid } from '@mui/x-data-grid';
import { cityActions } from 'features/city/citySlice';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: '16px',
    },
    loading: {
        position: 'absolute',
        top: '10px',
        width: '100%',
    },
}));

export function Student() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.student.isLoading);
    const filter = useAppSelector((state) => state.student.filter);
    const studentList = useAppSelector((state) => state.student.studentList);
    const pagination = useAppSelector((state) => state.student.pagination);
    const [students, setStudents] = useState(studentList);

    useEffect(() => {
        setStudents(studentList);
    }, [studentList]);
    useEffect(() => {
        dispatch(cityActions.fetchCitiesStart());
    }, [dispatch]);

    useEffect(() => {
        dispatch(studentAction.fetchStudentListStart(filter));
    }, [dispatch, filter]);

    const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
        dispatch(
            studentAction.setFilter({
                ...filter,
                _page: value,
            }),
        );
    };

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params: { row: { id: any } }) => {
                return (
                    <Box className="cellAction">
                        <Link
                            to={`/admin/students/${params.row.id}`}
                            className="cellAction_viewBtn"
                            style={{ textDecoration: 'none' }}
                        >
                            Edit
                        </Link>
                        <Button
                            className="cellAction_deleteBtn"
                            color="error"
                            onClick={() => {
                                setStudents(
                                    students.filter(
                                        (student) =>
                                            student.id !== params.row.id,
                                    ),
                                );
                            }}
                        >
                            Delete
                        </Button>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box>
            {loading && <LinearProgress className={classes.loading} />}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h3" padding="16px 0" fontSize="32px">
                    All Students
                </Typography>
                <Box fontSize="32px">
                    <TextField
                        id="standard-basic"
                        label="Student Name"
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonAddAltIcon color="info" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Link
                        to="/admin/students/add"
                        style={{ textDecoration: 'none', marginLeft: '32px' }}
                    >
                        <Button variant="contained">Add New</Button>
                    </Link>
                </Box>
            </Box>

            {/* <StudentTable rows={studentList} height='660px' /> */}
            <Box sx={{ height: '660px', width: '100%' }}>
                <DataGrid
                    rows={students}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[2]}
                    checkboxSelection
                />
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
                <Pagination
                    color="primary"
                    count={Math.ceil(pagination._totalRows / pagination._limit)}
                    page={pagination._page}
                    onChange={handleChangePage}
                />
            </Box>
        </Box>
    );
}
