const yeartoday = new Date().getFullYear();
const currentyeardoc = document.getElementById("currentyear");
currentyeardoc.innerHTML = yeartoday;

const lastModified = document.lastModified
const lastModifiedElement = document.getElementById("lastmodified")
lastModified.textContent = lastModified