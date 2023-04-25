# Guía de inicio rápido: Redux con Firebase y Cloudinary

Esta guía de inicio rápido demuestra cómo crear un app de Notas con React - Redux, Firebase y Cloudinary . Antes de empezar,
[instala Compose](https://docs.docker.com/compose/install/).

#### Data
![Alt text](login.jpg)

#### Notas
![Alt text](notas.jpg)


### Software utilizado

```
materialui-===5.11.16
node==18.3
react===18.2.0
reduxjs/toolkit=1.9.5
sweetalert2=11.7.3
vite===4.1.0
```

## Deploy con docker compose

```
$ docker compose up -d
```

## Resultados esperados

La lista de contenedores debe mostrar un contenedor en ejecución y la asignación de puertos como se muestra a continuación:
```
$ docker ps
CONTAINER ID   IMAGE                           COMMAND                  CREATED          STATUS                    PORTS                               NAMES
85701f66ccf8   react_django_mysql01-frontend   "docker-entrypoint.s…"   3 minutes ago    Up 3 minutes             0.0.0.0:3000->3000/tcp              docker_react
```

Luego vaya a `http://localhost:3000/` en su navegador web.