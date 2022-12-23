import styled from "styled-components"

const StyledImg = styled.img`
  max-height: 400px;
  border-radius: 60px;
  padding: 10px;
  border-color: white;
  border-width:  thin;
  `

function PhotoCard ({photo}) {

    return (

        <div>
            <StyledImg src={photo.image}></StyledImg>
            <p>{photo.description}</p>
        </div>
    )
}

export default PhotoCard