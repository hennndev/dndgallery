import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { HiUpload } from 'react-icons/hi'

const UploadedImg = () => {

    const [fileImg, setFileImg] = useState(null)

    const onDrop = (acceptedFiles) => {
        setFileImg(fileImg[0])
    }

    const {isDragActive, getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <>
            <UploadedImgContainer {...getRootProps()} isDragActive={isDragActive}>
                <input {...getInputProps()} />
                <HiUpload/>
                {
                    isDragActive ?
                    <p>Drop the image here ...</p> :
                    <p>Drag and drop some image here, or click to select image</p>
                }
            </UploadedImgContainer>
        </>
    )
}

const UploadedImgContainer = styled.div`
    border: ${({isDragActive}) => isDragActive ? '2px dashed #1597E5' : '2px dashed #ccc' };
    border-radius: 6px;
    text-align: center;
    padding: 20px;
    height: 200px;
    svg {
        font-size: 30px;
        color: gray;
        margin-bottom: 10px;
    }
`;

export default UploadedImg
