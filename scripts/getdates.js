const yeartoday = new Date().getFullYear();
const currentyeardoc = document.getElementById("currentyear");
currentyeardoc.innerHTML = yeartoday;

const lastModified = new Date(document.lastModified)
const modyear = lastModified.getFullYear();
const modmonth = lastModified.getMonth();
const modday = lastModified.getDay();
const moddate = `${modmonth}/${modday}/${modyear}`
console.log(moddate);
const lastModifiedElement = document.getElementById("lastmodified")
lastModifiedElement.textContent = moddate;