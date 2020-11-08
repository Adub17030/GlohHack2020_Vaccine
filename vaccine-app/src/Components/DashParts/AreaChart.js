import React, { PureComponent } from 'react';
import {
  AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '5:00AM', uv: 4000, temp: -30, amt: 2400,
  },
  {
    name: '6:00AM', uv: 3000, temp: -25, amt: 2210,
  },
  {
    name: '7:00AM', uv: 2000, temp: -26, amt: 2290,
  },
  {
    name: '8:00AM', uv: 2780, temp: -30, amt: 2000,
  },
  {
    name: '9:00AM', uv: 1890, temp: -29, amt: 2181,
  },
  {
    name: '10:00AM', uv: 2390, temp: -30, amt: 2500,
  },
  {
    name: '11:00AM', uv: 3490, temp: -31, amt: 2100,
  },
];

export default function ShadeChart() {
    return (
        <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 5, right: 50, left: -35, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </AreaChart>
      </ResponsiveContainer>
      </div>
    );
}
