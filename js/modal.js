var modal = document.getElementById('modal')
var open = document.getElementById('open')
var close = document.getElementById('close')

open.onclick = function() {
    modal.style.display = 'block'
}

close.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
        this.modal.style.display = 'none'
    }
}
