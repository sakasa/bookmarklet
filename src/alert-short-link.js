javascript:(
  function() {
    alert(document.querySelector('link[rel="shortlink"]') ? document.querySelector('link[rel="shortlink"]').getAttribute('href') : 'no short-link');
  }
)();
