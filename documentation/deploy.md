# Deployment

- ## Deploy frontend docker image in heroku 
    1. heroku container:login
    2. heroku create appname  
    3. heroku container:push web --app appname
    4. heroku container:release web --app appname
    5. heroku logs --tail --app appname

 
 - ## Deploy client repository in heroku 
    1. heroku login
    2. heroku create appname  
    3. git init
    4. heroku git:remote -a appname
    5. git add .
    6. git commit -am "your message"
    7. git push heroku master

   
     ** *HOST has to be set 0.0.0.0 > go to your app in heroku server> settings> reveal config vars**

     ** *REACT_APP_URL has to set to server url in heroku**