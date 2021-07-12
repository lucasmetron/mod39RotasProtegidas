import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Aula from './components/Aulas';
import Sobre from './components/Sobre';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//BrowserRouter é responsavel por gerenciar as rotas (as é para apelidar o BrouserRouter)
//Route é onde iremos setar a rota
//Switch vai acessar a primeira rota que der match e nao vai tentar outras

function App() {
  return (

    <Router>
      <div className="app" >
        <Nav></Nav>

        <Switch> {/*Componente para fazer o switch das rotas*/}

          <Route exact path='/'> {/* passado o exact para acessar a rota exata*/}
            <Home></Home>
          </Route>
          <Route exact path='/aulas'> {/* passado o exact para acessar a rota exata*/}
            <Aula></Aula>
          </Route>

          <Route exact path='/sobre'> {/* passado o exact para acessar a rota exata*/}
            <Sobre></Sobre>
          </Route>

          <Route exact path='/aulas/a'>
            <div>
              Coutedo
            </div>
          </Route>

          <Route path='*'>
            <div>Pagina nao encotrada</div>
          </Route>

        </Switch>
      </div>

    </Router>

  );
}

export default App;
