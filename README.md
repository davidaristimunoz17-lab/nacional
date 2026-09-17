# 🏆 Atlético Nacional - Campeón Copa Libertadores 2016

> Plataforma web interactiva, moderna y responsiva que conmemora la histórica conquista de la **Copa Bridgestone Libertadores 2016** por parte del **Club Atlético Nacional de Medellín**, coronándose como **Bicampeón de América**.

---

<!-- Badges -->
![Project Status](https://img.shields.io/badge/Estado-Completado-00843D?style=for-the-badge&logo=checkmarx&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-00D060?style=for-the-badge&logo=open-source-initiative&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Champion Badge](https://img.shields.io/badge/Copa_Libertadores-2016_Bicampeón-FFD700?style=for-the-badge&logo=trophy&logoColor=black)

---

## 📖 Descripción del Proyecto

El 27 de julio de 2016, 27 años después del histórico título de 1989, Atlético Nacional levantó su segunda Copa Libertadores en el Estadio Atanasio Girardot ante más de 48.000 espectadores. Bajo el mando táctico del profesor **Reinaldo Rueda**, el equipo desplegó una de las campañas más arrolladoras en la era moderna de la Conmebol:

- **14 partidos disputados**: 10 victorias, 3 empates y solo 1 derrota.
- **25 goles a favor y solo 6 en contra** (diferencia de gol de +19).
- **8 vallas invictas** con la actuación estelar de Franco Armani.
- **Fase de grupos perfecta**: líder general invicto y sin recibir goles en los primeros 5 compromisos.

Este sitio web conmemorativo ofrece una experiencia visual inmersiva con la identidad verdolaga (verde, blanco, dorado y modo oscuro), permitiendo a los aficionados revivir cada uno de los 14 encuentros, explorar fichas técnicas completas y conocer a los héroes del plantel.

---

## ✨ Características Principales

1. **🎨 Diseño Visual de Élite (CSS3 & Glassmorphism)**:
   - Paleta de colores oficial: Verde Verdolaga (`#00843D`), Verde Neón (`#00FF85`), Dorado Continental (`#FFD700`) y fondos oscuros profundos.
   - Efectos translúcidos con `backdrop-filter: blur()`, resplandores luminosos y tipografía deportiva moderna (`Outfit` e `Inter` de Google Fonts).
   - 100% responsivo en smartphones, tablets y pantallas de escritorio.

2. **⚡ Recorrido Interactivo de los 14 Partidos (Timeline & Filtros)**:
   - Filtros dinámicos en tiempo real por fase: *Todos los Partidos*, *Fase de Grupos*, *Octavos de Final*, *Cuartos de Final*, *Semifinales* y *Gran Final*.
   - Tarjetas interactivas con marcadores, escudos, estadios y previsualización de goleadores.

3. **📋 Modal de Ficha Técnica Detallada**:
   - Al pulsar cualquier partido se despliega un modal accesible con:
     - Marcador oficial y fecha/hora exacta.
     - Estadio y árbitro de la contienda.
     - Crónica del partido y momento clave.
     - Detalle minuto a minuto de los goles con descripciones.
     - Nómina titular y sustituciones verdolagas.
     - Datos curiosos e históricos del encuentro.

4. **📊 Contadores Numéricos Animados**:
   - Cifras récord animadas automáticamente al hacer scroll mediante `IntersectionObserver`.

5. **🎉 Motor de Confeti y Celebración Web Audio**:
   - Botón *"¡Grito de Campeón!"* que lanza una lluvia de confeti en colores verde, blanco y dorado sobre un `<canvas>` HTML5 nativo de alto rendimiento.
   - Fanfarria continental sintetizada mediante la API de Audio del navegador (sin dependencias externas).

6. **⭐ Galería de los Héroes**:
   - Fichas individuales de las figuras del plantel: Franco Armani, Alexis Henríquez, Daniel Bocanegra, Davinson Sánchez, Farid Díaz, Alexander Mejía, Sebastián Pérez, Alejandro Guerra (MVP), Macnelly Torres, Orlando Berrío, Marlos Moreno, Miguel Borja y el DT Reinaldo Rueda.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Marcado semántico, accesibilidad (`aria-*`, modales accesibles) y metaetiquetas Open Graph / SEO.
- **CSS3 Puro**: Custom properties (variables CSS), Grid Layout, Flexbox, animaciones de transición fluidas y Glassmorphism sin librerías pesadas.
- **JavaScript (ES6+)**:
  - Manipulación reactiva del DOM sin dependencias.
  - Filtros y renderizado dinámico de datos.
  - Motor de partículas en Canvas 2D.
  - Web Audio API para efectos sonoros deportivos.
  - `IntersectionObserver` para contadores de impacto.

---

## 📁 Estructura del Repositorio

```text
nacional-libertadores-2016/
│
├── index.html              # Estructura principal, SEO y accesibilidad
├── README.md               # Documentación completa con badges
│
├── css/
│   └── style.css           # Sistema de diseño, temas verdolaga y responsive
│
├── js/
│   ├── data.js             # Base de datos histórica (14 partidos, héroes, estadísticas)
│   └── app.js              # Lógica interactiva, filtros, modal y confeti
│
└── assets/
    ├── images/
    │   ├── hero-champions.jpg   # Arte conceptual de la celebración continental
    │   └── trophy-gloria.jpg    # Fotografía artística del trofeo Libertadores
    └── icons/                   # Iconografía SVG complementaria
```

---

## 🚀 Instrucciones de Uso e Instalación

No se requiere ningún gestor de paquetes ni compilador complejo. El proyecto funciona de forma nativa en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

### Opción 1: Apertura Directa
1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nacional-libertadores-2016.git
   ```
2. Abre la carpeta del proyecto y haz doble clic en el archivo `index.html` para abrirlo en tu navegador favorito.

### Opción 2: Con un Servidor Local (Recomendado)
Para una experiencia óptima con animaciones y transiciones:

- **Con Python**:
  ```bash
  cd nacional-libertadores-2016
  python -m http.server 8000
  ```
  Luego abre en tu navegador: `http://localhost:8000`

- **Con Node.js (npx serve)**:
  ```bash
  npx serve .
  ```

- **Con VS Code**:
  Instala la extensión **Live Server** y presiona `Go Live` en `index.html`.

---

## 📊 Tabla Resumen de la Campaña 2016

| Fase | Rival | Ida | Vuelta | Global / Resultado |
| :--- | :--- | :---: | :---: | :---: |
| **Grupos (F1)** | Huracán (ARG) | - | - | **0 - 2** (V) |
| **Grupos (F2)** | Sporting Cristal (PER) | - | - | **3 - 0** (L) |
| **Grupos (F3)** | Peñarol (URU) | - | - | **2 - 0** (L) |
| **Grupos (F4)** | Peñarol (URU) | - | - | **0 - 4** (V) |
| **Grupos (F5)** | Sporting Cristal (PER) | - | - | **0 - 1** (V) |
| **Grupos (F6)** | Huracán (ARG) | - | - | **0 - 0** (L) |
| **Octavos** | Huracán (ARG) | 0 - 0 | 4 - 2 | **4 - 2** |
| **Cuartos** | Rosario Central (ARG) | 1 - 0 | 3 - 1 | **3 - 2** (Gol al 95') |
| **Semifinal** | São Paulo (BRA) | 0 - 2 | 2 - 1 | **4 - 1** |
| **Gran Final** | Independiente del Valle (ECU) | 1 - 1 | 1 - 0 | **2 - 1** 🏆 |

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---

> *«Esta Copa la soñamos desde el primer día de pretemporada con el profe Rueda. Medellín y Colombia merecían esta alegría.»*  
> — **Alexis Henríquez**, Capitán Libertador 2016.
