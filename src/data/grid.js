import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    image: './images/range-rover.jpg',
    name: 'Range Rover',
    desc: 'Traverse the lands in a Luxury SUV...in style.',
    price: '211,000',
  },
  {
    id: uuidv4(),
    image: './images/defender-new-1.jpg',
    name: 'Land Rover Defender',
    desc: 'Nothing can stop you in the Land Rover!',
    price: '92,000',
  },
  {
    id: uuidv4(),
    image: './images/range-rover-2.jpg',
    name: 'Range Rover Sport',
    desc: 'Experience different taste with the new Range Rover Sport.',
    price: '242,000',
  },
]

export default data
