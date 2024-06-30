import { useContext } from "react";
import App from "./App";
import List from "./list";
import { Context } from "../services/memory";

export default function ListRender() {
    const [state, dispatch] = useContext(Context)
    return (<App children={state.order.map(id => <List key={id} {...state.data[id]} ></List>)} ></App>)
};
