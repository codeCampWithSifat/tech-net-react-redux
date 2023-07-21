import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREVASE_apiKey,
  authDomain: import.meta.env.VITE_FIREVASE_authDomain,
  projectId: import.meta.env.VITE_FIREVASE_projectId,
  storageBucket: import.meta.env.VITE_FIREVASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREVASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREVASE_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
