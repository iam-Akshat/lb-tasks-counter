import { useSelector } from "react-redux"
import Entry from "./Entry"

const EntryList = () =>{
    const entries = useSelector(state => state.entries.entries)
    const entryList = entries.map(entry=> <Entry {...entry }/>)
    console.log(entryList);
    return (<>

{entries.map(entry=> <Entry {...entry }/>)}
    </>
        
    )
}

export default EntryList;