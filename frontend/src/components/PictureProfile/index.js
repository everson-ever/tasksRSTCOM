import React, { useState, useEffect } from 'react';

import axios from 'axios';

import User from '../../assets/images/user.png';
import './styles.css';

const PictureProfile = ({userPicture = null}) => {
    const [picture, setPicture] = useState(userPicture);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        setPicture(userPicture)
    }, [userPicture])

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post('/users/picture', formData);
            const newPicture = response.data.body.picture;
            setPicture(newPicture);
            setImagePreview(null);
        }
        catch(error) {
            console.log(error);
        }
    }

    const cancelPicture = () => {
        setImagePreview(null);
    }

    const savePicture = () => {
        handleUpload();
    }

    const createImageUrl = (image) => {
        return URL.createObjectURL(image);
    }

    const onChange = (e) => {
        const image = e.target.files[0];  
        e.target.value = null;
        const imagePreview = createImageUrl(image);
        setImage(image);
        setImagePreview(imagePreview);
    }

    return (
        <div className="box-user-picture">
            {picture? 
                <img className="user-picture" alt="User profile" src={`http://localhost:3333/pictures/${picture}`}/> :
                <img className="user-picture" alt="User profile" src={User}/>
            }
            
            <label htmlFor="picture" className="text-change-picture">Alterar foto</label>

            { imagePreview && 
            <div className="box-image-preview">
                <img className="image-preview" alt="User profile" src={imagePreview}/>

                <div className="box-actions">
                    <button onClick={cancelPicture} className="btn-picture">Cancelar</button>
                    <button onClick={savePicture} className="btn-picture">Salvar</button>
                </div>
            </div>
            }

            <input type="file" name="picture" id="picture" hidden={true}
            accept="image/x-png,image/jpeg"
            onChange={e => onChange(e)}
            />
        </div>
    );
}

export default PictureProfile;