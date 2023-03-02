import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function DashboardLayout({ children }) {
    return (
        <main className="NB_main">
            <Sidebar />
            <div className="NB_mainContentWidthHeader">
                <Header />
                <div className="NB_mainContent">
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    )
}
