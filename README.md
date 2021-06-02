
## TUTORIAL:


## 1.- RUN API IN LOCAL:

#### Execute the follow command in the root of the project:  
npm i 

### Only in case of error in the instalation, you can use this command:
npm install ----legacy-peer-deps

#### Execute the follow command in the root of the project, before that you execute this command. You must
#### have the BD mongo running in the machine.
npm run local-cl

#### If all is ok, you must see the follow content:

#### 
listening on port 3000
 running environment NODE_ENV=local, internal env=local
 running environment app NODE_ENV_APP=lider-cl, internal envApp=lider-cl
┌─────────────────────────┬──────────────────────────────────────────────────┐
│ METHOD                  │ ROUTE                                            │
├─────────────────────────┼──────────────────────────────────────────────────┤
│ GET                     │ /                                                │
├─────────────────────────┼──────────────────────────────────────────────────┤
│ GET                     │ /api/products/health                             │
├─────────────────────────┼──────────────────────────────────────────────────┤
│ GET                     │ /api/products/getProducts                        │
├─────────────────────────┼──────────────────────────────────────────────────┤
│ GET                     │ /api/products/getDiscounts                       │
└─────────────────────────┴──────────────────────────────────────────────────┘
Conection to Mongo DB is succesfuly
####





### 2.- RUN API IN LOCAL WITH DOCKER:

#### In the root of this project, you must execute the follow instructions:
apiAccessNodeLid2021$ sudo docker build -t nodejs-image-demo .

#### Validate that the image is created:
apiAccessNodeLid2021$ docker images
nodejs-image-demo            latest          9dba88a35d32   53 seconds ago   1.03GB


#### Create container:
apiAccessNodeLid2021$ docker run --name nodejs-image-demo-container -p 3000:3000 -d nodejs-image-demo
415e6d4044e6945caaf585c8f82d35c3b6e21ea7efe7da7dbac74463d38a880a

#### Validate container in execution:
apiAccessNodeLid2021$ docker container ls

CONTAINER ID   IMAGE               COMMAND              CREATED         STATUS         PORTS                                             NAMES

415e6d4044e6   nodejs-image-demo   "npm run local-cl"   3 minutes ago   Up 3 minutes   3000/tcp, 0.0.0.0:80->3000/tcp, :::80->3000/tcp   nodejs-image-demo-container

#### Validate with curl that API Products is working in port 3000:
#### If you get this response, all is ok:

apiAccessNodeLid2021$ curl -i http://localhost:3000/
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


#### In case that you get some error, you can see logs in the container, with id container.
#### For obtain the id container, you can execute the command "docker container ls" in the root of this project.
sudo docker logs idContainer



### 3.- UNIT TEST:
#### For the execution of the unit test, you must execute the follows commands:
npm run unit-test
