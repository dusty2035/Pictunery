import classes from './navBar.module.css'
import searchIcon from '../resources/search.png'
import homeIcon from '../resources/home.png'
import userIcon from '../resources/user.png'
import addIcon from '../resources/add.png'
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <nav>
            <div className={classes['nav-links']}>
                <div className={`${classes.icon}`}>
                    <Link to="/search">
                        <img src={searchIcon} />
                    </Link>
                </div>
                <div className={`${classes.icon}`}>
                    <Link to="/addpost">
                        <img src={addIcon} alt="" />
                    </Link>
                </div>
                <div className={`${classes.icon}`}>
                    <Link to="/home">
                        <img src={homeIcon} alt="" />
                    </Link>
                </div>
                <div className={`${classes.icon}`}>
                    <Link to="/account">
                        <img src={userIcon} alt="" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}


export default NavBar