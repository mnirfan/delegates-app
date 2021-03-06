import config from './config'

var setting = config.development
if (ENVIRONMENT === 'production') setting = config.production


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  }).then(function (registration) {
    // var serviceWorker;
    if (registration.installing) {
      // serviceWorker = registration.installing;
      console.log('[*] SW state: installing')
    } else if (registration.waiting) {
      // serviceWorker = registration.waiting;
      console.log('[*] SW state: waiting')
    } else if (registration.active) {
      // serviceWorker = registration.active;
      console.log('[*] SW state: active')
    }
    // if (serviceWorker) {
    //   serviceWorker.addEventListener('statechange', function (e) {

    //   });
    // }
  }).catch(function (error) {
    // Something went wrong during registration. The service-worker.js file
    // might be unavailable or contain a syntax error.
    console.log('error')
  });
} else {
  // The current browser doesn't support service workers.
  console.log('not supported')
}