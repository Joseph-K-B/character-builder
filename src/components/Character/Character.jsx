import React from "react";
import '../Character/Character.css'

function Character({
    head,
    setHead,
    torso,
    setTorso,
    bottom,
    setBottom
}) {
    return (
        <section className='image-section'>
            <figure
            className='head-image'
            aria-label='head'
            data-testid='head'
            value={head}
            onChange={(e) => setHead(e.target.value)}
            style={{backgroundImage: `url(./${head}-head.png)`}}>
            </figure>
            <figure
            className='torso-image'
            aria-label='torso'
            data-testid='torso'
            value={torso}
            onChange={(e) => setTorso(e.target.value)}
            style={{backgroundImage: `url(./${torso}-torso.png)`}}>
            </figure>
            <figure
            className='bottom-image'
            aria-label='bottom'
            data-testid='bottom'
            value={bottom}
            onChange={(e) => setBottom(e.target.value)}
            style={{

                backgroundImage: `url(./${bottom}-bottom.png)`,

              }}>
            </figure>
        </section>
    )
}

export default Character;