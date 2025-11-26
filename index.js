import{a as c,i as u,S as d}from"./assets/vendor-B3IAfeER.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(o){return c.get("https://pixabay.com/api/",{params:{key:"53374689-de9604de74fdd47daed383deb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>!t.data.hits||t.data.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight"}),null):t.data.hits).catch(t=>{console.error(t)})}const f=new d(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500}),l=document.querySelector(".gallery"),i=document.querySelector(".loader");function m({webformatURL:o,largeImageURL:s,tags:t,likes:n,views:e,comments:r,downloads:a}){return`     
      <li class="gallery-card">
        <a href="${s}" class="gallery-link">
          <img src="${o}" alt="${t}" class="gallery-image" />
        </a>
        <div class="gallery-stats">
          <p>Likes: <span class="likes">${n}</span></p>
          <p>Views: <span class="views">${e}</span></p>
          <p>Comments: <span class="comments">${r}</span></p>
          <p>Downloads: <span class="downloads">${a}</span></p>
        </div>
      </li>`}function y(o){return o.map(m).join("")}function g(o){l.innerHTML=y(o),f.refresh()}function h(){l.innerHTML=""}function L(){i&&(i.style.display="block")}function b(){i&&(i.style.display="none")}const v=document.querySelector(".form");v.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();s&&(h(),L(),p(s).then(t=>{g(t)}).catch(t=>{console.error("Помилка завантаження зображень:",t)}).finally(()=>{b()}),o.target.reset())});
//# sourceMappingURL=index.js.map
