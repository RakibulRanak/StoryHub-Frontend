# Steps To Follow For Frontend Dockerization : 

## 1. Write a docker file 
- [Dockerfile](../Dockerfile)
- [.dockerignore](../.dockerignore)

## 2. Create a docker image
    docker build -t storyapp . 

## 3. Push image ( rakibulranak/storyhub:app ) in dockerhub
    docker tag storyapp:latest rakibulranak/storyhub:app
    docker push rakibulranak/storyhub:app 

## 4. Pulling docker image and running in any machine
    docker pull rakibulranak/storyhub:app
    docker run -it -p 3000:3000 rakibulranak/storyhub/app
## 5. Browsing
     go to http://localhost:3000/


 