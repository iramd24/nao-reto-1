/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let sendForm = () => {
    let emailSub = 'Solicitud de registro a curso ' + document.getElementById('nameInput').value;
    let emailBody = 'Nombre: ' + document.getElementById('nameInput').value + '\r\n' + 
                    'Número de teléfono: ' + document.getElementById('cellInput').value + '\r\n' +
                    'Correo: ' + document.getElementById('mailInput').value + '\r\n';

    emailBody = encodeURIComponent(emailBody);
    location.href = 'mailto:test@mail.com?subject='+emailSub+'&body='+emailBody;


    const inputs = document.querySelectorAll('#nameInput, #cellInput, #mailInput');

    inputs.forEach(input => {
        input.value = '';
    });
}