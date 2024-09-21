import { useState } from 'react'

import './App.css'

function App() {
  const [colour, setColour] = useState("purple")
  let [count, setCount] = useState(0)


  function addVal(){
    count = count+1;
    val = setCount(count);
    return val;

  }

  function removeVal(){
    count = count-1;
    val = setCount(count);
    return val;

  }



  return (
    <>
      <div
      style={{backgroundColor: colour, height:'100vh'}}
      >
           

           <div
           style={{backgroundColor:'#222',display:'flex',justifyContent:'center',borderRadius:'10px'}}
           >
            

            <div>
              <button
              onClick={()=> setColour('grey')}
              style={{backgroundColor:'grey', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >grey</button>

              <button
              onClick={()=> setColour('white')}
              style={{backgroundColor:'white', border:'2px solid black', borderRadius:'1.5rem', padding:'3px', color:'black'}}
              >white</button>

              <button
              onClick={()=> setColour('brown')}
              style={{backgroundColor:'brown', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >brown</button>

              <button
              onClick={()=> setColour('orange')}
              style={{backgroundColor:'orange', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >orange</button>

              <button
              onClick={()=> setColour('yellow')}
              style={{backgroundColor:'yellow', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >yellow</button>

              <button
              onClick={()=> setColour('green')}
              style={{backgroundColor:'green', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >green</button>

              <button
              onClick={()=> setColour('blue')}
              style={{backgroundColor:'blue', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >blue</button>

              <button
              onClick={()=> setColour('violet')}
              style={{backgroundColor:'violet', border:'2px solid black', borderRadius:'1.5rem', padding:'3px'}}
              >violet</button>
            </div>
           </div>



           {/* add and remove value */}
            <h1 
            onClick={()=>{}}
            style={{textAlign:'center', color:colour, backgroundColor:'#454545', border:'2px solid white', padding:'5px',borderRadius:'1.5rem'}}
            >Counter = {count}</h1>


            
              
 
              <div
              style={{justifyContent:'center',display:'flex'}}
              >
                <button
                onClick={addVal}
                style={{backgroundColor:'pink',border:'2px solid black',borderRadius:'5px',padding:'7px'}}
                >add</button>

                <button
                onClick={removeVal}
                style={{backgroundColor:'pink',border:'2px solid black',borderRadius:'5px',padding:'7px'}}
                >remove</button>
              </div>           
      </div>
    </>
  )
}

export default App
