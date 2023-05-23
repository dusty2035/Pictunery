import classes from './header.module.css'
import backBtnIcon from '../resources/back.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header> 
            <div className={classes['img-container']}> 
                <Link to="/home">
                    <img src={backBtnIcon} alt=""/>
                </Link> 
            </div> 
        </header>
    )
}

export default Header