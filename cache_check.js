// Получаем доступ к объекту Cache API в браузере
caches.open('my-cache').then(function(cache) {
  // Сравниваем кэш на сайте и кэш на устройстве пользователя
  cache.match('/path/to/my/file').then(function(response) {
    // Загружаем файл с сервера
    fetch('/path/to/my/file').then(function(newResponse) {
      // Если кэш на сайте отличается от кэша на устройстве пользователя
      if (response.status !== newResponse.status) {
        // Сохраняем новый кэш на устройстве пользователя
        cache.put('/path/to/my/file', newResponse.clone());
      }
    });
  });
});
