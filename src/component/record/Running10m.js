import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import styles from './Run.module.css';

function Running10m({ speed10mArray }) {
  /* const running10mData = [
    { name: "10m", uv: 400, pv: 2400, amt: 2400 },
    { name: "20m", uv: 500, pv: 2400, amt: 2400 },
  ]; */
  const running10mData = speed10mArray.map((speed, index) => ({
    name: (index + 1) * 10 + "m",
    uv: speed,
    pv: 2400,
    amt: 2400,
  }));
  return (
    <div className={styles.running10m}>
      <h3>Analysis Running Data</h3>
      <div className={styles.linechart}>
      <LineChart width={500} height={300} data={running10mData}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      </div>
    </div>
  );
}

export default Running10m;
