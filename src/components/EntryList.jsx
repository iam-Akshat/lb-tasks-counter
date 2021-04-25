import { useSelector } from "react-redux"
import Entry from "./Entry"

const EntryList = () => {
    const entries = useSelector(state => state.entries.entries)
    const entryList = entries.map(entry => <Entry {...entry} />)
    console.log(entryList);
    return (
        <div className="entry_list">
            {entries.map(entry => <Entry {...entry} />)}
        </div>

    )
}

export default EntryList;