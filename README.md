# Lab06_SignUpPage-Automatizador

This project is an improved version of the "Lab02_SignUpPage" where we have implemented Webpack, Dotenv, and Firebase to create a sign-up page. This project demonstrates how to use modern web development tools to bundle the application and manage sensitive environment variables securely.

## How To Run

Clone the project repository:

    git clone https://github.com/your-username/Lab02_SignUpPage.git Lab06_SignUpPage
    cd Lab06_SignUpPage

Install all the required packages:

    npm install

Create a file named .env in the root directory of the project.

Set the Firebase configuration connection parameters in the .env file:

    FIREBASE_API_KEY=your_API_KEY
    FIREBASE_AUTH_DOMAIN=your_AUTH_DOMAIN
    FIREBASE_PROJECT_ID=your_PROJECT_ID
    FIREBASE_STORAGE_BUCKET=your_STORAGE_BUCKET
    FIREBASE_MESSAGING_SENDER_ID=your_MESSAGING_SENDER_ID
    FIREBASE_APP_ID=your_APP_ID

Build the project using Webpack:

    npm run build

Open the dist/loginAutomatizador.html file in your web browser.

## Features

    The sign-up page allows users to register with their email and password.
    The registered user data is stored in a Firestore Lite collection in Firebase.

## Disclaimer

Use this project at your own risk. It is a simple demonstration of how to create a sign-up page with Webpack, Dotenv, and Firebase. Make sure to replace the your_API_KEY, your_AUTH_DOMAIN, your_PROJECT_ID, your_STORAGE_BUCKET, your_MESSAGING_SENDER_ID, and your_APP_ID in the .env file with the actual configuration values from your Firebase project.

Please note that this is a basic implementation, and in a real-world application, you may want to implement additional security measures and error handling.
Resources

    Firebase Documentation: Module Bundling with Firebase

Feel free to modify and extend the code according to your project requirements. 
