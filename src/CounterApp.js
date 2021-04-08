import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = props => {

    const [counter, setCounter] = useState(value)

    const { value } = props

    // handleAdd
    const handleAdd = () => {
        setCounter(counter++)
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handleSubstract = () => {
        setCounter(counter--)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleSubstract}>
                -1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp

