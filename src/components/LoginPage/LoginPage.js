import './LoginPage.css';

function LoginPage() {
    return (
        <main class="form-signin">
            <form>
                {/* <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                <h1 class="h3 mb-3 fw-normal">Введите логин и пароль</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Электронная почта</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>

                {/* <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div> */}
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">Made by @almikoltc</p>
            </form>
        </main>

    );
}

export default LoginPage;
