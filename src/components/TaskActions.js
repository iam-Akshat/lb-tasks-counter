import { useState } from "react";
import { useSelector } from "react-redux"
import { countMinOrTasks } from "../utils/countMinOrTasks";


const TaskActions = ({ entryId }) => {
    const [showCopied,setShowCopied] = useState(false);
    const entries = useSelector((state) => state.entries.entries);
    const currentEntryTasks = entries.filter(entry => entry.id === entryId)[0].tasks;

    const copy = (target) => {
        setShowCopied(true)
        setTimeout(()=>{
            setShowCopied(false)
        },1000)
        switch (target.dataset.action) {
            case 'expTasks': {
                const expTasks = countMinOrTasks("EXP", "num", currentEntryTasks)
                return navigator.clipboard.writeText(expTasks);
            }
            case 'expMin': {
                const expTasks = countMinOrTasks("EXP", "min", currentEntryTasks)
                return navigator.clipboard.writeText(expTasks);
            }
            case 'sxsTasks': {
                const expTasks = countMinOrTasks("SXS", "num", currentEntryTasks)
                return navigator.clipboard.writeText(expTasks);
            }
            case 'sxsMin': {
                const expTasks = countMinOrTasks("SXS", "min", currentEntryTasks)
                return navigator.clipboard.writeText(expTasks);
            }
            default:
                break;
        }
    }

    return (
        <>
        <h4>Actions</h4>
        {showCopied && <div className="copy_msg">Copied to clipboard</div>}
            <div className="actions_holder">
            <div>
                <button type="submit" onClick={(e) => { copy(e.target) }} data-action="expTasks">
                    Total EXP tasks
                </button>
            </div>
            <div>
                <button type="submit" onClick={(e) => { copy(e.target) }} data-action="expMin">
                    Total EXP minutes
                </button>
            </div>
            <div>
                <button type="submit" onClick={(e) => { copy(e.target) }} data-action="sxsTasks">
                    Total SXS tasks
                </button>
            </div>
            <div>
                <button type="submit" onClick={(e) => { copy(e.target) }} data-action="sxsMin">
                    Total SXS minutes
                </button>
            </div>
        </div>
        </>
        
    )
}

export default TaskActions;