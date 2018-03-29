// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDBG8miHq1G_psBHEj4T_FotzPMDy_apRE",
    authDomain: "chatapp-190906.firebaseapp.com",
    databaseURL: "https://chatapp-190906.firebaseio.com",
    projectId: "chatapp-190906",
    storageBucket: "chatapp-190906.appspot.com",
    messagingSenderId: "916972214933"
  }
};
