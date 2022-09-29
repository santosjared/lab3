import { Theme } from './theme/Theme';
import Palette from './components/palette/index';
import ViewPort from './components/viewport/viewport.css';
function App() {
  return (
    <div className='App'>
      <Theme>
        {/*<Palette/>*/}
        {<ViewPort/>}

        </Theme>
    </div>
  );
}

export default App;
