"use strict";let videos=document.getElementsByClassName("gs-video-element");for(let video of videos){var e,b=video.dataset.provider,c=video.dataset.overlay,f=video.dataset.lightbox,d=video.nextSibling;if("false"===c)switch(b){case"video":let a=document.body;a.addEventListener("mouseover",getGSHostedVideo(video),{once:!0}),a.addEventListener("touchmove",getGSHostedVideo(video),{once:!0}),a.addEventListener("scroll",getGSHostedVideo(video),{once:!0}),a.addEventListener("keydown",getGSHostedVideo(video),{once:!0});break;case"youtube":getGSYoutubeVideo(video);break;case"vimeo":getGSVimeoVideo(video)}else d.onclick=function(){let a=this.previousSibling,b=this.dataset.type,c=this.dataset.lightbox,e=this;if("true"!==c){switch(b){case"video":getGSHostedVideo(a).play();break;case"youtube":getGSYoutubeVideo(a);break;case"vimeo":getGSVimeoVideo(a)}this.remove()}else{let d=a.closest(".gs-video");switch(SimpleLightbox.open({content:a,elementClass:"gs-video-popup",beforeClose:function(b){e.parentNode.insertBefore(a,e)}}),b){case"video":getGSHostedVideo(a,d).play();break;case"youtube":getGSYoutubeVideo(a);break;case"vimeo":getGSVimeoVideo(a)}}}}function getGSHostedVideo(b,e=""){let c=e||b.closest(".gs-video");if(c){let d="vidload"+c.getAttribute("id");if(!document.getElementById(d)){var a=document.createElement("video");return a.setAttribute("class","gs-video-element"),a.setAttribute("src",b.dataset.src),a.setAttribute("id",d),a.setAttribute("poster",b.dataset.poster),a.autoplay="true"===b.dataset.autoplay,a.playsInline="true"===b.dataset.playsinline,a.controls="true"===b.dataset.controls,a.loop="true"===b.dataset.loop,a.muted="true"===b.dataset.mute,b.replaceWith(a),"true"===b.dataset.autoplay&&a.play(),a}}}function getGSVideoIDFromURL(b,c){var a=b.match(c);return a&&a[1]}function getGSYoutubeRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}function getGSYoutubeVideo(a){var b="//www.youtube.com/embed/"+getGSVideoIDFromURL(a.dataset.src,getGSYoutubeRegex())+"?autoplay="+("true"===a.dataset.autoplay?"1":"0")+"&loop="+("true"===a.dataset.loop?"1":"0")+"&playsinline="+("true"===a.dataset.playsinline?"1":"0")+"&controls="+("true"===a.dataset.controls?"1":"0")+"&modestbranding="+("true"===a.dataset.modestbranding?"1":"0")+"&rel="+("true"===a.dataset.rel?"1":"0")+"&mute="+("true"===a.dataset.mute?"1":"0")+(a.dataset.start&&"false"===a.dataset.loop?"&start="+a.dataset.start:"")+(a.dataset.end&&"false"===a.dataset.loop?"&end="+a.dataset.end:"");a.setAttribute("src",b)}function getGSVimeoRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}function getGSVimeoVideo(a){var b={id:getGSVideoIDFromURL(a.dataset.src,getGSVimeoRegex()),autoplay:"true"===a.dataset.autoplay?1:0,loop:"true"===a.dataset.loop?1:0,playsinline:"true"===a.dataset.playsinline?1:0,muted:"true"===a.dataset.mute?1:0,controls:"true"===a.dataset.controls?1:0,title:"true"===a.dataset.title?1:0,portrait:"true"===a.dataset.portrait?1:0,byline:"true"===a.dataset.byline?1:0};e=new Vimeo.Player(a,b),isNaN(a.dataset.start)||e.setCurrentTime(parseInt(a.dataset.start))}