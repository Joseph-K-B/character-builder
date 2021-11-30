import React from "react";

function Character({
    head,
    setHead
}) {
    return (
        <section>
            <div
            value={head}
            onChange={(e) => setHead(e.target.value)}
            style={{
                height: '100px',
                width: '100px',
                backgroundSize: '10rem',
                backgroundImage: `url(./${head}-head.png)` 
              }}>

            </div>
        </section>
    )
}

export default Character;