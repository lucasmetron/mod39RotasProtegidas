import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Aulas from './components/Aulas';
import Aula from './components/Aula';
import Sobre from './components/Sobre';
import Assistir from './components/Assistir';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
//BrowserRouter é responsavel por gerenciar as rotas (as é para apelidar o BrouserRouter)
//Route é onde iremos setar a rota
//Switch vai acessar a primeira rota que der match e nao vai tentar outras

function App() {
  return (

    <BrowserRouter>
      <div className="app" >
        <Nav></Nav>

        <Switch> {/*Componente para fazer o switch das rotas*/}

          <Route exact path='/'> {/* passado o exact para acessar a rota exata*/}
            <Home></Home>
          </Route>

          <Route path='/aulas/:id'>
            <Aula></Aula>
          </Route>

          <Route exact path='/aulas'> {/* passado o exact para acessar a rota exata*/}
            <Aulas></Aulas>
          </Route>

          <Route exact path='/sobre'> {/* passado o exact para acessar a rota exata*/}
            <Sobre></Sobre>
          </Route>

          <Route exact path='/assistir'>
            <Assistir></Assistir>
          </Route>

          <Route path='*'>
            <div className='center'>Pagina nao encotrada</div>
          </Route>

        </Switch>
      </div>

    </BrowserRouter>

  );
}

export default App;
