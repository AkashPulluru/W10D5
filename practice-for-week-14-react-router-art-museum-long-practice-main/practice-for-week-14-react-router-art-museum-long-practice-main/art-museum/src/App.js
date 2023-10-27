import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import {Route, Switch} from "react-router-dom";

function App() {
  // console.log(harvardArt);
  return (
    
    <div className="page-wrapper">
      <Switch>  
        <Route path="/galleries/:galleryId" component={GalleryView}/>
        <GalleryNavigation galleries={harvardArt.records} />
      </Switch>
    </div>
    
  );
}

export default App;
