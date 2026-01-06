import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as s}from"./assets/vendor-CgTBfC_f.js";const p=[{preview:"https://picsum.photos/id/1011/300/200",original:"https://picsum.photos/id/1011/1200/800",description:"Mountain landscape"},{preview:"https://picsum.photos/id/1025/300/200",original:"https://picsum.photos/id/1025/1200/800",description:"Cute dog"},{preview:"https://picsum.photos/id/1062/300/200",original:"https://picsum.photos/id/1062/1200/800",description:"Sea coast"}],a=document.querySelector(".gallery"),e=p.map(({preview:i,original:t,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${o}"
        />
      </a>
    </li>
  `).join("");a.innerHTML=e;new s(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
