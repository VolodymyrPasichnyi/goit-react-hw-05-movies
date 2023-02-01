import { useState } from "react"
import PropTypes from 'prop-types'
import { toast } from "react-hot-toast"


export const SearchBar = ({ formSubmit }) => {
     const [value, setValue] = useState('')

     const handleInputChange = (e) =>{
        setValue(e.currentTarget.value.toLowerCase())
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() === '') {
          return toast.error('Error')
        }
        formSubmit(value)
        setValue('')
     }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={value}
              onChange={handleInputChange}
               />
            <button type="submit">Search</button>
          </form>
        </>
    )
}


SearchBar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
}