import React, { useEffect, useState } from 'react'
import AddModelComponent from '../modals/addblockmodel';
import './sidebar.css'
const SidebarComponent=(props)=>{
  console.log('props',props);
  const initialData:any[]=JSON.parse(localStorage.getItem('blocks'));
  const [blocks,setBlocks]=useState(props.totalBlocks);
  // const [addPopup,setPopup]=useState(false);
  useEffect(()=>{
    setBlocks(JSON.parse(localStorage.getItem('blocks')));
  },[])
  if(!props.totalBlocks){
    return <></>
  }
  // const closePopup=()=>{
  //   setPopup(e=>!e)
  // }
  const added=()=>{
    console.log('mak')
  }
  return(
    <>
    {/* {addPopup===true?<AddModelComponent added={added} closePopup={closePopup}/>:''} */}
    <div className='sidebar-component'>
      <h2>Blocks</h2>
      {blocks.length!=0?
      <div className='block-item-container'>
      {blocks.map((e,i)=>{
        return(
          <p className='block-item' key={i} onClick={()=>props.selectBlock(e,i)}>{e.name}</p>
        )
      })}
      </div>
      :''
    }
    <button onClick={props.addBlock}>+ Add block</button>
    </div> 
    </>
  )
}
export default SidebarComponent;