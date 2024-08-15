import { writable } from 'svelte/store';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Environment variables for Firebase configuration
const firebaseConfig = {
  type: import.meta.env.VITE_TYPE,
  project_id: import.meta.env.VITE_PROJECT_ID,
  private_key_id: import.meta.env.VITE_PRIVATE_KEY_ID,
  private_key: import.meta.env.VITE_PRIVATE_KEY,
  client_email: import.meta.env.VITE_CLIENT_EMAIL,
  client_id: import.meta.env.VITE_CLIENT_ID,
  auth_uri: import.meta.env.VITE_AUTH_URI,
  token_uri: import.meta.env.VITE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env
    .VITE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: import.meta.env.VITE_CLIENT_X509_CERT_URL,
  universe_domain: import.meta.env.VITE_UNIVERSE_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
};

// Initialize Firebase app and database reference
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Create a writable store for the Firebase database reference
export const firebaseDb = writable(db);
