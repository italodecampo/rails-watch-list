document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const cells = gallery.querySelectorAll('.gallery-cell');
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    // we'll set wrapAround dynamically
  };

  if (cells.length >= 4) {
    flickityOptions.wrapAround = true;
  } else {
    flickityOptions.wrapAround = false;
  }

  // Initialize Flickity
  new Flickity(gallery, flickityOptions);
});
