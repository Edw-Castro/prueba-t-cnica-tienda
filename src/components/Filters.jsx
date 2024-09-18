
import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'

export function Filters () {
  
  const {setFilters,filters} = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()  

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice:event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category:event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">Precio a partir de</label>
        <input 
          type="range" 
          id={minPriceFilterId}
          min='0'
          max='1700'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="men's clothing">ropa hombre</option>
          <option value="women's clothing">ropa mujer</option>
          <option value="jewelery">joyería</option>
          <option value="electronics">tecnología</option>
        </select>
      </div>
    </section>

  )
}
