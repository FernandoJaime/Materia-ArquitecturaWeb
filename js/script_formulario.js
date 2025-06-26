// Nombre y Apellido, al menos 3 caracteres y sean solo letras

function validarNomApe(input, mensajeError) {
    const valor = input.value.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (valor.length <= 3) {
        input.classList.add("error");
        mensajeError.style.display = "block";
        mensajeError.textContent = `Debe tener más de 3 letras.`;
    } else if (!soloLetras.test(valor)) {
        input.classList.add("error");
        mensajeError.style.display = "block";
        mensajeError.textContent = `Solo se permiten letras.`;
    } else {
        input.classList.remove("error");
        mensajeError.style.display = "none";
    }
}

const inputNombre = document.getElementById("nombre");
const mensajeErrorNombre = document.getElementById("error-nombre");

inputNombre.addEventListener("input", function () {
    validarNomApe(inputNombre, mensajeErrorNombre);
});

const inputApellido = document.getElementById("apellido");
const mensajeErrorApellido = document.getElementById("error-apellido");

inputApellido.addEventListener("input", function () {
    validarNomApe(inputApellido, mensajeErrorApellido);
});

// Fecha de nacimiento, debe ser fecha valida y mayor de 18 años

const inputFecha = document.getElementById("fecha_nacimiento");
const mensajeErrorFecha = document.getElementById("error-fecha");

inputFecha.addEventListener("input", function () {
    const fecha = new Date(inputFecha.value);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // para que la hora no afecte
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();

    if (isNaN(fecha.getTime()) || fecha >= hoy) {
        inputFecha.classList.add("error");
        mensajeErrorFecha.style.display = "block";
        mensajeErrorFecha.textContent = `Fecha inválida.`;
    } else if (edad < 18 || (edad === 18 && mes < 0)) {
        inputFecha.classList.add("error");
        mensajeErrorFecha.style.display = "block";
        mensajeErrorFecha.textContent = `Debe ser mayor de 18 años.`;
    } else {
        inputFecha.classList.remove("error");
        mensajeErrorFecha.style.display = "none";
    }
});

// DNI, debe tener 7 o 8 dígitos y ser solo números

const inputDNI = document.getElementById("dni");
const mensajeErrorDNI = document.getElementById("error-dni");

inputDNI.addEventListener("input", function () {
    const valor = inputDNI.value.trim();
    const soloNumeros = /^\d+$/;

    if (!soloNumeros.test(valor)) {
        inputDNI.classList.add("error");
        mensajeErrorDNI.style.display = "block";
        mensajeErrorDNI.textContent = `Solo se permiten números.`;
    } else if (valor.length !== 7 && valor.length !== 8) {
        inputDNI.classList.add("error");
        mensajeErrorDNI.style.display = "block";
        mensajeErrorDNI.textContent = `Debe tener 7 u 8 dígitosS`;
    } else {
        inputDNI.classList.remove("error");
        mensajeErrorDNI.style.display = "none";
    }
});

// Direccion, al menos 5 caracteres, con letras, números y un espacio en el medio.

const inputDireccion = document.getElementById("direccion");
const mensajeErrorDireccion = document.getElementById("error-direccion");

inputDireccion.addEventListener("input", function () {
    const valor = inputDireccion.value.trim();
    const LetrasNumerosEspaciosPunto = /^[A-Za-z0-9\s.]+$/;

    const tieneLetra = /[A-Za-z]/.test(valor);
    const tieneNumero = /\d/.test(valor);
    const tieneEspacio = /\s/.test(valor);

    if (valor.length < 5) {
        inputDireccion.classList.add("error");
        mensajeErrorDireccion.style.display = "block";
        mensajeErrorDireccion.textContent = `Debe tener al menos 5 caracteres.`;
    } else if (!LetrasNumerosEspaciosPunto.test(valor)) {
        inputDireccion.classList.add("error");
        mensajeErrorDireccion.style.display = "block";
        mensajeErrorDireccion.textContent = `Solo se permiten letras, números y puntos.`;
    } else if (!tieneLetra || !tieneNumero) {
        inputDireccion.classList.add("error");
        mensajeErrorDireccion.style.display = "block";
        mensajeErrorDireccion.textContent = `Debe contener letras y números.`;
    } else if (!tieneEspacio) {
        inputDireccion.classList.add("error");
        mensajeErrorDireccion.style.display = "block";
        mensajeErrorDireccion.textContent = `Debe incluir al menos un espacio.`;
    } else {
        inputDireccion.classList.remove("error");
        mensajeErrorDireccion.style.display = "none";
    }
});

// Ciudad, debe tener al menos 3 caracteres

const inputCiudad = document.getElementById("ciudad");
const mensajeErrorCiudad = document.getElementById("error-ciudad");

inputCiudad.addEventListener("input", function () {
    const valor = inputCiudad.value.trim();

    if (valor.length < 3) {
        inputCiudad.classList.add("error");
        mensajeErrorCiudad.style.display = "block";
        mensajeErrorCiudad.textContent = `Debe tener al menos 3 caracteres.`;
    } else {
        inputCiudad.classList.remove("error");
        mensajeErrorCiudad.style.display = "none";
    }
});

// Email, debe tener un formato de email válido

const inputEmail = document.getElementById("email");
const mensajeErrorEmail = document.getElementById("error-email");

inputEmail.addEventListener("input", function () {
    const valor = inputEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(valor)) {
        inputEmail.classList.add("error");
        mensajeErrorEmail.style.display = "block";
        mensajeErrorEmail.textContent = `Debe ser un email válido.`;
    } else {
        inputEmail.classList.remove("error");
        mensajeErrorEmail.style.display = "none";
    }
});

// Telefono, numero de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis

const inputTelefono = document.getElementById("telefono");
const mensajeErrorTelefono = document.getElementById("error-tel");

inputTelefono.addEventListener("input", function () {
    const valor = inputTelefono.value.trim();
    const soloNumeros = /^\d+$/;

    if (!soloNumeros.test(valor)) {
        inputTelefono.classList.add("error");
        mensajeErrorTelefono.style.display = "block";
        mensajeErrorTelefono.textContent = `Solo se permiten números.`;
    } else if (valor.length < 7) {
        inputTelefono.classList.add("error");
        mensajeErrorTelefono.style.display = "block";
        mensajeErrorTelefono.textContent = `Debe tener al menos 7 dígitos.`;
    } else {
        inputTelefono.classList.remove("error");
        mensajeErrorTelefono.style.display = "none";
    }
});

// Boton de enviar, al hacer click, validar todos los campos
const form = document.querySelector(".registration-form");

form.addEventListener("submit", function (e) {
    const errores = document.querySelectorAll(".error-text");
    let hayErroresVisibles = false;

    errores.forEach(error => {
        if (error.style.display === "block" && error.textContent.trim() !== "") {
            hayErroresVisibles = true;
        }
    });

    if (hayErroresVisibles) {
        e.preventDefault();
        mostrarAlerta("Hay campos con erorres. Por favor, corrígelos para poder enviar.");
    }
});

// Alerta de error
function mostrarAlerta(mensaje) {
    let alertaExistente = document.querySelector(".alerta-personalizada");
    if (alertaExistente) alertaExistente.remove(); 

    const alerta = document.createElement("div");
    alerta.className = "alerta-personalizada";
    alerta.textContent = mensaje;

    Object.assign(alerta.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#e74c3c",
        color: "#fff",
        padding: "20px 30px",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        zIndex: "9999",
        fontSize: "1.1rem",
        textAlign: "center",
    });

    document.body.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 4000); 
}

// Configuracion del envio del formulario

// Si hay datos guardados en localStorage, los cargo al iniciar la página
window.onload = function () {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        for (const key in savedData) {
            const field = document.querySelector(`[name="${key}"]`);
            if (field) {
                if (field.type === "radio" || field.type === "checkbox") {
                    if (field.value === savedData[key]) field.checked = true;
                } else {
                    field.value = savedData[key];
                }
            }
        }
    }
};

// Post del formulario al hacer submit
    // Devuelve un mensaje de éxito o error si se envia correctamente obtenemos un id de respuesta y lo todos los datos en localStorage
document.querySelector('.registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) throw new Error('Error en la solicitud');
        return response.json();
    })
    .then(result => {
        localStorage.setItem('formData', JSON.stringify(data));
        showModal("✅ ¡Formulario enviado con éxito!", "success", data);
    })
    .catch(error => {
        console.error(error);
        showModal("❌ Error al enviar el formulario. Inténtalo más tarde.", "error");
    });
});

// Funcion para mostrar el modal de exito o error segun el resultado del envio
function showModal(message, type = "success", data = null) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalMessage = document.getElementById('modal-message');

    // Limpiamos clases previas por las dudas
    modalContent.classList.remove('modal-success', 'modal-error');

    // Aplicamos clases según el tipo de mensaje
    if (type === 'success') {
        modalContent.classList.add('modal-success');
    } else {
        modalContent.classList.add('modal-error');
    }

    // Mensaje principal de como salio el post  
    let finalMessage = `<p>${message}</p>`;

    // En caso de que salga bien, muestro los datos enviados y guardados en localStorage
    if (type === 'success' && data) {
    finalMessage += `<hr><p>Datos enviados:</p><ul style="text-align:left; padding-left: 1rem;">`;
    for (const [key, value] of Object.entries(data)) {
        if (key === "terminos") continue; // omitimos el campo "terminos"
        finalMessage += `<li><strong>${key}:</strong> ${value}</li>`;
    }
        finalMessage += `</ul>`;
    }

    modalMessage.innerHTML = finalMessage;
    modal.classList.remove('hidden');
}

// Cierro el modal
document.querySelector('.modal-close').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
}); 