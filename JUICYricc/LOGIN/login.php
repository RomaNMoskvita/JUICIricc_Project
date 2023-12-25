<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../CSS/loginResponsive.css">
</head>

<body>
    <div class="navbar__container">
        <nav class="navbar">
            <div class="navbar__logo--container--backround">
                <div class="navbar__logo--container">

                    <div class="navbar__light--toggle">
                        <div class="navbar__toggle" id="mobile--menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>

                    <div class="navbar__logo">
                        <a class="navbar__logo--link" href="#website__traffic--position">JUICYricc</a>
                    </div>

                </div>
            </div>
        </nav>
    </div>

    <div class="login__container">
        <div class="login__section">
            <div class="login__section">
                <div class="header__login">
                    <h1>Hello again</h1>
                </div>

                <div class="button__login--show">
                    <button type="submit" id="show-login">Login</button>
                </div>

                <form class="login__form--active" id="login__form" action="/action_page.php" method="post">
                    <div class="login__form__container">
                        <label for="username">Login</label>
                        <input type="text" placeholder="Enter E-mail" name="username" required>

                        <label for="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" required>

                        <button id="login" type="submit">Login</button>
                        <div class="login__opt__container">
                            <label>
                                <input type="checkbox" checked="checked" name="remember"> Remember me
                            </label>
                            <span class="frg__password"><a href="#">Forgot password?</a></span>
                        </div>

                    </div>
                </form>


                <div class="signup__container" id="signup-container-move">
                    <div class="header__signup">
                        <h1>Welcome to Our Site</h1>
                    </div>

                    <div class="button__signup--show">
                        <button type="submit" id="show-signup">Sign Up</button>
                    </div>

                    <form class="signup__form--active" id="signup__form" action="/action_page.php" method="post">
                        <div class="signup__form__container">
                            <label for="username">First Name*</label>
                            <input type="text" placeholder="First Name" name="firstname" required>

                            <label for="username">Last Name*</label>
                            <input type="text" placeholder="Last Name" name="lastname" required>

                            <label for="username">Email address*</label>
                            <input type="text" placeholder="Email address" name="email" required>

                            <label for="password">Password*</label>
                            <input type="password" placeholder="Enter Password" name="password" required>
                            <span>Your password must be at least 8 characters long.</span>

                            <button id="signup" type="submit">Sign Up</button>
                            <div class="signup__optional">
                                <span>Which sport interests you the most? (optional)</span>
                                <div class="signup__optional--form">
                                    <form action="/action_page.php">
                                        <label for="vehicle1"><input type="checkbox" id="vehicle1" name="vehicle1" value="bmx"> I have a BMX </label>
                                        <label for="vehicle2"><input type="checkbox" id="vehicle2" name="vehicle2" value="skate"> I have a Skate</label>
                                        <label for="vehicle3"><input type="checkbox" id="vehicle3" name="vehicle3" value="scooter"> I have a scooter</label>
                                        <input type="submit" value="Submit">
                                    </form>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>

            </div>

        </div>
    </div>

    <!-- Footer Section -->

    <footer>

    </footer>

    <!-- JS Scripts Section -->

    <script src="../JS/loginSection.js"></script>

</body>

</html>