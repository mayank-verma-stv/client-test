import './block.css'
import React, { useEffect, useState } from 'react'
import ChartModelComponent from '../modals/chart';
const BlockComponent=(props)=>{
  console.log(props);
  // useEffect(()=>{
  //   console.log(props.block);
  // },[props.block])
  const [modal,setModal]=useState({data:{},isVisible:false});
  if(!props.block){
    return <></>
  }
  const updateModal=(e)=>{
    console.log(e);
    setModal({...modal,isVisible:!modal.isVisible,data:e})
  }
  const closeModal=()=>{
    setModal({...modal,isVisible:false})
  }
  return(
    <>
    <div className='block-component'>
    <p>{props.block.name}</p>
    <p>indicator :</p>
    <table className='styled-table'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          <td>Formula</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.block.indicators.map((e,i)=>{
          return(
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td>{e.formula}</td>
              <td>
                <button>Rename</button>
                <button onClick={()=>props.deleteIndicator(e,props)}>Delete</button>
                <button onClick={()=>updateModal(e)}>Show chart</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    {modal.isVisible===true?
    <ChartModelComponent closeModal={closeModal} data={modal.data}/>
    :''
  }
    </>
  )
}
export default BlockComponent;