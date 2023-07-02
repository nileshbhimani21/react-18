import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function DashboardLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <main className="flex min-h-screen">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
            <div className="w-full">
                <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
                <div className="NB_mainContent">
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    )
}
