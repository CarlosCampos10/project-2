// my  variables i will work with the functions
const studentList = document.querySelectorAll(".student-item");
const itemsPerPage = 10;
let currentPage = 1;
let studentsToShow = studentList;

//function to display pages with names of the students
function showPage(list, page) {
  let startIndex = page * itemsPerPage - itemsPerPage;
  let endIndex = page * itemsPerPage;
  //loop to show only 10 students on each page and hide the rest
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}
//this function divides the total student number by capacity for each page (10)
const appendPageLinks = list => {
  const totalPages = Math.ceil(list.length / itemsPerPage);
  //div created and named 'pagination' and added to '.page'
  const div = document.createElement("div");
  div.className = "pagination";
  document.querySelector(".page").appendChild(div);
  // ul tag added to the div
  let ul = document.createElement("ul");
  div.appendChild(ul);

  //append for 'li' and 'a' tags
  for (let i = 0; i < totalPages; i += 1) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setattribute = "href";
    a.textContent = i + 1;
    li.appendChild(a);
    ul.appendChild(li);
  }
  //https://www.w3schools.com/jsref/met_node_appendchild.asp
  //selects li tags(students) to display
  let liLinks = document.querySelector("li");
  let activeLinks = document.querySelectorAll("a");
  //functionality
  function removeClass() {
    //loop to remove 'active' class from all class links
    for (var i = 0; i < activeLinks.length; i++) {
      activeLinks[i].classList.remove("active");
      if (event.target) {
        event.target = "";
      }
    }
  }
  //event lisnterner to display page clicked on
  ul.addEventListener("click", e => {
    showPage(list, event.target.textContent);
    removeClass();
  });
};
//Append to have buttons show
showPage(studentList, 1);
appendPageLinks(studentList);







