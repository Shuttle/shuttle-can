import Component from 'can-component';
import ComponentViewModel from '../infrastructure/component-view-model';
import DefineList from 'can-define/list/';
import stache from 'can-stache/';
import view from './table.stache!';
import i18n from '../infrastructure/i18n';
import click from '../infrastructure/click';
import options from '../infrastructure/options';

export const ColumnMap = ComponentViewModel.extend({
    viewModel: {
        type: '*'
    },
    columnTitle: {
        type: 'string',
        default: '(column)',
        get(value) {
            return i18n.value(value || '');
        }
    },
    columnStache: {
        type: 'any'
    },
    hasColumnStache: {
        get: function () {
            return !!this.columnStache;
        }
    },
    columnClass: {
        type: 'string',
        default: ''
    },
    headerClass: {
        type: 'string',
        default: ''
    },
    dataClass: {
        type: 'string',
        default: ''
    },
    stache: {
        type: 'any'
    },
    hasStache: {
        get: function () {
            return !!this.stache;
        }
    }
});

export const ColumnList = DefineList.extend({
    '#': ColumnMap
});

export const ViewModel = ComponentViewModel.extend({
    rowClick: {
        type: '*'
    },
    emptyMessage: {
        get: function () {
            return i18n.value(this.emptyMessage || 'table-empty-message');
        }
    },
    tableClass: {
        type: 'string',
        default: '',
        get: function (value) {
            return value || options.table.tableClass;
        }
    },
    containerClass: {
        type: 'string',
        default: '',
        get: function (value) {
            return value || options.table.containerClass || '';
        }
    },
    columns: {
        Type: ColumnList,
        default: []
    },
    rows: {
        Type: DefineList
    },
    shouldShowEmptyMessage: {
        get: function () {
            return !!this.rows && this.rows.length === 0 && !!this.emptyMessage;
        }
    },
    _rowClick: function (row) {
        if (!!row.click) {
            click.on(row);
        } else if (!!this.rowClick && typeof(this.rowClick) === 'function') {
            this.rowClick(row);
        }
    },
    getColumnValue(row, column) {
        if (!column.attributeName) {
            throw new Error('The column requires an \'attributeName\'');
        }

        const value = row[column.attributeName];

        return typeof(value) === 'function' ? value(column.attributeName) : value;
    },
    getView(row, column) {
        let stacheTemplate = column.stache;

        if (!stacheTemplate) {
            throw new Error('Specify a \'stache\' for the column.');
        }

        return stache(stacheTemplate)(row.data || row);
    },
    getColumnView(column, vm) {
        let stacheTemplate = column.columnStache;

        if (!stacheTemplate) {
            throw new Error('Specify a \'columnStache\' for the column.');
        }

        return stache(stacheTemplate)(column.data || vm);
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

