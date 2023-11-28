import React from 'react'
import '@/styles/Switch.css';
const Switch = () => {
  
  return (
<label className="switch">
  <input type="checkbox"
  onChange={toggleTheme}/>
  <span className="slider round sm:hidden"></span>
</label>
    )
}
export default Switch;