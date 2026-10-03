/* =====================================================
   BOSCGROW INSTAGRAM CAROUSEL
===================================================== */


/* =====================================================
   SLIDE DATA
===================================================== */

const slides = [

    /* =================================================
       SLIDE 1
    ================================================== */

    {
        category: "WELCOME TO BOSCGROW",

        title: `
            Welcome to
            <span>BoscGrow.</span>
        `,

        description:
            "Discover ideas, build opportunities, monetize your knowledge and grow your business in the digital world.",

        type: "list",

        items: [

            "Digital Marketing & Business Growth",

            "Ideas, Software & Innovation",

            "Online Opportunities & Sales",

            "Connections, Partnerships & Expansion"

        ]
    },


    /* =================================================
       SLIDE 2
    ================================================== */

    {
        category: "THE PROBLEM",

        title: `
            Have an idea
            but don't know
            <span>what to do with it?</span>
        `,

        description:
            "An idea can be the beginning of something valuable. The challenge is turning that idea into something people need, discover and are willing to pay for.",

        type: "highlight",

        highlightTitle:
            "Your idea is only the beginning.",

        highlightDescription:
            "The opportunity comes from knowing what to build, who to reach and how to create value."
    },


    /* =================================================
       SLIDE 3
    ================================================== */

    {
        category: "WHAT BOSCGROW DOES",

        title: `
            From idea
            to <span>opportunity.</span>
        `,

        description:
            "BoscGrow brings digital marketing, business growth, technology, connections and opportunities together.",

        type: "list",

        items: [

            "Discover opportunities",

            "Build your digital presence",

            "Reach the right audience",

            "Monetize your ideas"

        ]
    },


    /* =================================================
       SLIDE 4
    ================================================== */

    {
        category: "WHAT YOU'LL DISCOVER HERE",

        title: `
            How to
            <span>build and grow.</span>
        `,

        description:
            "Follow BoscGrow for practical ideas and conversations around building businesses in the digital economy.",

        type: "list",

        items: [

            "Digital Marketing",

            "Branding & Publicity",

            "Online Sales",

            "Business Opportunities",

            "Software for Businesses",

            "Discover Products, Services & Innovation"

        ]
    },


    /* =================================================
       SLIDE 5
    ================================================== */

    {
        category: "THE BOSCGROW PHILOSOPHY",

        title: `
            An idea is only
            the <span>beginning.</span>
        `,

        description:
            "Great opportunities can start with a simple idea — but growth comes from taking action and creating value.",

        type: "statement",

        statement: `
            Discover.<br>
            Build.<br>
            <span class="lime">Monetize.</span><br>
            Target Audience.
            Sell.<br>
            Grow.
        `,

        statementDescription:
            "Turn your ideas into something people can discover, understand, buy and use."
    },


    /* =================================================
       SLIDE 6
    ================================================== */

    {
        category: "WELCOME TO BOSCGROW",

        title: `
            Let's build
            <span>what's next.</span>
        `,

        description:
            "We're exploring ideas, opportunities, digital growth, business connections and the future of online business.",

        type: "highlight",

        highlightTitle:
            "Discover. Build. Monetize. Sell. Grow.",

        highlightDescription:
            "Follow BoscGrow and join us as we explore what businesses and entrepreneurs can build next."
    }

];



/* =====================================================
   ELEMENTS
===================================================== */

const slideCategory =
    document.getElementById(
        "slideCategory"
    );

const slideTitle =
    document.getElementById(
        "slideTitle"
    );

const slideDescription =
    document.getElementById(
        "slideDescription"
    );

const slideExtra =
    document.getElementById(
        "slideExtra"
    );

const currentNumber =
    document.getElementById(
        "currentNumber"
    );

const backgroundNumber =
    document.getElementById(
        "backgroundNumber"
    );

const previousButton =
    document.getElementById(
        "previousButton"
    );

const nextButton =
    document.getElementById(
        "nextButton"
    );

const carouselDots =
    document.getElementById(
        "carouselDots"
    );



/* =====================================================
   CURRENT SLIDE
===================================================== */

let currentSlide = 0;



/* =====================================================
   CREATE DOTS
===================================================== */

function createDots() {

    carouselDots.innerHTML = "";


    slides.forEach(
        (_, index) => {

            const dot =
                document.createElement(
                    "button"
                );


            dot.type =
                "button";


            dot.className =
                "carousel-dot";


            dot.setAttribute(
                "aria-label",
                `Go to slide ${index + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    goToSlide(index);

                }
            );


            carouselDots.appendChild(
                dot
            );

        }
    );

}



/* =====================================================
   RENDER EXTRA CONTENT
===================================================== */

function renderExtra(slide) {

    slideExtra.innerHTML = "";


    /* ================================================
       LIST
    ================================================= */

    if (slide.type === "list") {

        const list =
            document.createElement(
                "div"
            );


        list.className =
            "extra-list";


        slide.items.forEach(
            (item, index) => {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "extra-item";


                element.innerHTML = `

                    <span class="extra-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="extra-text">
                        ${item}
                    </span>

                `;


                list.appendChild(
                    element
                );

            }
        );


        slideExtra.appendChild(
            list
        );

    }


    /* ================================================
       HIGHLIGHT
    ================================================= */

    if (slide.type === "highlight") {

        const box =
            document.createElement(
                "div"
            );


        box.className =
            "highlight";


        box.innerHTML = `

            <div class="highlight-title">
                ${slide.highlightTitle}
            </div>

            <div class="highlight-description">
                ${slide.highlightDescription}
            </div>

        `;


        slideExtra.appendChild(
            box
        );

    }


    /* ================================================
       STATEMENT
    ================================================= */

    if (slide.type === "statement") {

        const statement =
            document.createElement(
                "div"
            );


        statement.className =
            "statement";


        statement.innerHTML = `

            <div class="statement-title">
                ${slide.statement}
            </div>

            <div class="statement-description">
                ${slide.statementDescription}
            </div>

        `;


        slideExtra.appendChild(
            statement
        );

    }

}



/* =====================================================
   UPDATE DOTS
===================================================== */

function updateDots() {

    const dots =
        document.querySelectorAll(
            ".carousel-dot"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );

}



/* =====================================================
   RENDER SLIDE
===================================================== */

function renderSlide() {

    const slide =
        slides[currentSlide];


    /* -----------------------------------------------
       Animation reset
    ------------------------------------------------ */

    slideCategory.classList.remove(
        "fade-in"
    );

    slideTitle.classList.remove(
        "fade-in"
    );

    slideDescription.classList.remove(
        "fade-in"
    );

    slideExtra.classList.remove(
        "fade-in"
    );


    void slideCategory.offsetWidth;


    /* -----------------------------------------------
       Content
    ------------------------------------------------ */

    slideCategory.innerHTML =
        slide.category;


    slideTitle.innerHTML =
        slide.title;


    slideDescription.textContent =
        slide.description;


    renderExtra(
        slide
    );


    /* -----------------------------------------------
       Number
    ------------------------------------------------ */

    const number =
        String(
            currentSlide + 1
        ).padStart(
            2,
            "0"
        );


    currentNumber.textContent =
        number;


    backgroundNumber.textContent =
        number;


    /* -----------------------------------------------
       Dots
    ------------------------------------------------ */

    updateDots();


    /* -----------------------------------------------
       Animation
    ------------------------------------------------ */

    slideCategory.classList.add(
        "fade-in"
    );

    slideTitle.classList.add(
        "fade-in"
    );

    slideDescription.classList.add(
        "fade-in"
    );

    slideExtra.classList.add(
        "fade-in"
    );

}



/* =====================================================
   NEXT
===================================================== */

function nextSlide() {

    currentSlide++;

    if (
        currentSlide >=
        slides.length
    ) {

        currentSlide = 0;

    }


    renderSlide();

}



/* =====================================================
   PREVIOUS
===================================================== */

function previousSlide() {

    currentSlide--;

    if (
        currentSlide < 0
    ) {

        currentSlide =
            slides.length - 1;

    }


    renderSlide();

}



/* =====================================================
   GO TO SLIDE
===================================================== */

function goToSlide(index) {

    if (
        index < 0 ||
        index >= slides.length
    ) {

        return;

    }


    currentSlide =
        index;


    renderSlide();

}



/* =====================================================
   BUTTON EVENTS
===================================================== */

nextButton.addEventListener(
    "click",
    nextSlide
);


previousButton.addEventListener(
    "click",
    previousSlide
);



/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight"
        ) {

            nextSlide();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousSlide();

        }

    }
);



/* =====================================================
   MOBILE SWIPE
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;


        const distance =
            touchEndX -
            touchStartX;


        if (
            Math.abs(distance) < 50
        ) {

            return;

        }


        if (
            distance < 0
        ) {

            nextSlide();

        } else {

            previousSlide();

        }

    },
    {
        passive: true
    }
);



/* =====================================================
   INITIALIZE
===================================================== */

createDots();

renderSlide();