
import { NavLink, Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div >
<header>
    <nav>
        <h1>G-Ate</h1>
        <div>
        <NavLink to='/'>Home</NavLink> |
         
         <NavLink to='about us'>About</NavLink>| 

         <NavLink to='reservation'>Reservation</NavLink>
        </div>
       
    </nav>
</header>

<main>
<Outlet/>
</main>

    </div>
  )
}

export default Rootlayout  