function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");	
	
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        setTimeout(function() {
            confirmationMessage.innerHTML = `Thank you, ${name}! Your message "${message}" has been sent.`;


            contactForm.reset();
        }, 1000); 
    });
});


}
