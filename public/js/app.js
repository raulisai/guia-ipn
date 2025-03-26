async function enviarRespuesta(pregunta, idCampoRespuesta) {
    const respuestaUsuario = document.getElementById(idCampoRespuesta).value;
  
    // Ajusta esta URL a tu endpoint serverless
    const urlAPI = "https://TU_URL_DE_LAMBDA_O_FUNCTION/";
  
    try {
      const resp = await fetch(urlAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pregunta, respuestaUsuario })
      });
      const data = await resp.json();
  
      document.getElementById("resultado").innerText = data.explicacion || data.error;
    } catch (err) {
      console.error(err);
    }
  }
  