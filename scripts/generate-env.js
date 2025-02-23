const fs = require('fs');
const path = './src/environments';  // Make sure we're always using the correct relative path

// Ensure the environments directory exists
if (!fs.existsSync(path)) {
  console.log(`📁 Creating environments directory at: ${path}`);
  fs.mkdirSync(path, { recursive: true });
} else {
  console.log(`✅ Environments directory already exists at: ${path}`);
}

const targetPath = `${path}/environment.prod.ts`;  // Ensure this is correctly set

// Log where the script is writing the file
console.log(`📌 Target environment file path: ${targetPath}`);

// Ensure a placeholder file exists before TypeScript checks for imports
if (!fs.existsSync(targetPath)) {
  console.log(`📝 Creating placeholder at: ${targetPath}`);
  fs.writeFileSync(targetPath, "export const environment = {};", { flag: 'w' });
} else {
  console.log(`✅ Placeholder file already exists at: ${targetPath}`);
}

// Generate actual environment file
console.log(`⚙️ Writing actual environment.prod.ts to: ${targetPath}`);
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

fs.writeFileSync(targetPath, envConfig);
console.log(`✅ Environment file successfully generated at: ${targetPath}`);

// Explicitly confirm the file exists in the correct place
if (fs.existsSync(targetPath)) {
  console.log(`🎉 CONFIRM: ${targetPath} is present.`);
} else {
  console.error(`❌ ERROR: ${targetPath} was NOT created!`);
  process.exit(1);
}
