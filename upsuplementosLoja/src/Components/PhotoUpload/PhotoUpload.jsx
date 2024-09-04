import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import "./PhotoUpload.css"

function PhotoUpload() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...imageUrls]);
  };

  return (
    <div className="photo-upload">
      <label htmlFor="file-input" className="upload-label">
        <IoIosAddCircleOutline id='IoIosAddCircleOutline'/>
        <p>Escolha uma imagem</p>
      </label>
      <input
        id="file-input"
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }} // Esconde o input de file padrão
      />
      <div className="image-preview">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Upload ${index}`} className="uploaded-image" />
        ))}
      </div>
    </div>
  );
}

export default PhotoUpload;
