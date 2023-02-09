import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute=()=> {

    const value = localStorage.getItem("email", "password")
    console.log(value)

    return (
        value ? <Outlet /> : <Navigate to='/login'/>
    )

}

export default PrivateRoute
