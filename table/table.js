import Component from 'can-component';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import stache from 'can-stache/';
import view from './table.stache!';
import localisation from '~/localisation';
import click from '~/components/click';

export const ColumnMap = DefineMap.extend({
    columnTitle: 'string',
    buttonContext: 'any'
});

export const ColumnList = DefineList.extend({
    '#': ColumnMap
});

export const ViewModel = DefineMap.extend({
    emptyMessage: {
        get: function() {
            return this.emptyMessage || 'table-empty-message';
        }
    },

    containerClass: {
        get: function(value) {
            return value || '';
        }
    },

    buttonClass: {
        get: function(value) {
            return value || '';
        }
    },

    columns: {
        Value: ColumnList
    },

    rows: {
        Value: DefineList
    },

    shouldShowEmptyMessage: {
        get: function() {
            return this.rows.length === 0 && !!this.emptyMessage;
        }
    },

    _rowClick: function(row) {
        if (this.rowClick) {
            this.rowClick(row);
        } else {
            click.on(row);
        }
    },

    getButtonContext(row, column) {
        return column.buttonContext || row;
    },

    getColumnTitle(column) {
        if (!!column.columnTitleTemplate) {
            return stache(column.columnTitleTemplate)(column);
        } else {
            return localisation.value(column.columnTitle || '');
        }
    },

    getColumnClass(column) {
        return column.columnClass || '';
    },

    getColumnValue(row, column) {
        if (!column.attributeName) {
            if (!column.columnType) {
                throw new Error('The column requires an \'attributeName\'');
            } else {
                throw new Error(`The column has an unhandled \'columnType\' of \'${column.columnType}\'.  The default behaviour when no \'columnType\' is specified is to display an attribute but no \'attributeName\' has been specified either.`);
            }
        }

        const value = row[column.attributeName];

        return typeof(value) === 'function' ? value(column.attributeName) : value;
    },

    getView(row, column) {
        let stacheTemplate = column.view;

        if (!stacheTemplate) {
            throw new Error('Specify a view for the column.');
        }

        return stache(stacheTemplate)(row);
    },

    getRowClass(row) {
        return row['rowClass'];
    }
});

export default Component.extend({
    tag: 'cs-table',
    view,
    ViewModel
});

