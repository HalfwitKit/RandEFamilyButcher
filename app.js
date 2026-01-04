const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const navLinks = document.querySelectorAll('.navbar__links');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
  const menuItems = [
    {
      menu: document.querySelector('#home-page'),
      section: document.querySelector('#about')
    },
    {
      menu: document.querySelector('#about-page'),
      section: document.querySelector('#hours')
    },
    {
      menu: document.querySelector('#contact-page'),
      section: document.querySelector('#contact')
    }
  ]

  let scrollPos = window.scrollY + 120 // offset for nav height

  // Only highlight on desktop
  if (window.innerWidth <= 960) {
    menuItems.forEach(item => item.menu.classList.remove('highlight'))
    return
  }

  menuItems.forEach((item, index) => {
    const sectionTop = item.section.offsetTop
    const nextSectionTop =
      menuItems[index + 1]?.section.offsetTop || document.body.scrollHeight

    if (scrollPos >= sectionTop && scrollPos < nextSectionTop) {
      item.menu.classList.add('highlight')
    } else {
      item.menu.classList.remove('highlight')
    }
  })
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('resize', highlightMenu)

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  if (window.innerWidth <= 960) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
    }
};

navLinks.forEach(link => {
  link.addEventListener('click', hideMobileMenu);
});

navLogo.addEventListener('click', hideMobileMenu);

