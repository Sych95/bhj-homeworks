let form = document.querySelector('#form');
const progress = document.getElementById( 'progress' );

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.setRequestHeader('Content-Type','multipart/form-data')
    
    request.upload.onprogress = function(e){
        progress.value = e.loaded/e.total;
        console.log(e.loaded/e.total)
    }

    request.send(formData)
})