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
                backgroundImage: `url(./public/${head}-head.png)` 
              }}>

            </div>
        </section>
    )
}

export default Character;