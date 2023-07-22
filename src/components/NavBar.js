import { NavLink } from "react-router-dom";


const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome Bloggers to Open Blogs</h1>
            <div className="links">
                <NavLink to="/" activeclassname="active" >Home</NavLink>
                <NavLink to="/create" activeclassname="active" >Fresh Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default NavBar;