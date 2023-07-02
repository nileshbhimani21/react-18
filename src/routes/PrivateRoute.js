import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Profile from '../pages/Profile'
import Ui from '../pages/Ui'

export default function PrivateRoute() {
    return (
        <DashboardLayout>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/ui" element={<Ui />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </DashboardLayout>
    )
}
