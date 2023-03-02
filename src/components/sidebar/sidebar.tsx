import React, { useEffect, useState } from 'react'
import AddModelComponent from '../modals/addblockmodel';
import './sidebar.css'
const SidebarComponent=(props:any)=>{
  console.log('props',props);
  const localData:any=localStorage.getItem('blocks')
  const initialData:any[]=JSON.parse(localData);
  const [blocks,setBlocks]=useState(props.totalBlocks);
  // const [addPopup,setPopup]=useState(false);
  useEffect(()=>{
    setBlocks(JSON.parse(localData));
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
      {blocks.map((e:any,i:any)=>{
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