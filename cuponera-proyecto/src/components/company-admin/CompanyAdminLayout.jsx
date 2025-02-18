
import React from 'react'
import CompanyAdminNavbar from './CompanyAdminNavbar'

const CompanyAdminLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>

            <CompanyAdminNavbar />
            <main className='p-6 flex-grow'>
                <Outlet />
            </main>


        </div>
    )
}

export default CompanyAdminLayout
