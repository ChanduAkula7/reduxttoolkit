import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import '../Home/Home.css'
import { Increment, uploadpost } from '../../Features/Postt/PostSlice';
import  {ApiFetching}  from '../../Features/Apifetching/ApiSlice';
import Display from '../Display/Display';

const Home = () => {
    const [data,setData]=useState({name:"",vill:"",phn:""});

    const usedispatch=useDispatch();

    const stateData=useSelector(state=>state.post.data1);
    const value=useSelector(state=>state.post.value);

    const data11=useSelector((state)=>state.api.datas);
    console.log(data11);
    const load=useSelector((state)=>state.api.load);
    const err=useSelector((state)=>state.api.error);


    useEffect(()=>{
      usedispatch(ApiFetching());
    },[usedispatch]);



    const handleClick=(e)=>{
        console.log(e.target.name);
        setData({...data,[e.target.name]:e.target.value})
    }

    const upload=()=>{
      

        usedispatch(uploadpost(data));

        usedispatch(Increment());
        
        setData({name:'',vill:'',phn:''})
    }

    if(load){
      return <p>Loading....</p>
    }
    if(err){
      return <p>Errrrrrrrrrrrroe</p>
    }

  return (
    <>
    <div className='form'>
        <div>
            <label htmlFor='nameId'>NAME:</label>
                <input type='text' autoComplete='off' id="nameId" name="name" value={data.name} onChange={handleClick}/>
            
        </div>
        <div>
            <label htmlFor='villId'>VILLAGE:</label>
                <input type='text' autoComplete='off' id="villId" name="vill" value={data.vill} onChange={handleClick}/>
            
        </div>
        <div>
            <label htmlFor='phnId'>PHONE:</label>
                <input type='Number' autoComplete='off' id="phnId" name="phn" value={data.phn} onChange={handleClick}/>
            
        </div>
      <button type='button' onClick={upload}>Upload</button>
      <p>{value}</p>
      {stateData.map(i=>{return <div>
        <p className='bb'>{i.name}</p>
        <p>{i.vill}</p>
        <p>{i.phn}</p>
      </div>})}
     
    </div>
    <h1>This is fetched DATA</h1>
    <Display/>
   
    </>


  )
}

export default Home
