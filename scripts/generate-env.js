// scripts/generate-env.js

const fs = require('fs');
require('dotenv').config();

// Path where the environment file will be generated
const targetPath = './src/environments/environment.prod.ts';

// Create the content of the environment.prod.ts file dynamically using environment variables
const envConfig = `
export const environment = {
  production: true,
  appTitle: '${process.env.APP_TITLE}',
  urlBase: '${process.env.IMAGE_BASE_URL}',
  imgEncode: '${process.env.IMAGE_ENCODE}',
  firebaseConfig: {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
    appId: "${process.env.FIREBASE_APP_ID}",
    measurementId: "${process.env.FIREBASE_MEASUREMENT_ID}"
  }
};
`;

// Write the content to the target environment.prod.ts file
fs.writeFile(targetPath, envConfig, (err) => {
  if (err) {
    console.error("Error generating environment file:", err);
    process.exit(1);
  }
  console.log(`Environment file successfully generated at ${targetPath}`);
});
