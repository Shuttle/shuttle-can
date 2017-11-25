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
      
      this._adapter = adapter;
    },

    value: function (key, options) {
        return this._adapter.value(key, options);
    }
};

export default i18n;