import SectionLogin from "../components/organisms/SectionLogin";
import './Home.css'
import SectionView from "../components/organisms/SectionView";

function Home() {
    return ( 
        <div id="login-home">
            <SectionLogin></SectionLogin>
            <SectionView></SectionView>
        </div>
     );
}

export default Home;