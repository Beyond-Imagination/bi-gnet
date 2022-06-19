import * as Highcharts from 'highcharts';

export let ageOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [''],
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true,
        symbolRadius: 0

    },
    plotOptions: {
        series: {
            stacking: 'normal',
        }
    },
    series: [{
        name: '70대이상',
        type: 'bar',
        data: [{x: 0, y: 12}]
    }, {
        name: '60대',
        type: 'bar',
        data: [{x: 0, y: 12}]
    }, {
        name: '50대',
        type: 'bar',
        data: [{x: 0, y: 28}]
    }, {
        name: '40대',
        type: 'bar',
        data: [{x: 0, y: 11}]
    }, {
        name: '30대 이하',
        type: 'bar',
        data: [{x: 0, y: 37}]
    }]
}

export let genderOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 150
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [''],
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true,
        symbolRadius: 0
    },
    plotOptions: {
        series: {
            stacking: 'normal',
        }
    },
    series: [{
        name: '남',
        type: 'bar',
        data: [{x: 0, y: 44}],
        color: '#3CA9EE'
    }, {
        name: '여',
        type: 'bar',
        data: [{x: 0, y: 56}],
        color: '#DC6E55'
    },]
}

export let cropOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 250
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        tickPosition: 'outside'
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 4
        }
    },
    series: [{
        name: '논벼',
        type: 'bar',
        dataSorting: {
            enabled: true
        },
        data: [{name: '논벼', y: 2467, color: '#916B0E'}, {name: '두류', y: 1326, color: '#768047'},
            {name: '채소', y: 3621, color: '#3A3828'}, {name: '과수', y: 2424, color: '#A8BCAE'},
            {name: '특용', y: 2110, color: '#665224'}],
    },
    ]
}
export let breedOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 250
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        tickPosition: 'outside'
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 4
        }
    },
    series: [{
        name: '논벼',
        type: 'bar',
        dataSorting: {
            enabled: true
        },
        data: [{name: '한우', y: 126, color: '#916B0E'}, {name: '꿀벌', y: 122, color: '#768047'},
            {name: '닭', y: 13, color: '#3A3828'}, {name: '염소', y: 15, color: '#A8BCAE'},
            {name: '곤충', y: 34, color: '#665224'}],
    },
    ]
}
