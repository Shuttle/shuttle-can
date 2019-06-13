import {DefineMap} from 'can';

export default DefineMap.extend({
    hasErrors: function () {
        if (!this.errors) {
            return false;
        }

        return !!this.errors();
    }
});