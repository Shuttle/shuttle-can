const _default = {
    hasPermission: function(permission) {
        return true;
    }
};

let security = {
    _adapter: _default,
    wire: function(adapter) {
        if (!adapter) {
            this._adapter = _default;
            return;
        }

        if (!adapter.hasPermission || typeof(adapter.hasPermission) !== 'function') {
            throw new Error('The `security` adapter has to have a `hasPermission` function that returns whether the given permission is accessible (e.g. `adapter.hasPermission(permissionName)`).')
        }

        this._adapter = adapter;
    },

    hasPermission: function (permission) {
        return this._adapter.hasPermission(permission);
    }
};

export default security;