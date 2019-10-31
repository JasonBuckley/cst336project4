var pages = document.querySelectorAll("nav a");
var currentPage = document.URL ;

pages.forEach(function(page){
    if(currentPage == page.href){
        page.classList.add("active");
    }
});
