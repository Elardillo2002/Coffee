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