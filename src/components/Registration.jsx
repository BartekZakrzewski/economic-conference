import React, { useRef, useState } from 'react'

const Registration = ({ page, setMain, setRegistration }) => {
    const [isPosted, setPosted] = useState(false);
    const [err, setErr] = useState(false);

    const form = useRef(null)
    const submit = async (e) => {
        setErr(false);
        e.preventDefault();
        await fetch(form.current.action, {
            method : "POST",
            body: new FormData(form.current),
        }).then(
            response => response.json()
        ).then(() => {
            setPosted(true);
            setTimeout(() => {
                setPosted(false);
                setMain();
            }, 10000);
        }).catch(err => {
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 1000);
        });
    };

    return (
        <div className={`registration-container ${isPosted &&  'registration-posted'}`}>
            <div className={`login-box ${isPosted && 'login-posted'}`}>
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
                    <div className={`err-message ${err && 'error'}`}>Nie udało się wysłać zgłoszenia, spróbuj ponownie!</div>
                </form>
            </div> 

            <div className={`congrats-message ${isPosted && 'posted'}`}>
                <div className="thank-text">
                    Dziękujemy za rejestrację na naszą <span>konferencję</span>!
                </div>
                <div className="thank-info">
                    <div className="time">📅 Widzimy się 9 i 10 Lutego!</div>
                    <a target="_blank" href='https://goo.gl/maps/HmDgq3teU9ja9Eoq6' className="place"><span className='span'>📍 </span><span>1 LO | Łódź, Więckowskiego 41 </span></a>
                </div>
            </div>
        </div>
    )
}

export default Registration
