alert("Inicia Proceso");
setTimeout(() => {
  alert("Medio Proceso");/*Aunque el retraso especificado es 0, el setTimeout no ejecuta inmediatamente la función pasada.
En su lugar, programa la función para que se ejecute después de que el call stack esté vacío, se añade a la cola de tareas.
La task queue es una cola donde se almacenan las tareas que deben ser ejecutadas de manera asíncronica*/
},0);
alert("Fin de Proceso");
