/*
 Template Name: Zoter - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.mannatthemes.com
 File: C3 Chart init js
 */

!function($) {
    "use strict";

    class ChartC3 {
        constructor() { }
        init() {
            //generating chart 
            c3.generate({
                bindto: '#chart',
                data: {
                    columns: [
                        ['Desktop', 150, 80, 70, 152, 250, 95],
                        ['Mobile', 200, 130, 90, 240, 130, 220],
                        ['Tablet', 300, 200, 160, 400, 250, 250]
                    ],
                    type: 'bar',
                    colors: {
                        Desktop: '#f4e090',
                        Mobile: '#7e99f4',
                        Tablet: '#75f1cb'
                    }
                }
            });

            //combined chart
            c3.generate({
                bindto: '#combine-chart',
                data: {
                    columns: [
                        ['SonyVaio', 30, 20, 50, 40, 60, 50],
                        ['iMacs', 200, 130, 90, 240, 130, 220],
                        ['Tablets', 300, 200, 160, 400, 250, 250],
                        ['iPhones', 200, 130, 90, 240, 130, 220],
                        ['Macbooks', 130, 120, 150, 140, 160, 150]
                    ],
                    types: {
                        SonyVaio: 'bar',
                        iMacs: 'bar',
                        Tablets: 'spline',
                        iPhones: 'line',
                        Macbooks: 'bar'
                    },
                    colors: {
                        SonyVaio: '#9fb08c',
                        iMacs: '#f4e090',
                        Tablets: '#75f1cb',
                        iPhones: '#7e99f4',
                        Macbooks: '#40a4f1'
                    },
                    groups: [
                        ['SonyVaio', 'iMacs']
                    ]
                },
                axis: {
                    x: {
                        type: 'categorized'
                    }
                }
            });

            //roated chart
            c3.generate({
                bindto: '#roated-chart',
                data: {
                    columns: [
                        ['Revenue', 30, 200, 100, 400, 150, 250],
                        ['Pageview', 50, 20, 10, 40, 15, 25]
                    ],
                    types: {
                        Revenue: 'bar'
                    },
                    colors: {
                        Revenue: '#7e99f4',
                        Pageview: '#f4e090'
                    }
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'categorized'
                    }
                }
            });

            //stacked chart
            c3.generate({
                bindto: '#chart-stacked',
                data: {
                    columns: [
                        ['Revenue', 130, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150],
                        ['Pageview', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
                    ],
                    types: {
                        Revenue: 'area-spline',
                        Pageview: 'area-spline'
                        // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                    },
                    colors: {
                        Revenue: '#7e99f4',
                        Pageview: '#75f1cb'
                    }
                }
            });

            //Donut Chart
            c3.generate({
                bindto: '#donut-chart',
                data: {
                    columns: [
                        ['Desktops', 78],
                        ['Smart Phones', 55],
                        ['Mobiles', 40],
                        ['Tablets', 25]
                    ],
                    type: 'donut'
                },
                donut: {
                    title: "Candidates",
                    width: 30,
                    label: {
                        show: false
                    }
                },
                color: {
                    pattern: ['#75f1cb', "#7e99f4", '#f4e090', '#e3e4ec']
                }
            });

            //Pie Chart
            c3.generate({
                bindto: '#pie-chart',
                data: {
                    columns: [
                        ['Desktops', 78],
                        ['Smart Phones', 55],
                        ['Mobiles', 40],
                        ['Tablets', 25]
                    ],
                    type: 'pie'
                },
                color: {
                    pattern: ['#75f1cb', "#7e99f4", '#f4e090', '#e3e4ec']
                },
                pie: {
                    label: {
                        show: false
                    }
                }
            });

        }
    }


    $.ChartC3 = new ChartC3, $.ChartC3.Constructor = ChartC3

}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.ChartC3.init()
}(window.jQuery);



