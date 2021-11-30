import React from "react";

function Character({
    head,
    setHead,
    torso,
    setTorso,
    bottom,
    setBottom
}) {
    return (
        <section>
            <div
            value={head}
            onChange={(e) => setHead(e.target.value)}
            style={{
                height: '15rem',
                width: '15rem',
                backgroundSize: '10rem',
                backgroundImage: `url(./${head}-head.png)`,
                backgroundRepeat: 'no-repeat' 
              }}>
            </div>
            <div
            value={torso}
            onChange={(e) => setTorso(e.target.value)}
            style={{
                height: '15rem',
                width: '15rem',
                backgroundSize: '10rem',
                backgroundImage: `url(./${torso}-torso.png)`,
                backgroundRepeat: 'no-repeat' 
              }}>
            </div>
            <div
            value={bottom}
            onChange={(e) => setBottom(e.target.value)}
            style={{
                height: '15rem',
                width: '15rem',
                backgroundSize: '10rem',
                backgroundImage: `url(./${bottom}-bottom.png)`,
                backgroundRepeat: 'no-repeat' 
              }}>
            </div>
        </section>
    )
}

export default Character;