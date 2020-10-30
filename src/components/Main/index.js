import React from 'react'
import styled from 'styled-components' 
import Info from '../Info'
import Input from '../Input'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            pokemon: {}
        }
    }

    //비동기 
    async componentDidMount() {
        try {
            const value = 1
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
            if (response.status >= 400) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            this.setState({
                pokemon: data
            })
        } catch (e) {
            console.log(e)
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSearch = async() => {
        try {
            const { value } = this.state
            const chk_value = /^[0-9]+$/
            if (value === 0) {
                alert('다른 번호를 입력해주세요.')
                return false
            } else if (value.length < 1) {
                alert('ID 번호를 입력해주세요.')
                return false
            } else if (!chk_value.test(value)) {
                alert('숫자만 입력해주세요.')
                return false
            }
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
            if (response.status >= 400) {
                if (response.status === 404) {
                    alert('해당 ID에 해당하는 포켓몬이 없습니다. 다른 ID를 입력해주세요.')
                    return false
                } else {
                    throw new Error('Failed to fetch data')
                }
            }
            const data = await response.json()
            this.setState({
                pokemon: data
            })
        } catch(e) {
            console.error(e)
        }
    }

    render() {
        const { value, pokemon } = this.state
        return(
            <Wrapper>
                <Info pokemon={pokemon} />
                <Input 
                    value={value} 
                    onChange={this.handleChange}
                    onSearch={this.handleSearch}
                /> 
            </Wrapper>
        )
    }    
}

//CSS
const Wrapper = styled.div`
    width: 310px;
    margin: 0 auto;
    background-color: #CE3636; 
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 30px;
    font-family: sans-serif;
`
export default Main