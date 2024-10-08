# Direct Monero Full Stack

Though it might say fullstack, as of now it actually doesn't include a database which you will have to provide.

# Create your environment!

## 1. Setup your database
```
MONGODB_URI=mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority
```
Replace `<username>`, `<password>`, `<host>`, and `<dbname>` with your MongoDB credentials and database name.

## 2. Set your secret key
```
SECRET_KEY=<secretkey>
```
Replace `<secretkey>` with a random set of numbers and letters 
Use `openssl rand -base64 32` to generate a secret key quickly!
## 3. Set the frontend and backend addresse
```
FRONTEND_ADDRESS=<frontendaddress>
API_URL=<backendaddress>
```
Since the API uses cores and the frontend needs a refrence to what the API's url you need to manually set the api and frontend address, though this doesn't actually change anything its just for each container to refrence!
## It should look like this!
```
MONGODB_URI=mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority
SECRET_KEY=<secretkey>
FRONTEND_ADDRESS=<frontendaddress>
API_URL=<backendaddress>
```