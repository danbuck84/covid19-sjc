byDistrict();
                
function byDistrict() {
    const ctx = document.getElementById('by-district').getContext('2d');
    const options = {
        title: {
            display: true,
            text: 'Bairros mais afetados (casos positivos)',
            fontSize: 18,
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)'],
                },
                ticks: {
                    beginAtZero: true,
                },
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)",
                }
            }],
        },
        legend: {
            display: false,
            position: 'bottom',
            align: 'end',
            fullWidth: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'average',
            intersect: false
        },
    };
    const graph = {
        labels: [
            'Aquarius',
            'Urbanova',
            'Bq Eucaliptos',
            'Satélite',
            'Jd das Indústrias',
            'Morumbi',
            'Pq Industrial',
            'Vl Industrial',
            'Vista Verde',
            'Santa Inês',
        ],
        datasets: [
            {
                data: [
                    54,
                    47,
                    46,
                    40,
                    30,
                    30,
                    28,
                    27,
                    25,
                    25,
                ],
                backgroundColor: [
                    'rgba(246, 229, 141,0.5)', 
                    'rgba(255, 190, 118,0.5)',
                    'rgba(255, 121, 121,0.5)',
                    'rgba(186, 220, 88,0.5)',
                    'rgba(223, 249, 251,0.5)',
                    'rgba(249, 202, 36,0.5)',
                    'rgba(240, 147, 43,0.5)',
                    'rgba(235, 77, 75,0.5)',
                    'rgba(106, 176, 76,0.5)',
                    'rgba(199, 236, 238,0.5)',
                ],
                borderColor: [
                    'rgba(246, 229, 141,1.0)', 
                    'rgba(255, 190, 118,1.0)',
                    'rgba(255, 121, 121,1.0)',
                    'rgba(186, 220, 88,1.0)',
                    'rgba(223, 249, 251,1.0)',
                    'rgba(249, 202, 36,1.0)',
                    'rgba(240, 147, 43,1.0)',
                    'rgba(235, 77, 75,1.0)',
                    'rgba(106, 176, 76,1.0)',
                    'rgba(199, 236, 238,1.0)',
                ],
            }
        ]
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'horizontalBar',
        data: graph,
    });
}
