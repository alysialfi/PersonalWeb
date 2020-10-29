import React, {useEffect} from 'react';
import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component"
import MyCarousel from "./components/my-carousel/mycarousel.component"
import Footer from "./components/my-carousel/footer"
import MyTitleMessage from "./components/title-message/titlemessage.component"
import AbootMe from "./pages/about.component"
import Partic from "./components/my-carousel/coba_particle"
import Proj from "./pages/project.component"
import Porto from "./pages/portofolio.component"
import Work from "./pages/workexperience.component"
import Achieve from "./pages/achievements.component"

const App = () => {
 

  return (

    <div>
      <MyNavbar/>
      <MyCarousel/>
      <MyTitleMessage/>
      <Partic/>
      <AbootMe/>
      <Proj/>
      <Porto/>
      <Work/>
      <Achieve/>
      <Footer/>
      {/* <CS/>  */}

    </div>
  );
}

export default App;
