importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDYjTq4Byv_HvpSymIq7myrdnvSCbetxc8",
  authDomain: "anastasia-b2c21.firebaseapp.com",
  projectId: "anastasia-b2c21",
  messagingSenderId: "219596761766",
  appId: "1:219596761766:web:aecd1431a8741559c3a267"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/icon-192.png"
    }
  );
});
