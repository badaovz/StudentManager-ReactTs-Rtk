import { Box, Typography } from "@mui/material";
import studentApi from "api/studentApi";
import { Student } from "models";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StudentForm from "../components/StudentForm";


const AddEditPage = () => {
    const navigate = useNavigate();
    const {studentId} = useParams<{studentId:string}>();
    const isEdit = Boolean(studentId);
    const [student, setStudent] = useState<Student>();
    useEffect(() => {
        if(!studentId) return;
        (async () => {
            try {
                const data: Student = await studentApi.getStudentById(studentId);
                setStudent(data);
            } catch (err) {
                console.log('get Student By Id Failed!', err);
            }
        })();
    }, [studentId]);
    console.log('isEdit: ', isEdit)
    const handleStudentFormSubmit = async (formValues:Student) => {
        if(isEdit){
            await studentApi.updateStudent(formValues);
        }else {
            await studentApi.addStudent(formValues);
        }

        toast.success('Save student success!');
        navigate('/admin/students');
    }
    const initialStudent: Student = {
        name: '',
        age: '',
        mark: '',
        gender: 'male',
        city: '',
        ...student,
    } as Student;    

    const arr = ['mbv', 'mec', 'lexus'];
    interface ListProps {
        data: string[],
        children: (item: string, index: number) => void
    }
    function List({data, children}:ListProps)  {
        return(
            <ul>
                {data.map((item, index) => children(item, index))}
            </ul>
        )
    }
    console.log('objecssssssssssssssssddddddddsssddsssssssssssst');


    return (
        <Box>
            <Box>
                <List data={arr}>
                    {(item, index) => <li key={index}>{item}</li>}
                </List>
            </Box>
            <Link to='/admin/students'>
                <Typography variant="caption" sx={{display: 'flex', alignItems: 'center'}}>
                    <ChevronLeftIcon />back to student list
                </Typography>
            </Link>
            <Typography variant='h4'>{isEdit ? 'Update Student info' : 'Add new student'}</Typography>
            {
                (!isEdit || Boolean(student))&&(
                    <Box mt={3}>
                        <StudentForm initialValue={initialStudent} onSubmit={handleStudentFormSubmit} />
                    </Box>
                )
            }
        </Box>
    );
};

export default AddEditPage;
