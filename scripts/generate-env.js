const fs = require('fs');
const path = './src/environments';

// Ensure the environments directory exists
if (!fs.existsSync(path)) {
  console.log(`📁 Creating environments directory at: ${path}`);
  fs.mkdirSync(path, { recursive: true });
} else {
  console.log(`✅ Environments directory already exists at: ${path}`);
}

// Define both environment file paths
const prodTargetPath = `${path}/environment.prod.ts`;
const devTargetPath = `${path}/environment.ts`;  // Ensure a development version exists too

// Ensure placeholder files exist before TypeScript checks for imports
if (!fs.existsSync(devTargetPath)) {
  console.log(`📝 Creating placeholder at: ${devTargetPath}`);
  fs.writeFileSync(devTargetPath, "export const environment = {};", { flag: 'w' });
}

// Generate actual production environment file
console.log(`⚙️ Writing actual environment.prod.ts to: ${prodTargetPath}`);
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

fs.writeFileSync(prodTargetPath, envConfig);
console.log(`✅ environment.prod.ts successfully generated.`);

// Ensure `environment.ts` exists, even if it’s empty adding to push
if (!fs.existsSync(devTargetPath)) {
  fs.writeFileSync(devTargetPath, envConfig);
  console.log(`✅ environment.ts created for TypeScript compatibility.`);
}

// Confirm both files exist
if (fs.existsSync(prodTargetPath) && fs.existsSync(devTargetPath)) {
  console.log(`🎉 CONFIRM: Both environment files are present.`);
} else {
  console.error(`❌ ERROR: One or both environment files were NOT created!`);
  process.exit(1);
}
