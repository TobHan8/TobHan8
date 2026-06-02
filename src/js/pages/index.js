const mainContentContainer = document.getElementById('main-content-container');

function cardSwap(card, newHTML, styles = {}) {
    const cardContent = card.querySelector('.card-content');
    cardContent.style.opacity = '0';
    setTimeout(() => {
        card.innerHTML = newHTML;
        Object.assign(card.style, styles);
        cardContent.style.opacity = '1';
    },300);
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
            </div class="card-content">
        </a>

    </div>

    <div class="about-content-container">
        <div class="about-content">
            <h2>.aboutMe</h2>
            <p>
            Hello world! My name is Tobias. I am a 28 year-old man from Bergen in Norway. <br></br> 
            For the last year I have been studying Front End Development at Noroff school of digital media and technology. 
            In my first year, I started out with no coding experience. From here I have grown into becoming increasingly comfortable 
            with creating websites with vanilla HTML, CSS and JavaScript. <br></br> This portfolio page reflects this journey by showcasing my first coding project 
            and the following school projects. These projects are not refined or suited for professional use, but they give an honest and humble insight in my 
            first year journey into Front End Development.
            </p>
        </div>
    </div>
    `;

    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

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
        `, {gap: '60px', justifyContent: 'center'});
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
        `, {gap: '20px', justifyContent: 'flex-start'});

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
        `, {gap: '60px', justifyContent: 'center'});
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
        `, {gap: '20px', justifyContent: 'flex-start'});
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
        `, {gap: '60px', justifyContent: 'center'});
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
        `, {gap: '20px', justifyContent: 'flex-start'});
    });
}



displayIndex();