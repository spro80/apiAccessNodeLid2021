
## TUTORIAL:


## 1.- WORK WITH API IN LOCAL:

### In the root of this project, you must execute the follow instructions:
apiAccessNodeLid2021$ sudo docker build -t nodejs-image-demo .


### Validate image created:
apiAccessNodeLid2021$ docker images
nodejs-image-demo            latest          9dba88a35d32   53 seconds ago   1.03GB


### Create container:
apiAccessNodeLid2021$ docker run --name nodejs-image-demo-container -p 80:3000 -d nodejs-image-demo
415e6d4044e6945caaf585c8f82d35c3b6e21ea7efe7da7dbac74463d38a880a


### Validate container in execution:
apiAccessNodeLid2021$ docker container ls

CONTAINER ID   IMAGE               COMMAND              CREATED         STATUS         PORTS                                             NAMES

415e6d4044e6   nodejs-image-demo   "npm run local-cl"   3 minutes ago   Up 3 minutes   3000/tcp, 0.0.0.0:80->3000/tcp, :::80->3000/tcp   nodejs-image-demo-container


### Validate with curl that API is working in port 80:
apiAccessNodeLid2021$ curl -i http://localhost:80/
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 13
ETag: W/"d-d4rJUua7NJFPT4bD9FZbvWZOD1s"
Vary: Accept-Encoding
Date: Tue, 01 Jun 2021 02:51:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Hello Docker


### See logs in container:
sudo docker logs idContainer