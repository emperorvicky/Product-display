This is a Product Display Website that enables the company to display their product to their client and as well allows the client to reach out to the company through their con tact details dropped on the website, in case a particular product catches their eye or attention, It as well has an admin side that is needs to be accessed with a login form, In this part the owner of the website has access the ability to add more photos and write up as well as delete them. it has a server that stores the data inputed by the admin

## To Install This Project

First, run the development server, make a folder:

```bash
cd newFolder
# then input
git clone https://github.com/emperorvicky/Product-display.git
```
## To Run The Folders

```bash
cd client
# then run
npm i
# then run
npm run dev
```
The same process goes for the admin, you just have to cd admin, instead of cd client For the server:

```bash
cd server
# then run
npm i
# then run
nodemon server.js
# or
node server.js
```
Note: The client and admin can't run on the same port, next.js have a way of assiting you to another port. In the server you need to setup your mongodb, as well as yout .env files
