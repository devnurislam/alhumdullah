document.addEventListener('DOMContentLoaded', () => {
    if (!('Notification' in window)) {
        alert('This browser does not support desktop notification');
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
            alert('Permission for notifications was denied');
        }
    });

    function showNotification() {
        if (Notification.permission === 'granted') {
            new Notification('Reminder', {
                body: 'Say & Feel Alhamdulillah!',
            });
        }
    }

    setInterval(showNotification, 10 * 60 * 1000); // 10 minutes in milliseconds
// this is button purpose 
    
 function showNotification() {
      // Ask for permission if not granted
      if (Notification.permission === "granted") {
        new Notification("abc");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification("abc");
          } else {
            alert("Notification permission denied.");
          }
        });
      } else {
        alert("Notification permission denied previously.");
      }
    }

    // function showNotification() {
    //     if (Notification.permission === 'granted') {
    //         new Notification('Reminder', {
    //             body: 'Say & Feel Astagfirullahh!',
    //         });
    //     }
    // }

    // setInterval(showNotification, 7 * 60 * 1000); // 7 minutes in milliseconds

});

