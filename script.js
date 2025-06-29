const scriptURL ='https://script.google.com/macros/s/AKfycbzl8jE0J6jveQcTuT4tUCbraSZNRT65Gob43C49CHyIp5ja-RN81vAI9euj3AzhGKpW0g/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      alert('Thank you! Your form is submitted successfully.');
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
VANTA.CLOUDS({
  el: ".fog",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
})