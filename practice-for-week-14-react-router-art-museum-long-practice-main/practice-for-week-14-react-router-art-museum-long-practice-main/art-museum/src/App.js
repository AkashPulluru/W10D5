import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryNavigation/GalleryView";
import {Route, Switch, Redirect} from "react-router-dom";
import Error from "./Error"

function App() {
  // console.log(harvardArt);
  return (
    
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>  
        
      <Route path="/error" component={Error}/> 
        
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records}/>
        </Route>

        

        <Route exact path="/">
          <h2>
            Look but Don't Touch. Please Select a Gallery in the navigation bar. 
          </h2>
        </Route> 

        <Redirect to="/error"/>
      </Switch>
    </div>
    
  );
}

export default App;
