import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "91% STR",
    Close: 14,
    Total: 19,
    amt: 2400
  },
  {
    name: "97% FIN",
    Close: 6,
    Total: 7,
    amt: 2210
  },
  {
    name: "92% QLT",
    Close: 8,
    Total: 9,
    amt: 2290
  },
  {
    name: "100% MAN",
    Close: 15,
    Total: 15,
    amt: 2000
  },
  {
    name: "100% STO",
    Close: 5,
    Total: 5,
    amt: 2181
  },
  {
    name: "91% HR",
    Close: 9,
    Total: 10,
    amt: 2500
  }
];

const Barchart = () => {


    return (
        <div>
            <BarChart
          width={380}
          height={450}
          data={data}
         margin={{
            top:30,
            left:-30,
         }}
        >
         
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total" fill="blue" />
          <Bar dataKey="Close" fill="green" />
        </BarChart>

        </div>
        
      );
}

export default Barchart