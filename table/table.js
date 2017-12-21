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
        value: '(column)',
        get(value) {
            if (!!this.columnStache) {
                return stache(this.columnStache)(this.viewModel);
            } else {
                return i18n.value(value || '');
            }
        }
    },
    columnStache: {
        type: 'string',
        value: ''
    },
    columnClass: {
        type: 'string',
        value: ''
    },
    headerClass: {
        type: 'string',
        value: ''
    },
    dataClass: {
        type: 'string',
        value: ''
    },
    hasStache: {
        get: function () {
            return !!this.stache;
        }
    },
    stache: {
        type: 'any'
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
        value: '',
        get: function (value) {
            return value || options.table.tableClass;
        }
    },
    containerClass: {
        type: 'string',
        value: '',
        get: function (value) {
            return value || options.table.containerClass || '';
        }
    },
    columns: {
        Type: ColumnList,
        value: []
    },
    rows: {
        Type: DefineList
    },
    shouldShowEmptyMessage: {
        get: function () {
            return this.rows.length === 0 && !!this.emptyMessage;
        }
    },
    _rowClick: function (row) {
        if (!!row.click) {
            click.on(row);
        } else if (!!this.rowClick && typeof(this.rowClick === 'function')) {
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

