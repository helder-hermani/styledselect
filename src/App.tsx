import {StyledSelectContextProvider} from '../src/components/StyledSelect/StyledSelectContext';
import {Home} from '../src/pages/Home';

function App() {
  return (
    <StyledSelectContextProvider>
      <Home />
    </StyledSelectContextProvider>
  );
}

export default App;
