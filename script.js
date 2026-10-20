// Contact form: opens the visitor's email app with the message pre-filled
const contactForm = document.getElementById("contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = contactForm.elements.name.value.trim()
    const email = contactForm.elements.email.value.trim()
    const message = contactForm.elements.message.value.trim()

    const subject = `Website enquiry from ${name}`
    const body = `${message}\n\nName: ${name}\nEmail: ${email}`

    window.location.href =
      `mailto:getitallsortedout@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  })
}
