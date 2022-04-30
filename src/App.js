import Navigation from "./components/Navigation/Navigation";
import { Router } from "./components/Router/Router";
import { GeneralBlock } from "./styled-components";

function App() {
  return (
    <GeneralBlock
      stGeneralPos="relative"
      stGeneralDirect="column"
      stGeneralFF="Radio Canada"
      stGeneralMinWidth="100vh"
      stGeneralWidth="100%"
      stGeneralJust="flex-start"
      stGeneralWrap="wrap"
      stGeneralPad="0 20px"
    >
      <Navigation />
      <Router />
    </GeneralBlock>
  );
}

export default App;
