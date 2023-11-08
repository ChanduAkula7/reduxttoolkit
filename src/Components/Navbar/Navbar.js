import React, { useState } from 'react'
import '../Navbar/Navabar.css';
import { HiMenu} from 'react-icons/hi';
import { GrFormClose} from 'react-icons/gr';


const Navbar = () => {
const [click,setClick]=useState(false);

const handleClick=()=>{
    console.log(click);
    setClick(!click);
}
  return (
  <>
    <div className='Navbar'>
      <nav className='Navabar-comp'>
        <li className='nav-list-home'>CHandu</li>
        <ul className={click?"blocking":"nav-2"}>
            <li className='nav-list'>HOME</li>
            <li className='nav-list'>PRODUCT</li>
            <li className='nav-list'>CARRER</li>
            <li className='nav-list'>ABOUT</li>
            <li className='nav-list'>SIGN IN</li>
        </ul>
        <div className='mobile'>
            {
                click?<HiMenu onClick={handleClick}/>:<GrFormClose onClick={handleClick}/>
            }
      </div>
      </nav>
    </div>

    </>
  )
}

export default Navbar
