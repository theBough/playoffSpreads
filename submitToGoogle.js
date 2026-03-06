const scriptURL = 'https://script.google.com/macros/s/AKfycbxpeDYIAmRYZKHskjk2_FsG5wdDFZcTW-i9ss01FesSPMjEVJQmHaRd9bDDRtxWTlE/exec'


const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => swal('The Bough', 'Are you sure about these picks? They look Terrible to me. jk good luck'))
    .catch(error => console.error('Error!', error.message))
})

