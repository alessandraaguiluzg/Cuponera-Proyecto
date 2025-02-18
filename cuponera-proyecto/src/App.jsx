
import React from 'react'
import CompanyAdminNavbar from './components/company-admin/CompanyAdminNavbar'

function App() {

    const [user, setUser] = useState({ role: null });
    return (

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage setUser={setUser} />} />

                {/* Rutas para cada rol */}
                <Route path="/company-admin/*" element={user.role === "companyAdmin" ? <CompanyAdminLayout /> : <Navigate to="/" />} />
                <Route path="/cuponera-admin/*" element={user.role === "cuponeraAdmin" ? <CuponeraAdminLayout /> : <Navigate to="/" />} />
                <Route path="/customer/*" element={user.role === "customer" ? <CustomerLayout /> : <Navigate to="/" />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
