import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Setting from '../pages/Setting'

export default function PrivateRoute() {
    return (
        <DashboardLayout>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/setting" element={<Setting />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </DashboardLayout>
    )
}
