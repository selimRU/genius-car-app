import { useContext } from 'react';
import { DataContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(DataContext)
    const location = useLocation()
    if (loading)
        return <div className=' flex justify-center'>
            <RingLoader
                color={'pink'}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>


    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate >
    }
    return children

};

export default PrivateRoute;