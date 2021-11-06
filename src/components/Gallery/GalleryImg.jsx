import React from 'react'
import styled from 'styled-components'

const GalleryImg = ({image}) => {
    return (
        <GalleryImgContainer>
            <img src={image} alt={image} />
        </GalleryImgContainer>
    )
}

const GalleryImgContainer = styled.div`
    height: 200px;
    border-radius: 6px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default GalleryImg
