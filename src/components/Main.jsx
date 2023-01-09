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
              <a target="_blank" href='https://goo.gl/maps/HmDgq3teU9ja9Eoq6' className="place"><span className='span'>📍 </span><span>1 LO | Łódź, Więckowskiego 41 </span></a>
              <div className="time">📅 9 - 10 Luty 2023 </div>
            </div>
          </div>
        </div>
      </main>
      <div className="plan" id='plan' ref={plan}>
        Plan podany będzie wkrótce!
      </div>
      <div className="contact" id='kontakt' ref={contact}>
        <a className='contact-item' href="mailto:k.slasko@lo1.elodz.edu.pl">k.slasko@lo1.elodz.edu.pl</a>
        <a className='contact-item' href="tel:+48733301342">+48 733 301 342</a>
      </div>
    </div>
  )
}

export default Main
