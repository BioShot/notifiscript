document.addEventListener('', function() {
  if (!Notification) {
   alert('Desktop notifications not available in your browser. Try Chromium.');
   return;
  }
 
  if (Notification.permission !== 'granted')
   Notification.requestPermission();
 });
 
 
 function notifyMe(text) {
  if (Notification.permission !== 'granted')
   Notification.requestPermission();
  else {
   var notification = new Notification('Notification title', {
    icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
    body: text,
   });
   notification.onclick = function() {
    window.open('http://stackoverflow.com/a/13328397/1269037');
   };
  }
 }
 
console.log('Notify script loaded for '+window.location+"!)
