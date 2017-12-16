const _default = {
  value: function(key, options) {
    return key;
  }
};

let i18n = {
    _adapter: _default,
    wire: function(adapter) {
      if (!adapter) {
        this._adapter = _default;
        return;
      }

      if (!adapter.value || typeof(adapter.value !== 'function')) {
          throw new Error('The `i18n` adapter has to have a `value` function that returns the value for a given `key` and optional `options` (e.g. `adapter.value(key, options)`).')
      }
      
      this._adapter = adapter;
    },

    value: function (key, options) {
        return this._adapter.value(key, options);
    }
};

export default i18n;