import { createContext, useContext, useReducer } from "react"

const memory = localStorage.getItem('memory')
const initialState = memory ? JSON.parse(memory) : {
    order: [],
    data: {}
}

function cardReducer(state, action) {
    switch (action.type) {
        case 'Add': {
            const id = Math.random().toString(36).substring(2,9)
            const newCard = {...action.data, id}
            const newState = {
                order: [...state.order, id],
                data:{
                    ...state.data,
                    [id]: newCard
                }
            }
            localStorage.setItem('memory', JSON.stringify(newState))
            return newState
        }
        case 'Delete':{
            const id = action.id
            const newOrder = state.order.filter(order => order !== id)
            delete state.data[id]
            const newState = {
                order: newOrder,
                data: state.data
            }
            localStorage.setItem('memory', JSON.stringify(newState))
            return newState
        }
    }
}


export const Context = createContext(null)

export default function Memory({children}) {
    const [state, dispatch] = useReducer(cardReducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}