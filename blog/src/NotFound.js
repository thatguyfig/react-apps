import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404 Error</h2>
            <p>The page does not exist!</p>
            <Link to='/'>Take me back Home</Link>
        </div>
    );
}

export default NotFound;