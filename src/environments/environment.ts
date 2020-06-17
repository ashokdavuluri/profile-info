// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AZURE_STORAGE_ACCOUNT: "ashokprofile",
  AZURE_STORAGE_ACCESS_KEY: "IskcSUx/s5Pt7SMAsQRebFMCVCg+ZBV7MfMSba3fhafzl9GKnNM5c8ei7LIQXTVnyUGONGjXyHWXGsNCbptEQQ==",
  AZURE_STORAGE_CONNECTION_STRING: "DefaultEndpointsProtocol=https;AccountName=ashokprofile;AccountKey=IskcSUx/s5Pt7SMAsQRebFMCVCg+ZBV7MfMSba3fhafzl9GKnNM5c8ei7LIQXTVnyUGONGjXyHWXGsNCbptEQQ==;EndpointSuffix=core.windows.net",
  azureContainers:{
    baseUrl:'blob.core.windows.net',
    blobName:'ashokprofile'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
