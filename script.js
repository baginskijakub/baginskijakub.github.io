let pLinks = document.querySelectorAll(".primary-link");
let hLinks = document.querySelectorAll(".hover-link")

for(let i = 0; i < pLinks.length; i++)
{
    pLinks[i].addEventListener("mouseover", () => {
        hLinks[i].classList.remove("hover-transition-in")

        setTimeout(() => {
            hLinks[i].classList.add("hover-transition-in")
        },20)
    })

    pLinks[i].addEventListener("mouseout", () => {
        setTimeout(() => {
            hLinks[i].classList.remove("hover-transition-in")
        }, 10)

    
    })
}

let navButton = document.querySelector(".nav-icon");
let navContent = document.querySelector(".nav-mobile-open");



navButton.addEventListener('click', () =>
{
    let source = navButton.getAttribute('src');

    if(source == 'assets/NavClosed.svg')
    {
        navButton.setAttribute('src', 'assets/NavOpen.svg')
        navContent.classList.remove("d-none");

    }
    else
    {
        navButton.setAttribute('src', 'assets/NavClosed.svg')
        navContent.classList.add("d-none");
    }

    
})

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
        let source = navButton.getAttribute('src');
        if (source == 'assets/NavOpen.svg')
    {
        navButton.setAttribute('src', 'assets/NavClosed.svg')
        navContent.classList.add("d-none");
    }

    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});