import * as Highcharts from 'highcharts';


export let ageOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 150,
        events: {
            load() {
                this.showLoading();
                setTimeout(this.hideLoading.bind(this), 1000);
            }
        }
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
        // max: 100,
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
}

export let genderOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 150,
        events: {
            load() {
                this.showLoading();
                setTimeout(this.hideLoading.bind(this), 1000);
            }
        }

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
        // max: 100,
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
}

export let cropOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 250,
        events: {
            load() {
                this.showLoading();
                setTimeout(this.hideLoading.bind(this), 1000);
            }
        }
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

}
export let breedOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 250,
        events: {
            load() {
                this.showLoading();
                setTimeout(this.hideLoading.bind(this), 1000);
            }
        }

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

}

export let trendOption: Highcharts.Options = {
    chart: {
        type: 'bar',
        height: 500,
        events: {
            load() {
                this.showLoading();
                setTimeout(this.hideLoading.bind(this), 1000);
            }
        }

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

}
