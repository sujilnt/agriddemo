var agGrid = require('ag-grid');
require('ag-grid/dist/styles/theme-fresh.css');
require('ag-grid/dist/styles/ag-grid.css');
var enterprise= require('ag-grid-enterprise');
var data = require('./data.json');

enterprise.LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs24_May_2017__MTQ5NTU4MDQwMDAwMA==16be8f8f82a5e4b5fa39766944c69a32");


//Put traditional CommonJS module content here
// var enterprise = require("ag-grid-enterprise");
// enterprise.LicenseManager.setLicenseKey("16be8f8f82a5e4b5fa39766944c69a32");

var columnDefs = [
    {headerName: "reservationid", field: "reservationid", width: 350, enableRowGroup: true, enablePivot: true},
    {headerName: "confnum", field: "confnum", width: 90, enableValue: true},
    {headerName: "creationdt", field: "creationdt", width: 250, enableRowGroup: true, enablePivot: true},
    {headerName: "arrivaldt", field: "arrivaldt", width: 90, enableRowGroup: true, enablePivot: true,filter: 'set', filterParams:{selectAllOnMiniFilter:true}},
    {headerName: "departuredt", field: "departuredt", width: 110, enableRowGroup: true, enablePivot: true},
    {headerName: "nights", field: "nights", width: 110, enableRowGroup: true, enablePivot: true,filter: 'set', filterParams:{selectAllOnMiniFilter:true}},
    {headerName: "ratecode", field: "ratecode", width: 100, enableValue: true,enableRowGroup: true, aggFunc: 'sum'},
    {headerName: "roomnum", field: "roomnum", width: 100,enableRowGroup: true, enablePivot: true},
    {headerName: "roomtype", field: "roomtype", width: 100, enableValue: true, enablePivot: true},
    {headerName: "reservationtype", field: "reservationtype", width: 150, enableValue: true,enableRowGroup: true},
    {headerName: "marketcd", field: "marketcd", width: 100, enableValue: true,enableRowGroup: true},
    {headerName: "marketname", field: "marketname", width: 100,enableRowGroup: true, enableValue: true},
    {headerName: "sourcecd", field: "sourcecd", width: 100, enableRowGroup: true,enableValue: true},
    {headerName: "sourcename", field: "sourcename", width: 100,enableRowGroup: true, enableValue: true},
    {headerName: "guestid", field: "guestid", width: 100, enableRowGroup: true, enableValue: true},
    {headerName: "firstname", field: "firstname", width: 200,enableRowGroup: true, enableValue: true},
    {headerName: "lastname", field: "lastname", width: 200, enableRowGroup: true, enableValue: true},
    {headerName: "email", field: "email", width: 200, enableRowGroup: true, enableValue: true},
    {headerName: "staydate", field: "staydate", width: 100,enableRowGroup: true,  enableValue: true},
    {headerName: "rate", field: "rate", width: 100,enableRowGroup: true, enableValue: true},
    {headerName: "hotelsoftsegment", field: "hotelsoftsegment", width: 100,enableRowGroup: true, enableValue: true}
];

var gridOptions = {
    // set rowData to null or undefined to show loading panel by default
    showToolPanel: true,
    enableColResize: true,
    columnDefs: columnDefs
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.

            gridOptions.api.setRowData(data);

});

// if you are not using ag-Grid Enterprise, then leave the following require out

