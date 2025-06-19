import React from 'react'

const Dropdown = ({title, options, fun}) => {
  return (
    <div className='select'>
        <select defaultValue= "0" name = "format" onChange={fun} id='format' >
            <option value="0" disabled >
               {title}
            </option>
            {options.map((item, id)=>(<option  value={item} key={id}>{item.toUpperCase()}</option>))}
        </select>
    </div>
  )
}

export default Dropdown