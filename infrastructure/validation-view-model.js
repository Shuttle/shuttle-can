import DefineMap from 'can-define/map/';

export default DefineMap.extend({
    hasErrors: function () {
        if (!this.errors) {
            return false;
        }

        return !!this.errors();
    }
});