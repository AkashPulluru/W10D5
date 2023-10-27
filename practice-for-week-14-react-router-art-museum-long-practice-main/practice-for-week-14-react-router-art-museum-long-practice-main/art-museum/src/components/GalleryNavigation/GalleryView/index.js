import React from 'react';
import { useParams } from "react-router-dom";

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find(g => g.galleryid === parseInt(galleryId));

  return (
    <div className="gallery">
      <h1>{gallery.name}</h1>
    </div>
  );
}

export default GalleryView;