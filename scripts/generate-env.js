const fs = require('fs');
const path = './src/environments';

// Ensure the environments directory exists
if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true }); // Create the folder if it doesn't exist
}

const targetPath = `${path}/environment.prod.ts`;

if (!fs.existsSync(targetPath)) {
  fs.writeFileSync(targetPath, 'export const environment = {};', { flag: 'w' }); // Create an empty file if it doesn’t exist
}

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
  },
  qbConfig: {
    clientId: "${process.env.QB_CLIENT_ID}",
    clientSecret: "${process.env.QB_CLIENT_SECRET}"
  }
};
`;

// Write the content to the target file
fs.writeFile(targetPath, envConfig, (err) => {
  if (err) {
    console.error("Error generating environment file:", err);
    process.exit(1);
  }
  console.log(`✅ Environment file successfully generated at ${targetPath}`);
});
