import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <div className="container">
                <h1>recipe app</h1>
                <Link to='/'>Home</Link>
            </div>
        </header>
     );
}
 
export default Header;