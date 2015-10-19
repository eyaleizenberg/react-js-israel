Api = {
  begin: function(opts) {
    if (opts.before) {
      opts.before(opts);
    }

    return fetch(opts.path, {
      method: opts.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (opts.success) {
        return opts.success(response);
      }
    }).done();
  }
};

module.exports = Api;