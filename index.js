import{a as c,i as d,S as u}from"./assets/vendor-B3IAfeER.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(o){return c.get("https://pixabay.com/api/",{params:{key:"53374689-de9604de74fdd47daed383deb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>!t.data.hits||t.data.hits.length===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight"}),[]):t.data.hits).catch(t=>{console.error(t)})}const f=new u(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}),l=document.querySelector(".gallery"),i=document.querySelector(".loader");function m({webformatURL:o,largeImageURL:s,tags:t,likes:a,views:e,comments:r,downloads:n}){return`     
      <li class="gallery-card">
        <a href="${s}" class="gallery-link">
          <img src="${o}" alt="${t}" class="gallery-image" />
        </a>
        <div class="gallery-stats">
          <p><strong>Likes</strong> <span class="likes">${a}</span></p>
          <p><strong>Views</strong> <span class="views">${e}</span></p>
          <p><strong>Comments</strong> <span class="comments">${r}</span></p>
          <p><strong>Downloads</strong> <span class="downloads">${n}</span></p>
        </div>
      </li>`}function g(o){return o.map(m).join("")}function y(o){l.innerHTML=g(o),f.refresh()}function h(){l.innerHTML=""}function L(){i&&(i.style.display="block")}function b(){i&&(i.style.display="none")}const v=document.querySelector(".form");v.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();s&&(h(),L(),p(s).then(t=>{y(t)}).catch(t=>{console.error("Помилка завантаження зображень:",t)}).finally(()=>{b()}),o.target.reset())});
//# sourceMappingURL=index.js.map
