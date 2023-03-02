import React, { useEffect, useState } from 'react'
import './src/App.css'
import  data from './src/blocks.json'
import BlockComponent from './src/components/block/block'
import HeaderComponent from './src/components/header/header'
import AddModelComponent from './src/components/modals/addblockmodel'
import SidebarComponent from './src/components/sidebar/sidebar'
function App() {
  const [selectedBlock,setSelectedBlock]=useState();
  const [blockModal,setBlockModal]=useState(false);
  const initialState=JSON.parse(localStorage.getItem('blocks'));
  const [totalBlocks,setTotalBlocks]=useState(initialState);
  useEffect(()=>{
    console.log('mAk',JSON.parse(localStorage.getItem('blocks')));
    localStorage.setItem('blocks',JSON.stringify(data.blocks));
    setTotalBlocks(JSON.parse(localStorage.getItem('blocks')));
  },[localStorage.getItem('blocks')])
  const selectBlock=(e)=>{
    setSelectedBlock(e);
  }
  const deleteIndicator=(e,selctedBlock:any)=>{
    console.log('selctedBlock',selctedBlock);
    const blocks=JSON.parse(localStorage.getItem('blocks'));
    console.log(blocks)
    // const deleted=selctedBlock?.block?.indicators.filter((f)=>{
    //   if(f.id!==e.id){
    //     return f;
    //   }      
    // })
    // console.log('deleted',deleted);
    // console.log('selctedBlock.block',selctedBlock.block)
    // blocks.filter(()=>{})
    // console.log(deleted);
    // console.log('blocks',blocks)
  }
  const addBlock=()=>{
    console.log('mAkkk')
    setBlockModal(e=>!e);
  }
  const added=(e)=>{
    localStorage.setItem('blocks',JSON.stringify(e))
    setBlockModal(false);
  }
  return (
    <>
    {blockModal===true?<AddModelComponent added={added}/>:''}
   <div className='main-container'>
    <div className='top-container'>
    <div><HeaderComponent/></div>
    </div>
    <div className='bottom-container'>
    <div className='sidebar-container'><SidebarComponent totalBlocks={totalBlocks} selectBlock={(e)=>selectBlock(e)} addBlock={addBlock}/></div>
    <div className='block-container'><BlockComponent block={selectedBlock} deleteIndicator={deleteIndicator}/></div>
    </div>
   </div>
   </>
  )
}
export default App
