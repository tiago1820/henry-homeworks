import { Link } from "react-router-dom";
import { SearchBar, RandomButton } from "../../components";
import PATHROUTES from "../../helpers/PathRoutes.helper";
const Nav = (props) => {
    const { HOME, ABOUT, LOGIN, FAVORITES } = PATHROUTES;
    const { onSearch, getRandomChar, logout } = props;

    return (
        <>
            <nav>
                <div>
                    <Link to={HOME}>Home</Link>
                    <Link to={ABOUT}>About</Link>
                    <Link to={FAVORITES}>Favorites</Link>

                    <RandomButton getRandomChar={getRandomChar} />
                    <Link to={LOGIN} onClick={logout} >Log out</Link>
                </div>
            </nav>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </>
    )
}

export default Nav
