import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GalleryImg from './GalleryImg'
import UploadedImg from '../UploadedImg'
import { storage, db } from '../../firebase/firebaseConfig'

const Gallery = () => {
    const [images, setImages] = useState(JSON.parse(localStorage.getItem('images')) || [])

    useEffect(() => {
        db.collection('images').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            const updatedImages = []
            snapshot.forEach(snap => {
                updatedImages.push({
                    id: snap.id,
                    ...snap.data()
                })
            })
            setImages(updatedImages)
            localStorage.setItem('images', JSON.stringify(updatedImages))
        })
    }, [])

    return (
        <GalleryContainer>
            <GalleryGrid className="container">
                {images.map(img => (
                    <GalleryImg image={img.image} key={img.id}/>
                ))}
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
