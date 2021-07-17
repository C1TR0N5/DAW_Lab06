$(".agregar").on("click", function (e) {
  e.preventDefault();
  $(".Lista").append(`<div> 
        <li class = "lis"> 
            <p class = "itemShop">${$("#newText").val()}</p>
            <button class="checar"> Check </button>
            <button class="del" > Delete </button>
        </li> </div>`);
});

$(document).on("click", ".checar", function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("chec");
});

$(document).on("click", ".del", function (e) {
  e.preventDefault();
  $(this).parent().remove();
});