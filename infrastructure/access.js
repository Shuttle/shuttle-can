const _default = {
    hasPermission: function(permission) {
        return true;
    }
};

let access = {
    _adapter: _default,
    wire: function(adapter) {
        if (!adapter) {
            this._adapter = _default;
            return;
        }

        this._adapter = adapter;
    },

    hasPermission: function (permission) {
        return this._adapter.hasPermission(permission);
    }
};

export default access;