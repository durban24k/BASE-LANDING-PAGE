import React, {useState} from 'react'
import NavBar from '../components/Navbar'
import SideBar from '../components/Sidebar'

const Home = () => {
     const [isOpen, setIsOpen] = useState(false)

     const toggle = () => {
          setIsOpen(!isOpen);
     }

  return (
     <>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
     </>
    
  )
}

export default Home