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

 function showNotification() {
      const notification = document.getElementById("notification");
      notification.style.display = "block";

      // Optional: hide after 3 seconds
      setTimeout(() => {
        notification.style.display = "none";
      }, 3000);
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

