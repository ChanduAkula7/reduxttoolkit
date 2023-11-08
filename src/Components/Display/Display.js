import React from 'react'
import { useSelector } from 'react-redux';

const Display = () => {

    const data11=useSelector((state)=>state.api.datas);
    console.log(data11);
    // const load=useSelector((state)=>state.api.load);
    // const err=useSelector((state)=>state.api.error);

  return (
   <>
   <div>
   {data11.map(i=>(<>
      <div>
        <p>{i.id}</p>
        <p>{i.title}</p>
      </div>
      <p>.............</p>
      </>
    ))}
    </div>
    </>
  )
}

export default Display
