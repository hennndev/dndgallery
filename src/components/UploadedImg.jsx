import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { HiUpload } from 'react-icons/hi'
import Swal from 'sweetalert2'
import { storage, db, timestamp } from '../firebase/firebaseConfig'

const UploadedImg = () => {

    const [isLoading, setIsLoading] = useState(false)

    const onDrop = (acceptedFiles) => {
        Swal.fire({
            title: 'Upload foto sekarang?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Upload!'
        }).then((result) => {
            if (result.isConfirmed) {
                if(acceptedFiles[0].size > 1000000) {
                    alert('Image tidak boleh lebih dari 1MB')
                } else {
                    storage.ref(`images/${acceptedFiles[0].name}`)
                            .put(acceptedFiles[0])
                            .then(snapshot => {
                                setIsLoading(true)
                                snapshot.ref.getDownloadURL().then(url => {
                                    db.collection('images').add({
                                        timestamp: timestamp(),
                                        image: url
                                    }).then(() => {
                                        setIsLoading(false)
                                        Swal.fire(
                                            'Berhasil di upload!',
                                            'success'
                                        )
                                    }).catch(() => {
                                        setIsLoading(false)
                                    })
                                })
                            }).catch((error) => {
                                console.log(error)
                            })
                } 
            }
        })
    }


    const {isDragActive, getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <UploadedImgContainer {...getRootProps()} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            <HiUpload/>
            {
                isDragActive ?
                <p>Drop the image here ...</p> :
                <p>
                    {isLoading ? 'Loading, please wait...' : 'Drag and drop some image here, or click to select image'}
                </p>
            }
        </UploadedImgContainer>
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
        color: ${({isDragActive}) => isDragActive ? '#1597E5' : 'gray'};
        margin-bottom: 10px;
    }
    p {
        color: ${({isDragActive}) => isDragActive ? 'gray' : 'inherit'} 
    }
`;

export default UploadedImg
