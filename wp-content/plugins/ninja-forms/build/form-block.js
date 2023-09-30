!function(){var e={92703:function(e,r,t){"use strict";var n=t(50414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,i,a){if(a!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},45697:function(e,r,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){"use strict";function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(r,t,n){return(t=function(r){var t=function(r,t){if("object"!==e(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===e(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}var i=window.wp.element,a=window.wp.components,l=window.wp.blockEditor;function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,_x,i,a=[],_n=!0,l=!1;try{if(_x=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;_n=!1}else for(;!(_n=(n=_x.call(t)).done)&&(a.push(n.value),a.length!==r);_n=!0);}catch(e){l=!0,o=e}finally{try{if(!_n&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(e,r)||o(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){var r=c((0,i.useState)((function(){return Array.isArray(e.forms)?e.forms:Object.values(e.forms)})),1)[0];return{getFormTitle:function(e){if(e=parseInt(e,10),r.length){var t=r.find((function(r){return r.formID===e}));return t?t.formTitle:void 0}},asSelectOptions:function(){return r.length?r.map((function(e){return{label:e.formTitle,value:e.formID}})):[]}}}var f=t(45697),s=t.n(f);function m(e){var r=e.formID,t=e.homeUrl,n=e.previewToken,o=(0,i.useRef)(),l=c((0,i.useState)(!0),2),u=l[0],f=l[1],s=c((0,i.useState)(0),2),m=s[0],p=s[1],y=c((0,i.useState)("auto"),2),b=y[0],d=y[1];return(0,i.createElement)("div",{className:"nf-iframe-container"},(0,i.createElement)("div",{className:"nf-iframe-overlay"},u&&(0,i.createElement)(a.Spinner,null),(0,i.createElement)("iframe",{src:"".concat(t,"?nf_preview_form=").concat(r,"&nf_iframe=").concat(n),title:"nf-preview-form-".concat(r),ref:function(e){return o.current=e},style:{pointerEvents:"none"},onLoad:function(){f(!1);var e=o.current.contentWindow.document.getElementById("nf-form-".concat(r,"-cont")),t=e.querySelectorAll(".ninja-forms-form-wrap");t&&t.length?(d(t[0].scrollWidth),p(t[0].scrollHeight)):(d(e.scrollWidth),p(e.scrollHeight))},scrolling:"no",height:m||0,width:b||"auto"})))}m.propTypes={formID:s().number.isRequired,homeUrl:s().string.isRequired,previewToken:s().string.isRequired};var p=(0,i.createElement)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"30px",height:"30px",viewBox:"0 0 29.93 13.43"},(0,i.createElement)("path",{fill:"#fff",d:"M22,21.7a4.72,4.72,0,0,0-2.44-4,14.44,14.44,0,0,0-13.38-.06,4.61,4.61,0,0,0-2.53,4Z",transform:"translate(-0.03 -8.27)"}),(0,i.createElement)("path",{fill:"#414242",d:"M3.68,21.7a4.6,4.6,0,0,1,2.53-4,14.44,14.44,0,0,1,13.38,0,4.73,4.73,0,0,1,2.44,4h3.65v-.37a12.76,12.76,0,0,0-1.2-5.42A7.59,7.59,0,0,0,24,15a31.79,31.79,0,0,1,4.14-1c1.36-.28,2.14-.46,1.68-.83-1-.81-2.24-1.68-2.24-1.68s5.05-4.18,0-2.91a9.62,9.62,0,0,0-2.53,1,10.69,10.69,0,0,0-3.13,2.76,12.83,12.83,0,0,0-21.9,9,3.15,3.15,0,0,0,0,.37Z",transform:"translate(-0.03 -8.27)"}),(0,i.createElement)("path",{fill:"#414242",d:"M9.3,21.7c0-1-.58-1.81-1.29-1.81s-1.27.81-1.29,1.81Z",transform:"translate(-0.03 -8.27)"}),(0,i.createElement)("path",{fill:"#414242",d:"M19,21.7c0-1-.59-1.81-1.29-1.81s-1.27.81-1.29,1.81Z",transform:"translate(-0.03 -8.27)"})),y=function(e){return(0,i.createElement)(a.Placeholder,{icon:(0,i.createElement)("div",null,e.icon?e.icon:p),instructions:"Display a form",style:{alignItems:"center"}},(0,i.createElement)("div",{style:{margin:"auto",width:"50%"}},e.children))};y.propTypes={children:s().element.isRequired};var b=function(e){var r=e.formID,t=e.forms,l=e.onChange,c=e.labelText,f=u({forms:t}).asSelectOptions,s=(0,i.useMemo)((function(){var e,r=f();return[{label:"---"}].concat(function(e){if(Array.isArray(e))return n(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}),[t,f]);return(0,i.createElement)(a.SelectControl,{label:c||"Select Form",value:r,onChange:l,options:s})};function d(e){var r=e.formID,t=e.forms,n=e.labelText,o=e.setAttributes,a=e.homeUrl,c=e.previewToken,f=e.icon,s=u({forms:t}).getFormTitle,p=function(e){var r=e?s(e):"";o({formID:parseInt(e),formTitle:r})};return r?(0,i.createElement)(i.Fragment,null,(0,i.createElement)(l.InspectorControls,null,(0,i.createElement)(b,{formID:r,forms:t,onChange:p,labelText:n})),(0,i.createElement)(m,{homeUrl:a,previewToken:c,formID:r})):(0,i.createElement)(y,{icon:f},(0,i.createElement)(b,{label:n||"Select Form",formID:r,forms:t,onChange:p,labelText:n}))}b.propTypes={formID:s().PropTypes.number,forms:s().oneOfType([s().array,s().object]).isRequired,onChange:s().func.isRequired,labelText:s().string},d.propTypes={formID:s().number,forms:s().oneOfType([s().array,s().object]).isRequired,labelText:s().string,setAttributes:s().func.isRequired,homeUrl:s().string.isRequired,previewToken:s().string.isRequired};var v=JSON.parse('{"icon":"feedback","category":"common","attributes":{"formID":{"type":"integer"},"formTitle":{"type":"string"}}}'),h=window.wp.i18n,g=window.wp.blocks;function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var O=window.nfFormsBlock||{},E=O.forms,S=O.homeUrl,j=O.previewToken;(0,g.registerBlockType)("ninja-forms/form",T(T({},v),{},{title:(0,h.__)("Ninja Form","ninja-forms"),edit:function(e){var r=e.attributes,t=e.setAttributes;return(0,i.createElement)(d,{forms:E,formID:r.formID,formTitle:r.formTitle,setAttributes:t,homeUrl:S,previewToken:j})},save:function(){return null},deprecated:[{attributes:{formID:{type:"integer",default:0},formName:{type:"string",default:""}},save:function(e){var r=e.attributes.formID;if(!r)return"";var t="[ninja_forms id="+parseInt(r)+"]";return(0,i.createElement)("div",null,t)}}]}))}()}();