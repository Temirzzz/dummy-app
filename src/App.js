import Navigation from "./components/Navigation/Navigation";
import { Router } from "./components/Router/Router";
import { GeneralBlock } from "./styled-components";

function App() {
  return (
    <GeneralBlock
      stGeneralPos="relative"
      stGeneralDirect="column"
      stGeneralFF="Radio Canada"
      stGeneralHeight="100vh"
      stGeneralWidth="100%"
      stGeneralJusth="flex-start"
    >
      <Navigation />
      <Router />
    </GeneralBlock>
  );
}

export default App;
