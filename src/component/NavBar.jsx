import React ,{useEffect , useState}from 'react'
import './NavBar.css'
function NavBar() {

    const [show , handleShow] = useState(false)
    useEffect(()=>{
     window.addEventListener("scroll", ()=>{
         if (window.scrollY > 100){
             handleShow(true);

         }else handleShow(false)
     })
     return () => {
         window.removeEventListener("scroll")
     }
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <h1>EMEKA MOVIES</h1>
    </div>
  )
}

export default NavBar