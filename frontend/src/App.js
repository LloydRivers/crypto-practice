import { NFTCard } from "./Components";
import { useEffect } from "react";

import { getData } from "utils/API/FetchNFTS/getData.js";

function App() {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <NFTCard />
    </div>
  );
}

export default App;
