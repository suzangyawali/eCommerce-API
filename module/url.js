//URl Modules
import url from "url";
const urlSting="https://www.codeit.com.np/search-course?q=Node+Js";
const urlObject = new URL(urlSting);
console.log(urlObject);
console.log(url.format(urlObject));
const params= new URLSearchParams(urlObject.search);
console.log(params);
params.set("q","React Js");
console.log(params);

params.append("data","2021-8-2");
console.log(params);
