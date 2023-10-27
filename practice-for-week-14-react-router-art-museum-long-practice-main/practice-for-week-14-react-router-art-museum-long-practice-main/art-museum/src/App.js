import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import {Route, Switch} from "react-router-dom";

function App() {
  // console.log(harvardArt);
  return (
    
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>  
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records}/>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
