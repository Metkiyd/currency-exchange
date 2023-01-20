import React, { PureComponent } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const xAxis = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
]
const data = [
  {
    date: '00:00',
    price: 82.3,
  },
  {
    date: '01:00',
    price: 83,
  },
  {
    date: '03:00',
    price: 82.7,
  },
  {
    date: '05:00',
    price: 83.5,
  },
  {
    date: '09:00',
    price: 82.8,
  },
  {
    date: '13:00',
    price: 84,
  },
  {
    date: '17:00',
    price: 83,
  },
  {
    date: '21:00',
    price: 83.5,
  },
  {
    date: '23:00',
    price: 84.5,
  },
]

export default class MyChart extends PureComponent {
  render() {
    return (
      <div style={{ height: 400 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#84A500' stopOpacity={0.2} />
                <stop offset='95%' stopColor='#84A500' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey='date' axisLine={false} />
            <YAxis type='number' domain={[82, 85]} axisLine={false} />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='price'
              stroke='#84A500'
              strokeWidth={2}
              fillOpacity={1}
              fill='url(#colorUv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
//
// const {Brush, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// const data = [
//   {time: new Date(2016,5,24).getTime(), uv: 4000, pv: 2400, amt: 2400},
//   {time: new Date(2016,5,25).getTime(), uv: 3000, pv: 1398, amt: 2210},
//   {time: new Date(2016,5,26).getTime(), uv: 2000, pv: 9800, amt: 2290},
//   {time: new Date(2016,5,27).getTime(), uv: 0, pv: 3908, amt: 2000},
//   {time: new Date(2016,5,28).getTime(), uv: 1890, pv: 4800, amt: 2181},
//   {time: new Date(2016,5,29).getTime(), uv: 2390, pv: 3800, amt: 2500},
//   {time: new Date(2016,7,9).getTime(), uv: 3590, pv: 4400, amt: 2100},
//   {time: new Date(2016,11,10).getTime(), uv: 3490, pv: 4300, amt: 2100}
// ];
//
// const getTicks = (data) => {
//   if (!data || !data.length ) {return [];}
//
//   const domain = [new Date(data[0].time), new Date(data[data.length - 1].time)];
//   const scale = d3_scale.scaleTime().domain(domain).range([0, 1]);
//   const ticks = scale.ticks(d3_time.timeDay, 1);
//
//   return ticks.map(entry => +entry);
// };
//
// const getTicksData = (data, ticks) => {
//   if (!data || !data.length ) {return [];}
//   const dataMap = new Map(data.map((i) => [i.time, i]));
//   ticks.forEach(function (item, index, array) {
//     if(!dataMap.has(item)) {
//       data.push({time: item});
//     }
//   });
//   return data;
// }
//
// const dateFormat = (time) => {
//   return moment(time).format('MM/DD');
// };
//
// const SimpleLineChart = React.createClass({
//   render () {
//     //console.log('logging ticks');
//     const sortedData = data.sort(function(a, b) {
//       return a.time - b.time;
//     });
//     const ticksArr = getTicks(sortedData);
//     const completeData = getTicksData(sortedData, ticksArr);
//
//     //console.log(completeData);
//
//     const completeSortedData = completeData.sort(function(a, b) {
//       return a.time - b.time;
//     });
//
//     const formattedTicks = ticksArr.map(dateFormat);
//     //console.log(formattedTicks);
//     return (
//       <LineChart width={600} height={300} data={completeSortedData}
//                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//         <XAxis dataKey="time" ticks={ticksArr} tickCount={ticksArr.length} tickFormatter={dateFormat}/>
//         <YAxis/>
//         <CartesianGrid strokeDasharray="3 3"/>
//         <Tooltip labelFormatter={dateFormat}/>
//         <Legend />
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" connectNulls={true}/>
//         <Brush dataKey='name' height={30} stroke="#8884d8"/>
//       </LineChart>
//     );
//   }
// })
//
// ReactDOM.render(
//   <SimpleLineChart />,
//   document.getElementById('container')
// );
