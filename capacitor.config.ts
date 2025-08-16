import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mi-proyecto-final',
  webDir: 'dist',
  server: {
    hostname: 'localhost',
    androidScheme: 'http'
  }
};


export default config;
