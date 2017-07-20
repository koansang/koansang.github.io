import React, { Component } from 'react';
import Chart from 'chart.js';

import { Constant } from '../../common';

class GradeChart extends Component {
  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('gradeChart');
    const gradeChart = new Chart(ctx, {
      type: 'radar',
      data: Constant.grades,
      options: {
        scale: {
          ticks: {
            suggestedMin: 1,
            suggestedMax: 10,
            display: false,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
    });
  }

  render() {
    return (
      <canvas id="gradeChart"></canvas>
    );
  }
}

export default GradeChart;
