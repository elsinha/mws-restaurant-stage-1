if ('serviceWorker' in navigator) {
  self.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
      console.log('Service worker succeeded! ', registration.scope);
    }, function(error) {
      console.log('Service worker failed: ', error);
    });
  });
}

//excertp from:
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/serviceworker.js');
//   });
// }
