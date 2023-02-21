
-----------------------------------------------------------------------------------------------------------------------------
Git Branches: DATE (YYYYMMDD), DATE_AWS (YYYYMMDD_AWS), DEV, TEST, PROD
-----------------------------------------------------------------------------------------------------------------------------
******** Environment / Connection / Properties / Configuration Files (.YML) for Application ***********


.env.dev   -- DEV -- Local Machine Docker, Local Database for Docker
.env.prod  -- PROD -- Remote Server Docker on AWS, Database (AWS RDS MySQL, DynamoDB NoSQL) for Docker

Locations:-
\org-sunteksys\rep-stkys-ftnd-1\.env.dev
\org-sunteksys\rep-stkys-ftnd-1\.env.prod

---------------------------------------------------------------------------------------------
Steps to Create Docker Images & Containers:-
1. Command to build docker image for REACT JS
> docker build -f Dockerfile -t rep-jbryt-fnd-web-1 .
> docker build -t rep-jbryt-fnd-web-1 .     (not sure if this command works)
2. Run & test (DB connection) all docker containers .

> docker run -p3000:3000 rep-jbryt-fnd-web-1

--------------------------------------------------------------------------
To import other Spring Boot Projects along with this React JS Project:
select File --> New --> Module from Existing Sources --> Maven

--------------------------------------------------------------------------
4.
npm run dev
npm run prod --> not this --> but this --> npm run build && npm start

3.
dev = npm start:env-dev
prod = npm start:env-prod

2.
npm start : .env.local
npm start : .env.dev
npm start : .env.stage
npm start : .env.prod

1.
npm install -- to install all node modules

----------------------------------------------------------------------------------
--> to check versions of Node installed, type command "nvm list"
Node Version Manager:-
https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe
https://github.com/coreybutler/nvm-windows/releases
https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows
old - Node Version Manager
https://github.com/nvm-sh/nvm
https://www.npmjs.com/package/nvm

https://draft-js-wysiwyg.com/
https://www.markdownguide.org/basic-syntax/
https://en.wikipedia.org/wiki/Markdown