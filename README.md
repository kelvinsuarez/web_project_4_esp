# Proyecto 5: Alrededor de los Estados Unidos


**Introducción**  
Esta es una pagina de contenido dinamico diseñada para entretener y brindar una experiencia recreativa donde puedas ingresar con tu perfil y elegir paisages de distintos lugares.
podras señalar tu imagen favorita activando el icono de corazon dentro de la imagen.

### Descripción general  
Para este proyecto se han tomado encuenta varias resoluciones de pantallas para que mantenga siepre un diseño
legible y agradable a la vista con la ayuda de los media queries tomando en cuenta pantallas de escritorio, tablets
y samartphone.

En la parte del encabezado se localiza el titulo de la pagina situado en la parte superior izuierda, mas abajo en la seccion "profile" tendremos el acceso a ingresar y cambiar nuertros datos para hacer hacer de la pagina una seccion personalizada, dentro de este mismo bloque veremos un cuadro con la silueta en representacion del perfil del usuario, al lado derecho el formulario para ingresar el nombre y ocupacion del usuario, en el centro del bloque esta el boton para acceder a editar esas opciones, y en la esquina derecha se encuentra un boton para agregar que aun no esta habilitado. La pagina fue realizada con el uso de la tipografia Inter en toda su estructura.

Luego estan las casillas con las imagenes en el bloque "cards", donde se podran ver 6 cuadros con imagenes de paisages de distintos lugares, este bloque adoptara distinta posiciones para los cuadros de imagenes segun el ancho de la pantalla del dispositivo que se este utilizando, en la esquina superior derecha podremos encontrar un boton de resiclar que se pasara de blanco a gris al estar en estado Hover, (aun no esta habilitado). Bajo la imagen enta la barra con la informaion del lugar, para estos textos se utilizo una elipsis para truncar los textos que desborden el contenedor y en la parte derecha de esta barra se ubica un corazon bordeado que al estar en estado hover cambia a gris y al hacer click se rellena a negro.
En la parte final de la pagina esta el bloque "footer" donde se encuentran los datos del autor y el año de la creacion.

para este proyecto se utiliza la tecnologia css para hacer mas placentero el recorrido visual, la tecnologia Javascipt para darle funcionalidad a los botodes para el formulario de entrada de datos, boton de guardar y cerrar el formulario, tambien para agregar el relleno de los corazones a color negro al hacer click en las cartas de imagenes. La estructura de organizcion y rutas esta basada en la metodologi BEM. En el primer nivel estan las carpetas blocks donde estan la distribucion de los estilos css para cada bloque, luego la carpeta font donde estan almacenadas las fuentes tipograficas utilizadas, seguido de la carpeda image que contiede cada una de las imagenes del proyecto, seguido de
la carpeta pages que contiene el indice css de donde se enruta cada bloque css, luego la carpeta vendor que almacena
el archivo normalize css. Proximo esta el archivo principal "index.html" seguido finalmente por el archivo readme
que brida los detalles de este proyecto.

### funciones y animaciones

cada ventana modal como las ventana de clase popup y popup-place cuentan con funciones instegradas, para popup, la funcion de editar perfil dando al usuario la opcion de mostral en la pantalla principal el nombre y ocupacion que elijan, para este bloque se le asigno una sutil animacion de transicion de desvanesido  tanto en la entrada como en la salida.
De la misma manera fue asignado este efecto para la ventana popup-place cuya funcion es agregar una nueva carta de imagen a la seccion place esta toma de entrada el nombre del lugar y la url de la imagen que sera introducida.

Para la seccion cards fueron cargadas 6 cartas automaticamente mediante una array que contiene el nombre y las url de dichas imagenes. Para cargar estas imagenes fue necesario la realizacion de una funcion mediante Javascrip y cada carta contiene funciones integradas como la de poder eliminarse, hacer click en la imagen para agrandarla, esta con el mismo efecto de desvanecimiento de popup y popup-place para la entrada y la salida, y tambien la funcion para dar like haciendo click en el icono de corazón esta tambien con una animación de escala para simular un latido y transicion de color de gris a negro.

### Enlace directo a la pagina
https://kelvinsuarez.github.io/web_project_4_esp/index.html


**Figma**

* [Enlace al proyecto en Figma](https://www.figma.com/file/LDMgqWesKpQkIwhOfEBuTS/WEB%2C-Sprint-5%3A-Around-The-U.S.-%7C-desktop-%2B-mobile?node-id=0%3A1)
