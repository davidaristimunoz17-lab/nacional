// Base de datos histórica - Atlético Nacional Campeón Copa Libertadores 2016
const COPA_DATA = {
  torneo: {
    nombre: "Copa Bridgestone Libertadores 2016",
    campeon: "Club Atlético Nacional S. A.",
    fecha_consagracion: "27 de Julio de 2016",
    estadio_final: "Estadio Atanasio Girardot, Medellín, Colombia",
    rival_final: "Independiente del Valle (Ecuador)",
    resultado_global: "Atlético Nacional 2 - 1 Independiente del Valle",
    tecnico: "Reinaldo Rueda Rivera",
    asistente: "Bernardo Redín",
    capitan: "Alexis Henríquez Charales",
    mvp_torneo: "Alejandro Guerra (Mejor Jugador de la Copa 2016)"
  },
  
  estadisticas_globales: {
    partidos_jugados: 14,
    victorias: 10,
    empates: 3,
    derrotas: 1,
    goles_favor: 25,
    goles_contra: 6,
    diferencia_gol: "+19",
    vallas_invictas: 8,
    puntos_obtenidos: 33,
    rendimiento_porcentaje: "78.6%",
    goleadores_top: [
      { nombre: "Miguel Ángel Borja", goles: 5, pj: 4, nota: "5 goles en solo 4 partidos (semis y final)" },
      { nombre: "Orlando Berrío", goles: 4, pj: 12, nota: "Goles claves en Quito y en el 90+5' ante Central" },
      { nombre: "Marlos Moreno", goles: 3, pj: 13, nota: "La gran revelación juvenil del continente" },
      { nombre: "Alejandro Guerra", goles: 3, pj: 13, nota: "Balón de Oro de la Copa Libertadores 2016" },
      { nombre: "Jonathan Copete", goles: 3, pj: 8, nota: "Fundamental en fase de grupos y octavos" },
      { nombre: "Daniel Bocanegra", goles: 2, pj: 14, nota: "Especialista en tiros libres y desdoble" },
      { nombre: "Víctor Ibarbo", goles: 2, pj: 8, nota: "Potencia y desequilibrio ofensivo" }
    ]
  },

  fases: [
    { id: "todas", nombre: "Todos los Partidos", badge: "14 Juegos" },
    { id: "grupos", nombre: "Fase de Grupos", badge: "Grupo 4 (Líder Absoluto)" },
    { id: "octavos", nombre: "Octavos de Final", badge: "vs Huracán" },
    { id: "cuartos", nombre: "Cuartos de Final", badge: "vs Rosario Central" },
    { id: "semis", nombre: "Semifinales", badge: "vs São Paulo" },
    { id: "final", nombre: "Gran Final", badge: "vs Ind. del Valle" }
  ],

  partidos: [
    {
      id: 1,
      fase: "grupos",
      fase_nombre: "Fase de Grupos - Fecha 1",
      fecha: "23 de Febrero de 2016",
      hora: "19:45 (GMT-3)",
      estadio: "Estadio Tomás Adolfo Ducó (Buenos Aires, Argentina)",
      local: "Huracán",
      visitante: "Atlético Nacional",
      marcador_local: 0,
      marcador_visitante: 2,
      resumen_corto: "Arranque soñado en Parque Patricios con cátedra de posesión y velocidad.",
      cronica: "Atlético Nacional dio un golpe de autoridad en su debut continental. Con una posesión demoledora y la velocidad de Marlos Moreno y Orlando Berrío, el verde superó con solvencia al 'Globo'. Marlos abrió el marcador con una exquisita definición sobre el cierre del primer tiempo y Berrío sentenció en el segundo tras una contra letal.",
      goles: [
        { minuto: "44'", autor: "Marlos Moreno", equipo: "Atlético Nacional", descripcion: "Asistencia de Macnelly y definición suave y colocada ante la salida del portero." },
        { minuto: "82'", autor: "Orlando Berrío", equipo: "Atlético Nacional", descripcion: "Carrera fulgurante por banda derecha y remate cruzado inatajable." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez", "Alejandro Guerra (Jonathan Copete 80')", "Macnelly Torres",
        "Marlos Moreno (Orlando Berrío 73')", "Víctor Ibarbo (Diego Arias 88')"
      ],
      arbitro: "Roberto Tobar (Chile)",
      figura: "Marlos Moreno",
      dato_curioso: "Inició una racha histórica de 5 partidos consecutivos sin recibir gol en la fase de grupos."
    },
    {
      id: 2,
      fase: "grupos",
      fase_nombre: "Fase de Grupos - Fecha 2",
      fecha: "1 de Marzo de 2016",
      hora: "19:45 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "Sporting Cristal",
      marcador_local: 3,
      marcador_visitante: 0,
      resumen_corto: "Fiesta y goleada en Medellín ante los peruanos con show de fútbol total.",
      cronica: "El Atanasio Girardot vivió su primera gran noche copera del año. Un cabezazo de Davinson Sánchez tras tiro de esquina inauguró la fiesta, Copete amplió con una jugada colectiva brillante y Marlos Moreno cerró la cuenta bailando en el área. El equipo de Rueda deslumbró a todo el continente.",
      goles: [
        { minuto: "12'", autor: "Davinson Sánchez", equipo: "Atlético Nacional", descripcion: "Imponente anticipación de cabeza en el primer palo." },
        { minuto: "33'", autor: "Jonathan Copete", equipo: "Atlético Nacional", descripcion: "Remate fulminante con pierna izquierda en plena área chica." },
        { minuto: "74'", autor: "Marlos Moreno", equipo: "Atlético Nacional", descripcion: "Enganche hacia adentro y disparo rasante al palo más lejano." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez", "Alejandro Guerra (Sherman Cárdenas 78')",
        "Jonathan Copete (Andrés Ibargüen 69')", "Marlos Moreno", "Víctor Ibarbo (Orlando Berrío 63')"
      ],
      arbitro: "Daniel Fedorczuk (Uruguay)",
      figura: "Davinson Sánchez",
      dato_curioso: "Davinson Sánchez anotó con apenas 19 años su primer gol internacional oficial."
    },
    {
      id: 3,
      fase: "grupos",
      fase_nombre: "Fase de Grupos - Fecha 3",
      fecha: "8 de Marzo de 2016",
      hora: "19:45 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "Peñarol",
      marcador_local: 2,
      marcador_visitante: 0,
      resumen_corto: "Victoria de jerarquía ante el pentacampeón uruguayo con golazo de tiro libre.",
      cronica: "Peñarol intentó cerrarse y cortar el circuito de juego, pero el libreto de Reinaldo Rueda era perfecto. En el segundo tiempo, una joya de tiro libre de Daniel Bocanegra rompió la resistencia charrúa, y minutos después Marlos Moreno firmó su tercer gol consecutivo en el torneo.",
      goles: [
        { minuto: "55'", autor: "Daniel Bocanegra", equipo: "Atlético Nacional", descripcion: "Tiro libre magistral al ángulo derecho del arco defendido por Guruceaga." },
        { minuto: "61'", autor: "Marlos Moreno", equipo: "Atlético Nacional", descripcion: "Gran pared con Ibarbo y sutil definición a la red." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez", "Alejandro Guerra (Orlando Berrío 60')", "Macnelly Torres",
        "Marlos Moreno (Jonathan Copete 77')", "Víctor Ibarbo (Luis Carlos Ruiz 86')"
      ],
      arbitro: "Héber Lopes (Brasil)",
      figura: "Daniel Bocanegra",
      dato_curioso: "Tercer partido del grupo, 9 puntos de 9 posibles, 7 goles a favor y cero en contra."
    },
    {
      id: 4,
      fase: "grupos",
      fase_nombre: "Fase de Grupos - Fecha 4",
      fecha: "15 de Marzo de 2016",
      hora: "21:45 (GMT-3)",
      estadio: "Estadio Centenario (Montevideo, Uruguay)",
      local: "Peñarol",
      visitante: "Atlético Nacional",
      marcador_local: 0,
      marcador_visitante: 4,
      resumen_corto: "Goleada histórica en el mítico Centenario de Montevideo: recital verdolaga.",
      cronica: "Una de las exhibiciones futbolísticas más aplastantes de la historia moderna de la Copa. Nacional pisó el sagrado césped del Centenario y le propinó un 0-4 histórico a Peñarol. Copete abrió la cuenta a los 9 minutos, Bocanegra metió otro zapatazo antes del descanso, y en el complemento Berrío y Ruiz redondearon un baile memorable.",
      goles: [
        { minuto: "9'", autor: "Jonathan Copete", equipo: "Atlético Nacional", descripcion: "Aprovechó rebote en el área tras desborde vertiginoso." },
        { minuto: "45'", autor: "Daniel Bocanegra", equipo: "Atlético Nacional", descripcion: "Misil de media distancia que dejó inmóvil al arquero." },
        { minuto: "82'", autor: "Orlando Berrío", equipo: "Atlético Nacional", descripcion: "Cabalgata imparable desde 40 metros y remate cruzado." },
        { minuto: "85'", autor: "Luis Carlos Ruiz", equipo: "Atlético Nacional", descripcion: "Toque fino al poste derecho tras combinación colectiva." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez", "Alejandro Guerra (Orlando Berrío 73')", "Macnelly Torres (Diego Arias 82')",
        "Jonathan Copete", "Víctor Ibarbo (Luis Carlos Ruiz 76')"
      ],
      arbitro: "Julio Bascuñán (Chile)",
      figura: "Sebastián Pérez / Alejandro Guerra",
      dato_curioso: "La mayor goleada que un equipo colombiano ha conseguido como visitante en la historia del Estadio Centenario."
    },
    {
      id: 5,
      fase: "grupos",
      fase_nombre: "Fase de Grupos - Fecha 5",
      fecha: "12 de Abril de 2016",
      hora: "21:45 (GMT-5)",
      estadio: "Estadio Nacional (Lima, Perú)",
      local: "Sporting Cristal",
      visitante: "Atlético Nacional",
      marcador_local: 0,
      marcador_visitante: 1,
      resumen_corto: "Clasificación con anticipación y puntaje perfecto: 5 jugados, 5 ganados, 0 recibidos.",
      cronica: "Con la serenidad del mejor clasificado, el equipo de Medellín viajó a Lima. Un penal convertido por Víctor Ibarbo al minuto 13 bastó para sellar la quinta victoria consecutiva y mantener el cerrojo de Franco Armani inquebrantable.",
      goles: [
        { minuto: "13' (pen.)", autor: "Víctor Ibarbo", equipo: "Atlético Nacional", descripcion: "Cobro potente y cruzado engañando a Penny." }
      ],
      alineacion: [
        "Franco Armani", "Gilberto García", "Felipe Aguilar", "Davinson Sánchez", "Tomás Maya",
        "Alexander Mejía", "Diego Arias", "Macnelly Torres (Alejandro Guerra 71')", "Orlando Berrío (Marlos Moreno 65')",
        "Víctor Ibarbo (Jonathan Copete 80')", "Andrés Ibargüen"
      ],
      arbitro: "Juan Soto (Venezuela)",
      figura: "Franco Armani",
      dato_curioso: "Nacional aseguró el liderato general de toda la Copa Libertadores antes de la última fecha."
    },
    {
      id: 6,
      fase: "grupos",
      fase_nombre: "Fase de Grupos - Fecha 6",
      fecha: "19 de Abril de 2016",
      hora: "17:30 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "Huracán",
      marcador_local: 0,
      marcador_visitante: 0,
      resumen_corto: "Cierre de fase invicta y récord continental: 16 puntos y solo un empate.",
      cronica: "En un duelo táctico cerrado con un Huracán urgido de puntos para clasificar, el Verde administró el trámite, rotó futbolistas y cerró la mejor fase de grupos de un equipo colombiano en el siglo XXI con 16 puntos de 18 posibles y cero goles en contra.",
      goles: [],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Felipe Aguilar", "Davinson Sánchez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez (Alejandro Guerra 60')", "Macnelly Torres",
        "Andrés Ibargüen (Marlos Moreno 56')", "Jonathan Copete", "Víctor Ibarbo (Luis Carlos Ruiz 74')"
      ],
      arbitro: "Enrique Osses (Chile)",
      figura: "Alexander Mejía",
      dato_curioso: "Atlético Nacional fue el único equipo de la edición 2016 en terminar la fase de grupos con 0 goles recibidos."
    },
    {
      id: 7,
      fase: "octavos",
      fase_nombre: "Octavos de Final - Ida",
      fecha: "26 de Abril de 2016",
      hora: "19:30 (GMT-3)",
      estadio: "Estadio Tomás Adolfo Ducó (Buenos Aires, Argentina)",
      local: "Huracán",
      visitante: "Atlético Nacional",
      marcador_local: 0,
      marcador_visitante: 0,
      resumen_corto: "Combate de alta fricción en Buenos Aires con el arco verdolaga intacto.",
      cronica: "El destino cruzó al mejor primero (Nacional) con el peor segundo clasificado (Huracán). En una cancha pesada y con un ambiente hostil, Nacional plantó cara con una defensa de hierro liderada por Alexis Henríquez y Franco Armani, saliendo ileso de la ida.",
      goles: [],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Felipe Aguilar", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez", "Alejandro Guerra (Orlando Berrío 87')", "Macnelly Torres (Diego Arias 81')",
        "Marlos Moreno", "Jonathan Copete (Víctor Ibarbo 64')"
      ],
      arbitro: "Patricio Polic (Chile)",
      figura: "Alexis Henríquez",
      dato_curioso: "Séptimo partido consecutivo de Nacional manteniendo la portería en cero en la Copa."
    },
    {
      id: 8,
      fase: "octavos",
      fase_nombre: "Octavos de Final - Vuelta",
      fecha: "3 de Mayo de 2016",
      hora: "19:45 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "Huracán",
      marcador_local: 4,
      marcador_visitante: 2,
      resumen_corto: "Batalla electrizante en el Atanasio: doblete de 'El Lobo' Guerra y pase a cuartos.",
      cronica: "Un partido frenético y cargado de polémica. Ibarbo abrió el marcador de penal tras expulsión de Mancinelli. Huracán igualó por medio de Espinoza rompiendo el invicto de Armani, pero en el complemento apareció la sinfonía de Alejandro 'El Lobo' Guerra con un doblete deslumbrante. Wanchope Ábila descontó con una tijera hermosa y en la agonía Copete puso el 4-2 final para el delirio paisa.",
      goles: [
        { minuto: "24' (pen.)", autor: "Víctor Ibarbo", equipo: "Atlético Nacional", descripcion: "Remate certero al palo izquierdo." },
        { minuto: "26'", autor: "Cristian Espinoza", equipo: "Huracán", descripcion: "Disparo que se desvió en Henríquez para el empate transitorio." },
        { minuto: "58'", autor: "Alejandro Guerra", equipo: "Atlético Nacional", descripcion: "Pase quirúrgico de Marlos y definición rasa del venezolano." },
        { minuto: "68'", autor: "Alejandro Guerra", equipo: "Atlético Nacional", descripcion: "Magistral pared con Berrío y remate al ángulo." },
        { minuto: "77'", autor: "Ramón Ábila", equipo: "Huracán", descripcion: "Golazo de tijera en el área verdolaga." },
        { minuto: "90+3'", autor: "Jonathan Copete", equipo: "Atlético Nacional", descripcion: "Contragolpe letal y definición ante el arco desguarnecido." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez", "Alejandro Guerra (Orlando Berrío 79')", "Macnelly Torres (Andrés Ibargüen 64')",
        "Marlos Moreno", "Víctor Ibarbo (Jonathan Copete 46')"
      ],
      arbitro: "José Argote (Venezuela)",
      figura: "Alejandro Guerra (2 goles y asistencia)",
      dato_curioso: "El venezolano Guerra comenzó a perfilarse como el gran candidato al MVP continental."
    },
    {
      id: 9,
      fase: "cuartos",
      fase_nombre: "Cuartos de Final - Ida",
      fecha: "12 de Mayo de 2016",
      hora: "21:45 (GMT-3)",
      estadio: "Estadio Gigante de Arroyito (Rosario, Argentina)",
      local: "Rosario Central",
      visitante: "Atlético Nacional",
      marcador_local: 1,
      marcador_visitante: 0,
      resumen_corto: "La única derrota del torneo: caída por la mínima en el volcán de Arroyito.",
      cronica: "El equipo de Eduardo Coudet sorprendió de entrada con un bombazo tempranero de Walter Montoya desde casi 35 metros al minuto 6. Nacional reaccionó, generó ocasiones con Bocanegra e Ibargüen, pero no pudo vulnerar al arquero Sosa. Fue la única derrota verdolaga en toda la campaña continental.",
      goles: [
        { minuto: "6'", autor: "Walter Montoya", equipo: "Rosario Central", descripcion: "Impresionante disparo lejano que se coló en el ángulo de Armani." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Felipe Aguilar", "Davinson Sánchez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez (Orlando Berrío 65')", "Alejandro Guerra",
        "Marlos Moreno", "Andrés Ibargüen (Macnelly Torres 75')", "Jonathan Copete (Víctor Ibarbo 81')"
      ],
      arbitro: "Sandro Ricci (Brasil)",
      figura: "Walter Montoya / Franco Armani",
      dato_curioso: "A pesar de la derrota, Armani evitó el 2-0 con tres paradas descomunales en el segundo tiempo."
    },
    {
      id: 10,
      fase: "cuartos",
      fase_nombre: "Cuartos de Final - Vuelta",
      fecha: "19 de Mayo de 2016",
      hora: "20:45 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "Rosario Central",
      marcador_local: 3,
      marcador_visitante: 1,
      resumen_corto: "¡El milagro del minuto 95! Orlando Berrío selló la noche más épica del Atanasio.",
      cronica: "El partido más emocionante, dramático e inolvidable de la década verdolaga. A los 9 minutos, una mano en el área le dio penal a Central que Marco Ruben convirtió: Nacional necesitaba anotar TRES goles por la regla de gol de visitante. La remontada comenzó al 45+2' con Macnelly empujando un centro de Berrío. Al 50', 'El Lobo' Guerra aprovechó un descuido defensivo para el 2-1. Y cuando el tiempo expiraba, al 95', un centro al área fue bajado por Henríquez y Orlando Berrío la empujó a la gloria, desatando el éxtasis absoluto y un final volcánico.",
      goles: [
        { minuto: "9' (pen.)", autor: "Marco Ruben", equipo: "Rosario Central", descripcion: "Ejecución perfecta al palo opuesto de Armani." },
        { minuto: "45+2'", autor: "Macnelly Torres", equipo: "Atlético Nacional", descripcion: "Apareció en el corazón del área chica tras desborde salvaje de Berrío." },
        { minuto: "50'", autor: "Alejandro Guerra", equipo: "Atlético Nacional", descripcion: "Robó el balón tras error de Donatti y la cruzó con categoría." },
        { minuto: "90+5'", autor: "Orlando Berrío", equipo: "Atlético Nacional", descripcion: "Cabezazo previo de Henríquez y zapatazo en el área chica para la clasificación histórica." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez (Andrés Ibargüen 35')", "Alejandro Guerra", "Macnelly Torres",
        "Orlando Berrío", "Marlos Moreno"
      ],
      arbitro: "Daniel Fedorczuk (Uruguay)",
      figura: "Orlando Berrío / Alexis Henríquez",
      dato_curioso: "El festejo de Berrío frente al arquero Sosa le costó la expulsión, pero el gol quedó grabado para siempre en la memoria del fútbol sudamericano."
    },
    {
      id: 11,
      fase: "semis",
      fase_nombre: "Semifinal - Ida",
      fecha: "6 de Julio de 2016",
      hora: "21:45 (GMT-3)",
      estadio: "Estadio Morumbí (São Paulo, Brasil)",
      local: "São Paulo",
      visitante: "Atlético Nacional",
      marcador_local: 0,
      marcador_visitante: 2,
      resumen_corto: "El debut milagroso de Miguel Ángel Borja: dos goles en el coloso del Morumbí.",
      cronica: "Tras el receso por la Copa América Centenario, Nacional se reforzó con Miguel Ángel Borja. En un Morumbí con más de 61.000 hinchas paulistas, Maicon fue expulsado al minuto 73 y Borja escribió una página dorada: dos apariciones letales a los minutos 82 y 88 para silenciar a Brasil y poner un pie en la final.",
      goles: [
        { minuto: "82'", autor: "Miguel Ángel Borja", equipo: "Atlético Nacional", descripcion: "Gran asistencia de Macnelly Torres y definición potente de zurda." },
        { minuto: "88'", autor: "Miguel Ángel Borja", equipo: "Atlético Nacional", descripcion: "Taconazo poético de Marlos Moreno y remate fulminante de Borja al poste más cercano." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez (Diego Arias 86')", "Macnelly Torres",
        "Andrés Ibargüen (Alejandro Guerra 60')", "Marlos Moreno (Elkin Blanco 90')", "Miguel Ángel Borja"
      ],
      arbitro: "Mauro Vigliano (Argentina)",
      figura: "Miguel Ángel Borja",
      dato_curioso: "Borja acababa de llegar de Cortuluá donde rompió el récord de la liga colombiana con 19 goles."
    },
    {
      id: 12,
      fase: "semis",
      fase_nombre: "Semifinal - Vuelta",
      fecha: "13 de Julio de 2016",
      hora: "19:45 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "São Paulo",
      marcador_local: 2,
      marcador_visitante: 1,
      resumen_corto: "Otra sinfonía de Miguel Borja: 4 goles en la serie y boleto a la Gran Final.",
      cronica: "São Paulo salió con todo y Calleri puso el 0-1 a los 9 minutos alimentando la tensión. Sin embargo, Nacional nunca perdió el temple táctico. Al 23', Borja igualó con una corrida feroz al espacio, y al 78' sentenció de penal. Con un global demoledor de 4-1 sobre el tricampeón del mundo, Nacional volvía a una final de Copa Libertadores 21 años después.",
      goles: [
        { minuto: "9'", autor: "Jonathan Calleri", equipo: "São Paulo", descripcion: "Cabezazo medido superando la marca defensiva." },
        { minuto: "23'", autor: "Miguel Ángel Borja", equipo: "Atlético Nacional", descripcion: "Pase en profundidad de Berrío y remate rasante y cruzado inatajable." },
        { minuto: "78' (pen.)", autor: "Miguel Ángel Borja", equipo: "Atlético Nacional", descripcion: "Ejecución al ángulo superior derecho, imposible para Denis." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez (Alejandro Guerra 68')", "Macnelly Torres",
        "Orlando Berrío", "Marlos Moreno (Andrés Ibargüen 76')", "Miguel Ángel Borja (Diego Arias 80')"
      ],
      arbitro: "Patricio Polic (Chile)",
      figura: "Miguel Ángel Borja",
      dato_curioso: "Cuatro goles en 180 minutos: ningún jugador en la historia moderna de la Libertadores le había anotado 4 goles a São Paulo en una misma llave de semifinales."
    },
    {
      id: 13,
      fase: "final",
      fase_nombre: "Gran Final - Ida",
      fecha: "20 de Julio de 2016",
      hora: "19:45 (GMT-5)",
      estadio: "Estadio Olímpico Atahualpa (Quito, Ecuador)",
      local: "Independiente del Valle",
      visitante: "Atlético Nacional",
      marcador_local: 1,
      marcador_visitante: 1,
      resumen_corto: "Golazo de Berrío en la altura de Quito y empate valioso para definir en casa.",
      cronica: "Independiente del Valle venía de eliminar a River Plate y Boca Juniors. En la altura de Quito, Atlético Nacional jugó un partido cerebral. Al minuto 36, Orlando Berrío sacó un latigazo impresionante de media distancia para el 0-1. Los ecuatorianos empataron en el minuto 87 a través de Arturo Mina tras un tiro libre embarullado, dejando la gloria para definirse en el templo verde.",
      goles: [
        { minuto: "36'", autor: "Orlando Berrío", equipo: "Atlético Nacional", descripcion: "Media vuelta formidable a 25 metros y zapatazo seco que entró rozando el poste." },
        { minuto: "87'", autor: "Arturo Mina", equipo: "Independiente del Valle", descripcion: "Rebote en el área chica tras tiro libre de Sornoza." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Sebastián Pérez (Alejandro Guerra 75')", "Macnelly Torres (Elkin Blanco 80')",
        "Orlando Berrío", "Marlos Moreno (Andrés Ibargüen 88')", "Miguel Ángel Borja"
      ],
      arbitro: "Enrique Cáceres (Paraguay)",
      figura: "Orlando Berrío",
      dato_curioso: "El gol de Berrío silenció a los 40.000 aficionados congregados en el Atahualpa de Quito."
    },
    {
      id: 14,
      fase: "final",
      fase_nombre: "Gran Final - Vuelta",
      fecha: "27 de Julio de 2016",
      hora: "19:45 (GMT-5)",
      estadio: "Estadio Atanasio Girardot (Medellín, Colombia)",
      local: "Atlético Nacional",
      visitante: "Independiente del Valle",
      marcador_local: 1,
      marcador_visitante: 0,
      resumen_corto: "¡ATLÉTICO NACIONAL BICAMPEÓN DE AMÉRICA! Gol de Borja y la gloria eterna.",
      cronica: "El 27 de julio de 2016, 48.000 almas tiñeron el Atanasio Girardot de verde y blanco. Al minuto 9, un tiro libre de Bocanegra se estrelló en el vertical y Miguel Ángel Borja, implacable, cazó el rebote para fusilar la red y marcar el gol del título. Con atajadas memorables de Franco Armani, el liderazgo legendario de Henríquez y Mejía, y un fútbol exquisito, Nacional aguantó con coraje y levantó su segunda Copa Libertadores de América, 27 años después de 1989.",
      goles: [
        { minuto: "9'", autor: "Miguel Ángel Borja", equipo: "Atlético Nacional", descripcion: "Tiro libre de Bocanegra al palo, rebote ganado con furia por Borja y disparo demoledor." }
      ],
      alineacion: [
        "Franco Armani", "Daniel Bocanegra", "Davinson Sánchez", "Alexis Henríquez", "Farid Díaz",
        "Alexander Mejía", "Alejandro Guerra (Diego Arias 89')", "Macnelly Torres",
        "Orlando Berrío", "Marlos Moreno (Andrés Ibargüen 77')", "Miguel Ángel Borja"
      ],
      arbitro: "Néstor Pitana (Argentina)",
      figura: "Franco Armani / Miguel Ángel Borja / Alexis Henríquez",
      dato_curioso: "Alexis Henríquez se convirtió en el único futbolista colombiano en ganar la Copa Libertadores con dos equipos diferentes (Once Caldas 2004 y Nacional 2016)."
    }
  ],

  heroes: [
    {
      dorsal: 1,
      nombre: "Franco Armani",
      posicion: "Portero",
      apodo: "El Pulpo de América",
      nacionalidad: "Argentina",
      partidos: 14,
      minutos: 1260,
      goles_recibidos: 6,
      vallas_invictas: 8,
      rol: "Ídolo supremo. Clave con atajadas monumentales en Rosario, Buenos Aires y la Gran Final.",
      cita: "\"Nacional me lo dio todo. Ganar la Libertadores con esta camiseta es lo máximo que soñé.\""
    },
    {
      dorsal: 2,
      nombre: "Daniel Bocanegra",
      posicion: "Lateral Derecho",
      apodo: "El Misil del Tolima",
      nacionalidad: "Colombia",
      partidos: 14,
      goles: 2,
      asistencias: 3,
      rol: "Titular en los 14 juegos. Autor de dos golazos de tiro libre y media distancia ante Peñarol.",
      cita: "\"Patear y ver esa pelota entrar al ángulo en el Centenario fue un momento único.\""
    },
    {
      dorsal: 26,
      nombre: "Davinson Sánchez",
      posicion: "Defensa Central",
      apodo: "La Roca",
      nacionalidad: "Colombia",
      partidos: 14,
      goles: 1,
      rol: "Con tan solo 19 y 20 años mostró una jerarquía imperial que deslumbró a Europa (fichado por Ajax tras la final).",
      cita: "\"A esa edad jugábamos sin miedo, sabíamos que teníamos un equipo invencible.\""
    },
    {
      dorsal: 12,
      nombre: "Alexis Henríquez",
      posicion: "Defensa Central",
      apodo: "El Capitán Libertador",
      nacionalidad: "Colombia",
      partidos: 12,
      asistencias: 1,
      rol: "Gran capitán y líder espiritual. Dio la asistencia de cabeza para el milagro de Berrío contra Central.",
      cita: "\"Esta Copa la soñamos desde el primer día de pretemporada con el profe Rueda.\""
    },
    {
      dorsal: 19,
      nombre: "Farid Díaz",
      posicion: "Lateral Izquierdo",
      apodo: "La Muralla de Valledupar",
      nacionalidad: "Colombia",
      partidos: 13,
      rol: "Impenetrable por la banda izquierda. Marcó el ritmo y la seguridad defensiva de todo el torneo.",
      cita: "\"El orden táctico era nuestra religión. Nadie pasaba por los costados.\""
    },
    {
      dorsal: 13,
      nombre: "Alexander Mejía",
      posicion: "Volante de Marca",
      apodo: "El Cacique",
      nacionalidad: "Colombia",
      partidos: 14,
      recuperaciones: 112,
      rol: "El corazón y el pulmón del mediocampo. Equilibrio puro y entrega en cada centímetro de la cancha.",
      cita: "\"Corrí cada pelota como si fuera la última de mi vida. Esta hinchada se merecía la gloria.\""
    },
    {
      dorsal: 24,
      nombre: "Sebastián Pérez",
      posicion: "Volante Mixto",
      apodo: "El Diamante Verdolaga",
      nacionalidad: "Colombia",
      partidos: 12,
      rol: "Elegancia, precisión en el pase corto y despliegue físico brillante. Transferido a Boca Juniors.",
      cita: "\"Teníamos una sincronización perfecta. Jugábamos de memoria en cualquier cancha.\""
    },
    {
      dorsal: 10,
      nombre: "Macnelly Torres",
      posicion: "Volante Creativo",
      apodo: "El Mago de Barranquilla",
      nacionalidad: "Colombia",
      partidos: 12,
      goles: 1,
      asistencias: 5,
      rol: "El cerebro pensante del equipo. Pausa milimétrica, filtrador de pases imposibles e inteligencia pura.",
      cita: "\"En este equipo la pelota siempre corría limpia. Poner a volar a Marlos, Berrío y Borja era un placer.\""
    },
    {
      dorsal: 18,
      nombre: "Alejandro Guerra",
      posicion: "Volante Ofensivo",
      apodo: "El Lobo de Caracas",
      nacionalidad: "Venezuela",
      partidos: 13,
      goles: 3,
      asistencias: 4,
      rol: "Elegido por Conmebol como el MEJOR JUGADOR de la Copa Libertadores 2016. Primer venezolano MVP.",
      cita: "\"Hicimos historia para toda Colombia y para mi amada Venezuela. Inolvidable para siempre.\""
    },
    {
      dorsal: 28,
      nombre: "Orlando Berrío",
      posicion: "Extremo Derecho",
      apodo: "El Rayo de Cartagena",
      nacionalidad: "Colombia",
      partidos: 12,
      goles: 4,
      asistencias: 3,
      rol: "Potencia desbordante. Autor del gol milagroso en el 90+5 contra Central y del golazo en la final en Quito.",
      cita: "\"Cuando vi el balón rebotar en el 95', solo pensé en empujarla con el alma entera.\""
    },
    {
      dorsal: 11,
      nombre: "Marlos Moreno",
      posicion: "Extremo Izquierdo",
      apodo: "La Joya Verdolaga",
      nacionalidad: "Colombia",
      partidos: 13,
      goles: 3,
      asistencias: 4,
      rol: "Con apenas 19 años maravilló a Sudamérica por su regate endiablado. Fichado por el Manchester City de Guardiola.",
      cita: "\"Fue un sueño de niños hecho realidad en el estadio donde crecí alentando.\""
    },
    {
      dorsal: 23,
      nombre: "Miguel Ángel Borja",
      posicion: "Centrodelantero",
      apodo: "El Tanque de Tierralta",
      nacionalidad: "Colombia",
      partidos: 4,
      goles: 5,
      rol: "El goleador más letal de la historia de los mata-mata: 5 goles en 4 partidos (4 a São Paulo y el gol del título).",
      cita: "\"Llegar en semifinales y anotar 5 goles para coronarnos campeones es la bendición más grande de mi carrera.\""
    },
    {
      dorsal: 0,
      nombre: "Reinaldo Rueda",
      posicion: "Director Técnico",
      apodo: "El Maestro de Cali",
      nacionalidad: "Colombia",
      partidos: 14,
      rendimiento: "78.6%",
      rol: "El arquitecto táctico de la consagración. Construyó una máquina aceitada de fútbol lírico y rigor táctico.",
      cita: "\"Este título fue fruto de la humildad, el trabajo científico, la unión de grupo y el amor por la institución.\""
    }
  ],

  momentos_epicos: [
    {
      titulo: "El Cerrojo de la Fase de Grupos",
      subtitulo: "5 partidos consecutivos con la portería invicta",
      descripcion: "Nacional aplastó a Huracán, Sporting Cristal y Peñarol acumulando 15 de 15 puntos iniciales con 12 goles a favor y 0 recibidos. Ningún club en el formato moderno lo había logrado con semejante contundencia.",
      icono: "shield"
    },
    {
      titulo: "El Milagro de Berrío en el Minuto 95",
      subtitulo: "La noche en que el Atanasio Girardot tembló",
      descripcion: "19 de mayo de 2016: Rosario Central ganaba la serie y quemaba los segundos. En el 90+5', Henríquez bajó un centro desesperado y Orlando Berrío detonó el arco sur. El rugido se escuchó en todo Medellín.",
      icono: "bolt"
    },
    {
      titulo: "La Irrupción Mágica de Miguel Borja",
      subtitulo: "4 goles en 180 minutos al gigante São Paulo",
      descripcion: "Recién llegado como refuerzo relámpago, Borja enmudeció a 65.000 hinchas en el Morumbí con un doblete y lo repitió en Medellín. 4 goles en dos partidos para despachar a un tricampeón mundial.",
      icono: "fire"
    },
    {
      titulo: "El Pitazo Final y la Segunda Corona",
      subtitulo: "27 de Julio de 2016: La Gloria Eterna",
      descripcion: "El árbitro Néstor Pitana hizo sonar su silbato. Alexis Henríquez levantó la Copa Libertadores al cielo antioqueño en medio de una lluvia de papel picado verdiblanco y fuegos artificiales. ¡Bicampeones de América!",
      icono: "trophy"
    }
  ]
};
