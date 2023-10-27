import {useParams} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from "react-router-dom";


function GalleryView(props) {

    const {galleryId} = useParams();
    
    console.log(galleryId)

    return (
      <h1>Hello from {props.galleries.name}</h1>
    );
  }

export default GalleryView;