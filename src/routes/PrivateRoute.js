import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const { user, authToken } = useSelector((state) => state.auth)
    if ((user === null || user === undefined) && (authToken === null || authToken === undefined)) {
        return <Navigate to="/auth" replace />
    }
    return children
}

export const AuthRoute = ({ children }) => {
    const { user, authToken } = useSelector((state) => state.auth)
    if ((user === null || user === undefined) && (authToken === null || authToken === undefined)) {
        return children 
    }
    return <Navigate to="/" replace />
}