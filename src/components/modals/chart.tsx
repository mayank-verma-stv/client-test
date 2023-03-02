import React from 'react'
import './modal.css'
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';
const ChartModelComponent=(props:any)=>{
  console.log('props',props.data)
  const chartdata = [  { name: 'January', value: 4000 },  { name: 'February', value: 3000 },  { name: 'March', value: 2000 },  { name: 'April', value: 2780 },  { name: 'May', value: 1890 },  { name: 'June', value: 2390 },  { name: 'July', value: 3490 },];
  return(
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
    <p>{props.data.name}</p>
    <p onClick={props.closeModal}>X</p>
    </div>
    <LineChart width={500} height={300} data={chartdata}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} /> </LineChart>
    </div>
    </div>
  )
}
export default ChartModelComponent;