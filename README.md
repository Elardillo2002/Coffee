# Listado de programas que han de descargar para el correcto desarrollo del proyecto:
- docker compose
> scp docker-compose.yml root@_IP_:/root/

- Instalar actualizaciones 
> apt update
> apt-get update

- Editar archivo /etc/hosts
> nano /etc/hosts
127.0.0.1       localhost
127.0.1.1       _Nombre-servidor_

- Instalar docker
> sudo apt install apt-transport-https ca-certificates curl software-properties-common
> sudo apt-get install gnupg
> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
> sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
> sudo apt update
> sudo apt install docker-ce

- Comprobar que Docker está instalado 
> docker

- Instalar npm y node
> sudo apt install nodejs npm

- Instalar Angular
> npm i -g @angular/cli@16.2.12

- Instalar nvm
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
> nvm install 16.14
> nvm use 16.14

- Descargar Git.
> sudo apt-get install git



- Descargar Apache.
> sudo apt-get install apache2 mariadb-server \
> mysql_secure_installation \
(Yes, yes, yes, no, no, yes) \
> apt install php libapache2-mod-php php-mysql phpmyadmin \
(Yes)

# Listado de comandos que han de ejecutarse para poder acceder al proyecto
> git clone https://github.com/Elardillo2002/Coffee
> cd Coffee
> docker compose up -d
> docker start coffee-pgadmin-1
> docker start coffee-db-1
> npm i
> ng serve

# NVM
Instalación: https://github.com/coreybutler/nvm-windows/releases

# ANGULAR
> npm i -g @angular/cli@16.2.12

## Nuevo proyecto
> ng new Coffee

# INICIAR PROYECTO
> cd Angular \
> ng serve [--open]

# GENERAR NUEVO COMPONENTE
> ng generate component components/_nombre-componente_

# GIT
## Obtener ficheros de GITHUB
> git clone https://github.com/Elardillo2002/Coffee

## Iniciar un proyecto de GIT (localmente)
> git init

## Actualizar cambios de GITHUB
> git pull

## Actualizar cambios propios (main)
> git add . \
> git commit -m "Commit" \
> git remote add origin _url_repositorio_ \
> git fetch \
> git merge origin/main \
> git push -u origin main \
\
> git add . \
> git commit -m "Commit" \
> git fetch \
> git merge origin/master\
> git push 

## Instalar dependencias de Angular
> npm install

## CREAR DOCUMENTACIÓN
> npx typedoc "src/app/components/**/*.component.ts" "src/app/services/**/*.ts"

## API
### Platos
- Listar todos los platos -> /api/dish/all
- Listar todos los platos con ID -> /api/dish/fulldishes
- Buscar plato por id -> /api/dish/id/_idDelPlato_
- Buscar platos por fecha -> /api/dish/date/_fechaDelPlato_
- Añadir nuevo plato -> /api/dish -> BODY con name, price, type, date (POST)
- Editar plato -> /api/dish/edit -> BODY con id, name, price, type, date (PUT)
- Borrar plato -> /api/dish/delete/_idDelPlato_ (DELETE)

### Menús
- Obtener menú de hoy -> /api/menu/today
- Buscar menú por fecha -> /api/menu/_fechaDelMenu_ (formato yyyy-mm-dd)
- Añadir menú -> /api/menu -> BODY con price, date (POST)
- Editar menú -> /api/menu/edit -> BODY con el menú actualizado