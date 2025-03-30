// Este archivo es parte principal de la aplicación web de Reactivos.
// que utiliza la API de OpenAI para generar preguntas y respuestas.
let reactivosfull = [];
let reactivoActual = 'cuanto es 2+2';
let idreactivoActual = 'exm2024V1Math04';
let iscorrectQuestion = false;
let respuestas = [];



window.onload = async function() {

  //iniciar id del dom par agregar la respuesta
  let elementQuestion = document.getElementById('question');
  let elementAnswerA = document.getElementById('response-a');
  let elementAnswerB = document.getElementById('response-b');
  let elementAnswerC = document.getElementById('response-c');
  let elementAnswerD = document.getElementById('response-d');

  let idRandom = Math.floor(Math.random() * 5);
   console.log(reactivos[idRandom]);

  //cargar reactivo
  elementQuestion.innerHTML = reactivos[idRandom].pregunta;
  elementAnswerA.innerHTML = reactivos[idRandom].opciones.a;
  elementAnswerB.innerHTML = reactivos[idRandom].opciones.b;
  elementAnswerC.innerHTML = reactivos[idRandom].opciones.c;
  elementAnswerD.innerHTML = reactivos[idRandom].opciones.d;

};


async function enviarRespuesta(pregunta, Respuesta) {
  
    const urlAPI = "https://pqedqxmb2h.execute-api.us-east-2.amazonaws.com/ChatGpt";

    try {
      const response = await fetch(urlAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          "idreactivo": idreactivoActual,
          "respuesta": Respuesta,
          "isCorrect": iscorrectQuestion,
          "pregunta": pregunta,


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('resp:', data);
      return data

      //document.getElementById("resultado").innerText = data.explicacion || data.error;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }


  function nextQuestion() {
    // Aquí puedes implementar la lógica para cargar la siguiente pregunta
    // Por ejemplo, podrías incrementar un índice y cargar una nueva pregunta de un array
    console.log('Cargando la siguiente pregunta...');
  }
