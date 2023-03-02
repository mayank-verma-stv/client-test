import { BlockList } from 'net';
import React, { useState } from 'react'
import './modal.css'
const AddModelComponent=(props:any)=>{
  const [form,setForm]=useState('');
  const addBlock=(e:any)=>{
    e.preventDefault()
    const localData:any=localStorage.getItem('blocks')
    const block=JSON.parse(localData)
    const newBlock={
      id:block[block.length-1].id+1,
      name:form,
      description:'',
      model_id:block[block.length-1].model_id+1,
      library_block:false,
      library_tags:'',
      icon:'',
      indicatiors:[],
      dimension:[]
    }
    block.push(newBlock)
    props.added(block);
  }
  const selectChange=(e:any)=>{
    setForm(e)
  }
  return(
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
    <p>Add Block</p>    
    <p onClick={props.closePopup}>X</p>
    </div>
    <form onSubmit={addBlock}>
      <div className='block-div'>
        <input onChange={(e)=>setForm(e.target.value)} placeholder='Block name'/>
        <button type='submit'>Add</button>
      </div>
    </form>
    </div>
    </div>
  )
}
export default AddModelComponent;