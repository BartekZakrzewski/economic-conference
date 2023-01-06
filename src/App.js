import React, {useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Registration from './components/Registration'

const App = () => {
    const [page, setPage] = useState(false);
    const plan = useRef(null);
    const contact = useRef(null);

    const setRegistration = () => setPage(true);
    const setMain = () => setPage(false);

    return (
        <div>
            <Navbar page={page} plan={plan} contact={contact} setMain={setMain} setRegistration={setRegistration} />
            {!page ? <Main plan={plan} contact={contact} /> : <Registration />}
        </div>
    )
}

export default App
