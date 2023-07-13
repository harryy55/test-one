const filterBtns = document.querySelectorAll('.filter .btn');
const galleryItems = document.querySelectorAll('.gallery .item');
const loadMoreBtn = document.querySelector('.load-more .btn');
let visibleItems = 6;

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');
    console.log(filter)
    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.parentElement.classList.remove('hide');
      } else {
        item.parentElement.classList.add('hide');
      }
    });
    visibleItems = 6;
    showItems();
  });
});

loadMoreBtn.addEventListener('click', function() {
    visibleItems = galleryItems.length;
    showItems();
  });
  
  function showItems() {
    galleryItems.forEach((item, index) => {
      if (index < visibleItems) {
        item.parentElement.classList.remove('hidden');
      } else {
        item.parentElement.classList.add('hidden');
      }
    });
  
    if (visibleItems >= galleryItems.length) {
      loadMoreBtn.classList.add('hidden');
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  }





// to top button
// let toTopBtn = document.getElementById("to-top-btn");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 700) {
//     toTopBtn.style.display = "block";
//   } else {
//     toTopBtn.style.display = "none";
//   }
// });
// toTopBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// const links = document.querySelectorAll(".nav-link");
// links.forEach(function (item) {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     let elements = document.getElementById(item.dataset.target);
//     console.log(elements)
//     window.scrollTo({
//       top: elements.offsetTop - elements.clientHeight,
//       behavior: "smooth",
//     });
//   });
// });
