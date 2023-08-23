import React from 'react'
import carey_logo from '../assets/img/Carey-Logo.png'
import { MdPerson2, MdShoppingCart } from 'react-icons/md'
import avatar_diana from '../assets/img/Avatar-Diana.png'
import avatar_adri from '../assets/img/Avatar-Adri.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'
import Cart from './Cart'



export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="nav items-center h-[80px] md:h-[95px] flex w-full nunito bg-white/[.90] fixed top-0 px-5 lg:px-24 2xl:px-36 z-40">
      <div className="navbar-start">
        <button className="btn btn-circle hover:text-black" onClick={toggleDrawer}>
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='p-6'
        >
          <button className="btn btn-circle hover:text-black" onClick={toggleDrawer}>
            {/* close icon */}
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>


          </button>
          <ul className="uppercase text-3xl pt-[50%]">
            <li>
              <div className='item'>
                <Link to="/">Inicio</Link>
              </div>
            </li>
            <li>
              <div className='item'>
                <Link to="/citas">Citas</Link>
              </div>
            </li>
            <li>
              <div className='item'>
                <Link to="/tienda">Tienda</Link>
              </div>
            </li>
            <li>
              <div className='item'>
                <Link to="/faq">F.A.Q.</Link>
              </div>
            </li>
          </ul>
        </Drawer>


      </div>
      <div className="navbar-center">
        <div className='item'>
          <Link to="/"><img
            className="hover:scale-105 hover:ease-in-out hover:transition align-center w-[150px] md:w-[200px]"
            src={carey_logo}
            alt=""
          /></Link>
        </div>

      </div>
      <div className="navbar-end flex content-end items-center gap-2">

        
         <div className='flex flex-row'>
          <a href="https://www.instagram.com/adrigraphics" target="_blank" className="tooltip tooltip-primary tooltip-left hover:scale-110 hover:ease-in-out hover:transition" data-tip="Adri">
            <div className="avatar online">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar_adri} />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/dianiscano" target="_blank" className="tooltip tooltip-primary tooltip-left hover:scale-110 hover:ease-in-out hover:transition" data-tip="Diana">
            <div className="avatar online">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar_diana} />
              </div>
            </div>
          </a>
        </div>

        {/* <a href="/">
          <button className="btn btn-circle hover:text-black text-xl">
            <MdPerson2 />
          </button>
        </a>
        
          <button onClick={()=>setOpen(!open)} className="cartIcon btn btn-circle hover:text-black text-xl">
            <MdShoppingCart />
            <span>0</span>
          </button> */}
        
      </div>
      {open && <Cart />} 
    </div>
  )
}
