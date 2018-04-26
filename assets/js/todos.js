
//Check Off Specific Todos by clicking

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Deleted li when clicked on X

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
    event.stopPropagation();
});

//Add todo when clicked enter in input

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
	  //grab new todo from input
	var toDoList =  $(this).val();
	//adding it to todo
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoList + "</li>");

  }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})