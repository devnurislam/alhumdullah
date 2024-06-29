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
                body: 'Say Alhamdulillah!',
            });
        }
    }

    setInterval(showNotification, 4 * 60 * 1000); // 5 minutes in milliseconds
});
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
                body: 'Say astagfirullahh!',
            });
        }
    }

    setInterval(showNotification, 6 * 60 * 1000); // 3 minutes in milliseconds
});