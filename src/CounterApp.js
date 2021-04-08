import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = props => {
    const { value } = props

    // handleAdd
    const handleAdd = () => {
        // console.log(e)

        return () => console.log('Hello World')
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>

            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp

