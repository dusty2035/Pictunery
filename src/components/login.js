import classes from './login.module.css'
import Header from './header'

const Login = () => {
    return (
        <>
            <Header />
            <div className={classes['login-page']}>
                <h1 className={classes.slogan}> Pictunery </h1>
                <h3> login </h3>
                <form action="" className={classes['login-form']}>
                    <div>
                        <label for="username">
                            username 
                        </label>
                        <input type="text" name="username" id="username"/>
                    </div>
                    <div>
                        <label for="password">
                            password 
                        </label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <button className={classes.submit}> Submit </button>
                </form>
            </div>
        </>
    )
}

export default Login