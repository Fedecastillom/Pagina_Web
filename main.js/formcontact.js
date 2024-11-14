$(function(){
    $("#send").click(function(){
        event.preventDefault(); 
            alert("enviado");
            window.location.href = "../index.html";  
        });
        $("#send2").click(function(event) {
            event.preventDefault(); 
        
            var email = $("#email").val().trim();
            var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (email === "") {
                alert("El campo de email está vacío. Por favor, ingrese un email.");
            } else if (emailValido.test(email)) {
                alert("sesión iniciada");
                window.location.href = "../index.html"; 
            } else {
                alert("Por favor, ingrese un email válido");
            }
        });
    });
