import React from 'react'

const Main = ({plan, contact}) => {
  return (
    <div className="container">
      <main className='main'>
        <div className="text-container">
          <div className="circle">
            <div className="main-text">
              "W obliczu kryzysu"
            </div>
            <div className="subtext">
              <a target="_blank" href='https://fb.me/e/3hCjiry9g' className="place"><span className='span'>📍 </span><span>1 LO | Łódź, Więckowskiego 41 </span></a>
              <div className="time">📅 9 - 10 Luty 2023 </div>
            </div>
          </div>
        </div>
      </main>
      <div className="plan" id='plan' ref={plan}>
        <div className="plan-container">
          <h4 className="plan-header">Godziny</h4>
          <h4 className="plan-header">Wydarzenia</h4>
          <h4 className="plan-header">Prelegenci</h4>

          <div className="plan-cell"></div>
          <div className="plan-date">09.02</div>
          <div className="plan-cell"></div>

          <div className="plan-time">11:30 - 12:00</div>

            <div className="plan-cell">Rejestracja uczestników</div>
            <div className="plan-cell"></div>

          <div className="plan-time">12:00 - 12:10</div>

            <div className="plan-cell">Otwarcie konferencji</div>
            <div className="plan-cell"></div>
          
          <div className="plan-time">12:10 - 12:30</div>

            <div className="plan-cell">Inflacja – czym jest naprawdę. Ujęcie teoretyczne</div>
            <div className="plan-cell">Dr hab.  Karol Klimczak (Politechnika Łódzka)</div>
          
          <div className="plan-time">12:30 - 12:50</div>

            <div className="plan-cell">Jak NBP przeciwdziała inflacji?  Stabilizacja gospodarki za pomocą instrumentów polityki pieniężnej</div>
            <div className="plan-cell">Dr Wiktor Wojciechowski (Szkoła Główna Handlowa)</div>
          
          <div className="plan-time">12:50 - 13:10</div>

            <div className="plan-cell">"Czarne Łabędzie nie były czarne! DYWILAN 2020-2022"</div>
            <div className="plan-cell">Pan Piotr Jakubiak (prezes łódzkiej firmy Dywilan)</div>
          
          <div className="plan-time">13:10 - 13:40</div>

            <div className="plan-cell">Debata prelegentów. Kto jest odpowiedzialny za kryzys?</div>
            <div className="plan-cell">
              <span>Dr hab.  Karol Klimczak (Politechnika Łódzka)</span>
              <span>Dr Wiktor Wojciechowski (Szkoła Główna Handlowa) </span>
              <span>Pan Piotr Jakubiak (prezes łódzkiej firmy Dywilan)</span> 
            </div>
          
          <div className="plan-time">13:40 - 14:00</div>

            <div className="plan-cell">Zakończenie/podsumowanie konferencji</div>
            <div className="plan-cell"></div>
          
          <div className="plan-time">14:00 - 14:15</div>

            <div className="plan-cell">Dyskusja pomiędzy uczniami i prelegentami</div>
            <div className="plan-cell"></div>

            <div className="plan-cell"></div>
            <div className="plan-date">10.02</div>
            <div className="plan-cell"></div>

            <div className="plan-cell"></div>
            <div className="plan-date">Reszta planu zostanie podana niedługo</div>
            <div className="plan-cell"></div>
            
        </div>

        <div className="infos">
          <h1 className="i-header">Informacje</h1>
          <div className="info info-list">
            <div className="info-header">Pierwszego dnia w konferencji weźmie udział trzech prelegentów:</div>
            <ul className="i-list">
              <li>Dr hab. Karol Klimczak (Politechnika Łódzka)</li>
              <li>Dr Wiktor Wojciechowski (były pracownik NBP)</li>
              <li>Pan Piotr Jakubiak (prezes łódzkiej firmy Dywilan)</li>
            </ul>
          </div>
          <div className="info info-text">
            Do udziału w konferencji zostali zaproszeni uczniowie pięciu łódzkich liceów: I LO, III LO, XXI LO, PLOPŁ, PLOUŁ
          </div>
          <div className="info info-text">
            Konferencja będzie zawierała elementy debaty. Chętni uczniowie stworzą 3-5 osobowe grupy i przygotują plakat (w formie tradycyjnej lub elektronicznej). Elementem plakatu ma być sformułowanie tezy dotyczącej inflacji. Podczas debaty uczniowie będą musieli obronić swoją tezę. Z tego powodu bardzo ważne jest, dokładne przygotowanie się wybranych uczestników do wystąpienia. Ciekawe komu uda się przekonać ekspertów do swojej tezy? Powodzenia!
          </div>
        </div>
      </div>

      <div className="contact" id='kontakt' ref={contact}>
        <a className='contact-item' href="mailto:k.slasko@lo1.elodz.edu.pl">k.slasko@lo1.elodz.edu.pl</a>
        <a className='contact-item' href="tel:+48733301342">+48 733 301 342</a>
      </div>
      <div className="contact rules-of-privacy">
        <a target="_blank" href='/zasady-prywatnosci.pdf' className='contact-item'>Zasady Prywatności</a>
      </div>
    </div>
  )
}

export default Main
