const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav
const nav = document.querySelectorAll('a');
nav.forEach((links, i) => {
  links.textContent = siteContent["nav"][`nav-item-${i}`];
  links.style.color = 'green';
})

//cta
const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const snip = document.getElementById('cta-img');
snip.setAttribute('src', siteContent["cta"]["img-src"])

//main
//top
const features = document.querySelector('h4');
features.textContent = siteContent["main-content"]["features-h4"]

const featuresContent = document.querySelector('p');
featuresContent.textContent = siteContent["main-content"]["features-content"]

const about = document.querySelector('div:nth-child(2) h4');
about.textContent = siteContent["main-content"]["about-h4"]

const aboutContent = document.querySelector('div:nth-child(2) p');
aboutContent.textContent = siteContent["main-content"]["about-content"]

//img
const middlePic = document.getElementById('middle-img');
middlePic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom
const services = document.querySelector('div:nth-child(3) h4');
services.textContent = siteContent["main-content"]["services-h4"]

const servicesContent = document.querySelector('div:nth-child(3) p');
servicesContent.textContent = siteContent["main-content"]["services-content"]


const product = document.querySelectorAll('.bottom-content div h4')
product[1].textContent = siteContent["main-content"]["product-h4"]


const productPar = document.querySelectorAll('.bottom-content div p')
productPar[1].textContent = siteContent["main-content"]["product-content"]

const vision = document.querySelectorAll('.bottom-content .text-content h4')
vision[2].textContent = siteContent["main-content"]["vision-h4"]

const visionPar = document.querySelectorAll('.bottom-content .text-content p')
visionPar[2].textContent = siteContent["main-content"]["vision-content"]

//contact
const con = document.querySelector('.contact h4');
con.textContent = siteContent["contact"]["contact-h4"]

const contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]

//footer
const copy = document.querySelector('footer p');
copy.textContent = siteContent["footer"]["copyright"]

//nav style up in nav forEach loop

//nav pre and append
const last = document.createElement('a');
const first = document.createElement('a');
first.textContent = "First";
last.textContent = "Last";
first.style.color = "green";
last.style.color = "green";
first.setAttribute('href', '#');
last.setAttribute('href', '#');
const finale = document.querySelector('a');
const finale2 = document.querySelector('nav');
finale2.append(last);
finale.prepend(first);

