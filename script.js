var gallery = document.getElementById("gallery");
var images = gallery.getElementsByTagName("img");
var current = 0;

// Add event listeners for the previous and next buttons
document.getElementById("prev").addEventListener("click", function() {
  current = current > 0 ? current - 1 : images.length - 1;
  updateGallery();
});
document.getElementById("next").addEventListener("click", function() {
  current = current < images.length - 1 ? current + 1 : 0;
  updateGallery();
});

function updateGallery() {
  // Update the src attribute of the img element to display the current image
  images[0].src = images[current].src;
}
