(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(4369)}])},9749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,o;var r,{src:i,sizes:h,unoptimized:v=!1,priority:w=!1,loading:b,className:y,quality:x,width:j,height:E,fill:S,style:C,onLoad:z,onLoadingComplete:k,placeholder:O="empty",blurDataURL:P,layout:N,objectFit:R,objectPosition:I,lazyBoundary:L,lazyRoot:A}=e,H=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=s.useContext(u.ImageConfigContext),M=s.useMemo(()=>{let e=g||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:o})},[D]),T=H,B=T.loader||f.default;if(delete T.loader,"__next_img_default"in B){if("custom"===M.loader)throw Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let G=B;B=e=>{let{config:t}=e,o=a(e,["config"]);return G(o)}}if(N){"fill"===N&&(S=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];W&&(C=n({},C,W));let F={responsive:"100vw",fill:"100vw"}[N];F&&!h&&(h=F)}let q="",V=m(j),Z=m(E);if("object"==typeof(r=i)&&(p(r)||void 0!==r.src)){let U=p(i)?i.default:i;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,o=U.blurHeight,P=P||U.blurDataURL,q=U.src,!S){if(V||Z){if(V&&!Z){let J=V/U.width;Z=Math.round(U.height*J)}else if(!V&&Z){let Q=Z/U.height;V=Math.round(U.width*Q)}}else V=U.width,Z=U.height}}let X=!w&&("lazy"===b||void 0===b);((i="string"==typeof i?i:q).startsWith("data:")||i.startsWith("blob:"))&&(v=!0,X=!1),M.unoptimized&&(v=!0);let[K,Y]=s.useState(!1),[$,ee]=s.useState(!1),et=m(x),eo=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:I}:{},$?{}:{color:"transparent"},C),en="blur"===O&&P&&!K?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:Z,blurWidth:t,blurHeight:o,blurDataURL:P}),'")')}:{},er=function(e){let{config:t,src:o,unoptimized:n,width:r,quality:i,sizes:a,loader:s}=e;if(n)return{src:o,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,o){let{deviceSizes:n,allSizes:r}=e;if(o){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let s;s=i.exec(o);s)a.push(parseInt(s[2]));if(a.length){let l=.01*Math.min(...a);return{widths:r.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:o,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:o,quality:i,width:l[d]})}}({config:M,src:i,unoptimized:v,width:V,quality:et,sizes:h,loader:B}),ei=i,ea={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:T.crossOrigin},es=s.useRef(z);s.useEffect(()=>{es.current=z},[z]);let el=s.useRef(k);s.useEffect(()=>{el.current=k},[k]);let ec=n({isLazy:X,imgAttributes:er,heightInt:Z,widthInt:V,qualityInt:et,className:y,imgStyle:eo,blurStyle:en,loading:b,config:M,fill:S,unoptimized:v,placeholder:O,loader:B,srcString:ei,onLoadRef:es,onLoadingCompleteRef:el,setBlurComplete:Y,setShowAltText:ee},T);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},ec)),w?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},ea))):null)};var n=o(6495).Z,r=o(2648).Z,i=o(1598).Z,a=o(7273).Z,s=i(o(7294)),l=r(o(3121)),c=o(2675),d=o(139),u=o(8730);o(7238);var f=r(o(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,o,r,i,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===o&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,l=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>l,persist(){},preventDefault(){s=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=e=>{var{imgAttributes:t,heightInt:o,widthInt:r,qualityInt:i,className:l,imgStyle:c,blurStyle:d,isLazy:u,fill:f,placeholder:g,loading:p,srcString:m,config:_,unoptimized:v,loader:w,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:j,onLoad:E,onError:S}=e,C=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=u?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,t,{width:r,height:o,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:p,style:n({},c,d),ref:s.useCallback(e=>{e&&(S&&(e.src=e.src),e.complete&&h(e,m,g,b,y,x,v))},[m,g,b,y,x,S,v]),onLoad(e){let t=e.currentTarget;h(t,m,g,b,y,x,v)},onError(e){j(!0),"blur"===g&&x(!0),S&&S(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:n,blurHeight:r,blurDataURL:i}=e,a=n||t,s=r||o,l=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:n,quality:r}=e;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},4369:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return d}});var n=o(5893),r=o(9008),i=o.n(r),a=o(5675),s=o.n(a),l=o(7160),c=o.n(l);function d(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"콹퀡퀽"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{property:"og:title",content:"next seo test"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://next-sample-psi-two.vercel.app/"}),(0,n.jsx)("meta",{property:"og:image",content:"/dog.jpg"}),(0,n.jsx)("meta",{property:"og:site_name",content:"jaemDog"}),(0,n.jsx)("meta",{property:"og:description",content:"next seo test"})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,o){e.exports=o(3121)},5675:function(e,t,o){e.exports=o(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);