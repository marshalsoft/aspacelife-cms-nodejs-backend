/* eslint-disable @typescript-eslint/no-unused-vars */
import ApexCharts,{} from 'react-apexcharts';
interface PieChartProps {
    series:number[];
    labels:string[];
    width:number;
    colors:string[];
}

const PieChart = (props:PieChartProps)=>{
    // Pie chart options
  const options:ApexCharts.ApexOptions | undefined = {
    chart: {
    width: props.width,
    type: 'donut',
  },
  colors: props.colors,
  dataLabels: {
    enabled: false,
    formatter: (val) => ``,  // Optionally show percentages on each slice
  },
  plotOptions: {
    bar:{
      barHeight:20,
      borderRadius:20,
    },
    pie: {
      endAngle:360,
      donut: {
        size: '70%',  // Controls the size of the inner hole (in percentage)
      },
    },
  },
  legend: {
    show:false
  }
  };
  return (<ApexCharts 
    options={options} 
    series={props.series} 
    type="donut" 
    width={props.width} 
    />)
}
export default PieChart;