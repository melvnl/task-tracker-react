import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


export const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
