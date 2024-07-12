
// Your code using emailjs-com here
const contactSection = document.getElementById('Contact')

    contactSection.insertAdjacentHTML('beforeend', `
        <h5>In One Touch</h5>
         <h2 class="heading">
        My <span>Contacts</span>
        </h2>
            <div class="contact__container">
                <div class="contact__options">
                    <article class='contact__option'>
                        <span class='contact__option-icon'><i class='bx bx-mail-send' ></i></span>
                        <h4>Max</h4>
                        <h5>Viner</h5>
                        <a href="mailto:kostya.oreshin@inbox.ru" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article class='contact__option'>
                        <span class='contact__option-icon'><i class='bx bxl-telegram' ></i></span>
                        <h4>Messager</h4>
                        <h5>Max</h5>
                        <a href="https://t.me/VinnerMax" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article class='contact__option'>
                        <span class='contact__option-icon'><i class='bx bxl-whatsapp' ></i></span>
                        <h4>WhatsApp</h4>
                        <h5>Max</h5>
                        <a href="https://api.whatsapp.com/send?phone=89192101542" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form id="contactForm">
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" cols="30" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' class='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </h2>
    `);

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        emailjs.sendForm('service_2enu4fr', 'template_6z4azp3', this, 'EHwCagiy_RrK-Ahc9')
            .then(function(response) {
                console.log('====================================');
                console.log(response.status);
                console.log('====================================');
            }, function(error) {
                console.error('Error sending message:', error);
            });
    });


    


    

   