const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const MAX_CARACTERES_PANTALLA = 10;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const resultado = eval(pantalla.textContent);
                if (!isFinite(resultado)) {
                    throw new Error("Error!");
                }

                const resultadoFormateado = resultado.toString().slice(0, MAX_CARACTERES_PANTALLA);

                pantalla.textContent = resultadoFormateado;
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent.length >= MAX_CARACTERES_PANTALLA) {
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
});