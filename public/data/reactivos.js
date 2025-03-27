const reactivos = [
  {
    id: 1,
    pregunta: "Calcular el décimo quinto, el décimo sexto y el vigésimo primer término de la progresión aritmética en la cual la suma de los primeros 20 términos es 198 y tiene una diferencia de 1/5.",
    opciones: {
      a: "38, 39, 41",
      b: "36.8, 37, 39.5",
      c: "37.5, 38, 40.5",
      d: "38.2, 38.4, 41"
    },
    respuestaCorrecta: "c",
    explicacion: "Se debe usar la fórmula del término general y la suma de términos para deducir el primer término y calcular los términos requeridos."
  },
  {
    id: 2,
    pregunta: "Identificar el término general que reproduce la sucesión: 0, 6, -18, 36, -60...",
    opciones: {
      a: "Sn = (-1)^n * n(n-1)",
      b: "Sn = (-1)^n * 3n(n-1)",
      c: "Sn = (-1)^n * 3n(2n-1)",
      d: "Sn = (-1)^n * 3n(n-1)"
    },
    respuestaCorrecta: "d",
    explicacion: "Se observa que la sucesión alterna signos y se relaciona con una expresión cuadrática multiplicada por 3, lo que indica que la opción (d) es la adecuada."
  },
  {
    id: 3,
    pregunta: "Identificar el término general que reproduce la sucesión: 0, 1/2, -8/9, -5/4, -8/5...",
    opciones: {
      a: "an = (3n - 2)/(n + 1)",
      b: "an = (-1)^n * 3n / (2n + 1)",
      c: "an = (-1)^n * (3n - 2) / (n + 1)",
      d: "an = (n^2 - 1)/n"
    },
    respuestaCorrecta: "c",
    explicacion: "Se debe identificar la ley que gobierna numerador y denominador. Al no ser evidente, se requiere revisar la generación término a término."
  },
  {
    id: 4,
    pregunta: "Completar los espacios en la expresión f(x)=(-1)^n * sen[(__)] que reproduce la sucesión: -e, e², -e³, e⁴,...",
    opciones: {
      a: "2n - 1",
      b: "2n",
      c: "n",
      d: "n + 1"
    },
    respuestaCorrecta: "b",
    explicacion: "La sucesión muestra alternancia de signos y potencias crecientes, lo que sugiere una función exponencial combinada con un signo alternante."
  },
  {
    id: 5,
    pregunta: "Completar los elementos de la secuencia: MCMLXXVII, MCMLXXV, ___, MCMLX, MCI",
    opciones: {
      a: "MCMLXXIV y MCMLXIV",
      b: "MCMLXVIX y MCMLXX",
      c: "MCMLXXVI y MCMLXX",
      d: "MCMXXLV y MCMVXL"
    },
    respuestaCorrecta: "c",
    explicacion: "Es una sucesión de números romanos en orden descendente. MCMLXXVII (1977), MCMLXXV (1975), MCMLXXVI (1976), MCMLXX (1970), etc."
  }
];