import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { countMinOrTasks } from "../utils/countMinOrTasks";
const CompactActions = ({ entryId }) => {
    const [showCopied, setShowCopied] = useState(false);
    const currentEntryTasks = useSelector((state) => state.entries.entries.filter(entry => entry.id === entryId)[0].tasks);

    const {expNum,expMin,sxsNum,sxsMin} = useMemo(()=>{
        return {
            expNum:countMinOrTasks("EXP", "num", currentEntryTasks),
            expMin:parseFloat(countMinOrTasks("EXP", "min", currentEntryTasks)).toFixed(2),
            sxsNum:countMinOrTasks("SXS", "num", currentEntryTasks),
            sxsMin:parseFloat(countMinOrTasks("SXS", "min", currentEntryTasks)).toFixed(2)
        }
    },[currentEntryTasks])
    const copy = (target) => {
        setShowCopied(true)
        setTimeout(() => {
            setShowCopied(false)
        }, 1000)
        navigator.clipboard.writeText(target.innerText)
    }

    return (
        <>
            <h4>Actions</h4>
            <h1>₹{(sxsMin*5.25 + expMin*5.25).toFixed(2)}</h1>
            <div className="compact_actions_holder">
                <div>
                    <label>EXP tasks</label>
                    <button type="submit" onClick={(e) => { copy(e.target) }} >
                        {expNum}
                    </button>
                </div>
                <div>
                    <label>EXP mins</label>
                    <button type="submit" onClick={(e) => { copy(e.target) }} >
                        {expMin}
                    </button>
                </div>
                <div>
                    <label>SXS tasks</label>
                    <button type="submit" onClick={(e) => { copy(e.target) }} >
                        {sxsNum}
                    </button>
                </div>
                <div>
                    <label>SXS mins</label>
                    <button type="submit" onClick={(e) => { copy(e.target) }} >
                        {sxsMin}
                    </button>
                </div>
            </div>
            {showCopied && <div className="copy_msg">Copied to clipboard</div>}
        </>

    )
}
export default CompactActions;