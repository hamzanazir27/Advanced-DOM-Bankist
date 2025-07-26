'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const allSection = document.querySelectorAll('section');
const targetImage = document.querySelectorAll('img[data-src]');
///slider
const slide = document.querySelectorAll('.slide');
const btnSlideRight = document.querySelector('.slider__btn--right');
const btnSlideLeft = document.querySelector('.slider__btn--left');
console.log(targetImage);
const openModal = function (e) {
  // e.preventDefault();
  // DataTransfe()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(element => element.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// ///// practice
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const allsectionQuerry = document.querySelectorAll('section');
// const allsectionTAG = document.getElementsByTagName('section');

// console.log(allsectionQuerry);
// console.log(allsectionTAG);

// console.log(document.getElementsByClassName('section'));
// console.log(document.querySelector('.section'));
// console.log(document.querySelector('#section--1'));
// console.log(document.querySelectorAll('.section'));
// ///hamza ramya

// // inserting
// //creating
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie
// ">Got it!</button>`;

// // header.append(message.cloneNode(true));
// header.prepend(message);
// header.before(message);
// header.after(message);
// // message.remove();
// const body1 = document.querySelector('body');

// // body1.removeChild(message);
// // console.log(document.document);
// // console.log('');
// message.style.backgroundColor = '#3788d';
// message.style.width = '120%';
// console.log(getComputedStyle(message).height);
// // message.style.width =
// // Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// console.log(getComputedStyle(message).height);
// // console.log);
// document.documentElement.style.setProperty('--color-primary', 'orange');
// // console.log(message);

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.getAttribute('src'));
// logo.alt = 'Beautiful minimalist logo';
// logo.setAttribute('data-comapny', 'nutshall');
// console.log(logo);
// console.log(logo.dataset.comapny);
// // console.log();

// console.log(logo.getAttribute('src'));
// console.log(logo.src);
// logo.setAttribute('src', 'img/logo.png');

// logo.classList.add('c', 'd');
// logo.classList.remove('c', 'd');
// logo.classList.toggle('c');
// console.log(logo.classList.contains('c'));
// logo.setAttribute('c');

//day SCROLLING

const btnscrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnscrollto.addEventListener('click', function (e) {
  // const sectionrect = section1.getBoundingClientRect();
  // console.log('section 1', section1.getBoundingClientRect());
  // console.log('e.tardget', e.target.getBoundingClientRect());
  // console.log('view port X and Y', window.pageXOffset, window.pageYOffset);

  // const viewportHeight = window.document.documentElement.clientHeight;
  // const viewportWidth = window.document.documentElement.clientWidth;

  // console.log('Viewport Height:', viewportHeight);
  // console.log('Viewport Width:', viewportWidth);

  //  old way +++😨
  // window.scrollTo({
  //   left: sectionrect.left + window.pageXOffset,
  //   top: sectionrect.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way 😎
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////
// Page Navigation
//
// const navLink = document.querySelectorAll('.nav__link');
// console.log(navLink);
// navLink.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(e.target);
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// }); /// this is create problem when we add 1000 and more and more
//so we use Event deligation model
//
/////
// Page Navigation using Event Deligation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  if (!e.target.classList.contains('nav__link')) return; // check other then link
  const id = e.target.getAttribute('href');
  if (id === '#') return; // check butten

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////
// const navLink = document.querySelector('.nav__links');
// console.log(navLink);
// console.log(navLink.querySelectorAll('.nav__link'));
// console.log('Childern >> >> ', navLink.children);
// console.log('Childern >> >> ', navLink.childNodes);
// console.log('f Childern >> >> ', navLink.firstElementChild);
// console.log('l Childern >> >> ', navLink.lastElementChild);

// //Going Upwpword
// console.log(navLink.parentNode);
// console.log(navLink.parentElement);
// console.log(navLink.closest('.header'));
// // navLink.parentElement.style.backgroundColor = 'red';
// // navLink.closest('.header').style.backgroundColor = 'pink';

// //going sideways
// navLink.previousElementSibling.style.backgroundColor = 'red';
// navLink.previousElementSibling.nextElementSibling.style.backgroundColor =
//   'pink';
// navLink.parentElement.children.style.backgroundColor = 'green';

// tabs

const tabsContainer = document.querySelector('.operations__tab-container');
const operationsTab = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');
  if (!click) return;

  //remove and adding classes from tab
  operationsTab.forEach(tab => tab.classList.remove('operations__tab--active'));
  click.classList.add('operations__tab--active');
  //remove and add classes from content
  operationsContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////
//Nav Baar Hover
// const nav = document.querySelector('.nav');
// const HandleHover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;

//     const sibling = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     logo.style.opacity = this;
//     sibling.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//   }
// };

// nav.addEventListener('mouseover', HandleHover.bind(0.5));
// nav.addEventListener('mouseout', HandleHover.bind(1));

const nav = document.querySelector('.nav');
const HandleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // Check if logo exists
    if (logo) {
      logo.style.opacity = this;
    }

    // Check if siblings exist
    if (siblings) {
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
    }
  }
};

nav.addEventListener('mouseover', HandleHover.bind(0.5));
nav.addEventListener('mouseout', HandleHover.bind(1));

//////////////////////////////
//Sticky Navigation
// const intialCordent = section1.getBoundingClientRect();
// console.log(intialCordent);
// window.addEventListener('scroll', function name() {
//   if (window.scrollY > intialCordent.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//
function callback(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
  // console.log('---'.repeat(23));
  // console.log('Target Element:', entry.target);
  // console.log('Is Intersecting:', entry.isIntersecting);
  // console.log('Intersection Ratio:', entry.intersectionRatio);
  // console.log('Bounding Client Rect:', entry.boundingClientRect);
  // console.log('Intersection Rect:', entry.intersectionRect);
  // console.log('Root Bounds:', entry.rootBounds);
}
const navHight = nav.getBoundingClientRect().height;
const Observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 1.0,
  rootMargin: `+${navHight}px`,
});
Observer.observe(header);

////////////////////////////////////////
//Section Reveal
function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // observer.unobserve(entry.target);
  // console.log(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////////////////////////
//REVEAL IMAGES
// targetImage
const revealimage = function (entries, observer) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};
const imgObserver = new IntersectionObserver(revealimage, {
  root: null,
  threshold: 1,
});

targetImage.forEach(img => imgObserver.observe(img));

///////////////////////////////////////////////////////////////////
///// Slide and Dots

//slides
let currentSlide = 0;
const scrollSlide = function (key) {
  if (this === 'btnleft' || key === 'ArrowLeft') {
    if (currentSlide === 0) {
      currentSlide = (slide.length - 1) * 100;
    } else currentSlide -= 100;
  }
  if (this === 'btnright' || key === 'ArrowRight') {
    if (currentSlide === (slide.length - 1) * 100) {
      currentSlide = 100;
    } else {
      currentSlide += 100;
    }
  }
  slide.forEach(
    (sl, i) => (sl.style.transform = `translateX(${i * 100 - currentSlide}%)`)
  );
  activeDots();
};

btnSlideRight.addEventListener('click', scrollSlide.bind('btnright'));
btnSlideLeft.addEventListener('click', scrollSlide.bind('btnleft'));
document.addEventListener('keydown', e =>
  e.key === 'ArrowLeft' || e.key === 'ArrowRight'
    ? scrollSlide(e.key)
    : console.log(e.key)
);

///Dots
// Dots create
const dotsContainer = document.querySelector('.dots');
const createDots = function () {
  slide.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class='dots__dot' data-slide="${i}"></button>`
    )
  );
};

///ACTIVE DOTS
function activeDots() {
  // selecting dots
  const dots = document.querySelectorAll('.dots__dot');
  // Remove active
  dots.forEach((dot, i) => dot.classList.remove('dot__dot--active'));
  console.log(dots);

  //find current slide no
  const currentSlideIndex = Math.round(
    currentSlide != 0 ? currentSlide / 100 : currentSlide
  );

  // active dots
  const activeDot = document.querySelector(
    `.dots__dot[data-slide="${currentSlideIndex}"]`
  );
  if (activeDot) {
    activeDot.classList.add('dot__dot--active');
  }
}

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    currentSlide = slide * 100;
    scrollSlide();
  }
});

const intSlider = function () {
  scrollSlide();
  createDots();
  activeDots();
};
intSlider();

////////////////////////////////////////////////////////////////////
// document.addEventListener('load', function () {
//   console.log('all done');
// });
