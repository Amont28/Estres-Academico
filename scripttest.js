document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".toggle");
    const nav = document.querySelector(".nav-bar");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});

function calculateTotal(){
    //asignacion de variables
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');
    const question6 = document.querySelector('input[name="question6"]:checked');
    const question7 = document.querySelector('input[name="question7"]:checked');
    const question8 = document.querySelector('input[name="question8"]:checked');
    const question9 = document.querySelector('input[name="question9"]:checked');
    const question10 = document.querySelector('input[name="question10"]:checked');
    const question11 = document.querySelector('input[name="question11"]:checked');
    const question12 = document.querySelector('input[name="question12"]:checked');
    const question13 = document.querySelector('input[name="question13"]:checked');
    const question14 = document.querySelector('input[name="question14"]:checked');
    const question15 = document.querySelector('input[name="question15"]:checked');
    const question16 = document.querySelector('input[name="question16"]:checked');
    const question17 = document.querySelector('input[name="question17"]:checked');
    const question18 = document.querySelector('input[name="question18"]:checked');
    const question19 = document.querySelector('input[name="question19"]:checked');
    const question20 = document.querySelector('input[name="question20"]:checked');
    const question21 = document.querySelector('input[name="question21"]:checked');

    //validacion de preguntas
    if (question1 && question2 && question3 && question4 && question5 && question6 && question7 && question8 && question9 && question10 && question11 && question12 && question13 && question14 && question15 && question16 && question17 && question18 && question19 && question20 && question21){

        //suma de las preguntas
        const totalsuma = parseInt(question1.value) + parseInt(question2.value) + parseInt(question3.value) + parseInt(question4.value) + parseInt(question5.value) + parseInt(question6.value) + parseInt(question7.value) + parseInt(question8.value) + parseInt(question9.value) + parseInt(question10.value) + parseInt(question11.value) + parseInt(question12.value) + parseInt(question13.value) + parseInt(question14.value) + parseInt(question15.value) + parseInt(question16.value) + parseInt(question17.value) + parseInt(question18.value) + parseInt(question19.value) + parseInt(question20.value) + parseInt(question21.value);

        //aplicacion de la formula para el resultado final
        const total = parseInt(((totalsuma - 21)/84)*100);

        if(total === 0){
            document.getElementById('totalScore').innerText = `Su porcentaje de estres es del ${total}%.\nEste porcentaje indica que se encuentra en un estado de "Estrés nulo"`;
            document.getElementById('overlay').classList.remove('hidden');
            document.getElementById('resultWindow').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; //desactiva el scroll del body

        }else if (total >=1 && total<= 33) {
            document.getElementById('totalScore').innerText = `Su porcentaje de estres es del ${total}%.\nEste porcentaje indica que se encuentra en un estado de "Estrés leve"`;
            document.getElementById('overlay').classList.remove('hidden');
            document.getElementById('resultWindow').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; //desactiva el scroll del body

        }else if (total >= 34 && total <=66 ) {
            document.getElementById('totalScore').innerText = `Su porcentaje de estres es del ${total}%.\nEste porcentaje indica que se encuentra en un estado de "Estrés moderado"`;
            document.getElementById('resultWindow').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; //desactiva el scroll del body
 
        }else if (total >=67 && total <=100){
            document.getElementById('totalScore').innerText = `Su porcentaje de estres es del ${total}%.\nEste porcentaje indica que se encuentra en un estado de "Estrés elevado"`;
            document.getElementById('overlay').classList.remove('hidden');
            document.getElementById('resultWindow').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; //desactiva el scroll del body
        } else {
            document.getElementById('totalScore').textContent = `"Error en el proceso"`;
        }

    }else{
        document.getElementById('totalScore').innerText = `"Por favor, responde todas las preguntas"`;
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('resultWindow').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; //desactiva el scroll del body
        }
}

function closeWindow() {
    // Ocultar la ventana de resultados
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('resultWindow').classList.add('hidden');
    document.body.style.overflow = ''; //restaura el scroll del body
}

function finalizarcuestionario(){
    closeWindow();
}