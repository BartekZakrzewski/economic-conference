import React from 'react'

const Main = ({plan, contact}) => {
  return (
    <div className="container">
      <main className='main'>
        <div className="text-container">
          <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(459.8532002019923 262.85946400870176)"><path d={"M123.8 -145.7C156.3 -120.2 175.6 -77.3 185.6 -31.2C195.5 14.9 196.1 64.2 180.7 116.9C165.3 169.6 133.9 225.8 87 245.7C40.1 265.6 -22.3 249.3 -79.7 225.6C-137.1 201.9 -189.4 170.7 -206 126.4C-222.6 82.1 -203.6 24.8 -187.2 -26.8C-170.7 -78.4 -156.7 -124.2 -125.9 -150C-95.1 -175.7 -47.6 -181.4 -1 -180.2C45.6 -179.1 91.3 -171.1 123.8 -145.7"} fill="#1914b3"></path></g></svg>
          <div className="text">
            <div className="main-text">
              "W obliczu kryzysu"
            </div>
            <div className="subtext">
              <div className="place">1 LO | Łódź, Więckowskiego 41</div>
              <div className="time">9 - 10 Luty 2023</div>
            </div>
          </div>
        </div>
      </main>
      <div className="plan" id='plan' ref={plan}>
        Plan podany będzie wkrótce!
      </div>
      <div className="contact" id='kontakt' ref={contact}>
        <a href="mailto:k.slasko@lo1.elodz.edu.pl">k.slasko@lo1.elodz.edu.pl</a>
        <a href="tel:+48733301342">+48 733 301 342</a>
      </div>
    </div>
  )
}

export default Main
