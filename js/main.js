const toggle = document.querySelector(".menu-toggle");
const sections = document.querySelectorAll("section:not(#hero)");
const logoWrapper = document.querySelector(".img-wrapper");

toggle.addEventListener("click", () => toggle.classList.toggle("open"));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) logoWrapper.classList.add("intersecting");
        else logoWrapper.classList.remove("intersecting");
    })
}, {
    rootMargin: '0px 0px -75% 0px'
})

sections.forEach(section => observer.observe(section));


const form = document.querySelector("#booking-form");

form.addEventListener("submit", (event) => {
    // Fake submit
    event.preventDefault();
    alert(`Submitted values: \n Name: ${form.querySelector("#name").value} \n Email: ${form.querySelector("#email").value} \n Phone number: ${form.querySelector("#phone").value}`)
})
