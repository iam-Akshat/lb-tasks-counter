import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addEntry } from "../state/reducers/entriesSlice";

const AddEntry = () => {
    const dispatch = useDispatch()
    let todayEntryExists = false;
    const entries = useSelector(state => state.entries.entries)
    entries.forEach(entry => {
        if(entry.date === new Date().toDateString() ){
            todayEntryExists = true;
        }
    });
    const handleEntrySubmit = () => {
        dispatch(addEntry({
            id:v4(),
            date: new Date().toDateString(),
            tasks:[]
        }))
    }
    return (
        <div className="add_entry_form">
            <button onClick={handleEntrySubmit} disabled={todayEntryExists}> Add today's entry</button>
            { todayEntryExists && ' Todays Entry already exists'}
        </div>
    )
}
export default AddEntry;