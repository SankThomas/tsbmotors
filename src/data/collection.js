import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    name: 'Audi Q7',
    image: './images/audi-2.jpg',
    desc:
      'The Audi Q7 is a mid-size luxury SUV made by the German manufacturer Audi, unveiled in September 2005 at the Frankfurt Motor Show. Production of this seven-seater SUV began in the autumn of 2005 at the Volkswagen Bratislava Plant in Bratislava, Slovakia. It was the first SUV offering from Audi and went on sale in 2006.',
    body: '4-door-SUV',
    manufacturer: 'Audi AG',
    carClass: 'Luxury SUV',
  },
  {
    id: uuidv4(),
    name: 'BMW M5',
    image: './images/bmw-3.jpg',
    desc:
      'The BMW M5 is a high performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports sedan category. ... The first M5 model was hand-built in 1985 on the E28 535i chassis with a modified engine from the M1 that made it the fastest production sedan at the time.',
    body: '2-door-Coupe',
    manufacturer: 'BMW',
    carClass: 'Coupe',
  },
  {
    id: uuidv4(),
    name: 'BMW Convertible',
    image: './images/bmw-5.jpg',
    desc:
      'The BMW M5 is a high performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports sedan category. ... The first M5 model was hand-built in 1985 on the E28 535i chassis with a modified engine from the M1 that made it the fastest production sedan at the time.',
    body: '2-door-Convertible',
    manufacturer: 'BMW',
    carClass: 'Luxury Convertible',
  },
  {
    id: uuidv4(),
    name: 'Mercedes AMG',
    image: './images/mercedes-amg.jpg',
    desc:
      'With huge power, grip, and civility, the Mercedes-AMG GT is a true front-engine supercar that can be driven every day, both to work and on the racetrack.',
    body: '2-door-Coupe',
    manufacturer: 'Mercedes',
    carClass: 'Sports Car',
  },
]

export default data
