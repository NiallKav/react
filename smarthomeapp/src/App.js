import 'semantic-ui-css/semantic.min.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';


      function App() {
        return (
          <BrowserRouter>
           <Layout />
        </BrowserRouter>
        );
      }

export default App;