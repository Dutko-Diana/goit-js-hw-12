import{a as f,i as p,S as x}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const y="47411566-1fe68ca00fdccc973e940a4de";async function L(s,e){const i=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return(await f.get(`https://pixabay.com/api/?${i}`)).data}async function S(s,e){const i=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await f.get(`https://pixabay.com/api/?${i}`)).data}function h(s){return s.map(({webformatURL:e,largeImageURL:i,tags:n,likes:t,views:o,comments:l,downloads:b})=>`
      <a href="${i}" class="list-item">
      <div class="thumb"><img src="${e}" alt="${n}" class="list-img"></div>
      <ul class="info-box">
      <li class="info-item">
      <h2 class="info-text">Likes</h2>
      <p class="info-amount">${t}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Views</h2>
      <p class="info-amount">${o}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Comments</h2>
      <p class="info-amount">${l}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Downloads</h2>
      <p class="info-amount">${b}</p>
      </li>
      </ul>
      </a>
        `).join("")}const v=document.querySelector(".form"),u=document.querySelector(".list"),a=document.querySelector(".loader"),r=document.querySelector(".load-more"),w=document.querySelector(".input");v.addEventListener("submit",P);r.addEventListener("click",q);let c,d;async function P(s){if(s.preventDefault(),c=1,d=w.value,r.style.display="none",a.style.display="inline-block",u.innerHTML="",s.currentTarget.elements.search.value.trim()===""){a.style.display="none",m();return}await L(d).then(e=>{if(e.total===0){a.style.display="none",m();return}a.style.display="none",u.insertAdjacentHTML("beforeend",h(e.hits)),g(),c++,r.style.display="block"}).catch(e=>{a.style.display="none",p.error({position:"topRight",message:e.message,maxWidth:432})})}function m(){p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432}),u.innerHTML="",r.style.display="none"}function g(){new x(".list-item",{captions:!0,captionsData:"alt",captionDelay:150}).refresh()}async function q(s){s.preventDefault(),r.style.display="none",a.style.display="inline-block",await S(d,c).then(e=>{a.style.display="none",u.insertAdjacentHTML("beforeend",h(e.hits)),$(),g();const i=e.totalHits,n=Math.ceil(i/15);if(c>=n){p.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),r.style.display="none";return}c++,r.style.display="block"}).catch(e=>{a.style.display="none",p.error({position:"topRight",message:e.message,maxWidth:432})})}function $(){const e=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
