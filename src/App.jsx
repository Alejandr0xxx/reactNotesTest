import { useContext, useState } from 'react'
import { Context } from '../services/memory'
export default function App({ children }) {

  const [form, setForm] = useState({
    Title: null,
    Description: null,
  });

  const onChange = (event, prop) => {
    setForm(state => ({ ...state, [prop]: event.target.value }))
  }

  const [state, dispatch] = useContext(Context)

  const onClick = (event, prop) => {
    event.preventDefault()
    const values = Object.values(form)
    const valuesCheck = values.some(value => value === null || value === '')

    const keys = Object.keys(form)
    const keysCheck = keys.filter((key, index) => values[index] === null || values[index] === '')

    if (valuesCheck && keysCheck.length > 1) {
      alert(`You have to fill in the fields ${keysCheck.join(' and ').toLocaleLowerCase()}`)
      return;
    } else if (valuesCheck && keysCheck.length === 1) {
      alert(`You have to fill in the field ${keysCheck.toString().toLocaleLowerCase()}`)
      return;
    }
    dispatch({ type: 'Add', data: form })
    setForm({
      Title: '',
      Description: ''
    })

  }


  return (
    <main className='mainContainer'>
      <div className='subMainContainer'>
        <div className='formContainer'>
          <h1>Notes</h1>
          <form className='formContainer'>
            <label className='label'>
              Title
            </label>
            <input onChange={(e) => onChange(e, 'Title')} value={form.Title} placeholder='Type a title' type="text" className='input' />
            <label className='label'>
              Description
            </label>
            <input onChange={(e) => onChange(e, 'Description')} placeholder='Type a description' value={form.Description}  type="text" className='input' />
            <button onClick={(e) => onClick(e)} className='button' >Add card</button>
          </form>
        </div>
        <div className='cardContainer'>
          {children}
        </div>
      </div>
    </main>
  )
};
