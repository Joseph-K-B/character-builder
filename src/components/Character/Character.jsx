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
            <figure
            data-testid='head'
            value={head}
            onChange={(e) => setHead(e.target.value)}
            style={{
                height: '5.5rem',
                width: '5.5rem',
                backgroundSize: '5.5rem',
                backgroundImage: `url(./${head}-head.png)`,
                backgroundRepeat: 'no-repeat' 
              }}>
            </figure>
            <figure
            data-testid='torso'
            value={torso}
            onChange={(e) => setTorso(e.target.value)}
            style={{
                height: '15rem',
                width: '15rem',
                backgroundSize: '10rem',
                backgroundImage: `url(./${torso}-torso.png)`,
                backgroundRepeat: 'no-repeat' 
              }}>
            </figure>
            <figure
            data-testid='bottom'
            value={bottom}
            onChange={(e) => setBottom(e.target.value)}
            style={{
                height: '15rem',
                width: '15rem',
                backgroundSize: '10rem',
                backgroundImage: `url(./${bottom}-bottom.png)`,
                backgroundRepeat: 'no-repeat' 
              }}>
            </figure>
        </section>
    )
}

export default Character;