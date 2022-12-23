import { useEffect, useState } from "react"
import PhotoCard from "./PhotoCard";
import styled from "styled-components";


  const EventHeader = styled.h1`
  padding-top: 5px;
  margin: 2px center;
  position: relative;
  left: 40%;
  font-size:50px; text-transform:uppercase; color:#222; letter-spacing:2px;
  font-family:"Playfair Display", serif; font-weight:400;
  color: rgb(128, 106, 106);
  
  `

function Gallery(){

    const [photos, setPhotos] = useState([])

    useEffect(() => { 
        fetch("/photos")
        .then(res => res.json())
        .then(photos => setPhotos(photos))
     }, [])

     console.log(photos)

     const displayPhotos = photos.map((photo) => {
        return <PhotoCard photo={photo} key={photo.id} /> 
     })

    return (

        <div >
        <EventHeader>Gallery</EventHeader>
        <div className="gallery">
        {displayPhotos}
        </div>
        </div>
    )
}

export default Gallery;