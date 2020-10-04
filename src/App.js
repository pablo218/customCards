import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import ImagesCollection from "./Pages/ImagesCollection";
import SingleImage from "./Pages/SingleImage";
import Button from "./Shared/UI/Button"
import { Error } from './Pages/error'
import { Language } from "./Shared/Context";

import "./sass/main.scss";

export default function App() {
  const [english, setLanguage] = useState(false);

  const setLang = () => {
    setLanguage((eng) => !eng);
  };


  return (
    <Language.Provider value={{ english: english, setLang }}>
      <div className="language printing">
        <Button clicked={setLang}>
          {english ? "Español" : "English"}
        </Button>
      </div>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ImagesCollection} />
          <Route path="/error" exact component={Error} />
          <Route path="/:id" exact component={SingleImage} />
        </Switch>
      </div>
    </Language.Provider>
  );
}
