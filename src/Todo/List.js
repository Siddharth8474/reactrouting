import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const List = () => {

    const [list, setList] = useState(["An item","A second item","A third item","A fourth item","And a fifth one"])
    const [input,setInput]=useState("");
    const  navigate =useNavigate(); 
  
    const handlevalue=(Event)=>{
       setInput(Event.target.value);
    }

    const handleclick=()=>{
        setList([...list,input]);
    }

    const dlt=(index)=>{
       const list1= list.slice(0,index) 
       const list2 = list.slice(index+1)
       setList([...list1,...list2]);
    }

    const edit=(index)=>{
        //dynamic routing
        navigate(`/todo/edit/${index}`)
        console.log(index);
    }


  return (
    <div>
        <div className="input-group flex-nowrap">
    <span className="input-group-text" id="addon-wrapping">@</span>
    <input type="text" className="form-control" placeholder="Username" onChange={handlevalue} aria-label="Username" aria-describedby="addon-wrapping" />
  </div>
  <button type="button" className="btn btn-primary" onClick={handleclick}>Todo</button>

     <ul className="list-group">
     {

          list.map((ele,index)=>{
            return <li className="list-group-item" key={index} >{ele}
             <button onClick={()=>dlt(index)}>Delete</button>
             <button onClick={()=>edit(index)}>edit</button>
            </li>
          })

     }

     </ul>

  </div>
  
  )
}

export default List