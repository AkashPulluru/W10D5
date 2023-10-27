import {useParams} from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from "react-router-dom";


function GalleryView() {

    const {galleryId} = useParams();
    console.log(galleryId)

    return (
      <h1>Hello from GalleryView</h1>
    );
  }

ReactDOM.render(
    <Switch>
        <Route>
            <
        </Route>
    </Switch>

)

export default GalleryView;