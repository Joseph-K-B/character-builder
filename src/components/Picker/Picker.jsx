import React from "react";
import '../Picker/Picker.css'

function Picker({
    head,
    setHead,
    headCount,
    setHeadCount,
    torso,
    setTorso,
    torsoCount,
    setTorsoCount,
    bottom,
    setBottom,
    bottomCount,
    setBottomCount
}) {
    const heads = ['dog', 'dog-2', 'dog-3', 'dog-4', 'dog-5', 'horse','cat', 'cat-2', 'cat-3']
    const torsos = ['leather', 'suit', 'gray', 'firefighter', 'straight']
    const bottoms = ['jeans', 'splatter', 'sweat', 'jort']

    const handleHeadChange= (e) => {
        setHead(e.target.value)
        setHeadCount(headCount + 1)
    };

    const handleTorsoChange= (e) => {
        setTorso(e.target.value)
        setTorsoCount(torsoCount + 1)
    };

    const handleBottomChange= (e) => {
        setBottom(e.target.value)
        setBottomCount(bottomCount + 1)
    };

    return (
        <section className='image-controls'>
            <div className='head-control'>
                <label htmlFor='head' className='head-label'>Head</label>
                <select id='head' name='head' key='head-select' value={head} onChange={handleHeadChange}>
                    {heads.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
            <div className='torso-control'>
            <label htmlFor='torso'>Torso</label>
                <select id='torso' name='torso' key='torso-select' value={torso} onChange={handleTorsoChange}>
                    {torsos.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
            <div className='bottom-control'>
            <label htmlFor='torso'>Bottom</label>
                <select id='bottom' name='bottom' key='bottom-select' value={bottom} onChange={handleBottomChange}>
                    {bottoms.map((pic) => (
                        <option key={pic}>{pic}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default Picker