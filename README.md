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
systemctl restart networking

- Instalar docker
> sudo apt install apt-transport-https ca-certificates curl software-properties-common
> sudo apt-get install gnupg
> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
> sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
> sudo apt update
> sudo apt install docker-ce

- Comprobar que Docker está instalado 
> docker

# Instalación con docker compose
- Ejecutar docker compose
> docker compose up -d

- Instalar dependencias de proyecto angular
> docker run --rm -v /root/Coffee:/app bitnami/node npm install
> docker run --rm -v /root/Coffee:/app bitnami/node npm start