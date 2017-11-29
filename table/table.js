import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import stache from 'can-stache/';
import view from './table.stache!';
import i18n from '../infrastructure/i18n';
import click from '../infrastructure/click';
import options from '../infrastructure/options';

export const ColumnMap = DefineMap.extend({
    columnTitle: {
        type: 'string',
        value: ''
    },
    buttonContext: {
        type: 'any'
    },
    textTemplate: {
        type: 'any'
    },
    attributeName: {
        type: 'string'
    }
});

export const ColumnList = DefineList.extend({
    '#': ColumnMap
});

export const ViewModel = ComponentViewModel.extend({
    emptyMessage: {
        get: function() {
            return i18n.value(this.emptyMessage || 'table-empty-message');
        }
    },
    tableClass: {
        get: function(value) {
            return value || options.table.tableClass;
        }
    },
    containerClass: {
        type: 'string',
        value: '',
        get: function(value) {
            return value || options.table.containerClass;
        }
    },
    buttonClass: {
        get: function(value) {
            return value || options.table.buttonClass;
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
    getContext(row, column) {
        return column.context || row;
    },
    getText(column) {
        if (!!column.textTemplate) {
            return stache(column.columnTitleTemplate)(column);
        } else {
            return i18n.value(column.columnTitle || '');
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

