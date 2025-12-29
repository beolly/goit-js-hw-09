import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s=[{preview:"https://picsum.photos/id/1011/300/200",original:"https://picsum.photos/id/1011/1200/800",description:"Mountain landscape"},{preview:"https://picsum.photos/id/1025/300/200",original:"https://picsum.photos/id/1025/1200/800",description:"Cute dog"},{preview:"https://picsum.photos/id/1062/300/200",original:"https://picsum.photos/id/1062/1200/800",description:"Sea coast"}],p=document.querySelector(".gallery"),a=s.map(({preview:i,original:t,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${o}"
        />
      </a>
    </li>
  `).join("");p.innerHTML=a;new SimpleLightbox(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
