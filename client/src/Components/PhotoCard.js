import styled from "styled-components"

const StyledImg = styled.img`
  height: 350px;
  min-width: 300px;
  border-radius: 10px;
  /* padding: 10px; */
  border-color: white;
  border-width:  thin;
  `

function PhotoCard ({photo}) {

    return (

        <div className="gal_container">
            <StyledImg className="image" src={photo.image}></StyledImg>
            <div className="overlayforGallery">{photo.description}
            {/* <p className="text">{photo.description}</p> */}
            </div>
        </div>
    )
}

export default PhotoCard