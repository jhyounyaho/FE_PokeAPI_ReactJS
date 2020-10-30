//Input/index.js
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class Input extends React.Component {
    render() {
        const { value, onChange, onSearch } = this.props
        return(
            <Wrapper>
                <input 
                    value={value}
                    onChange={onChange}
                    placeholder="e.g., 34"
                />
                <button onClick={onSearch}>조회</button>
            </Wrapper>
        )
    }
}
//CSS
const Wrapper = styled.div`
    background-color: #CE3636; 
    input {
        height: 30px;
        width: 180px;
        padding: 10px 20px;
        margin: 0;
        border: 1px solid #eee;
        border-radius: 3px;
        font-size: 20px;
        vertical-align: middle;
        margin-right: 10px
    }
    button {
        height: 52px;
        width: 70px;
        background-color: #EDD200;
        color: #1712AB;
        border-radius: 3px;
        border: 0px;
        vertical-align: middle;
        font-size: 20px;
        cursor: pointer;
    }
`
Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}
export default Input