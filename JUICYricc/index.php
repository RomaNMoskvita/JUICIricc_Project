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

<!-- Spots Section on the main Page -->
<sectio class="main__spot--section">
    <div class="main__spot--container">
        <div class="main__spot--header">
            <h1>Discover Treasure Spots</h1>
            <button class="spot__main--button">Explore</button>
        </div>
        <div class="main__spot--content">
            <div class="spot__left--container">
                <div class="spot__left--header--container">
                    <div class="spot__left--header">
                        <h2>Find Your Favorite Place In Your City</h2>
                    </div>
                    <div class="spot__left--bar">
                        <select class="select__spot-bar" name="cityselect" id="city__select">
                            <option selected value="Cracow">Cracow</option>
                            <option value="Warsaw">Warsaw</option>
                            <option value="Wroclaw">Wroclaw</option>
                            <option value="Poznan">Poznań</option>
                            <option value="Lublin">Lublin</option>
                            <option value="Lodz">Łódź</option>
                            <option value="Gdansk">Gdańsk</option>
                        </select>
                        <select class="select__spot-bar" name="typespotselect" id="spot-type__select">
                            <option selected value="Park">Park</option>
                            <option value="Street">Street</option>
                        </select>
                        <select class="select__spot-bar" name="targetselect" id="target__select">
                            <option selected value="Opinion">Opinion</option>
                            <option value="Rate">Rate</option>
                            <option value="Quality">Quality</option>
                        </select>
                    </div>
                </div>
                <div class="spot__left--statistic--container">
                    <div class="statistic__column__container" data-index="1"><span class="statistic__column" id="stat--col1"></span></div>
                    <div class="statistic__column__container" data-index="2"><span class="statistic__column" id="stat--col2"></span></div>
                    <div class="statistic__column__container" data-index="3"><span class="statistic__column" id="stat--col3"></span></div>
                    <div class="statistic__column__container" data-index="4"><span class="statistic__column" id="stat--col4"></span></div>
                    <div class="statistic__column__container" data-index="5"><span class="statistic__column" id="stat--col5"></span></div>
                    <div class="statistic__column__container" data-index="6"><span class="statistic__column" id="stat--col6"></span></div>
                    <div class="statistic__column__container" data-index="7"><span class="statistic__column" id="stat--col7"></span></div>
                    <div class="statistic__column__container" data-index="8"><span class="statistic__column" id="stat--col8"></span></div>
                    <div class="statistic__column__container" data-index="9"><span class="statistic__column" id="stat--col9"></span></div>
                    <div class="statistic__column__container" data-index="10"><span class="statistic__column" id="stat--col10"></span></div>
                </div>
                <div class="spot__left--footer--container">
                    <div class="spot__left--footer">
                        <h2 id="actual__header--spot">Skate Park Statistic</h2>
                    </div>
                    <div class="spot__left--statistic--footer">
                        <div class="flex-wrapper">
                            <div class="single-chart">
                                <h3>Level</h3>
                                <svg viewBox="0 0 36 36" class="circular-chart orange">
                                    <path class="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path id="circle__level" class="circle" stroke-dasharray="0, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="20.35" class="percentage">30%</text>
                                </svg>
                            </div>

                            <div class="single-chart">
                                <h3>Community</h3>
                                <svg viewBox="0 0 36 36" class="circular-chart green">
                                    <path class="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path id="circle__community" class="circle" stroke-dasharray="0, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="20.35" class="percentage">60%</text>
                                </svg>
                            </div>

                            <div class="single-chart">
                                <h3>Event</h3>
                                <svg viewBox="0 0 36 36" class="circular-chart blue">
                                    <path class="circle-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path id="circle__event" class="circle" stroke-dasharray="0, 100" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <text x="18" y="20.35" class="percentage">90%</text>
                                </svg>
                            </div>
                        </div>
                        <button class="spot__left--button" id="button__location">Location</button>
                    </div>
                </div>
            </div>
            <div class="spot__right--container">
                <div class="spot__right--header">
                    <h1 id="spot__header_right"></h1>
                </div>
                <div class="spot__right--slideshow" id="slideshow__contener">
                    <div class="spot__slideshow--card">
                        <img src="/Images/Park_Krk2.jpg" alt="">
                    </div>
                    <div class="spot__slideshow--card">
                        <img src="/Images/Park_Krk1.jpg" alt="">
                    </div>
                    <div class="spot__slideshow--card">
                        <img src="/Images/Park_Krk3.jpg" alt="">
                    </div>
                    <div class="spot__slideshow--card">
                        <img src="/Images/Park_Krk4.jpg" alt="">
                    </div>
                    <div class="spot__slideshow--card">
                        <img src="/Images/Park_Krk5.jpg" alt="">
                    </div>
                    <div class="point__slideshow--bar--hor">
                        <span class="dot__spt" data-index="1"></span>
                        <span class="dot__spt" data-index="2"></span>
                        <span class="dot__spt" data-index="3"></span>
                        <span class="dot__spt" data-index="4"></span>
                        <span class="dot__spt" data-index="5"></span>
                    </div>
                </div>
                <div class="spot__right--review__container">
                    <div class="spot__right--review">
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon4.png" alt="">
                                </div>
                                <h3>RadRoller</h3>
                            </div>
                            <div class="client__message">
                                <p>Hey everyone! Just had an awesome session at the skate
                                    park today. The ramps are sick, and the atmosphere
                                    is just perfect. Shoutout to the crew who keeps the
                                    place in top shape! Can't wait to hit those rails
                                    again soon.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon2.png" alt="">
                                </div>
                                <h3>ConcreteGlider</h3>
                            </div>
                            <div class="client__message">
                                <p>Wow, the skate park has become my second home!
                                    The new additions to the street course are killer.
                                    Spent the whole afternoon working on my kickflips
                                    and meeting some rad skaters. This place rocks!.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon3.png" alt="">
                                </div>
                                <h3>ShredMaster5000</h3>
                            </div>
                            <div class="client__message">
                                <p>Big thumbs up to whoever designed the bowl section!
                                    Seriously epic, feels like I'm carving through a
                                    concrete wave. Thanks for providing such a sick
                                    space for the skate community. #SkateLife.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon1.png" alt="">
                                </div>
                                <h3>TrickTrailblazer</h3>
                            </div>
                            <div class="client__message">
                                <p>Had a blast teaching my little brother how to
                                    ride for the first time at the skate park.
                                    The beginner's area is perfect for newcomers.
                                    Super grateful for the friendly vibe and patience
                                    from everyone there!.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon5.png" alt="">
                                </div>
                                <h3>GrindGuru</h3>
                            </div>
                            <div class="client__message">
                                <p>Just wanted to give a shoutout to the staff
                                    for organizing that impromptu skate jam last weekend.
                                    So much talent on display, and it's awesome seeing
                                    the local skate scene thriving.
                                    Let's do it again soon!.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon6.png" alt="">
                                </div>
                                <h3>OllieOasis</h3>
                            </div>
                            <div class="client__message">
                                <p>Finally landed my first varial flip after weeks
                                    of trying! The encouragement from fellow skaters
                                    at the park is unreal. The sense of community
                                    here is what makes it stand out. Keep pushing,
                                    everyone!.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon7.png" alt="">
                                </div>
                                <h3>RampRebel</h3>
                            </div>
                            <div class="client__message">
                                <p>Late-night session at the park under the lights
                                    is a whole different vibe. The ambiance is electric,
                                    and pulling off tricks with the night sky as the
                                    backdrop is pure magic. Can't wait for more night
                                    sessions!.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon8.png" alt="">
                                </div>
                                <h3>SkateCanvasCreator</h3>
                            </div>
                            <div class="client__message">
                                <p>Today marked my one-year skate anniversary,
                                    and I couldn't be happier with the progress.
                                    The park has been my training ground,
                                    and I appreciate the positive energy and tips
                                    from everyone. Here's to many more years of
                                    shredding!.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon9.png" alt="">
                                </div>
                                <h3>ThrashArtist</h3>
                            </div>
                            <div class="client__message">
                                <p>The skate park isn't just a place to skate;
                                    it's a canvas for creativity.
                                    Huge thanks to the artists who keep adding vibrant
                                    graffiti and murals. Every visit feels like
                                    exploring an ever-changing outdoor
                                    art gallery. 🎨🛹.</p>
                            </div>
                        </div>
                        <div class="client__message--container">
                            <div class="client__message--icon">
                                <div class="client__message--img">
                                    <img src="/Images/user__icon10.png" alt="">
                                </div>
                                <h3>FlipFury</h3>
                            </div>
                            <div class="client__message">
                                <p>Spent the afternoon filming a skate edit with
                                    friends at the park. The variety of spots
                                    and features make it a perfect filming location.
                                    Major props to the crew who maintain this spot.
                                    Our video is going to be fire 🔥🎥!.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</sectio>


<!-- New-in Second Section on the main Page -->
<div class="new-in__two--section">

    <div class="new-in__two--container">
        <div class="slide__show--left">
            <div class="slide__card--header">
                <h1>Visit The New Skatepark</h1>
            </div>
            <div class="new-in__slideshow--skatepark">
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-3.jpg" alt="">
                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-2.jpg" alt="">
                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-4.jpg" alt="">

                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-1.jpg" alt="">

                </div>
                <div class="slide__card ">
                    <img src="Images/skatepark-projekte-5.jpg" alt="">
                </div>

            </div>
            <div class="point__slideshow--bar--hor">
                <span class="dot" data-index="1"></span>
                <span class="dot" data-index="2"></span>
                <span class="dot" data-index="3"></span>
                <span class="dot" data-index="4"></span>
                <span class="dot" data-index="5"></span>
            </div>
            <div class="slide__text">
                <p>PROJEKT SKATEPARK - DĄBROWA GÓRNICZA</p>
                <p>Built using monolithic concrete technology</p>
            </div>
        </div>
        <div class="slide__show--right--container">
            <div class="slide__show--right--head">
                <h1>Explore the Exciting Figures</h1>
                <h2>Dive into the World of Thrills and Skills</h2>
                <h3 id="slide--text--hide">We
                    Introduce the Cutting-Edge Features<br> of Our Latest Skatepark Design</h3>
            </div>
            <div class="slide__show--right">
                <div class="point__slideshow--bar--ver">
                    <span class="dot__figure" data-index="1"></span>
                    <span class="dot__figure" data-index="2"></span>
                    <span class="dot__figure" data-index="3"></span>
                    <span class="dot__figure" data-index="4"></span>
                    <span class="dot__figure" data-index="5"></span>
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
            <div id="slide--text--active">
                <h3>We
                    Introduce the Cutting-Edge Features<br> of Our Latest Skatepark Design</h3>
            </div>

        </div>

    </div>

</div>

<div class="new-in__two--section--bkg"></div>

<!-- New-in First Section on the main Page -->
<div id="new-in__section--position" class="new-in__section">

    <div class="new-in__container">
        <div class="new-in__header">
            <h1>Street League Skateboarding</h1>
            <h2>From the streets to the league</h2>
        </div>
        <div class="new-in__content">
            <div class="new-in__media--content">
                <h3>
                    Let's take part in the World Championship SLS Paris 2024
                </h3>
                <h4>
                    The biggest skateboarding event
                </h4>
                <h4>
                    featured more than 1000 of the world's strongest skateboarders
                    Don't miss the opportunity to attend the event
                </h4>
                <div class="event__learn--more">
                    <a href="https://www.streetleague.com/">Learn more</a>
                </div>
                <div class="event__button--section">
                    <div class="traffic__button--signup">
                        <button class="button__event">Take Part</button>
                    </div>
                    <div class="traffic__button--signup">
                        <button class="button__event">Viewer</button>
                    </div>
                </div>
            </div>
            <div class="new-in__text--content">
                <iframe src="https://www.youtube.com/embed/FbizgyRIoYw?si=UQ7NV1_YZUco3TR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div class="new-in__background--bot">
        </div>
    </div>

    <div class="user--icon__container" id="user--icon__container--controll">

        <div class="user--icon__card">
            <div class="user--icon__header">
                <h3>Winners of the last<br> Championship</h3>
            </div>
            <img class="user--icon" src="Images/avatar_1.png" alt="">
            <p>Nyjah Huston
                <br>
                1'ps
            </p>
        </div>
        <div class="user--icon__card">
            <div id="button__winners--container">
                <div id="button__winners"><button id="show__winners" onclick="userIconControll()">Winners</button></div>
                <img class="user--icon" src="Images/avatar_3.png" alt="">
            </div>

            <p>Yuto Horigome
                <br>
                2'ps
            </p>
        </div>
        <div class="user--icon__card">
            <img class="user--icon" src="Images/avatar_2.png" alt="">
            <p>Gustavo Ribeiro
                <br>
                3'ps
            </p>
        </div>
    </div>

</div>







<?php require_once("SNIPPETS/FOOTER.php"); ?>