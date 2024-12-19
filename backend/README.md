# Awer Backend

## Descripción
Este proyecto es la parte backend del challenge para Awer.

## Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/edujrv/awer.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd awer/backend
    ```
3. Configura el archivo application.properties con los datos de tu base de datos, por defecto se espera que la base de datos se llame `awer_db`, 
   el usuario y contraseña sean `user` y se este ejecutando en `localhost:3306`:
    ```
    spring.datasource.url=jdbc:mysql://localhost:3306/awer_db
    spring.datasource.username=user
    spring.datasource.password=user
    ```

## Uso
para ejecutar el proyecto, navega al directorio del proyecto y ejecuta el siguiente comando:
```bash
./gradlew bootRun
```
