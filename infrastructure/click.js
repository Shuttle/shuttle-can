import guard from 'shuttle-guard';

var click = {
    on: function (viewModel, ev) {
        guard.againstUndefined(viewModel, 'viewModel');

        const click = viewModel.click;

        if (!click) {
            console.log('The following view model has no \'click\' method:');
            console.log(viewModel);
            throw new Error('No \'click\' method has been defined.');
            return;
        }

        var clickHandler;
        const context = viewModel.context || viewModel;

        if (typeof click === 'function') {
            clickHandler = click;
        } else {
            clickHandler = context[click];

            if (!clickHandler) {
                throw new Error(`The context does not contain a method with name '${click}'.`);
            }
        }

        if (!!ev) {
            if (!ev.stopPropagation || typeof(ev.stopPropagation) !== 'function'
                ||
                !ev.preventDefault || typeof(ev.preventDefault) !== 'function') {
                throw new Error('The event argument \'ev\' passed to \'click\' does not appear to be an event object.');
            }

            ev.stopPropagation();
            ev.preventDefault();
        }

        return clickHandler.call(context, ev) || false;
    }
};

export default click;