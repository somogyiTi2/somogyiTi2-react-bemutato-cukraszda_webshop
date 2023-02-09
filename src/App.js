import './App.css';
import Header from './component/Header';
import Cards from './component/Cards';
import Text from './component/Text';
import { useState } from 'react';
import { PostNewCoponent } from './component/PostNewComponent/PostNewCoponent';
import Kosar from './component/Kosar/Kosar';
import ItemsContext from './store/ItemsContext';
import RendelesekWindow from './component/Rendelesk/RendelesekWindow';
import LoginAdmin from './component/Login/LoginAdmin';

function App() {
  /*ÚJ ELEM*/
  const [newDataWindowShow, setNewDataWindowShow] = useState(false);

  const showNewDataWindowHandler = () => {
    setNewDataWindowShow(true);
  };
  const hideNewDataWindowHandler = () => {
    setNewDataWindowShow(false);
  };

  /*KOSAR */
  const [kosar, setKosar] = useState(false);

  const showkosar = () => {
    setKosar(true);
  }

  const hidenKosar = () => {
    setKosar(false);
  }

  /*Termekek*/
  const [Rendelesk, setRendelesek] = useState(false);

  const showRendelesek = () => {
    setRendelesek(true);
  }
  const hidenRendelesek = () => {
    setRendelesek(false);
  }

  /*Bejelentkezés*/
  const [Login, setLogin] = useState(false);

  const showLogin = () => {
    setLogin(true);
  }
  const hidenLogin = () => {
    setLogin(false);
  }


  return (
    <ItemsContext>
      <div>
        {Login && <LoginAdmin onClose={hidenLogin} />}
        {newDataWindowShow && <PostNewCoponent onClose={hideNewDataWindowHandler} />}
        {kosar && <Kosar onClose={hidenKosar} />}
        {/* {Rendelesk && <RendelesekWindow onClose={hidenRendelesek}/>} */}
        <Header onNDOpen={showNewDataWindowHandler} onKosarOpen={showkosar} onRendelesekOpen={showRendelesek} onRendelesekClose={hidenRendelesek} showLogin={showLogin}/>
        {Rendelesk ?
          <RendelesekWindow onClose={hidenRendelesek} />
          :
          <>
            <Text />
            <Cards />
          </>}

      </div>
    </ItemsContext>
  )
}

export default App;
