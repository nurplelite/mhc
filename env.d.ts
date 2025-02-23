declare namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_API_KEY: string;
      FIREBASE_AUTH_DOMAIN: string;
      FIREBASE_PROJECT_ID: string;
      FIREBASE_STORAGE_BUCKET: string;
      FIREBASE_MESSAGING_SENDER_ID: string;
      FIREBASE_APP_ID: string;
      FIREBASE_MEASUREMENT_ID: string;
      IMAGE_BASE_URL: string;
      IMAGE_BASE_URL_LOCAL: string;
      IMG_ENCODE: string;
      IMG_ENCODE_LOCAL: string
      APP_TITLE: string;
      // Add other variables as needed
    }
  }