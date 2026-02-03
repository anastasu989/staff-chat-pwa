importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDYjTq4Byv_HvpSymIq7myrdnvSCbetxc8",
  authDomain: "anastasia-b2c21.firebaseapp.com",
  projectId: "anastasia-b2c21",
  storageBucket: "anastasia-b2c21.appspot.com",
  messagingSenderId: "219596761766",
  appId: "1:219596761766:web:aecd1431a8741559c3a267"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification.title || "Новое сообщение";
  const options = {
    body: payload.notification.body,
    icon: "/icon-192.png",
    badge: "/icon-192.png"
  };

  self.registration.showNotification(title, options);
});
