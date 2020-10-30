//Info/index.js
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class Info extends React.Component {
    //컴포넌트가 리렌더링을 마친 후 실행 
    componentDidUpdate(prevProps) {
        if (prevProps.pokemon !== this.props.pokemon && prevProps.pokemon !== undefined) {
            alert('새 포켓몬 데이터가 로드되었습니다')
        }
    }
    render() {
        const { pokemon } = this.props
        if (Object.keys(pokemon).length === 0) {
            return null
        } else {
            const { id, sprites, name, height, weight } = pokemon 
            const images = Object.keys(sprites).map((key) => {
                const url = sprites[key]
                if (url) {
                    return <img src={url} key={key} alt={url} />
                }
            }).filter(item => item !== null)

            return(
                <Wrapper>
                    <img className="logo" alt="pokemon_logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
                    {images}
                    <Descriptions>
                        <div>
                            <strong>ID</strong>
                            <span>{id}</span>
                        </div>
                        <div>
                            <strong>이름</strong>
                            <span>{name}</span>
                        </div>
                        <div>
                            <strong>높이</strong>
                            <span>{height}</span>
                        </div>
                        <div>
                            <strong>무게</strong>
                            <span>{weight}</span>
                        </div>
                    </Descriptions>
                </Wrapper>
            )
        }
    }
}
//CSS
const Wrapper = styled.div`
    background-color: #CE3636; 
    img {
        display: inline-block;
        border: 1px solid #eee;
        background-color: #fff;
        margin-right: 5px;
        margin-bottom: 1px;
    }
    .logo {
        display: inline-block;
        border: 0px;
        background-color: #CE3636; 
        margin: 0 0 20px 15px;
    }
`
const Descriptions = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    strong {
        margin-right: 10px;
        color: #333;
    }
`
//PropTypes
Info.propTypes = {
    pokemon: PropTypes.object.isRequired
}
export default Info