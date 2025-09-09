import React from 'react'
import weddingImg from '../assets/wedding.jpeg'
import birthdayImg from '../assets/birthday.jpeg'
import corporateImg from '../assets/corporate.jpeg'

function Packages() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Section Heading */}
     

      {/* Grid of Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={weddingImg} alt="Classic Wedding" className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Classic Wedding</h2>
            <p>
              A timeless garden ceremony with elegant décor, floral arrangements,
              and full event coordination for your big day.
            </p>
            <div className="card-actions justify-start">
              <button className="btn bg-amber-500 hover:bg-amber-600 text-white">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={birthdayImg} alt="Luxury Wedding" className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Luxury Wedding</h2>
            <p>
              An extravagant setup with bespoke styling, gourmet catering, and
              premium photography to capture every magical moment.
            </p>
            <div className="card-actions justify-start">
              <button className="btn bg-amber-500 hover:bg-amber-600 text-white">Learn More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={corporateImg} alt="Destination Wedding" className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Destination Wedding</h2>
            <p>
              Escape to the highlands of Redhill with an intimate ceremony,
              luxury tents, and breathtaking scenery for an unforgettable wedding.
            </p>
            <div className="card-actions justify-start">
              <button className="btn bg-amber-500 hover:bg-amber-600 text-white">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
