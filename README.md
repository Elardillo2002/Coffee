# NVM
Instalamos nvm en el ordenador: https://github.com/coreybutler/nvm-windows/releases

# GIT
## Importar directorio en máquina local la primera vez
> git clone https://github.com/Elardillo2002/Coffee

## Exportar por primera vez
>git remote add origin https://github.com/Elardillo2002/Coffee

## Actualizar cambios de otros (main)

> git pull origin main

## Actualizar cambios propios (main)

> git fetch origin main
> git merge origin/main
> git add .
> git commit -m "commit"
> git push origin main

Y más tarde instalar las dependencias del proyecto, almacenadas en el directorio node_modules, que con Git no se instalan.
> npm install

# NG - ANGULAR NUEVO PROYECTO
> npm i -g @angular/cli@16.2.12

Nuevo proyecto
> ng new Coffee

# INICIAR PROYECTO
> cd Angular /
> ng serve [--open]

Generar un nuevo componente
> ng generate component components/_nombre-componente_