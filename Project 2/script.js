const studentList = document.querySelectorAl('StudentsperPage');
const itemsperPage = 10;
var currentPage = 1;


function showPage(pageNumber, pageList) {
    $("StudentsperPage").hide();
    $.each(pageList, function (index, page){
        if (pageNumber === index) {
            $.each(page, function (i, listItem){
                $(listItem).fadeIn;
            })
        }    
    });
}

        if(i >= (page-1)*itemsPerPage && i < page*itemsPerPage) 
          $(this).show();
        else
          $(this).hide();;
    $("#currentPage").text(currentPage);
    
$(document).ready(function(){
    showPage(currentPage);
    $("#next").click(function(){
       showPage(++currentPage);
    });
    $("#prev").click(function(){
       showPage(--currentPage);
    });
});

const appendPageLinks = () => {
const div = document.querySelector('div.page');
pagDiv.className = 'pagination';
const ulPagination = document.createElement('ul');
divPagination.appendChild(ulPagination);
const maxPages = math.ceil(studentList.length / 10);

let (i =0; i < maxPages; i++); {
    let li = createElement('li');
    ulPagination.appendChild(li);
};
};
 const aList = ulPagination.querySelector('a');
 
 divPagination.addEventListener('click', (e) => {
     if (e.target.tagName === "a") {
         let currentPage = e.target.textContent;
         showPage(studentList, currentPage);
         clearActiveclass(aList);
         setActiveclass(e.target);
     }
 })






