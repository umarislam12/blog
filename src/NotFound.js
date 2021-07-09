import { Link } from "react-router-dom";


const NotFound = () => {
    return ( <div className="not-found">
        <h2>Sorry</h2>
        <p>page is not found</p>
        <Link to="/" >go back to home</Link>
    </div> );
}
 
export default NotFound;