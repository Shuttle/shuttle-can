const _default = {
  value: function(key, options) {
    return key;
  }
};

let localisation = {
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

export default localisation;