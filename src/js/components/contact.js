const contactContentContainer = document.getElementById('contact-content-container');

function displayContact() {

    contactContentContainer.innerHTML =
    `
    <button class="contact-btn" id="contact-btn">
        <i class="fa-solid fa-envelope"></i>
        CONTACT ME
    </button>
    `;

    const contactButton = document.getElementById('contact-btn');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            contactContentContainer.innerHTML = '';
            contactContentContainer.innerHTML =
            `
            <div class="contact-content">
                <button class="close-btn" id="close-btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button class="email" id="email">tobhan06346@stud.noroff.no</button>
                <span id="copy">Click e-mail to copy!</span>
            </div>
            `;

            const closeBtn = document.getElementById('close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    displayContact();
                });
            }

            const email = document.getElementById('email');
            const copy = document.getElementById('copy');
            if (email) {
                email.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText('tobhan06346@stud.noroff.no');
                        copy.textContent = 'E-mail copied!';
                    } catch (error) {
                        copy.textContent = 'Copy click failed. Please highlight and copy manually';
                    }
                });
            }
        });
    }

}


displayContact();
