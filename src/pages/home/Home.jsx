import './Home.scss';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <div className="home">
                <Featured/>
            </div>
        </div>
    )
}

export default Home;