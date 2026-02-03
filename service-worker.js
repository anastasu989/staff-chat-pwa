self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};

  const title = data.title || 'Новое сообщение';
  const options = {
    body: data.body || 'В корпоративном чате новое сообщение',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: {
      url: data.url || '/chat'
    }
  };

  event.waitUntil(
    (async () => {
      // показываем уведомление
      await self.registration.showNotification(title, options);

      // увеличиваем badge (если поддерживается)
      if ('setAppBadge' in navigator) {
        const current = (await navigator.getAppBadge?.()) || 0;
        navigator.setAppBadge(current + 1);
      }
    })()
  );
});

// клик по уведомлению → открыть чат
self.addEventListener('notificationclick', event => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url.includes('/chat') && 'focus' in client) {
            return client.focus();
          }
        }
        return clients.openWindow('/chat');
      })
  );
});
