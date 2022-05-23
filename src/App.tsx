import { Counter } from './features/counter/Counter';
import './App.css';
import react, { useEffect, useState } from 'react';
import cityApi from 'api/cityApi';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { Admin } from 'components/Layout/Admin';
import { NotFound } from 'components/Common/NotFound';
import { PrivateRoute } from 'components/Common/PrivateRoute';
import { Home } from 'Home';
import { DashBoard } from 'features/dashboard/pages';
import { Student } from 'features/student/pages';
import StudentForm from 'features/student/components/StudentForm';
import AddEditPage from 'features/student/pages/AddEditPage';


function App() {

  useEffect(() => {
    console.log('data: ', cityApi.getAllCities().then((res) => console.log(res.data)));

  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin' element={
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      } > 
        <Route path='/admin/dashboard' element={<DashBoard />} />
        <Route path='/admin/students' element={<Student />} />
        <Route path='/admin/students/add' element={<StudentForm />} />
        <Route path='/admin/students/:studentId' element={<AddEditPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
