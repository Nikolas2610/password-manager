# Password Manager 
--------------------------

Password Manager is an application that allows users to securely store their passwords for various online services. The application has two main components: the frontend, built with React, and the backend, built with Laravel.

### Laravel

##### Install and Run 

1. Update .env.example to .env and add generate: 
```
APP_KEY
PASSWORD_IV_KEY 
PRIVATE_APP_KEY
```
2. Install 
```
composer install
```
3. Run 
```
php artisan serve
```
<br>

### React

##### Install and Run 

1. Update .env.example to .env and add: 
```
REACT_APP_SECRET_DECRYPT_PASSWORD
REACT_APP_PRIVATE_APP_KEY
REACT_APP_API_URL
```
2. Install 
```
cd frontend
npm i
```
3. Run
```
npm run start
```

***

Recommended PHP version: 8
Recommended Node version: 16.13.0




