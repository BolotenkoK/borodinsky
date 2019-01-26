
function dropdownMenuToggle() {   
    
    var dropDownMenu = $("#dropDownMenu");
    if(dropDownMenu.children().css('display')=='list-item'){
        dropDownMenu.children().css('display','none');
    }
    else{
        dropDownMenu.children().css('display','list-item');
    }    
}
window.onclick = function(e) {
    if (e.target.id!=='toggleCheckBox') {
        if (window.matchMedia("(max-width: 768px)").matches){
            var toggleCheckBox = $("#toggleCheckBox").prop('checked', false);
            var dropDownMenu = $("#dropDownMenu");
            dropDownMenu.children().css('display','none');
        }
    }
}
