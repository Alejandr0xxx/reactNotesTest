import { useContext } from "react"
import { Context } from "../services/memory"

export default function List({Title, Description, id }) {
    const [state, dispatch] = useContext(Context)
    const onClick = (event) =>{
        dispatch({type: 'Delete', id: id})
    }
    return (
        <div className="card">
        <h1 className="title">{Title}</h1>
        <p className="description">{Description}</p>
        <button onClick={(event) => onClick(event)} className="delButon">Delete</button>
        </div>
    )
};
