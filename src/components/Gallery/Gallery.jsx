import React from 'react'
import styled from 'styled-components'
import GalleryImg from './GalleryImg'
import { useDropzone } from 'react-dropzone'
import UploadedImg from '../UploadedImg'

const Gallery = () => {
    return (
        <GalleryContainer>
            <GalleryGrid className="container">
                <UploadedImg/>
            </GalleryGrid>
        </GalleryContainer>
    )
}


const GalleryContainer = styled.div`
    margin-top: 50px;
    padding: 0 15px;
`;

const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;  

export default Gallery
