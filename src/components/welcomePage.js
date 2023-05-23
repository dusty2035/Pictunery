import classes from './welcomePage.module.css'

const WelcomePage = () => {
    return (
        <div className={classes['welcome-page']}>
            <h1 className={classes.slogan}> Pictunery </h1>
            <button className={classes.login}> login </button>
            <button className={classes.signup}> sign up </button>
        </div>
    )
}

export default WelcomePage