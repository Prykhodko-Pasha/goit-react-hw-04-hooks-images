(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__29Wpp"}},15:function(e,t,a){e.exports={Button:"Button_Button__LBiba"}},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(13),o=a.n(n),i=(a(20),a(10)),s=a(3);var l=a(4),j=a.n(l),h=a(0);function b(e){var t=e.onSearch,a=Object(c.useState)(""),r=Object(s.a)(a,2),n=r[0],o=r[1];return Object(h.jsx)("header",{className:j.a.Searchbar,children:Object(h.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(n)},children:[Object(h.jsx)("button",{type:"submit",className:j.a.SearchForm__button,children:Object(h.jsx)("span",{className:j.a.SearchForm__button__label,children:"Search"})}),Object(h.jsx)("input",{className:j.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.trim())}})]})})}var u=a(2),m=a.n(u),d=a(6),O=a.n(d);function g(){return Object(h.jsxs)("ul",{className:O.a.ImageGallery,children:[Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.a,{height:260})})]})}var _=a(14),x=a.n(_);function f(e){var t=e.id,a=e.webformatURL,c=e.largeImageURL;return Object(h.jsx)("img",{id:t,src:a,alt:"",className:x.a.ImageGalleryItem__image,"data-src":c})}function p(e){var t=e.imagesArr,a=e.onOpenModal;return Object(h.jsx)("ul",{className:O.a.ImageGallery,onClick:function(e){return a(e.target)},children:t.map((function(e,t){var a=e.id,c=e.webformatURL,r=e.largeImageURL;return Object(h.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(h.jsx)(f,{id:a,webformatURL:c,largeImageURL:r})},t)}))})}var S=a(15),y=a.n(S);function v(e){var t=e.onLoadMore;return Object(h.jsx)("button",{type:"button",className:y.a.Button,onClick:t,children:"Load more"})}var I=a(9),w=a.n(I);function L(e){var t=e.onClose,a=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(h.jsx)("div",{className:w.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(h.jsx)("div",{className:w.a.Modal,children:a})})}function N(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),o=Object(s.a)(n,2),l=o[0],j=o[1],u=Object(c.useState)("idle"),m=Object(s.a)(u,2),d=m[0],O=m[1],_=Object(c.useState)(1),x=Object(s.a)(_,2),f=x[0],S=x[1],y=Object(c.useState)(!1),I=Object(s.a)(y,2),w=I[0],N=I[1],F=Object(c.useState)(!1),M=Object(s.a)(F,2),G=M[0],R=M[1],k=Object(c.useState)(""),U=Object(s.a)(k,2),C=U[0],E=U[1],B=Object(c.useState)(""),T=Object(s.a)(B,2),A=T[0],J=T[1];Object(c.useEffect)((function(){a&&(O("pending"),function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22963299-57829f6e237632471c998bdfc","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).catch((function(e){return Promise.reject(e)}))}(a,f).then((function(e){if(0===e.hits.length)O("rejected"),E("No matches found :(");else{var t=Math.ceil(e.total/12),a=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}));j((function(e){return[].concat(Object(i.a)(e),Object(i.a)(a))})),O("resolved"),N(t!==f)}window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){O("rejected"),E("There is an error: ".concat(e))})))}),[a,f]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{onSearch:function(e){r(e),j([]),S(1)}}),"idle"===d&&Object(h.jsx)("p",{className:"Msg",children:"Enter search query :)"}),"pending"===d&&Object(h.jsxs)(h.Fragment,{children:[0!==l.length&&Object(h.jsx)(p,{imagesArr:l}),Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"loadMoreReplacer"})]}),"rejected"===d&&Object(h.jsx)("p",{className:"Msg",children:C}),"resolved"===d&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{imagesArr:l,onOpenModal:function(e){e.className.includes("ImageGalleryItem__image")&&(R(!0),J(e.dataset.src))}}),w&&Object(h.jsx)(v,{onLoadMore:function(){S(f+1),O("pending")}})]}),G&&Object(h.jsx)(L,{onClose:function(){R(!1),J("")},children:Object(h.jsx)("img",{src:A,alt:""})})]})}o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3HXJP",SearchForm:"Searchbar_SearchForm__2MtI6",SearchForm__button:"Searchbar_SearchForm__button__1mvMy",SearchForm__button__label:"Searchbar_SearchForm__button__label__XoulR",SearchForm__input:"Searchbar_SearchForm__input__2Y5YL"}},6:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2wCBn",ImageGalleryItem:"ImageGallery_ImageGalleryItem__dyTIs"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3yl4C",Modal:"Modal_Modal__12Yxy"}}},[[25,1,2]]]);
//# sourceMappingURL=main.6254704f.chunk.js.map