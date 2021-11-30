import React from "react";

function Picker({
    head,
    setHead
}) 
// const [head, setHead] = useState()
{
    const heads = ['dog', 'cat']
    return (
        <section>
            <div>
                <select name='head' key='head-select' value={head} onChange={(e) => setHead(e.target.value)}>
                    {heads.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default Picker