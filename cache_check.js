const cacheName = 'myCache';

// проверка наличия кэша
if ('caches' in window) {
  caches.match('/').then(function(response) {
    if (response) {
      console.log('Cache hit!');
      // получение содержимого из кэша
      response.text().then(function(text) {
        console.log(text);
      });
    } else {
      console.log('Cache miss!');
    }
  });
}

// загрузка ресурсов и сохранение их в кэш
fetch('/').then(function(response) {
  return caches.open(cacheName).then(function(cache) {
    console.log('Caching files...');
    cache.put('/', response.clone());
    return response;
  });
}).then(function(response) {
  console.log('Cache update complete!');
  alert('Обновление кэша загружено!');
});

