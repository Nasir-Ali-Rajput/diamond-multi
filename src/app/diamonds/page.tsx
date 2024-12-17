import { watch } from 'fs'
import React from 'react'

function Diamonds() {
  const diamondsData = [
    {id: 1, name: 'Diamond one', price: 600000, description:'Finest Diamonds 1', Image: '/one.jpg'},
    {id: 2, name: 'Diamond two', price: 660000, description:'Finest Diamonds 2', Image: '/two.jpg'},
    {id: 3, name: 'Diamond three', price: 666000, description:'Finest Diamonds 3', Image: '/three.jpg'},
    {id: 4, name: 'Diamond four', price: 666600, description:'Finest Diamonds 4', Image: '/four.jpg'},
    {id: 5, name: 'Diamond five', price: 666660, description:'Finest Diamonds 5', Image: '/five.jpg'},
    {id: 6, name: 'Diamond six', price: 666666, description:'Finest Diamonds 6', Image: '/six.jpg'},


  ]
  return (
    <div>
<div className='diamonds'>
  {diamondsData.map((diamond)=>(
<div key={diamond.id} className='diamond-card'>
  <img src={diamond.Image} alt={diamond.name} />
  <h3>{diamond.name}</h3>
  <p>{diamond.description}</p>
  <div className='price'>${diamond.price}</div>
  <button>Add to Cart</button>
</div>
  ))}
</div>
    </div>
  )
}

export default Diamonds