const fs = require('fs');
const path = './src/environments';

// Ensure the environments directory exists and verify it
if (!fs.existsSync(path)) {
  console.log("📁 Creating environments directory...");
  fs.mkdirSync(path, { recursive: true });

  // Double-check if the folder was successfully created
  if (fs.existsSync(path)) {
    console.log(`✅ Directory created: ${path}`);
  } else {
    console.error(`❌ ERROR: Directory ${path} was NOT created!`);
    process.exit(1);
  }
} else {
  console.log("✅ Environments directory already exists.");
}

const targetPath = `${path}/environment.prod.ts`;

// Ensure a placeholder file exists before TypeScript checks for imports
if (!fs.existsSync(targetPath)) {
  console.log("📝 Creating placeholder environment.prod.ts...");
  fs.writeFileSync(targetPath, "export const environment = {};", { flag: 'w' });
} else {
  console.log("✅ Placeholder environment.prod.ts already exists.");
}

// Generate actual environment file
console.log("⚙️ Writing actual environment.prod.ts...");
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
console.log(`✅ Environment file successfully generated at ${targetPath}`);

// Explicitly check the folder contents to verify
console.log("📂 Listing src/environments/ contents:");
fs.readdirSync(path).forEach(file => {
  console.log(" - " + file);
});
