import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface HomeProps {}

export function Home(props: HomeProps) {
    const navigate = useNavigate();
    useEffect(() => {
        let user = localStorage.getItem('token');
        if (user) {
            navigate('/admin/dashboard');
        } else {
            navigate('/login');
        }
    }, []);
    return (
        <div>
            <h3>this is home page</h3>
        </div>
    );
}
