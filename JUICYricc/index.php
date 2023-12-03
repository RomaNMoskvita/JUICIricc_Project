<?php require_once("SNIPPETS/HEADER.php"); ?>

<div id="website__traffic--position" class="website__traffic">
    <div class="website__traffic--container">
        <div class="traffic__banner--icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <style>
                    svg {
                        fill: #000000
                    }
                </style>
                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
            </svg>
        </div>
        <div class="website__traffic--banner--container">
            <div class="banner__ilustration--left">
                <img src="Images/skete_baner_3.png" alt="">
            </div>
            <div class="banner__ilustration--left--sm">
                <img src="Images/skete_baner_sm_1.png" alt="">
            </div>
            <div class="website__traffic--banner">
                <div class="traffic__banner--item traffic__online">
                    <h2>Online</h2>
                    <h3 class="online__traffic--animation" id="online__traffic">42</h3>
                </div>
                <div class="traffic__banner--item traffic__signup">
                    <h2>Sign Up</h2>
                    <h3 id="signup__traffic">66</h3>
                </div>
                <div class="traffic__banner--item traffic__spots">
                    <h2>Spots</h2>
                    <h3 id="spots__traffic">99</h3>
                </div>

                <div class="traffic__button--container">
                    <div class="traffic__button--signup">
                        <button class="button__signup">Sign Up</button>
                    </div>
                    <div class="traffic__button--signup">
                        <button class="button__signin">Sign In</button>
                    </div>
                </div>
            </div>
            <div class="banner__ilustration--right">
                <img src="Images/skete_baner_4.png" alt="">
            </div>
            <div class="banner__ilustration--right--sm">
                <img src="Images/skete_baner_sm_2.png" alt="">
            </div>
        </div>
    </div>
</div>

<div id="new-in__section--position" class="new-in__section">

    <div class="new-in__container">
        <div class="new-in__header">
            <h1>This is place for header new-in content</h1>
            <h2>This is place for header new-in content</h2>
        </div>
        <div class="new-in__content">
            <div class="new-in__media--content">
                <h3>
                    Let's take part in the Championship SLS
                </h3>
                <h4>
                    The biggest skateboarding event, more than 1000 of the strongest skateboarders
                </h4>
                <div class="event__button--section">
                    <div class="traffic__button--signup">
                        <button class="button__event">Take Part</button>
                    </div>
                    <div class="traffic__button--signup">
                        <button class="button__event">Viewer</button>
                    </div>
                </div>

                <div class="event__learn--more">
                    <a href="https://www.streetleague.com/">Learn more</a>
                </div>
            </div>
            <div class="new-in__text--content">
                <iframe width="100%" height="371" src="https://www.youtube.com/embed/FbizgyRIoYw?si=UQ7NV1_YZUco3TR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

    </div>

    <div class="user--icon__container">
        <div class="user--icon__card">
            <img class="user--icon" src="Images/avatar_1.png" alt="">
            <p>Nyjah Huston
                United States
                1'ps
            </p>
        </div>
        <div class="user--icon__card">
            <img class="user--icon" src="Images/avatar_3.png" alt="">
            <p>Yuto Horigome
                Japan
                2'ps
            </p>
        </div>
        <div class="user--icon__card">
            <img class="user--icon" src="Images/avatar_2.png" alt="">
            <p>Gustavo Ribeiro
                Portugal
                3'ps
            </p>
        </div>
    </div>

</div>

<div class="new-in__two--section">

    <div class="new-in__two--container">
        <div class="slide__show--left">
            <div class="new-in__slideshow--skatepark">
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-3.jpg" width="100%" alt="">

                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-2.jpg" width="100%" alt="">

                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-4.jpg" width="100%" alt="">

                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-1.jpg" width="100%" alt="">

                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-5.jpg" width="100%" alt="">

                </div>

            </div>
            <div class="point__slideshow--bar--hor">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>
            </div>
            <div class="slide__text">
                <p>PROJEKT SKATEPARK - DĄBROWA GÓRNICZA</p>
                <p>Built using monolithic concrete technology</p>
            </div>
        </div>
        <div class="slide__show--right--container">
            <div class="slide__show--right--head">
                <h1>This is place for header new-in content</h1>
                <h2>This is place for header new-in content</h2>
            </div>
            <div class="slide__show--right">
                <div class="point__slideshow--bar--ver">
                    <span class="dot__figure" onclick="currentSlideFig(1)"></span>
                    <span class="dot__figure" onclick="currentSlideFig(2)"></span>
                    <span class="dot__figure" onclick="currentSlideFig(3)"></span>
                    <span class="dot__figure" onclick="currentSlideFig(4)"></span>
                    <span class="dot__figure" onclick="currentSlideFig(5)"></span>
                </div>
                <div class="new-in__slideshow--figure">
                    <div class="slideshow__figure--card">
                        <img class="figure--icon" src="Images/skate_fig_1.png" alt="">
                    </div>
                    <div class="slideshow__figure--card">
                        <img class="figure--icon" src="Images/skate_fig_5.png" alt="">
                    </div>
                    <div class="slideshow__figure--card">
                        <img class="figure--icon" src="Images/skate_fig_4.png" alt="">
                    </div>
                    <div class="slideshow__figure--card">
                        <img class="figure--icon" src="Images/skate_fig_2.png" alt="">
                    </div>
                    <div class="slideshow__figure--card">
                        <img class="figure--icon" src="Images/skate_fig_3.png" alt="">
                    </div>
                </div>

            </div>

        </div>

    </div>

</div>



</div>

<?php require_once("SNIPPETS/FOOTER.php"); ?>