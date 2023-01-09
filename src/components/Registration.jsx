import React, { useRef } from 'react'

const Registration = () => {
    const form = useRef(null)
    const submit = e => {
        e.preventDefault();
        fetch(form.current.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then(() => {
        });
    };

    return (
        <div className="registration-container">
            <div className="login-box">
                <h2>Rejestracja</h2>
                <form action="https://sheetdb.io/api/v1/baeke8zt03kdn" onSubmit={submit} method="POST" id="sheetdb-form" ref={form}>
                    <div className="user-box">
                        <input type="text"  name="data[Imie]" required />
                        <label>Imię</label>
                    </div>
                    <div className="user-box">
                        <input type="text"  name="data[Nazwisko]" required />
                        <label>Nazwisko</label>
                    </div>
                    <div className="user-box">
                        <input type="text"  name="data[Klasa]" required />
                        <label>Klasa</label>
                    </div>
                    <div className="user-box">  
                        <input type="text" name="data[Szkola]" required />
                        <label>Szkoła</label>
                    </div>
                    <div className="user-box">
                        <input type="text"  name="data[Profil]" required />
                        <label>Profil</label>
                    </div>
                    <div className="user-box">  
                        <input type="email" name="data[Email]" required />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text"  name="data[1pytanie]" required />
                        <label>Czego chciałbys dowiedzieć się na konferencji?</label>
                    </div>
                    <div className="user-box">
                        <input type="text"  name="data[2pytanie]" />
                        <label>Jakiego prelegenta wyczekujesz najbardziej? *Nie wymagane* </label> 
                    </div>
                    <div className="user-box">
                        <input type="text"  name="data[3pytanie]" required />
                        <label>Jak Twoja obecność sprawi, że inni uczestnicy zaangażują się w konferencję? </label> 
                    </div>

                    <button type="submit">WYŚLIJ</button>
                </form>
            </div> 
        </div>
    )
}

export default Registration
