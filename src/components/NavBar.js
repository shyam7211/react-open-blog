import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome Bloggers to Open Blogs</h1>
            <div className="links">
                <NavLink to="/" activeClassName="active" >Home</NavLink>
                <NavLink to="/create" activeClassName="active" >Fresh Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default NavBar;