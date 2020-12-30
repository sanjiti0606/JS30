const checkboxes = document.querySelectorAll('.boxes input[type = "checkbox"]');
let lastSelected;
function boxSelected(e) {
    let boxInBW = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastSelected)
                boxInBW=!boxInBW;
            if(boxInBW)
                checkbox.checked = true;
        });
    }
    if(this.checked)
        lastSelected = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', boxSelected));