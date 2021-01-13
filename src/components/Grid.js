import React from 'react'
import data from '../data/grid'

const Grid = () => {
  const [cards, setCards] = React.useState(data)

  return (
    <>
      <h2 className="text-center pt-10 text-2xl font-bold lg:text-4xl">
        Featured
      </h2>
      <section className="grid grid-cols-1 gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const { id, name, desc, image, price } = card

          return (
            <div key={id} className="bg-red-200 rounded-lg">
              <img
                className="rounded-lg rounded-b-none"
                src={image}
                alt={name}
              />
              <div className="px-8 py-5">
                <h4 className="font-bold text-xl mb-2">{name}</h4>
                <p className="mb-3">{desc}</p>
                <p className="font-bold">Starting at: $ {price}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Grid
