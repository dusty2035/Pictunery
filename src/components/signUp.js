import classes from './signUp.module.css'
import Header from './header'

const SignUp = () => {
    return (
        <>
        <Header />
        <div className={classes["login-page"]}>
            <h1 className={classes.slogan}> Pictunery </h1>
            <h3> signup </h3>
            <form action="" className={classes["login-form"]}>
                <div className={classes.username}>
                    <label for="username">
                        username 
                    </label>
                    <input type="text" name="username" id="username"/>
                </div>
                <div className={classes.password}>
                    <label for="password_1">
                        password 
                    </label>
                    <input type="password_1" name="password_1" id="password_1"/>
                </div>
                <div>
                    <label for="password_2">
                        reenter   password 
                    </label>
                    <input type="password_2" name="password_2" id="password_2"/>
                </div>
                <button className={classes.submit}> Submit </button>
            </form>
        </div>
        </>
    )
}

export default SignUp