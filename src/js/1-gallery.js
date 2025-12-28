
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
const images = [
  {
    preview: "https://picsum.photos/id/1011/300/200",
    original: "https://picsum.photos/id/1011/1200/800",
    description: "Mountain landscape",
  },
  {
    preview: "https://picsum.photos/id/1025/300/200",
    original: "https://picsum.photos/id/1025/1200/800",
    description: "Cute dog",
  },
  {
    preview: "https://picsum.photos/id/1062/300/200",
    original: "https://picsum.photos/id/1062/1200/800",
    description: "Sea coast",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

gallery.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});