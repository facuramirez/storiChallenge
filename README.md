# **StoriChallenge** 

## Descripción de la interfaz del código: 
**El código se encuentra dividido en 2 carpetas:**
-	api: (backend)
-	client: (frontend)

* **api:** Cuenta con un archivo **index.js** y **app.js** en el cual se realizan las configuraciones iniciales relativas al servidor de Nodejs y MongoDB. 
También cuenta con una carpeta **src** la cual contiene las siguientes carpetas: 
  *  **controllers:** archivos que contienen las funciones para obtener los datos de la base de datos, guardarlos y eliminarlos así como la configuración de la librería “nodemailer” para enviar mails.  
  *  **models:** el modelo (esquema) de Mongoose. 
  *  **routes:** aquí se encuentra el archivo de rutas. 
* **client:** Contiene toda la información relativa al Frontend. Los componentes se encuentran en la carpeta **components**, que son los siguientes: 
  *  **Navbar:** barra con menú de navegación 
  *  **Home:** contenido de la página 
  *  **Layout:** archivo contenedor para los componentes que lo utilicen (en este caso solo Home). 

**Instrucciones ejecución de código:**
1. Instalar Nodejs
2. Instalar Mongodb
3. Clonar repositorio
4. Crear una carpeta en el disco **C:/** llamada **data** y dentro de esta crear otra llamada **db** (dejarla vacía). 
5. Desde la consola en cualquier directorio correr el comando **mongod** 
6. Desde la consola situarse en la carpeta **api** y colocar **npm start** 
7. Desde la consola situarse en la carpeta **client** y colocar **npm run dev**

**Flow de la página:**
1-	El usuario ingresa al sitio en el cual deberá colocar su correo y subir su archivo “csv”.
2-	No podrá realizar la operación hasta no completar dichos campos y que ambos sean válidos.
3-	Una vez completado lo anterior, deberá hacer click en “Procesar”.
4-	Aparecerá una vista previa antes de confirmar la operación y podrá volver hacia atrás si decide modificar los datos colocados.
5-	Finalmente deberá hacer click en “Enviar” recibiendo en su correo el resumen de su cuenta.

## **IMPORTANTE: El archivo 'csv' de encuentra en la carpeta *./client/Transacciones.csv* **
