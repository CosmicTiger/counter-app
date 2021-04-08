import React from 'react'

// import React, { Fragment } from 'react' -> not quite necessary

const App = () => {

    const salute = {
        name: 'Martin',
        age: 19
    }


    return (
        <>
            { /* <pre>{ JSON.stringify(slute, null, 3) }</pre> */}
            <p>My first application</p>
        </>
    )
}

export default App
