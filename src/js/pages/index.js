import { downloadFromUrl } from "../utils.js";

const mainContentContainer = document.getElementById('main-content-container');


// Function to swap card content after pointer event fires
function cardSwap(card, newHTML) {
    const cardContent = card.querySelector('.card-content');
    cardContent.style.opacity = '0';
    setTimeout(() => {
        card.innerHTML = newHTML;
        Object.assign(card.style, styles);
        const newCardContent = card.querySelector('.card-content');
        newCardContent.style.opacity = '1';
    },300);
}

// Function to attach eventListeners depending on mobile/desktop pointer events
function listeners() {

    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');
    const isMobile = window.matchMedia('(pointer: coarse)');

    if (isMobile.matches) {

        let card1Flip = false;
        card1.addEventListener('click', () => {
            if (!card1Flip) {
                cardSwap(card1,
                    `
                    <div class="card-content">
                        <a class="links" href="https://tobhan8.github.io/Semester-Project-1-Exam/" target="_blank">
                            <i class="fa-solid fa-globe"></i>
                            <span>Deployed website</span>
                        </a>

                        <a class="links" href="https://github.com/TobHan8/Semester-Project-1-Exam" target="_blank">
                            <i class="fa-solid fa-code-branch"></i>
                            <span>Code repository</span>
                        </a>
                    </div>
                    `);
                } else {
                    cardSwap(card1,
                        `
                        <div class="card-content">
                            <h2>.semesterProject1</h2>
                            <p>First HTML/CSS project in Front End Development studies</p>
                            <div class="icons">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                            </div>
                        </div>
                        `);
                }
                card1Flip = !card1Flip;
        });


        let card2Flip = false;
            card2.addEventListener('click', () => {
                if (!card2Flip) {
                    cardSwap(card2,
                    `
                    <div class="card-content">
                        <a class="links" href="https://tobhan8.github.io/JavaScript-1-Course-Assignment-Rainy-Days-API/" target="_blank">
                            <i class="fa-solid fa-globe"></i>
                            <span>Deployed website</span>
                        </a>

                        <a class="links" href="https://github.com/TobHan8/JavaScript-1-Course-Assignment-Rainy-Days-API" target="_blank">
                            <i class="fa-solid fa-code-branch"></i>
                            <span>Code repository</span>
                        </a>
                    </div>
                    `);
                } else {
                     cardSwap(card2,
                        `
                        <div class="card-content">
                            <h2>.javaScript1</h2>
                            <p>My first JavaScript project in Front End Development studies</p>
                            <div class="icons">
                                <i class="fa-brands fa-square-js"></i>
                            </div>
                        </div>
                        `);
                }
                card2Flip = !card2Flip;
            });

            let card3Flip = false;
            card3.addEventListener('click', () => {
                if (!card3Flip) {
                    cardSwap(card3,
                        `
                        <div class="card-content">
                            <a class="links" href="https://tobhan8.github.io/exam-project-1/" target="_blank">
                                <i class="fa-solid fa-globe"></i>
                                <span>Deployed website</span>
                            </a>

                            <a class="links" href="https://github.com/TobHan8/exam-project-1" target="_blank">
                                <i class="fa-solid fa-code-branch"></i>
                                <span>Code repository</span>
                            </a>
                        </div>
                        `);
                } else {
                     cardSwap(card3,
                        `
                        <div class="card-content">
                            <h2>.examProject1</h2>
                            <p>Final exam project in first year of Front End Development studies</p>
                            <div class="icons">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i class="fa-brands fa-square-js"></i>
                            </div>
                        </div>
                        `);
                }
                card3Flip = !card3Flip;
            });


    } else {
        card1.addEventListener('mouseenter', () => {
        cardSwap(card1,
            `
            <div class="card-content">
                <a class="links" href="https://tobhan8.github.io/Semester-Project-1-Exam/" target="_blank">
                    <i class="fa-solid fa-globe"></i>
                    <span>Deployed website</span>
                </a>

                <a class="links" href="https://github.com/TobHan8/Semester-Project-1-Exam" target="_blank">
                    <i class="fa-solid fa-code-branch"></i>
                    <span>Code repository</span>
                </a>
            </div>
            `);
        });

        card1.addEventListener('mouseleave', () => {
            cardSwap(card1,
            `
            <div class="card-content">
                <h2>.semesterProject1</h2>
                <p>First HTML/CSS project in Front End Development studies</p>
                <div class="icons">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
            </div>
            `);

        });

        card2.addEventListener('mouseenter', () => {
            cardSwap(card2,
            `
            <div class="card-content">
                <a class="links" href="https://tobhan8.github.io/JavaScript-1-Course-Assignment-Rainy-Days-API/" target="_blank">
                    <i class="fa-solid fa-globe"></i>
                    <span>Deployed website</span>
                </a>

                <a class="links" href="https://github.com/TobHan8/JavaScript-1-Course-Assignment-Rainy-Days-API" target="_blank">
                    <i class="fa-solid fa-code-branch"></i>
                    <span>Code repository</span>
                </a>
            </div>
            `);
        });

        card2.addEventListener('mouseleave', () => {
            cardSwap(card2,
            `
            <div class="card-content">
                <h2>.javaScript1</h2>
                <p>My first JavaScript project in Front End Development studies</p>
                <div class="icons">
                    <i class="fa-brands fa-square-js"></i>
                </div>
            </div>
            `);
        });

        card3.addEventListener('mouseenter', () => {
        cardSwap(card3,
            `
            <div class="card-content">
                <a class="links" href="https://tobhan8.github.io/exam-project-1/" target="_blank">
                    <i class="fa-solid fa-globe"></i>
                    <span>Deployed website</span>
                </a>

                <a class="links" href="https://github.com/TobHan8/exam-project-1" target="_blank">
                    <i class="fa-solid fa-code-branch"></i>
                    <span>Code repository</span>
                </a>
            </div>
            `);
        });

        card3.addEventListener('mouseleave', () => {
            cardSwap(card3,
            `
            <div class="card-content">
                <h2>.examProject1</h2>
                <p>Final exam project in first year of Front End Development studies</p>
                <div class="icons">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                    <i class="fa-brands fa-square-js"></i>
                </div>
            </div>
            `);
        });
    }
}

function displayIndex() {

    mainContentContainer.innerHTML =
    `
    <div class="cards">

        <a id="card1" class="card">
            <div class="card-content">
                <h2>.semesterProject1</h2>
                <p>First HTML/CSS project in Front End Development studies</p>
                <div class="icons">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                </div>
            </div>
        </a>

        <a id="card2" class="card">
            <div class="card-content">
                <h2>.javaScript1</h2>
                <p>My first JavaScript project in Front End Development studies</p>
                <div class="icons">
                <i class="fa-brands fa-square-js"></i>
                </div>
            </div>
        </a>

        <a id="card3" class="card">
            <div class="card-content">
                <h2>.examProject1</h2>
                <p>Final exam project in first year of Front End Development studies</p>
                <div class="icons">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-square-js"></i>
                </div>
            </div>
        </a>

    </div>

    <div class="about-content-container">
        <div class="about-content">

            <h2>.aboutMe</h2>
            <p>
            Hello world! My name is Tobias. I am a 28 year-old man from Bergen in Norway. <br></br>
            This page is purely for school education purposes in the Portfolio 1 course. None of the projects or contents of this page should
            be viewed as real attempts to land job offers and opportunities. Some information and content is completely fictional for this purpose. <br></br> 
            For the last year I have been studying Front End Development at Noroff school of digital media and technology. 
            In my first year, I started out with no coding experience. From here I have grown into becoming increasingly comfortable 
            with creating websites with vanilla HTML, CSS and JavaScript. <br></br> This portfolio page reflects this journey by showcasing my first coding project 
            and the following school projects. These projects are not refined or suited for professional use, but they give an honest and humble insight in my 
            first year journey into Front End Development. <br></br>
            If you wish to take a look at my CV and cover letter, please click the buttons below to download the documents:
            </p>

            <div class="doc-links">
                <button class="download" id="cv">
                    <i class="fa-solid fa-address-card"></i>
                    Download CV
                </button>
                <button class="download" id="letter">
                    <i class="fa-solid fa-file"></i>
                    Download cover letter
                </button>
            </div>

        </div>
    </div>
    `;

    const cv = document.getElementById('cv');
    const letter = document.getElementById('letter');

    cv.addEventListener('click', () => {
        downloadFromUrl('assets/documents/cv_tobias_hanevik.pdf', 'CV_Tobias_Hanevik');
    });

    letter.addEventListener('click', () => {
        downloadFromUrl('assets/documents/cover_letter_tobias_hanevik.pdf', 'cover_letter_tobias_hanevik');
    });

    listeners();
}

displayIndex();