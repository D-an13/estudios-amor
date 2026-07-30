const studyData = {
    humanidades: {
        title: "Humanidades",
        topics: [
            {
                id: "3.7.1.1",
                title: "La ética y otras ciencias auxiliares de la Filosofía",
                intro: "A ver, imagínate que estamos sentados un jueves tranquilos con un café platicando de la vida. De repente nos preguntamos: <i>'¿Por qué ciertas cosas nos parecen buenas o malas, bellas o feas, y cómo sabemos qué es real?'</i>. Ahí estamos entrando de lleno al terreno de la <b>Filosofía</b> (que etimológicamente significa 'amor a la sabiduría').<br><br>La filosofía busca comprender las causas primeras y los principios fundamentales de todo lo que existe. Como es un campo tan vasto, se divide en <b>disciplinas o ciencias auxiliares</b> especializadas:<br><br>• <b>Ética:</b> Estudio filosófico de la moral, el bien, el deber ser y la conducta humana. Nos ayuda a discernir entre lo correcto e incorrecto en nuestras decisiones cotidianas.<br><br>• <b>Ontología (Metafísica general):</b> Estudia la naturaleza del 'ser', la existencia y la realidad misma. Se pregunta: <i>¿Qué significa que algo 'exista'? ¿Cuál es la esencia de las cosas?</i>.<br><br>• <b>Epistemología (Teoría del conocimiento):</b> Evalúa cómo conocemos la verdad, los límites del saber humano y los criterios de validez del conocimiento científico.<br><br>• <b>Lógica:</b> Estudia la estructura, formas y reglas del razonamiento válido, permitiéndonos construir argumentos sólidos e identificar falacias.<br><br>• <b>Axiología:</b> Es la teoría de los <b>valores</b>. Analiza tanto los valores éticos (justicia, honestidad) como los estéticos, estudiando qué hace que algo sea considerado valioso.<br><br>• <b>Estética:</b> Explora la percepción de la belleza, la experiencia sensible y las manifestaciones del arte.<br><br><b>Ejemplo para no olvidarlo nunca:</b> Si analizas una pintura en un museo: preguntarte si la obra es hermosa es <b>Estética</b>; evaluar si lo que plasma refleja la verdad histórica es <b>Epistemología</b>; y cuestionarte si el tema representado es moralmente aceptable es <b>Ética</b>.",
                keypoints: [
                    "Ética: Estudio filosófico de la moral, el bien y el deber ser del comportamiento humano.",
                    "Ontología: Estudio de la naturaleza del 'ser', la existencia y la realidad.",
                    "Epistemología: Estudio del origen, posibilidad y validez del conocimiento científico.",
                    "Axiología: Estudio riguroso de la naturaleza de los valores humanos.",
                    "Estética: Reflexión sobre la belleza, la percepción sensible y la teoría del arte.",
                    "El truco para el examen: Si te preguntan por 'valores', la respuesta es AXIOLOGÍA. Si preguntan por 'el ser o la realidad', es ONTOLOGÍA."
                ],
                quiz: {
                    question: "¿Qué disciplina de la filosofía se encarga específicamente de estudiar la naturaleza de los valores humanos?",
                    options: [
                        { text: "Axiología", correct: true },
                        { text: "Epistemología", correct: false },
                        { text: "Ontología", correct: false }
                    ],
                    explanation: "La axiología es la rama filosófica que profundiza en el concepto, clasificación y fundamento de los valores humanos."
                }
            },
            {
                id: "3.7.1.2",
                title: "Filosofía presocrática",
                intro: "Antes de los grandes maestros de Atenas como Sócrates o Platón, surgió en las colonias griegas un grupo de sabios llamados <b>Presocráticos</b>. Ellos marcaron un hito histórico fundamental: <b>el paso del Mito al Logos</b>.<br><br>¿Qué significa esto? Que dejaron de explicar las tormentas, las cosechas o la creación del mundo mediante relatos mitológicos de dioses furiosos, y comenzaron a buscar explicaciones <b>racionales y bien observadas</b> basadas en la naturaleza.<br><br>La gran búsqueda de los presocráticos era descubrir el <b>Arché (o Arjé)</b>, que se define como el <i>principio u origen fundamental de donde surge todo en el universo y al cual todo regresa</i>.<br><br><b>Los presocráticos clave y sus propuestas:</b><br><br>• <b>Tales de Mileto:</b> Considerado el primer filósofo. Afirmaba que el Arché es el <b>Agua</b>, ya que todo lo vivo necesita humedad para germinar y mantenerse.<br><br>• <b>Anaxímenes:</b> Proponía que el principio vital es el <b>Aire</b>, un elemento infinito que al rarefacerse o condensarse da origen a las demás sustancias.<br><br>• <b>Pitágoras:</b> Argumentaba que la esencia de la realidad no era un elemento físico, sino abstracto: los <b>Números</b> y las proporciones matemáticas.<br><br>• <b>Heráclito de Éfeso:</b> Sostenía que la realidad está en constante devenir y transformación (<i>'Nadie puede bañarse dos veces en el mismo río, porque ni el río ni el hombre son los mismos'</i>). Asociaba este movimiento al <b>Fuego</b>.<br><br>• <b>Parménides de Elea:</b> Defendía la postura contraria a Heráclito. Decía que el cambio es solo una ilusión de nuestros sentidos y que el 'Ser' es inmóvil, uno, eterno e inmutable.",
                keypoints: [
                    "Paso del Mito al Logos: Transición de explicaciones mítico-religiosas a explicaciones racionales y observacionales.",
                    "Arché (Arjé): La sustancia o principio elemental que sostiene el origen de la naturaleza.",
                    "Tales = Agua | Anaxímenes = Aire | Pitágoras = Números | Heráclito = Fuego y Cambio permanente.",
                    "Parménides = El 'Ser' es inmóvil y el cambio es una ilusión sensorial.",
                    "El truco para el examen: Si la pregunta alude al 'cambio constante' o la metáfora del 'río', es HERÁCLITO. Si indaga por la 'sustancia originaria', la palabra clave es ARCHÉ."
                ],
                quiz: {
                    question: "¿Cómo se le llama al concepto filosófico presocrático que busca el principio o sustancia fundamental de la naturaleza?",
                    options: [
                        { text: "Arché (Arjé)", correct: true },
                        { text: "Logos", correct: false },
                        { text: "Axioma", correct: false }
                    ],
                    explanation: "El Arché es el término griego que usaban los presocráticos para designar el principio o elemento primordial de todas las cosas."
                }
            },
            {
                id: "3.7.1.3",
                title: "La Filosofía clásica (Sócrates, Platón y Aristóteles)",
                intro: "Llegamos a la época de oro del pensamiento griego. Estos tres filósofos estructuraron la columna vertebral de la cultura y la ciencia en Occidente:<br><br><b>1. Sócrates (El maestro de la pregunta):</b><br>No dejó escritos propios; conocemos sus ideas gracias a Platón. Cambió el enfoque de la filosofía: dejó de mirar la naturaleza física para enfocarse en la ética humana y la virtud. Su famoso método es la <b>Mayéutica</b> (palabra que significa 'arte de hacer parir'). Consistía en hacer preguntas guiadas e ir desmontando falsos conocimientos hasta que el interlocutor 'diera a luz' la verdad por sí mismo. Su lema era: <i>'Solo sé que no sé nada'</i>.<br><br><b>2. Platón (El mundo del idealismo):</b><br>Discípulo de Sócrates. Formuló la <b>Teoría de las Ideas</b> y la explicó magistralmente en el <b>Mito de la Caverna</b>. Sostenía que existen dos mundos: el <i>Mundo Sensible</i> (el físico, imperfecto y cambiante que captamos con los sentidos) y el <i>Mundo Inteligible o de las Ideas</i> (donde residen las esencias perfectas, eternas e inmutables). Para Platón, el cuerpo es la cárcel del alma.<br><br><b>3. Aristóteles (El empirismo y la lógica):</b><br>Discípulo de Platón, pero profundamente crítico de separar la realidad en dos mundos. Trajo la filosofía de vuelta a la tierra, argumentando que la verdad se descubre mediante la observación de la naturaleza y los hechos concretos. Es el fundador de la <b>Lógica formal</b> (con los silogismos deductivos) y planteó una ética centrada en la búsqueda de la felicidad (Eudemonía) a través de la <b>Virtud y el Justo Medio</b> entre dos extremos.",
                keypoints: [
                    "Sócrates: Método de la Mayéutica (diálogo por preguntas) y búsqueda de la verdad orientada a la virtud.",
                    "Platón: Dualismo ontológico (Mundo Sensible vs. Mundo de las Ideas) y el Mito de la Caverna.",
                    "Aristóteles: Observación empírica, invención de la Lógica tradicional y la Teoría del Justo Medio.",
                    "El truco para el examen: Pregunta sobre 'guiar al interlocutor mediante preguntas para descubrir la verdad' = MAYÉUTICA / SÓCRATES. Pregunta sobre 'sombras vs. realidad perfecta' = PLATÓN."
                ],
                quiz: {
                    question: "¿En qué consiste el método socrático conocido como Mayéutica?",
                    options: [
                        { text: "En hacer preguntas guiadas para que el interlocutor descubra la verdad por sí mismo", correct: true },
                        { text: "En memorizar discursos largos dictados por los gobernantes", correct: false },
                        { text: "En escribir libros teóricos sobre el origen del universo", correct: false }
                    ],
                    explanation: "La Mayéutica socrática es un diálogo inductivo a base de preguntas que ayuda a que la persona alcance el conocimiento de forma autónoma."
                }
            },
            {
                id: "3.7.1.4",
                title: "Filosofía maya",
                intro: "A diferencia del pensamiento occidental antropocéntrico (donde el hombre se considera el centro y dueño de todo), la <b>Filosofía Maya</b> posee un enfoque profundamente <b>cosmocéntrico, comunitario, holístico y sagrado</b>.<br><br>Para la cosmovisión maya, el ser humano no domina a la naturaleza, sino que es un hilo más en el gran tejido del universo.<br><br><b>Fundamentos centrales de la Filosofía Maya:</b><br><br>• <b>Interconectividad y Armonía Total:</b> Todo en el cosmos posee vida y energía (<i>Ch'ulel</i>). La tierra, las plantas, los ríos, los animales y las personas forman un solo organismo. Alterar una parte rompe el equilibrio general.<br><br>• <b>El Popol Vuh y el Origen Humano:</b> En el libro sagrado K'iche', se narra cómo los creadores (Tepeu y Gucumatz) fracasaron al intentar hacer al hombre de barro (se deshacía) y de madera (no tenía corazón ni memoria). Finalmente, la humanidad consciente y agradecida nace del <b>Maíz</b> (blanco y amarillo). El maíz sintetiza el respeto, la nutrición y la alianza sagrada entre el cosmos y el ser humano.<br><br>• <b>La Dualidad y Complementariedad:</b> El universo funciona mediante pares complementarios (día/noche, hombre/mujer, vida/muerte). No son opuestos destructivos, sino fuerzas indispensables para mantener el equilibrio.<br><br>• <b>Utz Kaslemal (El Buen Vivir):</b> Filosofía de vida orientada a convivir en paz con uno mismo, con los semejantes, los antepasados y la Madre Tierra.",
                keypoints: [
                    "Cosmovisión Cosmocéntrica: El centro y valor supremo es el equilibrio del cosmos y la naturaleza.",
                    "Popol Vuh: Texto fundamental donde el maíz es la sustancia sagrada de la que nace el hombre consciente.",
                    "Dualidad y Complementariedad: Armonía entre elementos divergentes para mantener el orden universal.",
                    "Utz Kaslemal: Principio ético y comunitario del 'Buen Vivir' en sintonía con la Tierra.",
                    "El truco para el examen: Si la pregunta aborda la 'creación exitosa de los hombres' o la 'sustancia sagrada de vida' en la cultura maya, la respuesta es el MAÍZ."
                ],
                quiz: {
                    question: "¿Cuál es el elemento fundamental en el Popol Vuh con el que son creados exitosamente los seres humanos conscientes?",
                    options: [
                        { text: "El Maíz", correct: true },
                        { text: "El Barro", correct: false },
                        { text: "La Madera", correct: false }
                    ],
                    explanation: "En la narración del Popol Vuh, los seres humanos de maíz son los únicos capaces de tener memoria, sensibilidad y venerar a los creadores."
                }
            },
            {
                id: "3.7.1.5",
                title: "Razonamiento válido y tipos de falacias",
                intro: "Para construir debates inteligentes e investigar rigurosamente, necesitamos argumentar con <b>validez lógica</b>. Un razonamiento es lógicamente válido cuando su conclusión se deduce de manera directa y coherente a partir de las premisas planteadas.<br><br>Sin embargo, es muy común tropezar con <b>Falacias</b>: argumentos engañosos que <i>parecen</i> lógicos a simple vista, pero que contienen trampas, manipulación emocional o errores en la estructura del razonamiento.<br><br><b>Las Falacias más recurrentes en evaluaciones:</b><br><br>• <b>Ad Hominem (Ataque a la persona):</b> Consiste en descalificar un argumento atacando los defectos, aspecto, edad o vida privada de quien lo emite, en lugar de refutar su idea.<br><i>Ejemplo:</i> 'No podemos validar la propuesta económica del profesor porque él no viste formalmente'.<br><br>• <b>Ad Verecundiam (Apelar a la falsa autoridad):</b> Defender que una afirmación es cierta solo porque la dijo alguien famoso o respetado, aunque esa persona no sea experta en esa materia específica.<br><i>Ejemplo:</i> 'Esta vitamina cura el resfrío porque lo afirmó un actor famoso en la televisión'.<br><br>• <b>Ad Populum (Apelar al pueblo / a la mayoría):</b> Sostener que una idea es correcta únicamente porque 'la mayoría de la gente lo hace o lo cree'.<br><i>Ejemplo:</i> 'Debemos comprar esta marca porque es la que la mayoría consume'.<br><br>• <b>Ad Ignorantiam (Apelar a la ignorancia):</b> Dar por hecho que una afirmación es verdadera solo porque nadie ha podido demostrar lo contrario.<br><i>Ejemplo:</i> 'Los extraterrestres existen porque nadie ha demostrado jamás que no existan'.<br><br>• <b>Ad Misericordiam (Apelar a la piedad):</b> Intentar convencer o ganar una discusión manipulando los sentimientos de compasión o lástima.",
                keypoints: [
                    "Validez Lógica: Coherencia formal donde la conclusión deriva de las premisas.",
                    "Falacia: Razonamiento engañoso o inválido con apariencia de verdad.",
                    "Ad Hominem = Ataca las características de la persona.",
                    "Ad Verecundiam = Usa la fama de una autoridad no competente.",
                    "Ad Populum = Se respalda en lo que hace la mayoría.",
                    "El truco para el examen: Identifica la trampa: Si critican el carácter, apariencia o condición del hablante para tumbar su idea, la falacia es AD HOMINEM."
                ],
                quiz: {
                    question: "Si alguien dice en una discusión: 'Ese plan ambiental no sirve porque quien lo propuso me cae mal', ¿qué falacia está cometiendo?",
                    options: [
                        { text: "Ad Hominem", correct: true },
                        { text: "Ad Populum", correct: false },
                        { text: "Ad Ignorantiam", correct: false }
                    ],
                    explanation: "Incurre en una falacia Ad Hominem al atacar directamente a la persona que propone la idea y no el contenido del plan ambiental."
                }
            },
            {
                id: "3.7.1.6",
                title: "Cultura, multiculturalidad e interculturalidad",
                intro: "En un país diverso como Guatemala, es fundamental no confundir estos tres términos sobre la convivencia social:<br><br>• <b>Cultura:</b> Es el conjunto complejo de conocimientos, costumbres, lenguas, tradiciones, artes, valores y cosmovisiones que caracterizan e identifican a un grupo humano determinado.<br><br>• <b>Multiculturalidad (Concepto Descriptivo):</b> Se refiere a la <b>coexistencia de varias culturas distintas dentro de un mismo espacio geográfico o territorial</b>. Describe una realidad objetiva (el hecho de que convivimos pueblos Mayas, Garífunas, Xinkas y Ladinos), pero <i>no garantiza</i> por sí sola que exista una comunicación fluida o una relación de equidad entre ellos. Es como varios departamentos en un mismo edificio.<br><br>• <b>Interculturalidad (Concepto Dinámico e Ideal):</b> Es el proceso continuo de <b>relación, diálogo respetuoso, interacción activa y aprendizaje mutuo entre diversas culturas</b> en condiciones de absoluta igualdad y justicia social. Busca derribar barreras de racismo y discriminación.<br><br>• <b>Etnocentrismo (La amenaza):</b> Consiste en analizar o juzgar a otras culturas usando los valores y normas de la cultura propia como si fueran la 'medida correcta' o superior.",
                keypoints: [
                    "Cultura: Sistema de significados, idioma, creencias y tradiciones de un grupo.",
                    "Multiculturalidad: Convivencia o presencia de múltiples culturas en un territorio (constatación de un hecho).",
                    "Interculturalidad: Diálogo dinámico, respeto profundo, equidad e intercambio constructivo entre culturas.",
                    "Etnocentrismo: Actitud de juzgar a otras culturas sintiendo que la propia es el modelo superior.",
                    "El truco para el examen: Si el enunciado habla de 'diálogo activo, equidad y respeto entre culturas', marca INTERCULTURALIDAD. Si solo menciona 'varias culturas juntas en un país', marca MULTICULTURALIDAD."
                ],
                quiz: {
                    question: "¿Cómo se llama al proceso de interacción equitativa y diálogo respetuoso entre diversas culturas en una misma sociedad?",
                    options: [
                        { text: "Interculturalidad", correct: true },
                        { text: "Multiculturalidad", correct: false },
                        { text: "Etnocentrismo", correct: false }
                    ],
                    explanation: "La interculturalidad implica una interacción activa basada en el diálogo horizontal y el respeto recíproco entre pueblos diversos."
                }
            },
            {
                id: "3.7.1.7",
                title: "Filósofos guatemaltecos y centroamericanos",
                intro: "Nuestra región cuenta con un legado formidable de intelectuales que han analizado la política, la educación, la historia y la estructura social centroamericana:<br><br>• <b>José Cecilio del Valle (Hondureño–Centroamericano):</b> Una de las mentes más brillantes de la ilustración regional. Redactó el <b>Acta de Independencia de 1821</b>. Concebía que la educación de calidad, el método científico y la formación ética eran las únicas herramientas capaces de conducir a las naciones centroamericanas hacia la libertad y la prosperidad.<br><br>• <b>Severo Martínez Peláez (Guatemalteco):</b> Historiador y pensador indispensable del siglo XX. Su obra cumbre, <b>'La Patria del Criollo'</b>, realiza un análisis sociohistórico riguroso sobre las raíces de la segregación, la explotación de la tierra y la estructura social heredada del régimen colonial en Guatemala.<br><br>• <b>Luis Cardoza y Aragón (Guatemalteco):</b> Ensayista, poeta y crítico de arte nacido en Antigua Guatemala. Sus escritos denunciaron las injusticias sociales, defendieron la dignidad humana y reflexionaron con profunda sensibilidad sobre la identidad nacional.<br><br>• <b>Enrique Gómez Carrillo (Guatemalteco):</b> Conocido como el 'Rey del Modernismo', sus crónicas de viaje e impresiones críticas aportaron una valiosa mirada reflexiva sobre la cultura y la condición humana a inicios del siglo XX.",
                keypoints: [
                    "José Cecilio del Valle: Prócer, redactor del Acta de Independencia de 1821 y defensor de la educación científica.",
                    "Severo Martínez Peláez: Autor de 'La Patria del Criollo', texto clave para entender la realidad histórica colonial de Guatemala.",
                    "Luis Cardoza y Aragón: Crítico de arte y pensador enfocado en la justicia social y la identidad.",
                    "Enrique Gómez Carrillo: Gran cronista modernista con una aguda visión crítica cultural.",
                    "El truco para el examen: Si la pregunta indaga de forma directa sobre el autor del libro 'La Patria del Criollo', responde sin dudar SEVERO MARTÍNEZ PELÁEZ."
                ],
                quiz: {
                    question: "¿Qué pensador e historiador guatemalteco escribió la obra fundamental 'La Patria del Criollo'?",
                    options: [
                        { text: "Severo Martínez Peláez", correct: true },
                        { text: "José Cecilio del Valle", correct: false },
                        { text: "Enrique Gómez Carrillo", correct: false }
                    ],
                    explanation: "Severo Martínez Peláez fue el historiador guatemalteco que analizó la estructura colonial en su célebre libro 'La Patria del Criollo'."
                }
            },
            {
                id: "3.7.2.1",
                title: "Psicología y áreas de aplicación",
                intro: "La <b>Psicología</b> es la ciencia que estudia el comportamiento humano y los procesos mentales (pensamientos, emociones, percepciones y memoria). Dado que los seres humanos nos desenvolvemos en múltiples entornos, la psicología se divide en especialidades aplicadas:<br><br>• <b>Psicología Clínica:</b> Se ocupa del diagnóstico, evaluación, prevención y tratamiento terapéutico de los trastornos emocionales, mentales y de la conducta.<br><br>• <b>Psicología Educativa:</b> Investiga cómo aprenden las personas y diseña estrategias pedagógicas para optimizar el rendimiento y el desarrollo cognitivo en escuelas y universidades.<br><br>• <b>Psicología Industrial / Organizacional:</b> Analiza la conducta humana en los ambientes de trabajo. Se enfoca en el reclutamiento de personal, la motivación laboral, el liderazgo y la mejora del clima organizacional.<br><br>• <b>Psicología Social:</b> Estudia cómo el contexto, la cultura, los prejuicios y la interacción con los grupos influyen en los pensamientos y actitudes del individuo.<br><br>• <b>Psicología Forense:</b> Aplica los principios psicológicos en el ámbito del derecho, elaborando peritajes y evaluaciones para jueces y tribunales judiciales.<br><br>• <b>Psicobiología:</b> Explora las bases biológicas y neuronales que sustentan la conducta y los procesos de la mente.",
                keypoints: [
                    "Psicología: Ciencia que estudia la conducta y los procesos mentales.",
                    "Clínica: Diagnóstico y psicoterapia de salud mental.",
                    "Educativa: Aprendizaje y rendimiento escolar.",
                    "Industrial / Organizacional: Selección de personal y clima laboral en empresas.",
                    "Social: Influencia de los grupos y la cultura en el individuo.",
                    "Forense: Peritajes aplicados al sistema legal y jurídico.",
                    "El truco para el examen: Relaciona el campo: Trabajo/Empresa = INDUSTRIAL | Escuela/Aulas = EDUCATIVA | Tribunales = FORENSE | Terapia = CLÍNICA."
                ],
                quiz: {
                    question: "¿Qué área de la psicología se encarga de mejorar el clima laboral y los procesos de selección en una empresa?",
                    options: [
                        { text: "Psicología Industrial / Organizacional", correct: true },
                        { text: "Psicología Clínica", correct: false },
                        { text: "Psicología Forense", correct: false }
                    ],
                    explanation: "La psicología industrial u organizacional se enfoca en optimizar el rendimiento, clima de trabajo y reclutamiento en empresas."
                }
            },
            {
                id: "3.7.2.2",
                title: "Escuelas psicológicas",
                intro: "Comprender la mente es una tarea monumental. Por ello, a lo largo de la historia nacieron grandes corrientes o <b>'escuelas psicológicas'</b>, cada una con su propio marco teórico para explicar quiénes somos:<br><br>• <b>Psicoanálisis (Sigmund Freud):</b> Pone el foco en el <b>Inconsciente</b>. Plantea que la conducta humana está guiada por impulsos, deseos reprimidos y conflictos emocionales que se gestaron durante la infancia temprana.<br><br>• <b>Conductismo (John B. Watson, B.F. Skinner):</b> Rechaza el estudio de procesos internos no observables (como los sueños o el inconsciente) y argumenta que la psicología debe estudiar <b>SÓLO la conducta observable y medible</b>. Explica el aprendizaje a través de <b>Estímulos, Respuestas, Refuerzos (premios) y Castigos</b>.<br><br>• <b>Humanismo (Abraham Maslow, Carl Rogers):</b> Surge como reacción al psicoanálisis y al conductismo. Sostiene una visión positiva del ser humano, destacando el libre albedrío, la dignidad y la constante búsqueda de <b>Autorrealización</b> y desarrollo del potencial personal.<br><br>• <b>Cognitivismo (Jean Piaget, Ulric Neisser):</b> Estudia cómo la mente procesa, almacena, recupera y transforma la información del entorno, analizando el cerebro como un procesador de datos.",
                keypoints: [
                    "Psicoanálisis (Freud): Inconsciente, impulsos reprimidos y vivencias infantiles.",
                    "Conductismo (Skinner/Watson): Modificación de la conducta observable mediante estímulos, premios y castigos.",
                    "Humanismo (Maslow/Rogers): Libre albedrío, crecimiento personal y Pirámide de Autorrealización.",
                    "Cognitivismo: Procesos mentales superiores (memoria, lenguaje, percepción y resolución de problemas).",
                    "El truco para el examen: Mente inconsciente = PSICOANÁLISIS | Modificar conducta con premios/castigos = CONDUCTISMO | Potencial y crecimiento personal = HUMANISMO."
                ],
                quiz: {
                    question: "¿Qué escuela psicológica sostiene que la conducta humana se moldea principalmente a través de estímulos, premios y castigos observables?",
                    options: [
                        { text: "Conductismo", correct: true },
                        { text: "Psicoanálisis", correct: false },
                        { text: "Humanismo", correct: false }
                    ],
                    explanation: "El conductismo centra todo su análisis en cómo los estímulos ambientales y los refuerzos moldean la conducta observable."
                }
            },
            {
                id: "3.7.2.3",
                title: "La personalidad y sus enfoques",
                intro: "La <b>Personalidad</b> es el patrón único, estructurado y relativamente estable de pensamientos, emociones y conductas que caracteriza a un individuo a lo largo de su vida.<br><br><b>Los dos componentes constituyentes de la personalidad:</b><br><br>• <b>Temperamento:</b> Es la dimensión <b>biológica, innata y heredada</b> de la personalidad. Se manifiesta desde el nacimiento (por ejemplo, la tendencia de un bebé a ser naturalmente irritable o tranquilo) y depende de nuestro sistema nervioso y hormonal.<br><br>• <b>Carácter:</b> Es la dimensión <b>social y aprendida</b>. Se moldea gradualmente con las experiencias de vida, la educación familiar, los valores y las normas culturales del entorno.<br><br><i>Fórmula memorizable: Personalidad = Temperamento (Biología) + Carácter (Experiencia/Educación).</i><br><br><b>Enfoques destacados sobre la personalidad:</b><br>• <b>Aparato Psíquico de Freud:</b> La personalidad resulta del equilibrio entre el <i>Ello</i> (impulsos primitivos e inconscientes), el <i>Superyó</i> (la conciencia moral e ideales) y el <i>Yo</i> (el mediador con la realidad).<br>• <b>Teoría Psicosocial de Erik Erikson:</b> Plantea que la personalidad se desarrolla a lo largo de 8 etapas vitales, superando crisis psicosociales socio-ambientales.",
                keypoints: [
                    "Temperamento: Dimensión de la personalidad determinada genéticamente (innata).",
                    "Carácter: Dimensión adquirida mediante el aprendizaje, la educación y el contexto social.",
                    "Estructura Freudiana: El Ello (deseo), Yo (realidad) y Superyó (normas/moral).",
                    "El truco para el examen: Si preguntan por la parte de la personalidad que viene 'por herencia o biología desde el nacimiento', marca TEMPERAMENTO."
                ],
                quiz: {
                    question: "¿Cuál es el componente de la personalidad que viene determinado biológicamente y es de origen hereditario?",
                    options: [
                        { text: "El Temperamento", correct: true },
                        { text: "El Carácter", correct: false },
                        { text: "El Rol Social", correct: false }
                    ],
                    explanation: "El temperamento es el pilar genético e innato de la personalidad de todo ser humano."
                }
            },
            {
                id: "3.7.2.4",
                title: "Desarrollo evolutivo y cambios psicológicos",
                intro: "La <b>Psicología Evolutiva</b> analiza la transformación continua que experimentamos las personas a lo largo de nuestro ciclo vital. En cada etapa enfrentamos retos y cambios cognitivos, biológicos y afectivos:<br><br>• <b>Infancia:</b> Marcada por la formación del apego afectivo primario, el aprendizaje acelerado del lenguaje y los primeros hitos de socialización en el núcleo familiar.<br><br>• <b>Adolescencia (Etapa de transición crítica):</b> Periodo caracterizado por cambios hormonales intensos y el desarrollo del pensamiento abstracto. Su tarea psicológica central es la <b>búsqueda y consolidación de la identidad personal y el rol social</b>, así como la independización emocional de la tutela de los padres.<br><br>• <b>Adultez:</b> Periodo de estabilidad biológica donde la persona asume proyectos laborales, relaciones afectivas maduras y compromisos ciudadanos dentro de la comunidad.<br><br>• <b>Vejez / Adultez Mayor:</b> Etapa de introspección, consolidación de la sabiduría adquirida y adaptación a cambios corporales.",
                keypoints: [
                    "Psicología Evolutiva: Estudio de los cambios del comportamiento a lo largo de las etapas del ciclo vital.",
                    "Infancia: Construcción del apego afectivo y adquisición del lenguaje.",
                    "Adolescencia: Búsqueda y afirmación de la propia identidad personal.",
                    "El truco para el examen: Si la pregunta indaga sobre el conflicto o tarea central de la etapa adolescente, la respuesta es LA BÚSQUEDA DE LA IDENTIDAD."
                ],
                quiz: {
                    question: "¿Cuál es la principal tarea o crisis psicológica que enfrenta el ser humano durante la etapa de la adolescencia?",
                    options: [
                        { text: "La búsqueda y consolidación de la identidad personal", correct: true },
                        { text: "El aprendizaje primario del lenguaje", correct: false },
                        { text: "La reflexión sobre la sabiduría de la vida pasada", correct: false }
                    ],
                    explanation: "El reto crucial de la adolescencia consiste en responder a la pregunta '¿Quién soy?' definiendo la propia identidad."
                }
            },
            {
                id: "3.7.3.1",
                title: "Fases de la investigación científica",
                intro: "La ciencia no trabaja al azar ni se guía por simples intuiciones. Requiere aplicar el <b>Método Científico</b> mediante un proceso riguroso dividido en fases secuenciales:<br><br>1. <b>Planteamiento del Problema:</b> Delimitar con precisión qué fenómeno se va a estudiar y formular la pregunta central de investigación.<br><br>2. <b>Elaboración del Marco Teórico:</b> Revisar la literatura, libros e investigaciones previas para fundamentar científicamente el objeto de estudio.<br><br>3. <b>Formulación de Hipótesis:</b> Proponer una <b>respuesta o suposición tentativa</b> que explica el problema y que deberá ser probada mediante evidencia empírica.<br><br>4. <b>Diseño del Marco Metodológico:</b> Definir las técnicas, muestras y herramientas con las que se recolectarán los datos de campo.<br><br>5. <b>Análisis de Resultados y Conclusiones:</b> Interpretar la información procesada para confirmar o rechazar la hipótesis planteada.",
                keypoints: [
                    "Fases ordenadas: Problema → Marco Teórico → Hipótesis → Metodología → Resultados/Conclusiones.",
                    "Hipótesis: Suposición o respuesta tentativa previa que se somete a prueba empírica.",
                    "Marco Metodológico: El diseño sistemático de 'cómo' se obtendrán los datos.",
                    "El truco para el examen: Palabra clave: 'Respuesta o suposición tentativa' siempre corresponde a la HIPÓTESIS."
                ],
                quiz: {
                    question: "¿En qué fase de la investigación se establece una suposición tentativa que debe ser comprobada con datos?",
                    options: [
                        { text: "Formulación de Hipótesis", correct: true },
                        { text: "Planteamiento del Problema", correct: false },
                        { text: "Marco Conceptual", correct: false }
                    ],
                    explanation: "La hipótesis es precisamente esa conjetura o propuesta tentativa que el investigador busca validar o refutar."
                }
            },
            {
                id: "3.7.3.2",
                title: "Modelos de investigación (Cuantitativo y Cualitativo)",
                intro: "En las ciencias sociales y de la salud existen dos enfoques metodológicos principales para encarar un estudio:<br><br>• <b>Enfoque Cuantitativo (Datos y Estadística):</b> Mide variables numéricas concretas. Es objetivo, estructurado y busca probar hipótesis para generalizar resultados a partir de muestras grandes de población.<br><i>Ejemplo:</i> Realizar una prueba estandarizada a 500 estudiantes para calcular el porcentaje exacto con niveles de ansiedad.<br><br>• <b>Enfoque Cualitativo (Experiencias y Significación):</b> Explora discursos, opiniones, significados y vivencias profundas de las personas en su contexto natural. No utiliza datos numéricos, sino descripciones en texto o audio.<br><i>Ejemplo:</i> Entrevistar a profundidad a 6 profesionales para entender cómo experimentan subjetivamente el estrés laboral.",
                keypoints: [
                    "Investigación Cuantitativa: Numérica, estadística, busca medir objetivamente y probar hipótesis con muestras masivas.",
                    "Investigación Cualitativa: Descriptiva, basada en entrevistas e historias de vida para comprender experiencias profundas.",
                    "El truco para el examen: Si en la pregunta ves términos como 'medición estadística, porcentajes o números', la respuesta es ENFOQUE CUANTITATIVO."
                ],
                quiz: {
                    question: "Si un estudio busca medir numéricamente la relación estadística entre dos variables en 500 personas, ¿qué enfoque utiliza?",
                    options: [
                        { text: "Enfoque Cuantitativo", correct: true },
                        { text: "Enfoque Cualitativo", correct: false },
                        { text: "Enfoque Subjetivo", correct: false }
                    ],
                    explanation: "El enfoque cuantitativo utiliza la recolección de datos numéricos y el análisis estadístico para comprobar hipótesis."
                }
            },
            {
                id: "3.7.3.3",
                title: "Instrumentos de recolección de información",
                intro: "Una vez definido el enfoque metodológico, el investigador debe seleccionar el <b>instrumento adecuado</b> para levantar la información en el campo de estudio:<br><br>• <b>El Cuestionario / Encuesta:</b> Es un conjunto de preguntas estandarizadas (por lo general cerradas o de opción múltiple) escritas en un orden determinado. Es el <b>instrumento ideal para aplicar de forma masiva</b> a grandes grupos en poco tiempo y procesar datos numéricos.<br><br>• <b>La Entrevista:</b> Conversación directa en profundidad entre el investigador y el sujeto. Permite indagar en aspectos cualitativos y subjetivos.<br><br>• <b>La Observación Directa:</b> Registro sistemático y estructurado de conductas o fenómenos tal y como suceden espontáneamente en su entorno real.",
                keypoints: [
                    "Cuestionario / Encuesta: Herramienta masiva y estandarizada para muestras amplias de población.",
                    "Entrevista: Técnica cualitativa e interactiva para profundizar en relatos individuales.",
                    "Observación: Registro directo del objeto de estudio sin alterar su ambiente natural.",
                    "El truco para el examen: Si preguntan por la herramienta para 'recolectar datos masivos y uniformes en un grupo grande', la respuesta es EL CUESTIONARIO."
                ],
                quiz: {
                    question: "¿Qué instrumento de recolección de datos es el más recomendado para aplicar preguntas a una muestra masiva de personas de manera uniforme?",
                    options: [
                        { text: "El Cuestionario", correct: true },
                        { text: "La Entrevista en profundidad", correct: false },
                        { text: "La Observación participante", correct: false }
                    ],
                    explanation: "El cuestionario permite recolectar datos uniformes de manera rápida y masiva en grupos numerosos."
                }
            },
            {
                id: "3.7.3.4",
                title: "Informe de la investigación",
                intro: "La etapa final de todo proceso científico consiste en consolidar los descubrimientos en un <b>Informe de Investigación</b> para divulgarlos a la comunidad académica:<br><br>• <b>Síntesis y Organización Gráfica:</b> Uso de tablas, mapas conceptuales y <b>gráficas estadísticas</b> para hacer comprensibles los hallazgos.<br><br>• <b>Conclusiones:</b> Representan la síntesis final del estudio. Dan <b>respuesta directa y fundamentada a las hipótesis y objetivos</b> planteados al inicio del proyecto.<br><br>• <b>Recomendaciones:</b> Sugerencias prácticas planteadas por el investigador para aplicar los descubrimientos en la resolución del problema o para orientar futuros estudios.",
                keypoints: [
                    "Conclusiones: Respuestas concretas que confirman o descartan la hipótesis inicial.",
                    "Recomendaciones: Propuestas y aportes prácticos derivados de los descubrimientos.",
                    "Visualización: Gráficas y tablas que sintetizan la información recogida.",
                    "El truco para el examen: Relación directa: 'Respuesta final a la hipótesis' = CONCLUSIONES | 'Propuestas a futuro' = RECOMENDACIONES."
                ],
                quiz: {
                    question: "¿En qué sección final del informe de investigación se resumen los hallazgos principales que responden a la hipótesis planteada?",
                    options: [
                        { text: "En las Conclusiones", correct: true },
                        { text: "En el Marco Teórico", correct: false },
                        { text: "En la Justificación", correct: false }
                    ],
                    explanation: "Las conclusiones resumen los resultados y determinan si se cumplieron los objetivos y la hipótesis de la investigación."
                }
            }
        ]
    },

    lenguaje: {
    title: "Lenguaje y Literatura",
    topics: [
        {
            id: "3.9.1.1",
            title: "Lenguaje: funciones, tipos y niveles",
            intro: "El lenguaje es el código y conjunto de señales con el que expresamos nuestros pensamientos. Sin embargo, no siempre nos comunicamos con el mismo objetivo: a veces informamos, a veces ordenamos, a veces expresamos sentimientos o simplemente probamos si el micrófono funciona.<br><br><b>1. Las 6 Funciones del Lenguaje (Según la intención del emisor):</b><br><br>• <b>Función Emotiva o Expresiva:</b> Centrada en el <i>emisor</i>. Su objetivo es manifestar estados de ánimo, sentimientos, deseos, dolor o emociones subjetivas. Usualmente utiliza signos de admiración o interjecciones.<br><i>Ejemplo:</i> '¡Amo este día de lluvia!', '¡Ojalá me vaya bien en la prueba!', '¡Qué dolor de cabeza!'.<br><br>• <b>Función Apelativa o Conativa:</b> Centrada en el <i>receptor</i>. El emisor busca influir, convencer, dar una orden, pedir un favor o generar una respuesta/acción directa en la otra persona.<br><i>Ejemplo:</i> 'Cierra la puerta al salir', 'Por favor, estudia más', '¿Me prestas tu borrador?'.<br><br>• <b>Función Referencial, Representativa u Objetiva:</b> Centrada en el <i>contexto / realidad</i>. Se limita a transmitir datos neutros, hechos reales o conocimientos de forma transparente, sin que el emisor meta sus opiniones personales.<br><i>Ejemplo:</i> 'La Luna gira alrededor de la Tierra', 'La prueba consta de 50 preguntas', 'Mañana es viernes'.<br><br>• <b>Función Metalingüística:</b> Centrada en el <i>código (el propio idioma)</i>. Ocurre cuando usamos el lenguaje para hablar sobre las reglas, significados o gramática del mismo lenguaje.<br><i>Ejemplo:</i> 'Las palabras agudas llevan tilde en la última sílaba si terminan en N, S o vocal', 'El antónimo de efímero es duradero'.<br><br>• <b>Función Fática o de Contacto:</b> Centrada en el <i>canal físico de comunicación</i>. Sirve para iniciar, mantener, prolongar o verificar si el canal de comunicación está abierto y funcionando correctamente.<br><i>Ejemplo:</i> '¿Hola, me escuchas?', 'Aló, aló', '1, 2, 3 probando micro', 'Entendido, cambio y fuera'.<br><br>• <b>Función Poética o Estética:</b> Centrada en la <i>forma del mensaje</i>. Busca llamar la atención sobre la belleza, el ritmo o la forma en que se dicen las cosas mediante recursos literarios como metáforas, rimas o comparaciones.<br><i>Ejemplo:</i> 'Caminante no hay camino, se hace camino al andar', 'Tus ojos son dos luceros que iluminan mi sendero'.<br><br><b>2. Niveles de la Lengua (Según el contexto socio-cultural):</b><br>• <b>Nivel Culto:</b> Lenguaje formal, apegado estrictamente a las normas de la RAE, utilizado por académicos o conferencias.<br>• <b>Nivel Coloquial:</b> Lenguaje cotidiano, fluido y espontáneo que usamos con amigos y familiares.<br>• <b>Nivel Profesional/Técnico:</b> Lenguaje especializado cargado de 'tecnicismos' de una rama (medicina, programación, derecho).<br>• <b>Nivel Vulgar:</b> Presenta deficiencias léxicas, deformación de palabras y falta de vocabulario formal.",
            keypoints: [
                "Función Apelativa/Conativa: Su finalidad es modificar el comportamiento del oyente mediante órdenes, peticiones o persuasión.",
                "Función Referencial: Información pura y objetiva sobre la realidad sin tintes emocionales.",
                "Función Metalingüística: Es cuando el lenguaje analiza o define a su propio código gramatical.",
                "El truco para el examen: Si la oración busca que el oyente 'haga algo o responda', la respuesta es APELATIVA. Si busca 'enseñar una regla ortográfica o de vocabulario', es METALINGÜÍSTICA."
            ],
            quiz: {
                question: "¿Qué función del lenguaje predomina en un diccionario al definir la palabra 'Axiología'?",
                options: [
                    { text: "Metalingüística", correct: true },
                    { text: "Referencial", correct: false },
                    { text: "Poética", correct: false }
                ],
                explanation: "Es metalingüística porque se utiliza el mismo idioma español para explicar el significado y naturaleza de una palabra del propio código."
            }
        },
        {
            id: "3.9.1.2",
            title: "Nivel morfosintáctico",
            intro: "Para expresarnos con claridad no basta con conocer palabras; debemos saber cómo armarlas internamente y cómo conectarlas ordenadamente dentro de una oración. El nivel morfosintáctico es la fusión de dos pilares esenciales:<br><br><b>1. Morfología (La estructura interna de la palabra):</b><br>Estudia cómo se componen las palabras. Una palabra no es una masa indivisible; suele tener una <i>Raíz o Lexema</i> (que porta el significado principal) y <i>Morfemas</i> (prefijos o sufijos) que indican género, número o tiempo verbal.<br><i>Ejemplo:</i> En 'Niños', 'Niñ-' es la raíz, '-o-' indica género masculino y '-s' indica número plural.<br><br><b>2. Sintaxis (La función de las palabras en la oración):</b><br>Estudia el orden y la relación jerárquica de las palabras dentro del enunciado.<br><br><b>Estructura Esencial de la Oración Bimembre:</b><br>• <b>Sujeto:</b> Es la persona, animal o cosa de quien se afirma o se dice algo en la oración. Su corazón o núcleo siempre es un <b>sustantivo</b> o un <b>pronombre</b>.<br>• <b>Predicado:</b> Es todo lo que se dice del sujeto, incluyendo las acciones que realiza. Su corazón o núcleo siempre es un <b>verbo conjugado</b>.<br><br><b>La Regla de Oro: La Concordancia Gramatical:</b><br>Existe una ley en español que establece que el Núcleo del Sujeto y el Núcleo del Predicado deben coincidir <b>obligatoriamente en Número (singular/plural) y Persona (1ra, 2da o 3ra)</b>.<br><br>• <i>Error común de concordancia:</i> 'El grupo de estudiantes <b>aprobaron</b> el examen.' → <b>Incorrecto.</b> El núcleo del sujeto es 'grupo' (singular), no 'estudiantes'. Por lo tanto, el verbo debe estar en singular ('aprobó').<br>• <i>Forma correcta:</i> 'El grupo de estudiantes <b>aprobó</b> el examen.'",
            keypoints: [
                "Morfología: Estudio de la forma interna de las palabras (raíces, géneros, plurales, prefijos).",
                "Sintaxis: Estudio del orden y las funciones que cumplen las palabras dentro de la oración.",
                "Sujeto Colectivo: Palabras como 'enjambre', 'equipo', 'familia' o 'público' son singulares y exigen que el verbo esté en SINGULAR.",
                "El truco para el examen: Para ubicar la concordancia, localiza el verbo conjugado, pregúntale '¿Quién?' y asegúrate de que el sustantivo principal (el núcleo) concuerde en singular o plural con ese verbo."
            ],
            quiz: {
                question: "¿Cuál de las siguientes oraciones presenta un error de concordancia morfosintáctica?",
                options: [
                    { text: "La multitud de aficionados protestaron a las afueras del estadio.", correct: true },
                    { text: "La multitud de aficionados protestó a las afueras del estadio.", correct: false },
                    { text: "Los aficionados protestaron a las afueras del estadio.", correct: false }
                ],
                explanation: "La opción 1 tiene un error porque el sujeto es 'La multitud' (sustantivo colectivo singular), por lo que el verbo debe ser 'protestó' en singular."
            }
        },
        {
            id: "3.9.1.3",
            title: "Estrategias para la comprensión de textos",
            intro: "Comprender un escrito va mucho más allá de leer palabra por palabra en voz alta. Requiere desarrollar la habilidad de decodificar tanto lo que el autor dice de forma explícita como lo que sugiere entre líneas.<br><br><b>1. Distinción entre Denotación y Connotación:</b><br>• <b>Valor Denotativo (El sentido literal):</b> Es el significado objetivo, primario y formal que tiene una palabra. Es el significado universal que encuentras registrado en los diccionarios. No deja espacio a segundas interpretaciones.<br><i>Ejemplo:</i> 'El corazón es un órgano muscular que bombea sangre a todo el cuerpo'. (Uso científico/denotativo).<br><br>• <b>Valor Connotativo (El sentido figurado):</b> Es el significado secundario, subjetivo, metafórico o cultural que se le atribuye a una palabra según el contexto, las emociones o la intención del emisor.<br><i>Ejemplo:</i> 'Ella tiene un corazón de piedra'. (Obviamente no es de mineral, connota frialdad e insensibilidad).<br><br><b>2. Interpretación de Signos No Lingüísticos:</b><br>En la lectura moderna, el texto escrito suele acompañarse de recursos visuales no lingüísticos que complementan o jerarquizan el mensaje:<br>• <b>Tipografía:</b> Uso de <b>negritas</b> para destacar conceptos centrales, <i>cursivas</i> para extranjerismos o títulos de libros, y MAYÚSCULAS para alertas.<br>• <b>Elementos gráficos:</b> Ilustraciones, mapas, íconos y diagramas que le permiten al lector verificar o resumir visualmente la información leída.",
            keypoints: [
                "Lenguaje Denotativo = Significado objetivo, exacto, literal (de diccionario).",
                "Lenguaje Connotativo = Significado figurado, poético, simbólico o contextual.",
                "Signos no lingüísticos: Apoyos visuales (tipografías, símbolos, imágenes) que aclaran o jerarquizan el texto.",
                "El truco para el examen: Si la frase expresa una realidad física y científica es DENOTATIVA. Si exige interpretación metafórica o subjetiva, es CONNOTATIVA."
            ],
            quiz: {
                question: "En la frase 'Ese profesor es una lumbrera en su materia', ¿qué valor semántico se le otorga a la palabra 'lumbrera'?",
                options: [
                    { text: "Connotativo", correct: true },
                    { text: "Denotativo", correct: false },
                    { text: "Metalingüístico", correct: false }
                ],
                explanation: "Es connotativo porque la palabra 'lumbrera' (que denotativamente es un objeto que da luz) se utiliza en sentido figurado para referirse a una persona muy inteligente."
            }
        },
        {
            id: "3.9.1.4",
            title: "Tipos de textos",
            intro: "Todo texto se crea con una finalidad distinta: un poema busca emocionar, una noticia busca informar y una receta de cocina busca guiar. Según la intención comunicativa y el modelo de organización, los textos se clasifican en 4 grandes grupos:<br><br><b>1. Texto Descriptivo (Pinta con palabras):</b><br>• <b>Propósito:</b> Detallar cómo es un objeto, persona, lugar, animal o emoción.<br>• <b>Características:</b> Abunda en adjetivos calificativos. Responde a la pregunta <i>¿Cómo es?</i>.<br><i>Ejemplo:</i> 'Era un caserón antiguo, de paredes descascaradas, ventanas de madera carcomida y un pasillo oscuro que olía a humedad'.<br><br><b>2. Texto Expositivo (Informa de forma neutral):</b><br>• <b>Propósito:</b> Dar a conocer, explicar o divulgar un tema científico, histórico o técnico de manera objetiva y ordenada, sin emitir juicios ni opiniones personales.<br>• <b>Características:</b> Uso de lenguaje formal, datos, fechas y explicaciones lógicas. Responde a <i>¿Qué es y por qué es así?</i>.<br><i>Ejemplo:</i> 'El agua es una sustancia cuya molécula está compuesta por dos átomos de hidrógeno y uno de oxígeno (H2O)'.<br><br><b>3. Texto Argumentativo (Defiende una tesis para persuadir):</b><br>• <b>Propósito:</b> Convencer o persuadir al lector sobre una postura, idea u opinión (Tesis), aportando razones, pruebas o argumentos que la respalden.<br>• <b>Características:</b> Estructura de Tesis + Argumentos + Conclusión. Responde a <i>¿Qué opino y por qué deberías estar de acuerdo conmigo?</i>.<br><i>Ejemplo:</i> 'Es indispensable prohibir los plásticos de un solo uso en el país, ya que las investigaciones demuestran que tardan más de 500 años en degradarse y destruyen la fauna marina'.<br><br><b>4. Texto Narrativo (Cuenta una historia):</b><br>• <b>Propósito:</b> Relatar una secuencia de acontecimientos reales o ficticios que suceden a unos personajes en un espacio y tiempo determinado.<br>• <b>Características:</b> Tiene estructura de Inicio, Nudo y Desenlace. Responde a <i>¿Qué sucedió?</i>.<br><i>Ejemplo:</i> 'El hidalgo Don Quijote montó a su caballo Rocinante y partió al amanecer hacia los campos de La Mancha'.",
            keypoints: [
                "Expositivo: Explica un tema objetivamente para enseñar/divulgar (Textos escolares, artículos científicos).",
                "Argumentativo: Defiende una posición personal con razones para persuadir (Ensayos, artículos de opinión).",
                "Descriptivo: Detalla características y rasgos usando adjetivos.",
                "Narrativo: Cuenta historias o eventos ordenados cronológicamente.",
                "El truco para el examen: Si el autor 'busca convencerte de su punto de vista u opinión', la respuesta es ARGUMENTATIVO. Si solo te 'da información sin opinar', es EXPOSITIVO."
            ],
            quiz: {
                question: "¿Qué tipo de texto es un ensayo donde un sociólogo expone sus razones y evidencias para fundamentar por qué la educación virtual debe ser gratuita?",
                options: [
                    { text: "Texto Argumentativo", correct: true },
                    { text: "Texto Expositivo", correct: false },
                    { text: "Texto Narrativo", correct: false }
                ],
                explanation: "Es argumentativo porque el sociólogo presenta razones y argumentos para defender una postura (Tesis) y persuadir a su audiencia."
            }
        },
        {
            id: "3.9.1.5",
            title: "Estructura de las palabras y relaciones léxicas",
            intro: "El léxico de nuestro idioma es rico y variado. Para dominar la lectura y la ortografía, es indispensable entender cómo se forman las palabras y cómo se relacionan entre sí por su sonido, escritura o significado:<br><br><b>1. Formación de las palabras:</b><br>• <b>Primitivas:</b> Palabras originales que no provienen de ninguna otra (Ej: <i>mar, sol, pan</i>).<br>• <b>Derivadas:</b> Se forman agregando prefijos (antes de la raíz) o sufijos (después de la raíz) a una palabra primitiva (Ej: <b>sub</b>marino, pan<b>adería</b>).<br>• <b>Compuestas:</b> Nacen al unir dos o más palabras simples completas (Ej: <i>abre + latas = abrelatas</i>, <i>salva + vidas = salvavidas</i>).<br><br><b>2. Relaciones Semánticas (Por su significado):</b><br>• <b>Sinónimos:</b> Palabras distintas que comparten un significado similar o idéntico (<i>empezar / comenzar</i>).<br>• <b>Antónimos:</b> Palabras que expresan significados opuestos o contrarios (<i>abundancia / escasez</i>).<br><br><b>3. Confusiones Ortográficas Clave:</b><br>• <b>Palabras Homónimas:</b> Tienen distinta procedencia pero terminan coincidiendo en su pronunciación o escritura. Se dividen en:<br>  - <b>Homófonas:</b> Suenan <b>exactamente igual</b>, pero se escriben <b>diferente</b> (con una letra distinta) y tienen significados diferentes.<br>  <i>Ejemplos:</i> <b>Tubo</b> (pieza cilíndrica) / <b>Tuvo</b> (del verbo tener). <b>Vello</b> (capilar) / <b>Bello</b> (hermoso).<br>  - <b>Homógrafas:</b> Se escriben y se pronuncian <b>exactamente igual</b>, pero tienen significados totalmente distintos según el contexto.<br>  <i>Ejemplos:</i> <b>Vino</b> (bebida de uva) / <b>Vino</b> (del verbo venir). <b>Banco</b> (institución financiera) / <b>Banco</b> (mueble para sentarse).<br><br>• <b>Palabras Parónimas:</b> No son idénticas, pero tienen una pronunciación y escritura <b>muy parecida o semejante</b>, lo que suele causar confusiones.<br>  <i>Ejemplos:</i> <b>Apto</b> (capaz/idóneo) y <b>Acto</b> (acción/evento). <b>Afecto</b> (cariño) y <b>Efecto</b> (resultado).",
            keypoints: [
                "Homófonas: Suenan igual, pero varía la letra (b/v, c/s/z, g/j) y el significado.",
                "Homógrafas: Misma escritura exacta, pero significados totalmente distintos.",
                "Parónimas: Parecidas en sonido y escritura, pero NO iguales (ej. adoptar/adaptar).",
                "El truco para el examen: Si la diferencia entre dos palabras que suenan igual radica en una 'b/v' o 'h' (como haber/a ver), son HOMÓFONAS."
            ],
            quiz: {
                question: "Las palabras 'Revelar' (dar a conocer un secreto) y 'Rebelar' (oponerse a la autoridad) son un ejemplo de palabras:",
                options: [
                    { text: "Homófonas", correct: true },
                    { text: "Homógrafas", correct: false },
                    { text: "Parónimas", correct: false }
                ],
                explanation: "Son homófonas porque suenan idénticas al pronunciarse, pero se escriben con grafías distintas ('v' y 'b') y tienen significados diferentes."
            }
        },
        {
            id: "3.9.1.6",
            title: "Textos narrativos: subgéneros y características",
            intro: "Los textos narrativos cuentan historias organizadas en una secuencia de <b>Inicio (Planteamiento), Nudo (Conflicto central) y Desenlace (Resolución)</b>. Según la intención pedagógica o el origen del relato, se dividen en varios subgéneros fundamentales:<br><br><b>1. Cuento:</b> Narración ficticia breve, con pocos personajes, una trama sencilla y un único conflicto principal que se resuelve rápidamente.<br><br><b>2. Fábula:</b> Relato ficticio muy antiguo, generalmente protagonizado por animales u objetos personificados (que hablan y actúan como humanos). Su objetivo principal es didáctico y siempre concluye de forma explícita o implícita con una <b>moraleja</b> (enseñanza de conducta o moral).<br><br><b>3. Leyenda:</b> Narración tradicional y folclórica propia de un pueblo o región. Nace de un <b>hecho real o personaje histórico</b>, pero con el paso del tiempo y la tradición oral se decora exageradamente con <b>elementos fantásticos, sobrenaturales o mágicos</b>.<br><br><b>4. Anécdota:</b> Relato muy breve y espontáneo sobre un suceso curioso, divertido o relevante que le ocurrió de verdad a una persona en su día a día.<br><br><b>5. Biografía vs. Autobiografía:</b><br>• <b>Biografía:</b> Texto que narra la vida completa de una persona, redactado por <b>alguien más</b> (en tercera persona: <i>él/ella</i>).<br>• <b>Autobiografía:</b> Texto en el que el <b>propio sujeto redacta la historia de su vida</b> (en primera persona: <i>yo</i>).",
            keypoints: [
                "Fábula: Animales personificados + Moraleja explícita al final.",
                "Leyenda: Origen histórico/real + Adorno fantástico de tradición oral.",
                "Biografía (escrita en 3ra persona) vs Autobiografía (escrita por el propio protagonista en 1ra persona).",
                "El truco para el examen: Si en la pregunta se menciona una 'moraleja o enseñanza moral', la respuesta correcta es FÁBULA."
            ],
            quiz: {
                question: "Un relato de tradición popular guatemalteca que explica la aparición nocturna de 'La Llorona' combinando lugares reales con hechos fantásticos pertenece al subgénero de:",
                options: [
                    { text: "Leyenda", correct: true },
                    { text: "Fábula", correct: false },
                    { text: "Cuento", correct: false }
                ],
                explanation: "Es una leyenda porque nace del folclore tradicional de una región mezclando entornos reales con mitos y elementos fantásticos."
            }
        },
        {
            id: "3.9.1.7",
            title: "Técnicas de síntesis de textos",
            intro: "Cuando te enfrentas a textos extensos o capítulos enteros de estudio, necesitas procesar esa información y reducirla a su estructura más pura. Para ello se utilizan los organizadores gráficos:<br><br><b>1. Cuadro Sinóptico (Esquema de Llaves):</b><br>• <b>Estructura:</b> Organiza las ideas de forma jerárquica de izquierda a derecha.<br>• <b>Elemento clave:</b> Su característica gráfica indiscutible es el uso de <b>LLAVES ({ })</b> que se van abriendo para desglosar el Tema Principal → Subtemas → Conceptos → Detalles.<br><br><b>2. Mapa Conceptual (Red de Nodos y Enlaces):</b><br>• <b>Estructura:</b> Muestra relaciones lógicas entre conceptos interconectados visualmente de arriba hacia abajo.<br>• <b>Elemento clave:</b> Los conceptos van dentro de cajitas o módulos y se unen entre sí por medio de <b>LÍNEAS y PALABRAS ENLACE</b> (como: <i>'se divide en'</i>, <i>'produce'</i>, <i>'es un'</i>), formando frases con sentido pleno llamadas proposiciones.<br><br><b>3. Diagrama de Flujo (Procesos secuenciales):</b><br>• <b>Estructura:</b> Representa gráficamente la secuencia de pasos o algoritmos de un procedimiento.<br>• <b>Elemento clave:</b> Utiliza símbolos estandarizados (óvalos de inicio/fin, rectángulos de acción, rombos de decisión) conectados mediante <b>flechas direccionales</b>.",
            keypoints: [
                "Cuadro Sinóptico: Identificable de inmediato por el uso de LLAVES ({ }).",
                "Mapa Conceptual: Usa palabras enlace sobre líneas para conectar conceptos.",
                "Diagrama de Flujo: Muestra el orden secuencial paso a paso mediante flechas y símbolos.",
                "El truco para el examen: Si la pregunta menciona 'llaves para esquematizar', es CUADRO SINÓPTICO. Si menciona 'palabras de enlace', es MAPA CONCEPTUAL."
            ],
            quiz: {
                question: "¿Qué organizador gráfico es el más adecuado para representar de forma esquemática la jerarquía de un tema de general a particular utilizando llaves?",
                options: [
                    { text: "Cuadro sinóptico", correct: true },
                    { text: "Mapa conceptual", correct: false },
                    { text: "Diagrama de flujo", correct: false }
                ],
                explanation: "El cuadro sinóptico se caracteriza de forma exclusiva por utilizar llaves ({ }) para agrupar las ideas según su nivel de jerarquía."
            }
        },
        {
            id: "3.9.1.8",
            title: "Proceso de lectura",
            intro: "Leer no es una acción instantánea, sino un proceso activo y consciente compuesto por 3 etapas estratégicas que garantizan una comprensión lectora sólida:<br><br><b>1. Etapa de Pre-lectura (Antes de leer):</b><br>• Es la fase de preparación y exploración rápida.<br>• <b>Acciones:</b> Observar títulos, subtítulos, imágenes, índice o palabras en negrita.<br>• <b>Objetivo:</b> Activar los conocimientos previos sobre el tema, despertar curiosidad y formular <b>hipótesis o predicciones</b> de lo que tratará el texto.<br><br><b>2. Etapa de Lectura Activa (Durante la lectura):</b><br>• Es la inmersión directa en el texto.<br>• <b>Acciones:</b> Leer con atención a velocidad adecuada, deducir el significado de palabras desconocidas por el contexto, subrayar ideas principales y secundarias, y hacerse preguntas internas.<br>• <b>Objetivo:</b> Comprender e interpretar la información explícita e implícita.<br><br><b>3. Etapa de Post-lectura (Después de leer):</b><br>• Es la fase de consolidación y procesamiento final del conocimiento.<br>• <b>Acciones:</b> Verificar si las predicciones iniciales eran acertadas, responder preguntas de comprensión, elaborar resúmenes, fichas o mapas conceptuales y emitir un juicio crítico.<br>• <b>Objetivo:</b> Fijar el aprendizaje en la memoria a largo plazo.",
            keypoints: [
                "Pre-lectura: Exploración visual, conocimientos previos y predicción sobre el texto.",
                "Durante la lectura: Subrayado, deducción contextual e identificación de ideas centrales.",
                "Post-lectura: Verificación de hipótesis, resúmenes, esquemas y evaluación de lo leído.",
                "El truco para el examen: Todo lo que consista en 'evaluar lo aprendido, resumir o hacer un mapa mental' forma parte de la POST-LECTURA."
            ],
            quiz: {
                question: "¿En qué etapa del proceso lector el estudiante examina los títulos e imágenes para anticipar el contenido del escrito?",
                options: [
                    { text: "Antes de la lectura (Pre-lectura)", correct: true },
                    { text: "Durante la lectura", correct: false },
                    { text: "Después de la lectura (Post-lectura)", correct: false }
                ],
                explanation: "La observación previa de títulos e imágenes para formular predicciones se realiza durante la fase de Pre-lectura."
            }
        },
        {
            id: "3.9.1.9",
            title: "Reseña crítica",
            intro: "La reseña crítica es un escrito académico en el cual se analiza, examina y evalúa una obra cultural o científica (un libro, una película, una obra de teatro o un artículo académico).<br><br><b>Diferencia clave: Resumen vs. Reseña Crítica:</b><br>Un <i>resumen</i> se limita a sintetizar objetivamente la obra sin aportar opiniones. La <i>reseña crítica</i> da un paso más allá: <b>INCLUYE OBLIGATORIAMENTE UN JUICIO DE VALOR ARGUMENTADO</b> por parte del reseñador.<br><br><b>Estructura Estándar de una Reseña Crítica:</b><br>1. <b>Ficha técnica / Encabezado:</b> Datos identitarios de la obra reseñada (título, autor, año de publicación, editorial).<br>2. <b>Resumen Sintético:</b> Descripción objetiva de las partes fundamentales o trama central del trabajo.<br>3. <b>Comentario Crítico / Juicio de Valor:</b> Es el núcleo argumentativo. Se analiza la calidad, aciertos, fallas o aportes de la obra.<br>4. <b>Conclusión y Recomendación:</b> Cierre donde el autor valora si recomienda o no la lectura/observación de la obra.<br><br><i>Contexto posmodernista:</i> La literatura posmoderna desafía las narrativas tradicionales, utiliza la ironía, la mezcla de géneros y la fragmentación. Reseñar una obra posmodernista exige analizar cómo el autor rompe las reglas establecidas.",
            keypoints: [
                "Reseña Crítica = Resumen descriptivo de la obra + Opinión o evaluación argumentada.",
                "El juicio de valor debe estar justificado con razones sólidas, no simples apreciaciones subjetivas.",
                "El truco para el examen: La diferencia fundamental entre un simple resumen y una reseña crítica es la presencia de una 'VALORACIÓN O JUICIO CRÍTICO'."
            ],
            quiz: {
                question: "¿Qué apartado es indispensable en una reseña crítica y no debe figurar en un resumen objetivo?",
                options: [
                    { text: "El juicio de valor u opinión fundamentada sobre la obra", correct: true },
                    { text: "La mención del título y autor de la obra", correct: false },
                    { text: "La síntesis de los capítulos principales", correct: false }
                ],
                explanation: "Lo que define a la reseña crítica es la inclusión de una evaluación o juicio de valor argumentado por parte de quien la escribe."
            }
        },
        {
            id: "3.9.1.10",
            title: "Propiedades de la redacción y ortografía",
            intro: "Escribir correctamente no es solo juntar oraciones sin faltas de ortografía; exige estructurar párrafos con lógica y fluidez. Para ello se deben respetar tres propiedades fundamentales:<br><br><b>1. Propiedades Esenciales de la Redacción:</b><br>• <b>Coherencia:</b> Es la propiedad lógica del texto. Garantiza que todas las ideas aportadas giren en torno a un tema central común, evitando contradicciones o saltos absurdos de información.<br>• <b>Cohesión:</b> Es la correcta unión gramatical de las palabras y oraciones. Se logra mediante el uso preciso de conectores lógicos (<i>'sin embargo'</i>, <i>'por consiguiente'</i>, <i>'en primer lugar'</i>) y una adecuada puntuación.<br>• <b>Adecuación:</b> Adaptación del lenguaje utilizado al receptor y al contexto (usar lenguaje formal en un trabajo académico y coloquial con amigos).<br><br><b>2. Tipos de Párrafos según su Función:</b><br>• <b>Párrafo Introductorio:</b> Se ubica al inicio; presenta el tema central, engancha al lector y plantea la tesis o propósito del escrito.<br>• <b>Párrafo Nuclear o de Desarrollo:</b> Es la parte más extensa y densa. Expone, explica, ejemplifica y argumenta la información principal.<br>• <b>Párrafo Concluyente:</b> Se ubica al final; resume las ideas más importantes presentadas y da un cierre definitivo al escrito.<br><br><b>3. Ortografía Normativa:</b><br>Dominio y aplicación estricta de las normas de escritura para letras con sonidos idénticos o confusos (<b>b/v, c/s/z, x, g/j, h</b>).",
            keypoints: [
                "Coherencia = Sentido lógico e hilo conductor global del escrito.",
                "Cohesión = Relación gramatical correcta entre frases mediante conectores y comas.",
                "Párrafo Nuclear = Párrafo principal de desarrollo explicativo e informativo.",
                "El truco para el examen: Si te preguntan por el párrafo que 'contiene el desarrollo de los argumentos principales', la respuesta es PÁRRAFO NUCLEAR."
            ],
            quiz: {
                question: "¿Qué propiedad de la redacción asegura que un texto mantenga una relación lógica entre sus ideas sin contradicciones en el tema central?",
                options: [
                    { text: "Coherencia", correct: true },
                    { text: "Cohesión", correct: false },
                    { text: "Adecuación", correct: false }
                ],
                explanation: "La coherencia es la propiedad que le otorga unidad lógica y sentido global a la estructura de un escrito."
            }
            },
            {
                id: "3.9.1.11",
                title: "Vicios de dicción",
                intro: "Los vicios de dicción son todas aquellas formas incorrectas, imprecisas o inadecuadas de hablar o escribir que violan las reglas del idioma o ensucian la claridad del mensaje.<br><br><b>Los Vicios de Dicción Más Frecuentes en Evaluaciones:</b><br><br>• <b>Solecismo:</b> Es cualquier error cometido en la estructura sintáctica de una oración, en la construcción de frases o en las reglas de concordancia y uso de preposiciones.<br><i>Ejemplos:</i> 'Hacen tres días que no lo veo' (Debe ser: *Hace tres días*). 'En base a lo conversado' (Debe ser: *Con base en lo conversado*).<br><br>• <b>Anfibología:</b> Es la falta de claridad en una oración que da pie a una <b>doble interpretación o sentido ambiguo</b> debido a la mala organización de las palabras.<br><i>Ejemplo:</i> 'Se vende ropa para niños usada' (¿Los niños son usados o la ropa es usada?). 'El perro de tu hermano me ladró' (Puede sonar como un insulto o como la mascota).<br><br>• <b>Pleonasmo o Redundancia:</b> Empleo inútil e innecesario de palabras que repiten un concepto que ya estaba claro e implícito.<br><i>Ejemplos:</i> 'Subir para arriba', 'Salir para afuera', 'Voló por el aire', 'Persona humana'.<br><br>• <b>Barbarismo:</b> Pronunciar, acentuar o escribir mal las palabras, o emplear extranjerismos innecesarios cuando existen vocablos en español.<br><i>Ejemplos:</i> Escribir 'Haiga' en vez de *Haya*, decir 'Dijistes' en lugar de *Dijiste*, o usar 'Show' teniendo la palabra *espectáculo*.",
                keypoints: [
                    "Solecismo: Errores sintácticos o de concordancia (ej. 'hacen años', 'de acuerdo a').",
                    "Anfibología: Redacción ambigua que genera confusión de interpretación.",
                    "Pleonasmo / Redundancia: Repetición de conceptos obvios (ej. 'subir arriba').",
                    "Barbarismo: Palabras mal escritas o mal pronunciadas (ej. 'nadien', 'dijistes').",
                    "El truco para el examen: Si la frase puede entenderse de dos formas ridículas o confusas, es ANFIBOLOGÍA. Si repite algo obvio, es PLEONASMO."
                ],
                quiz: {
                    question: "¿Qué vicio de dicción se comete en la oración: 'El empleado vio a su jefe entrando a su oficina' (sin aclarar de quién es la oficina)?",
                    options: [
                        { text: "Anfibología", correct: true },
                        { text: "Solecismo", correct: false },
                        { text: "Pleonasmo", correct: false }
                    ],
                    explanation: "Es anfibología porque la mala construcción genera ambigüedad sobre si la oficina pertenece al empleado o al jefe."
                }
            },
            {
                id: "3.9.1.12",
                title: "Literatura guatemalteca e identidad",
                intro: "La literatura guatemalteca no puede entenderse al margen de su historia: es un reflejo de su multiculturalidad, sus paisajes, la belleza de sus idiomas mayas y sus intensas luchas sociales y políticas:<br><br><b>Autores Guatemaltecos Fundamentales:</b><br><br>• <b>Humberto Ak'abal (Poeta Maya K'iche'):</b><br>Nacido en Momostenango, Totonicapán. Es una de las figuras más celebradas de la lírica centroamericana. Escribía sus poemas originalmente en idioma <b>K'iche'</b> y los traducía él mismo al español. Su poesía destaca por su sencillez, brevedad y belleza, evocando los sonidos de la naturaleza, el canto de los pájaros, el viento en las montañas y la profunda cosmovisión maya.<br><br>• <b>Luis Cardoza y Aragón:</b><br>Ensayista y poeta genial originario de Antigua Guatemala. Es considerado uno de los intelectuales y críticos de arte más destacados del siglo XX. Su obra reflexiona con una prosa poética refinada sobre la cultura, la política y la búsqueda de la identidad de Guatemala.<br><br>• <b>Otto René Castillo:</b><br>Poeta y combatiente comprometido con la justicia social. Es el máximo exponente guatemalteco de la 'poesía comprometida' o social. Su célebre poema <i>'Vamos patria a caminar'</i> es un canto universal de amor al país y de protesta contra la opresión.<br><br>• <b>Luis de Lión:</b><br>Escritor indígena nacido en San Juan del Obispo. Su obra cumbre, la novela <i>'El tiempo principia en Xibalbá'</i>, es considerada un punto de quiebre histórico en la narrativa nacional, al adentrarse con un lenguaje audaz en la psicología e identidad del pueblo indígena guatemalteco contemporáneo.",
                keypoints: [
                    "Humberto Ak'abal: Poeta lírico k'iche' cuya poesía celebra la cosmovisión maya y la naturaleza.",
                    "Otto René Castillo: Icono de la poesía comprometida y de protesta social.",
                    "Luis de Lión: Narrativa contemporánea indígena guatemalteca del siglo XX.",
                    "El truco para el examen: Si la pregunta alude a 'versos sencillos en idioma k'iche' sobre el bosque, la naturaleza y la identidad maya', responde HUMBERTO AK'ABAL."
                ],
                quiz: {
                    question: "¿Qué autor guatemalteco es universalmente reconocido por escribir poesía en idioma k'iche' que rescata los sonidos de la naturaleza y la cosmovisión maya?",
                    options: [
                        { text: "Humberto Ak'abal", correct: true },
                        { text: "Luis Cardoza y Aragón", correct: false },
                        { text: "Otto René Castillo", correct: false }
                    ],
                    explanation: "Humberto Ak'abal es el gran referente guatemalteco de la poesía en lengua k'iche' dedicada a la cosmovisión maya."
                }
            },
            {
                id: "3.9.1.13",
                title: "Realismo mágico y realidad referencial",
                intro: "Durante el siglo XX, la literatura hispanoamericana deslumbró al mundo entero al fusionar la dura realidad política de la región con la fantasía ancestral.<br><br><b>1. El Realismo Mágico:</b><br>Es una corriente literaria en la que <b>elementos fantásticos, mágicos, míticos o inverosímiles se integran dentro de la narración como si fueran hechos cotidianos y absolutamente normales</b>. Para los personajes de la novela, que lluevan flores del cielo o que alguien flote no causa espanto ni asombro, lo viven con naturalidad.<br><br><b>2. La Realidad Referencial:</b><br>Es el trasfondo histórico, social y político <b>real</b> que sostiene a la novela (dictaduras militares, explotación de la tierra, injusticias sociales).<br><br><b>3. Miguel Ángel Asturias (Premio Nobel de Literatura 1967):</b><br>Es la figura cumbre de las letras guatemaltecas. Asturias logró combinar de forma magistral las técnicas de vanguardia europeas con la <b>mitología maya guatemalteca (Popol Vuh)</b> y la realidad referencial de su país.<br><br>• <i>'Hombres de maíz':</i> Obra cumbre del realismo mágico donde aborda la defensa de la tierra sagrada del maíz por parte de los indígenas ante la explotación comercial.<br>• <i>'El Señor Presidente':</i> Novela referencial que denuncia los horrores, abusos de poder y el clima de terror bajo la dictadura de Manuel Estrada Cabrera.",
                keypoints: [
                    "Realismo Mágico: Lo fantástico e irreal se percibe como cotidiano por los personajes.",
                    "Miguel Ángel Asturias: Ganador del Premio Nobel de Literatura en 1967.",
                    "Hombres de maíz: Máximo exponente del realismo mágico guatemalteco fundado en la cosmovisión maya.",
                    "El Señor Presidente: Novela referencial de denuncia política sobre la dictadura.",
                    "El truco para el examen: Ante preguntas sobre 'Premio Nobel de Literatura de Guatemala' o 'Realismo Mágico', la respuesta siempre es MIGUEL ÁNGEL ASTURIAS."
                ],
                quiz: {
                    question: "¿Qué escritor guatemalteco fue galardonado con el Premio Nobel de Literatura en 1967 por sus obras cumbre del Realismo Mágico?",
                    options: [
                        { text: "Miguel Ángel Asturias", correct: true },
                        { text: "Augusto Monterroso", correct: false },
                        { text: "Luis Cardoza y Aragón", correct: false }
                    ],
                    explanation: "Miguel Ángel Asturias obtuvo el Premio Nobel de Literatura en 1967 por la calidad y trascendencia universal de su obra."
                }
            }
        ]
    },

    comprension: {
        title: "Comprensión Lectora",
        topics: [
            {
                id: "Lectura 1",
                title: "El eclipse (Augusto Monterroso)",
                intro: "<b>Instrucciones:</b> Lee con atención el cuento completo. Esta prueba consta de 8 preguntas. Si fallas una sola, el sistema te regresará al texto para releer.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'Cuando fray Bartolomé Arrazola se sintió perdido aceptó que ya nada podría salvarlo. La selva poderosa de Guatemala lo había apresado, implacable y definitiva. Ante su ignorancia topográfica se sentó con tranquilidad a esperar la muerte... Al despertar se encontró rodeado por un grupo de indígenas de rostro impasible que se disponían a sacrificarlo ante un altar. Entonces recordó que para ese día se esperaba un eclipse total de sol y dispuso, en lo más íntimo, valerse de aquel conocimiento para engañar a sus opresores... Y les dijo: Si me matáis, puedo hacer que el sol se oscurezca en sus alturas. Los indígenas lo miraron fijamente y Arrazola sorprendió en sus ojos un destello de incredulidad. Dos horas después el corazón de fray Bartolomé chorreaba su sangre vehemente sobre la piedra de los sacrificios, mientras uno de los indígenas recitaba sin prisa las fechas en que se producirían eclipses solares y lunares, que los astrónomos de la comunidad maya habían previsto sin la valiosa ayuda de Aristóteles.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/8: ¿Dónde se encuentra atrapado fray Bartolomé Arrazola al inicio del relato?",
                        options: [
                            { text: "En la selva de Guatemala", correct: true },
                            { text: "En un convento en España", correct: false },
                            { text: "En una montaña de México", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/8: ¿Cuál era la actitud inicial del fraile al verse perdido?",
                        options: [
                            { text: "Se sentó con tranquilidad a esperar la muerte", correct: true },
                            { text: "Lloró desconsoladamente pidiendo auxilio", correct: false },
                            { text: "Corrió desesperado buscando un río", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/8: ¿De qué evento astronómico se acordó para intentar salvarse?",
                        options: [
                            { text: "Un eclipse total de sol", correct: true },
                            { text: "Una lluvia de estrellas fugaces", correct: false },
                            { text: "Un cometa visible por la noche", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/8: ¿Qué pretendía hacer el fraile con dicho conocimiento?",
                        options: [
                            { text: "Engañar a sus opresores haciéndose pasar por un dios o ser poderoso", correct: true },
                            { text: "Alumbrar el camino para poder escapar a oscuras", correct: false },
                            { text: "Demostrarles la superioridad científica de Aristóteles", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/8: ¿Qué expresión notó el fraile en los ojos de los indígenas al amenazarlos?",
                        options: [
                            { text: "Un destello de incredulidad", correct: true },
                            { text: "Miedo absoluto y terror", correct: false },
                            { text: "Respeto y obediencia inmediata", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/8: ¿Cuál fue el destino final de fray Bartolomé?",
                        options: [
                            { text: "Fue sacrificado sobre la piedra de los sacrificios", correct: true },
                            { text: "Logró huir mientras el sol se oscurecía", correct: false },
                            { text: "Fue perdonado por la comunidad tras comprobar el eclipse", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/8: ¿Qué hacía uno de los indígenas mientras el fraile era sacrificado?",
                        options: [
                            { text: "Recitaba sin prisa las fechas de eclipses previstas por los mayas", correct: true },
                            { text: "Rezaba en latín pidiendo perdón a los dioses", correct: false },
                            { text: "Revisaba un mapa antiguo traído de Europa", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 8/8 (Análisis crítico): ¿Qué busca ironizar el autor al final del texto?",
                        options: [
                            { text: "La soberbia europea al subestimar el avanzado conocimiento científico de la cultura maya", correct: true },
                            { text: "La mala suerte del fraile por no saber geografía", correct: false },
                            { text: "La falta de precisión de los eclipses en el siglo XVI", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 2",
                title: "El lugar que sobrevivió al apocalipsis",
                intro: "<b>Instrucciones:</b> Lee el fragmento histórico y responde las 7 preguntas para verificar tu comprensión.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'Tras el valle de Almolonga, la necesidad de un nuevo asentamiento llevó a trasladar la capital al Valle de Panchoy en 1541, luego de los fatídicos estragos causados por el desprendimiento de agua y lodo del Volcán de Agua. La nueva ciudad fue trazada con calles empedradas en damero, conventos imponentes y plazas donde la vida política y religiosa giraba en torno al poder colonial. Sin embargo, la naturaleza no daría tregua: a lo largo de los siglos XVII y XVIII, violentos sismos sacudirían sus estructuras una y otra vez, obligando a sus pobladores a reconstruir templos con muros gruesos y arcos bajos diseñados para resistir la furia telúrica, convirtiéndola hoy en una joya de arquitectura monumental.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/7: ¿A qué valle se trasladó la capital tras el desastre en Almolonga?",
                        options: [
                            { text: "Al Valle de Panchoy", correct: true },
                            { text: "Al Valle de La Ermita", correct: false },
                            { text: "Al Valle de Las Vacas", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/7: ¿En qué año ocurrió el traslado mencionado?",
                        options: [
                            { text: "En 1541", correct: true },
                            { text: "En 1773", correct: false },
                            { text: "En 1821", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/7: ¿Qué evento natural causó los estragos en el valle original?",
                        options: [
                            { text: "Un desprendimiento de agua y lodo del Volcán de Agua", correct: true },
                            { text: "Un terremoto de gran magnitud", correct: false },
                            { text: "Una erupción de lava del Volcán de Fuego", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/7: ¿Cómo se diseñó el trazo urbano de la nueva ciudad?",
                        options: [
                            { text: "En damero, con calles empedradas", correct: true },
                            { text: "De forma circular alrededor de un lago", correct: false },
                            { text: "Sin ningúna planificación, adaptándose al cerro", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/7: ¿Qué elementos arquitectónicos predominaban en la nueva traza?",
                        options: [
                            { text: "Conventos imponentes, plazas y estructuras coloniales", correct: true },
                            { text: "Rascacielos de madera y techos de paja", correct: false },
                            { text: "Pirámides escalonadas de piedra caliza", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/7: ¿Qué problema natural azotó repetidamente a la ciudad en los siglos XVII y XVIII?",
                        options: [
                            { text: "Violentos sismos o terremotos", correct: true },
                            { text: "Inundaciones por crecida de ríos", correct: false },
                            { text: "Plagas de langostas en los cultivos", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/7: ¿Qué adaptaciones hicieron los pobladores en sus construcciones para resistir los sismos?",
                        options: [
                            { text: "Muros gruesos y arcos bajos", correct: true },
                            { text: "Casas flotantes de bambú", correct: false },
                            { text: "Torres metálicas flexibles", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 3",
                title: "El veneno invisible del océano",
                intro: "<b>Instrucciones:</b> Lee con atención este texto informativo y contesta las 8 preguntas requeridas.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'Cada año, millones de toneladas de desechos plásticos llegan a los océanos, transformándose en una crisis ambiental global. A diferencia de los materiales orgánicos, el plástico no se biodegrada con facilidad; en su lugar, la radiación solar y el oleaje lo fragmentan lentamente en partículas microscópicas conocidas como microplásticos. Estas partículas flotan en las corrientes marinas o se hunden en los lechos oceánicos, siendo ingeridas por peces, tortugas y plancton. Esto no solo altera los ecosistemas marinos al bloquear sus aparatos digestivos, sino que introduce toxinas en la cadena alimentaria que eventualmente alcanzan el consumo humano, planteando una seria amenaza para la salud pública a largo plazo.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/8: ¿Qué problema ambiental aborda principalmente el texto?",
                        options: [
                            { text: "La acumulación de desechos plásticos en los océanos", correct: true },
                            { text: "El calentamiento global por quema de combustibles", correct: false },
                            { text: "La escasez de agua potable en las grandes ciudades", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/8: ¿Por qué el plástico representa un problema mayor comparado con materiales orgánicos?",
                        options: [
                            { text: "Porque no se biodegrada con facilidad", correct: true },
                            { text: "Porque pesa demasiado para flotar", correct: false },
                            { text: "Porque es un material altamente inflamable", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/8: ¿Qué factores físicos provocan la fragmentación del plástico en el mar?",
                        options: [
                            { text: "La radiación solar y el oleaje", correct: true },
                            { text: "Las altas temperaturas del fondo marino", correct: false },
                            { text: "Las bacterias y microorganismos marinos", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/8: ¿Cómo se le llama a las partículas microscópicas en las que se descompone el plástico?",
                        options: [
                            { text: "Microplásticos", correct: true },
                            { text: "Nanopolímeros", correct: false },
                            { text: "Residuos coloidales", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/8: ¿Qué ocurre con estas partículas una vez formadas?",
                        options: [
                            { text: "Flotan en corrientes o se hunden en el lecho marino", correct: true },
                            { text: "Se evaporan junto con el agua del mar", correct: false },
                            { text: "Se disuelven convirtiéndose en sales minerales", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/8: ¿Cómo afecta directamente esta contaminación a la fauna marina?",
                        options: [
                            { text: "Es ingerida por peces, tortugas y plancton, bloqueando sus aparatos digestivos", correct: true },
                            { text: "Les provoca quemaduras químicas en la piel", correct: false },
                            { text: "Les impide nadar debido al peso superficial del aceite", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/8: ¿Cómo llega este problema hasta los seres humanos?",
                        options: [
                            { text: "A través de las toxinas introducidas en la cadena alimentaria", correct: true },
                            { text: "Mediante el agua de lluvia contaminada en las ciudades", correct: false },
                            { text: "Por el contacto directo con la arena de las playas", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 8/8 (Conclusión): Según el texto, ¿cuál es la consecuencia última de esta cadena de contaminación?",
                        options: [
                            { text: "Una seria amenaza para la salud pública a largo plazo", correct: true },
                            { text: "La extinción inmediata de la pesca artesanal", correct: false },
                            { text: "El colapso total de la economía costera mundial", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 4",
                title: "El caminante y el espejo",
                intro: "<b>Instrucciones:</b> Lee la siguiente lectura reflexiva y responde con precisión las 7 preguntas.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'Caminaba un hombre vanidoso por un sendero desconocido cuando, al cruzar un arroyo, vio tirado en la hierba un pequeño espejo de bolsillo que algún viajero había perdido. Al recogerlo y mirarse en él por primera vez, frunció el ceño molesto y dijo en voz alta: 'Con razón este objeto estúpido fue abandonado; ¡mira nada más qué rostro tan feo y cansado refleja!'. Arrojó el espejo con desprecio al agua y continuó su camino mascullando insultos. El espejo, sumergido en la corriente cristalina, le devolvió una sonrisa silenciosa, sabiendo bien que la superficie pulida jamás crea los rostros, sino que simplemente se limita a mostrarlos tal cual son.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/7: ¿Qué objeto encontró el hombre vanidoso junto al arroyo?",
                        options: [
                            { text: "Un pequeño espejo de bolsillo", correct: true },
                            { text: "Una moneda de oro brillante", correct: false },
                            { text: "Un libro antiguo de notas", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/7: ¿Cuál era la característica principal de la personalidad del hombre?",
                        options: [
                            { text: "Era vanidoso", correct: true },
                            { text: "Era muy humilde y generoso", correct: false },
                            { text: "Era un científico distraído", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/7: ¿Cuál fue su reacción inmediata al mirarse en el espejo?",
                        options: [
                            { text: "Se molestó y criticó el reflejo de su rostro", correct: true },
                            { text: "Se alegró al verse tan elegante", correct: false },
                            { text: "Pensó que el espejo era mágico y se asustó", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/7: ¿De qué acusó al objeto antes de tirarlo?",
                        options: [
                            { text: "De ser un objeto estúpido que mostraba un rostro feo", correct: true },
                            { text: "De estar roto y rayado por el uso", correct: false },
                            { text: "De haberle robado su verdadera imagen", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/7: ¿Qué hizo el hombre con el espejo tras insultarlo?",
                        options: [
                            { text: "Lo arrojó con desprecio al agua", correct: true },
                            { text: "Lo guardó celosamente en su bolsillo", correct: false },
                            { text: "Lo rompió contra una piedra del camino", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/7: ¿Cómo reaccionó el espejo al caer al agua?",
                        options: [
                            { text: "Mantuvo una sonrisa silenciosa en la corriente", correct: true },
                            { text: "Se quebró en mil pedazos por el impacto", correct: false },
                            { text: "Se hundió en el lodo oscuro", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/7 (Moraleja): ¿Qué enseñanza profunda deja la actitud del espejo al final?",
                        options: [
                            { text: "Que los defectos propios no desaparecen culpando a quien nos los muestra", correct: true },
                            { text: "Que los espejos de bolsillo son herramientas inútiles para los viajeros", correct: false },
                            { text: "Que el agua de los arroyos purifica los objetos perdidos", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 5",
                title: "Crees que eres libre... pero no",
                intro: "<b>Instrucciones:</b> Lee con detenimiento este fragmento sobre filosofía práctica y responde las 8 preguntas.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'A menudo se confunde la libertad con la mera capacidad de hacer todo lo que nos apetezca en un momento dado sin rendir cuentas a nadie. Sin embargo, desde la perspectiva de la filosofía clásica, la verdadera libertad no es un impulso caótico de los deseos, sino el dominio de uno mismo. Un individuo esclavizado por sus propios vicios, impulsos descontrolados o pasiones inmediatas es incapaz de elegir racionalmente su propio destino, por muchas leyes externas que lo declaren libre en el papel. Ser libre implica desarrollar el juicio crítico, sopesar las consecuencias de los propios actos y actuar conforme a la razón y la virtud, convirtiéndose así en el arquitecto consciente de su propia vida.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/8: ¿Qué error común comete la gente al definir la libertad, según el texto?",
                        options: [
                            { text: "Confundirla con hacer todo lo que apetezca sin rendir cuentas", correct: true },
                            { text: "Creer que depende exclusivamente de las leyes escritas", correct: false },
                            { text: "Pensar que es un derecho que se adquiere con la edad", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/8: ¿Cómo define la filosofía clásica la verdadera libertad?",
                        options: [
                            { text: "Como el dominio de uno mismo", correct: true },
                            { text: "Como la ausencia total de normas sociales", correct: false },
                            { text: "Como la acumulación de riquezas materiales", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/8: ¿Qué condición describe a una persona que es esclava de sus propios impulsos?",
                        options: [
                            { text: "Es incapaz de elegir racionalmente su destino", correct: true },
                            { text: "Tiene un éxito asegurado en sus proyectos", correct: false },
                            { text: "Disfruta de una vida plena y sin preocupaciones", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/8: Según el autor, ¿qué ocurre con alguien declarado libre solo 'en el papel'?",
                        options: [
                            { text: "Si está dominado por sus vicios, sigue siendo esclavo internamente", correct: true },
                            { text: "Automáticamente adquiere sabiduría y virtud", correct: false },
                            { text: "Puede controlar a los demás con facilidad", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/8: ¿Qué elemento es indispensable para desarrollar la libertad real?",
                        options: [
                            { text: "El juicio crítico", correct: true },
                            { text: "La riqueza económica", correct: false },
                            { text: "La aprobación de la sociedad", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/8: ¿Qué debe hacer una persona libre antes de actuar?",
                        options: [
                            { text: "Sopesar las consecuencias de sus actos", correct: true },
                            { text: "Seguir su primer impulso instintivo", correct: false },
                            { text: "Consultar la opinión de la mayoría", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/8: ¿Bajo qué principios debe regir sus acciones un individuo verdaderamente libre?",
                        options: [
                            { text: "La razón y la virtud", correct: true },
                            { text: "El placer y la comodidad inmediata", correct: false },
                            { text: "La norma y el castigo externo", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 8/8 (Conclusión): ¿En qué se convierte una persona que aplica estos principios filosóficos?",
                        options: [
                            { text: "En el arquitecto consciente de su propia vida", correct: true },
                            { text: "En un líder político influyente", correct: false },
                            { text: "En un espectador pasivo de su entorno", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 6",
                title: "De las cavernas a no contestar el WhatsApp",
                intro: "<b>Instrucciones:</b> Lee atentamente este texto sobre el desarrollo comunicativo y contesta las 7 preguntas.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'La historia de la comunicación humana ha estado marcada por grandes revoluciones mediáticas. Desde las pinturas rupestres en las paredes oscuras de las cavernas y la invención de la escritura cuneiforme en tablillas de arcilla, el hombre buscó trascender el tiempo y el espacio para conservar su memoria colectiva. La llegada de la imprenta de tipos móviles en el siglo XV democratizó el acceso al conocimiento, permitiendo que los libros dejaran de ser exclusivos de élites religiosas. Hoy en día, la era digital ha comprimido el planeta en una red instantánea de datos, donde el reto ya no es encontrar información, sino desarrollar el discernimiento necesario para separar los datos veraces de la desinformación masiva.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/7: ¿Cuál ha sido el hilo conductor de la historia de la comunicación según el texto?",
                        options: [
                            { text: "La búsqueda del hombre por trascender el tiempo y espacio para conservar su memoria", correct: true },
                            { text: "El deseo de comercializar papel y tintas a gran escala", correct: false },
                            { text: "La necesidad de controlar los gobiernos locales", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/7: ¿Cuáles son los primeros métodos de registro mencionados al inicio?",
                        options: [
                            { text: "Pinturas rupestres y escritura cuneiforme en tablillas de arcilla", correct: true },
                            { text: "Cartas impresas en rollos de papiro", correct: false },
                            { text: "Señales de humo y tambores en la selva", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/7: ¿En qué siglo se introdujo la imprenta de tipos móviles?",
                        options: [
                            { text: "En el siglo XV", correct: true },
                            { text: "En el siglo XIX", correct: false },
                            { text: "En el siglo XII", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/7: ¿Qué impacto social directo tuvo la llegada de la imprenta?",
                        options: [
                            { text: "Democratizó el acceso al conocimiento", correct: true },
                            { text: "Eliminó por completo el uso de la escritura a mano", correct: false },
                            { text: "Provocó el cierre de todas las bibliotecas religiosas", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/7: ¿A quiénes pertenecían exclusivamente los libros antes de la imprenta?",
                        options: [
                            { text: "A élites religiosas", correct: true },
                            { text: "A comerciantes y mercaderes ricos", correct: false },
                            { text: "A los líderes militares del imperio", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/7: ¿Cómo describe el texto el estado actual de la comunicación digital?",
                        options: [
                            { text: "Una red instantánea de datos que ha comprimido el planeta", correct: true },
                            { text: "Un sistema lento pero sumamente seguro", correct: false },
                            { text: "Una herramienta limitada únicamente a las grandes potencias", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/7: Según el autor, ¿cuál es el mayor reto en la actual era digital?",
                        options: [
                            { text: "Desarrollar discernimiento para separar datos veraces de la desinformación", correct: true },
                            { text: "Conseguir dispositivos electrónicos más económicos", correct: false },
                            { text: "Aprender a programar en lenguajes avanzados", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 7",
                title: "Donde se te va la vida (y el dinero)",
                intro: "<b>Instrucciones:</b> Lee con atención esta lectura final de análisis cotidiano y responde las 8 preguntas.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'En la sociedad moderna, solemos medir la riqueza únicamente en función del dinero acumulado en cuentas bancarias, olvidando que el recurso más democrático y a la vez irreecuperable con el que cuenta el ser humano es el tiempo. Cada minuto gastado en distracciones vacías o en la improvisación constante es un capital de vida que no regresa. La planificación financiera y la gestión eficiente de las horas diarias guardan una estrecha relación: ambas exigen disciplina, renuncias temporales y visión a futuro. Quien aprende a invertir con cabeza fría tanto sus recursos económicos como sus bloques horarios construye una base sólida de estabilidad, blindándose frente a la incertidumbre y el estrés crónico de la vida contemporánea.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/8: ¿Cómo suele medir la sociedad moderna la riqueza habitualmente?",
                        options: [
                            { text: "En función del dinero acumulado en cuentas bancarias", correct: true },
                            { text: "Según la cantidad de tiempo libre disponible", correct: false },
                            { text: "De acuerdo con el nivel de felicidad personal", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/8: ¿Qué característica define al tiempo según el texto?",
                        options: [
                            { text: "Es el recurso más democrático e irrepetible", correct: true },
                            { text: "Es un bien que se puede recuperar ahorrando", correct: false },
                            { text: "Es un activo financiero variable", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/8: ¿Qué representa cada minuto gastado en distracciones vacías?",
                        options: [
                            { text: "Un capital de vida que no regresa", correct: true },
                            { text: "Un descanso necesario para el cerebro", correct: false },
                            { text: "Una inversión en salud mental", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/8: ¿Qué relación existe entre la planificación financiera y la gestión del tiempo?",
                        options: [
                            { text: "Guardan una estrecha relación porque ambas exigen disciplina", correct: true },
                            { text: "Son opuestas, ya que el dinero requiere rigor y el tiempo flexibilidad", correct: false },
                            { text: "Ninguna, operan en áreas completamente separadas", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/8: ¿Qué actitudes exigen ambas disciplinas para ser efectivas?",
                        options: [
                            { text: "Disciplina, renuncias temporales y visión a futuro", correct: true },
                            { text: "Suerte, rapidez y apoyo de terceros", correct: false },
                            { text: "Inmediatez, gastos flexibles y espontaneidad", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/8: ¿Qué logra una persona que invierte con cabeza fría su dinero y su tiempo?",
                        options: [
                            { text: "Construye una base sólida de estabilidad", correct: true },
                            { text: "Se vuelve famosa de la noche a la mañana", correct: false },
                            { text: "Elimina por completo cualquier tipo de trabajo", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/8: ¿De qué situaciones protege esta estabilidad a la persona?",
                        options: [
                            { text: "Frente a la incertidumbre y el estrés crónico", correct: true },
                            { text: "Contra las enfermedades físicas estacionales", correct: false },
                            { text: "Ante los cambios climáticos imprevistos", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 8/8 (Conclusión global): ¿Cuál es el mensaje central del texto?",
                        options: [
                            { text: "Gestionar inteligentemente el tiempo y los recursos es vital para la estabilidad y paz mental", correct: true },
                            { text: "El dinero es más importante que el tiempo libre", correct: false },
                            { text: "La sociedad moderna vive demasiado preocupada por el ahorro", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 8",
                title: "Lo que tu rutina de Skincare está haciendo mal",
                intro: "<b>Instrucciones:</b> Lee con atención esta lectura sobre belleza y dermocosmética. Responde correctamente las 8 preguntas seguidas.",
                intro: "<b>Instrucciones:</b> Lee con atención este texto sobre el cuidado de la piel. Responde correctamente las 8 preguntas para superar la prueba.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'En los últimos años, el cuidado de la piel (skincare) ha dejado de ser una simple rutina superficial para convertirse en una disciplina basada en la química dermatológica. La clave de una piel luminosa e hidratada no radica en usar decenas de productos a la vez, sino en entender la función de la barrera cutánea. El uso diario de un limpiador gentil, un sérum hidratante como el ácido hialurónico y, sobre todo, la aplicación constante de protector solar de amplio espectro constituyen el pilar fundamental para prevenir el envejecimiento prematuro y el daño celular causado por los rayos ultravioleta. Además, los expertos insisten en que la constancia y el respeto al tipo de piel de cada persona producen resultados mucho más duraderos que seguir ciegamente tendencias pasajeras de redes sociales.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/8: ¿En qué se basa el cuidado de la piel moderno según el texto?",
                        options: [
                            { text: "En la química dermatológica", correct: true },
                            { text: "En trucos caseros de internet", correct: false },
                            { text: "En la cantidad de maquillaje aplicado", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/8: ¿Cuál es la clave para una piel luminosa e hidratada?",
                        options: [
                            { text: "Entender la función de la barrera cutánea", correct: true },
                            { text: "Usar decenas de productos al mismo tiempo", correct: false },
                            { text: "Lavar la cara únicamente con agua caliente", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/8: ¿Qué sérum se menciona específicamente como aliado de la hidratación?",
                        options: [
                            { text: "Ácido hialurónico", correct: true },
                            { text: "Ácido sulfúrico", correct: false },
                            { text: "Aceite de coco denso", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/8: ¿Qué producto es el pilar fundamental para prevenir el envejecimiento prematuro?",
                        options: [
                            { text: "El protector solar de amplio espectro", correct: true },
                            { text: "Una crema exfoliante de noche", correct: false },
                            { text: "Un tónico matificante potente", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/8: ¿Contra qué factor protege principalmente el uso constante de bloqueador solar?",
                        options: [
                            { text: "El daño celular causado por los rayos ultravioleta", correct: true },
                            { text: "La contaminación del aire en la ciudad", correct: false },
                            { text: "El cambio de temperatura en la noche", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/8: ¿Qué factor produce resultados más duraderos en la piel según los expertos?",
                        options: [
                            { text: "La constancia y el respeto al tipo de piel", correct: true },
                            { text: "Comprar los productos más caros del mercado", correct: false },
                            { text: "Cambiar de rutina cada tres días", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/8: ¿Qué advertencia o crítica hace el texto al final?",
                        options: [
                            { text: "Evitar seguir ciegamente tendencias pasajeras de redes sociales", correct: true },
                            { text: "No usar protector solar en días nublados", correct: false },
                            { text: "Dejar de usar limpiadores faciales por completo", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 8/8 (Conclusión): ¿Cuál es el mensaje principal de la lectura?",
                        options: [
                            { text: "El skincare efectivo requiere constancia, protección solar y entender las necesidades de la piel", correct: true },
                            { text: "Mientras más pasos tenga una rutina, mejores serán los resultados", correct: false },
                            { text: "Los productos de belleza no tienen base científica", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 9",
                title: "¿Aún me amarás cuando ya no sea joven y hermoso?",
                intro: "<b>Instrucciones:</b> Lee la siguiente reseña artística sobre Lana del Rey y responde las 7 preguntas.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'Desde su irrupción en la escena pública con el icónico sencillo 'Video Games', Lana del Rey consolidó un estilo estético y musical único conocido como 'Hollywood triste'. Su propuesta combina una cinematográfica nostalgia vintage por la cultura estadounidense de los años cincuenta y sesenta con letras cargadas de romanticismo trágico, melancolía y glamour decadente. A pesar de que en los inicios de su carrera la crítica especializada cuestionó la autenticidad de su imagen melancólica, la artista demostró una evolución lírica madura en álbumes aclamados como 'Norman Fucking Rockwell!'. Hoy en día, es reconocida como una de las compositoras más influyentes de la música pop alternativa, habiendo redefinido la tristeza no como una debilidad, sino como una expresión poética y cinematográfica.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/7: ¿Con qué sencillo icónico irrumpió Lana del Rey en la escena pública?",
                        options: [
                            { text: "Video Games", correct: true },
                            { text: "Summertime Sadness", correct: false },
                            { text: "Born to Die", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/7: ¿Cómo se le conoce al estilo estético y musical único consolidado por la artista?",
                        options: [
                            { text: "Hollywood triste", correct: true },
                            { text: "Pop psicodélico retro", correct: false },
                            { text: "Glamour del desierto", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/7: ¿Con qué décadas de la cultura estadounidense se relaciona la nostalgia vintage de su propuesta?",
                        options: [
                            { text: "Los años cincuenta y sesenta", correct: true },
                            { text: "Los años ochenta y noventa", correct: false },
                            { text: "Los años veinte y treinta", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/7: ¿Qué elementos caracterizan las letras de sus canciones?",
                        options: [
                            { text: "Romanticismo trágico, melancolía y glamour decadente", correct: true },
                            { text: "Protesta política directa y ritmos acelerados", correct: false },
                            { text: "Alegría veraniega e historias de comedia", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/7: ¿Qué aspecto de Lana del Rey cuestionó la crítica en los inicios de su carrera?",
                        options: [
                            { text: "La autenticidad de su imagen melancólica", correct: true },
                            { text: "Su capacidad para afinar en vivo", correct: false },
                            { text: "El idioma en el que escribía sus temas", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/7: ¿Qué álbum se menciona como prueba de su madurez lírica aclamada?",
                        options: [
                            { text: "Norman Fucking Rockwell!", correct: true },
                            { text: "Ultraviolence", correct: false },
                            { text: "Lust for Life", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/7 (Tema central): ¿Cómo redefinió la tristeza la obra de Lana del Rey según el texto?",
                        options: [
                            { text: "Como una expresión poética y cinematográfica en lugar de una debilidad", correct: true },
                            { text: "Como un problema que debe ocultarse a toda costa", correct: false },
                            { text: "Como una moda temporal exclusiva para adolescentes", correct: false }
                        ]
                    }
                ]
            },
            {
                id: "Lectura 10",
                title: "El vestido que destruyó al grupo",
                intro: "<b>Instrucciones:</b> Lee la siguiente historia llena de drama y chisme. Responde las 8 preguntas correctamente para aprobar.<br><br><blockquote class='italic border-l-2 border-amber-500 pl-3 py-2 my-2 bg-amber-50/60 text-slate-800 font-serif leading-relaxed text-xs'>'Durante la planeación de la boda del año, el grupo de mejores amigas de Sofía colapsó por una inesperada traición. Valentina, conocida por su impecable estilo, le prestó un codiciado vestido de diseñador color esmeralda a su amiga Camila para una gala benéfica. La única condición era devolverlo limpio al día siguiente. Sin embargo, Camila no solo desapareció durante todo el fin de semana sin responder las llamadas, sino que envió el vestido tres días después a través de un mensajero con una enorme mancha de vino en la falda y sin ninguna nota de disculpa. Cuando el grupo confrontó a Camila en su chat grupal, ella se justificó diciendo que 'las cosas materiales no valían tanto como para hacer un drama'. El grupo terminó dividido entre quienes exigían que Camila pagara la tintorería fina y quienes consideraban que Valentina exageraba por un trozo de tela.'</blockquote>",
                questions: [
                    {
                        question: "Pregunta 1/8: ¿Qué evento sirvió de marco para el conflicto en el grupo de amigas?",
                        options: [
                            { text: "La planeación de la boda de Sofía", correct: true },
                            { text: "Un viaje de vacaciones a la playa", correct: false },
                            { text: "La graduación universitaria de Valentina", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 2/8: ¿Qué prenda le prestó Valentina a Camila y de qué color era?",
                        options: [
                            { text: "Un vestido de diseñador color esmeralda", correct: true },
                            { text: "Un abrigo de fiesta color rojo", correct: false },
                            { text: "Una blusa de seda color blanco", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 3/8: ¿Cuál era la única condición impuesta para el préstamo?",
                        options: [
                            { text: "Devolverlo limpio al día siguiente", correct: true },
                            { text: "Pagar un alquiler por usarlo", correct: false },
                            { text: "No tomarse fotos con el vestido puesto", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 4/8: ¿Cómo actuó Camila durante el fin de semana tras la gala?",
                        options: [
                            { text: "Desapareció todo el fin de semana sin responder llamadas", correct: true },
                            { text: "Llamó repetidamente a Valentina para agradecerle", correct: false },
                            { text: "Llevó el vestido inmediatamente a la lavandería", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 5/8: ¿En qué condiciones regresó el vestido tres días después?",
                        options: [
                            { text: "Con un mensajero, con una mancha de vino y sin nota de disculpa", correct: true },
                            { text: "Entregado en persona y con una nota de agradecimiento", correct: false },
                            { text: "Roto del cierre pero completamente limpio", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 6/8: ¿Cuál fue la excusa de Camila al ser confrontada en el chat grupal?",
                        options: [
                            { text: "Dijo que las cosas materiales no valían tanto como para hacer un drama", correct: true },
                            { text: "Afirmó que el vestido ya estaba manchado cuando se lo dieron", correct: false },
                            { text: "Prometió comprarle un vestido totalmente nuevo", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 7/8: ¿Cómo reaccionó el grupo de amigas ante la discusión?",
                        options: [
                            { text: "Terminó dividido entre los que pedían pago y los que decían que exageraban", correct: true },
                            { text: "Todas apoyaron unánimemente a Camila", correct: false },
                            { text: "Cancelaron la boda de Sofía de inmediato", correct: false }
                        ]
                    },
                    {
                        question: "Pregunta 8/8 (Análisis de valores): ¿Cuál fue el verdadero motivo del enojo de Valentina?",
                        options: [
                            { text: "La falta de respeto, consideración y responsabilidad de Camila al ignorar los acuerdos", correct: true },
                            { text: "Que ella quería usar el vestido ese mismo domingo", correct: false },
                            { text: "Que el color esmeralda ya no estaba de moda", correct: false }
                        ]
                    }
                ]
            }
        ]
    }
};