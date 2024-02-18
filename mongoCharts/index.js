import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-project-0-pevxc',
});

// embed a chart
const chart = sdk.createChart({
  chartId: '65d19453-abaa-423e-8942-c6ee8818233d',
});

// render the chart into a container
chart
  .render(document.getElementById('chart'))
  .catch(() => window.alert('Chart failed to initialise'));

// refresh the chart whenever #refreshButton is clicked
document
  .getElementById('refreshButton')
  .addEventListener('click', () => chart.refresh());

// embed a dashboard
const dashboard = sdk.createDashboard({
  dashboardId: '61d02578-6148-4c87-9cad-1fbaef50a0d3',
});

// render the chart into a container
dashboard
  .render(document.getElementById('dashboard'))
  .catch(() => window.alert('Dashboard failed to initialise'));