import { NotFound } from 'components/Common/NotFound';
import { PrivateRoute } from 'components/Common/PrivateRoute';
import { Admin } from 'components/Layout/Admin';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { DashBoard } from 'features/dashboard/pages';
import StudentForm from 'features/student/components/StudentForm';
import { Student } from 'features/student/pages';
import AddEditPage from 'features/student/pages/AddEditPage';
import { Home } from 'Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './features/about';
import Setting from './features/setting';

function App() {
    console.log('object');
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                }
            >
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="students" element={<Student />} />
                <Route path="students/add" element={<StudentForm />} />
                <Route path="students/:studentId" element={<AddEditPage />} />
                <Route path="about" element={<About />} />
                <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
