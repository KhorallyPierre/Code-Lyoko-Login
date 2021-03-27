var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash-o");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");



Array.from(trash).forEach(function(element) {
      console.log('function works')
      element.addEventListener('click', function(){
        const img = this.parentNode.parentNode.childNodes[3].src
        const url = new URL(img)
        const path = url.pathname
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'img': path

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
