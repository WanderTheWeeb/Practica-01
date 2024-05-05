# Primera practica


Organiza equipos de 4 o 5integrantes. Cada equipo deberá tener un líder designado para realizar la integración de los cambios.

Sigue estos pasos para configurar el entorno de trabajo:

1. EL lider del equipo hara un fork del repositorio principal en GitHub.
   
2. El lider configura dos remotos en tu repositorio local: uno para el repositorio principal y otro para el repositorio del equipo. 
    ```bash
    git remote add upstream <url-del-repositorio-principal>
    git remote add origin <url-del-repositorio-equipo>
    ```    
3. Cada integrante del equipo debe clonar el repositorio a su computadora local usando el siguiente comando: `git clone <url-repositorio-equipo>`
   
   
4. Crea una nueva rama para trabajar en tu tarea específica:
   
5. Realiza los cambios necesarios en los archivos de la página.
   
6. Una vez que hayas completado tus cambios, añade los archivos modificados al área de staging y haz un commit:
```bash
git add .
git commit -m "Mensaje descriptivo de los cambios realizados"
```
1. Sincroniza tu rama con el repositorio principal:
` git pull origin main `

1. Sube tus cambios a tu repositorio de equipo: `git push origin main`
2. Primero, asegúrate de estar en la rama principal: `git checkout main` o `git switch main`
3.  Luego, obtén los últimos cambios del repositorio principal: `git pull origin main `
4.   Finalmente, fusiona la rama del equipo con la rama principal y sube los cambios:
```bash
git merge origin/nombre-de-la-rama
git push upstream main
```

## Tareas por Realizar

- **Agregar Más Películas**: Necesitamos agregar más películas a la filmografía de Ryan Gosling. Puedes consultar una lista completa de sus películas en IMDb.

- **Responsive**:  Si es posible agrega mediaquerys para hacer del sitio responsive

- **Cambia los colores**: Cambia los colores de las letras o fondos.
  
- **Agregar Fotos**: Necesitamos agregar más fotos de Ryan Gosling a la galería. Busca fotos de alta calidad y relacionadas con su carrera y vida personal.
  
- **Agregar una Nueva Sección**: ¿Tienes alguna idea para una nueva sección en la página? ¡Agrega tu propuesta y desarrolla el contenido!
  
- **Eliminar una Sección**: Si consideras que alguna sección actual no es relevante o necesita ser eliminada, propón la eliminación y explica por qué.
  
- **Corrección de Errores**: Si encuentras algún error o problema en la página, háznoslo saber para que podamos corregirlo.

