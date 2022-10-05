import React, {useRef} from 'react';
import {useRecoilValue} from 'recoil';

import Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HC_exporting from 'highcharts/modules/exporting';
import HC_export_data from 'highcharts/modules/export-data';
import sankey from 'highcharts/modules/sankey';
import HighchartsReact from 'highcharts-react-official';

import {
  // nodeDataAtom,
  edgeDataAtom,
} from '../serverState/sheetData';

HighchartsAccessibility(Highcharts);
HC_exporting(Highcharts);
HC_export_data(Highcharts);
sankey(Highcharts);


interface ChartData {
  from: string;
  to: string;
  weight: number;
  custom: {};
}


const TestComponent: React.FC = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  // const nodeData = useRecoilValue(nodeDataAtom);
  const edgeData = useRecoilValue(edgeDataAtom);


  const chartData: ChartData[] = edgeData.map((edge) => {
    return {
      from: edge.source,
      to: edge.target,
      weight: Number(edge.weight),
      custom: {},
    };
  });

  const chartOptions: Highcharts.Options = {
    chart: {
      height: '95%',
      type: 'sankey',
    },
    accessibility: {
      description: 'Sankey plot of US AON Value Tree',
    },
    title: {
      text: 'US AON Value Tree',
      style: {fontSize: '20px'},
    },
    tooltip: {
      valueDecimals: 0,
    },
    series: [{
      name: 'VTA',
      type: 'sankey',
      allowPointSelect: true,
      cursor: 'pointer',
      data: chartData,
    }],
  };

  Highcharts.setOptions({
    lang: {thousandsSep: ','},
  });

  return (
    <div className={'SankeyChart'}>
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartRef}
        options={chartOptions}
        containerProps={{ className: 'sankey-chart-container' }}
      />
    </div>
  );
}

export default TestComponent;
