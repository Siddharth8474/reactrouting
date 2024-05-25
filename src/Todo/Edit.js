import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
const [list, setList] = useState(["An item","A second item","A third item","A fourth item","And a fifth one"])
let {todoId} = useParams();    

    const handlevalue=()=>{

    }

  return (
    <div>
        <div>
        <div className="input-group flex-nowrap">
    <span className="input-group-text" id="addon-wrapping">@</span>
    <input type="text" className="form-control"  value={list[todoId]} placeholder="Username" onChange={handlevalue} aria-label="Username" aria-describedby="addon-wrapping" />
  </div>
  <button type="button" className="btn btn-primary">Todo</button>
    </div>
    </div>
  )
}

export default Edit