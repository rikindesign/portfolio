// Responsive Navbar JavaScript - R & Design 4.0
console.log('Navbar')

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    const bodyElement = document.body

    burger.addEventListener('click', () => {

        // Navigation Toggling
        nav.classList.toggle('active-nav')
            /* if (bodyElement.style.animation) {
                bodyElement.style.animation = ''
            } else {
                bodyElement.style.animation = `bodyFilterFade 0.25s ease`
            } */

        // Link Animations
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index / 7 + 0.24}s`
            }
        })

        // Burger Animations
        burger.classList.toggle('toggle')
    })
}

// App Wide Function Calls
navSlide()