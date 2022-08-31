import './Home.scss';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';
import Popular from '../../components/Popular/Popular';
import MailList from '../../components/MailList/MailList';

const Home = () => {
    return (
      <div>
        <NavBar />
        <Header />
        <div className="home">
          <Featured />
          <h1 className="home__title">Browse by property type</h1>
          <PropertyList />
          <h1 className="home__title">Homes guests love</h1>
          <Popular/>
          <MailList/>
        </div>
      </div>
    );
}

export default Home;