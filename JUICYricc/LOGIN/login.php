<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../CSS/loginResponsive.css">
</head>

<body id="body__element">
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
                        <input type="text" class="input-email-icon" placeholder="Enter E-mail" name="username" required>

                        <label for="password">Password</label>
                        <input type="password" class="input-password-icon" placeholder="Enter Password" name="password" required>

                        <button id="login" type="submit">Login</button>
                        <div class="login__opt__container">
                            <label>
                                <input id="remember-opt" type="checkbox" checked="checked" name="remember"> Remember me
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
                            <input id="password-validate" type="password" placeholder="Enter Password" name="password" required>
                            <span id="password-validate-feedback"></span>

                            <button id="signup" type="submit">Sign Up</button>
                            <div class="signup__optional">
                                <span>Which sport interests you the most? (optional)</span>
                                <div class="signup__optional--form">
                                    <form action="/action_page.php">
                                        <label class="container" for="vehicle1">
                                            <input type="radio" id="vehicle1" name="vehicle" value="bmx">
                                            <span class="checkmark"></span>
                                            I have a BMX
                                        </label>
                                        <label class="container" for="vehicle2">
                                            <input type="radio" id="vehicle2" name="vehicle" value="skate">
                                            <span class="checkmark"></span>
                                            I have a Skate
                                        </label>
                                        <label class="container" for="vehicle3">
                                            <input type="radio" id="vehicle3" name="vehicle" value="scooter">
                                            <span class="checkmark"></span>
                                            I have a Scooter
                                        </label>
                                        <input id="radio-submit" type="submit" value="Submit">
                                    </form>
                                    <span>By creating an account, you accept our <a href="#">Terms and Conditions</a>. Read our <a href="#">Privacy Policy</a>.</span>
                                    <p>* mandatory fields</p>
                                    <p>**In your account you will find an overview of
                                        all the e-mails you have received and their frequency.
                                        You can choose which ones you want to receive,
                                        or unsubscribe at any time via a link in each email.</p>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>

            </div>

        </div>
    </div>

    <!-- Footer Section -->

    <footer id="login__footer">

    </footer>

    <!-- JS Scripts Section -->

    <script src="../JS/loginSection.js"></script>

</body>

</html>