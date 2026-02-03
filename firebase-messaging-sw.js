importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDYjTq4Byv_HvpSymIq7myrdnvSCbetxc8",
  authDomain: "anastasia-b2c21.firebaseapp.com",
  projectId: "anastasia-b2c21",
  storageBucket: "anastasia-b2c21.firebasestorage.app",
  messagingSenderId: "219596761766",
  appId: "1:219596761766:web:aecd1431a8741559c3a267",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon
    }
  );
});
