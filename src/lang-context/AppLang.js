import React, { Component } from "react";
import Child from "./Child";
import LangControls from "./LangControls";
import LanguageContext from "./LanguageContext";

export default class AppLang extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = lang => {
    this.setState({ lang });
  };

  render() {
    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang
    };
    return (
      //<LanguageContext.Provider>
      //<LanguageContext.Provider
      //value={{land: window.navigator.language}}>
      <LanguageContext.Provider value={contextValue}>
        <div className="AppLang">
          <LangControls onSetLang={this.handleSetLang} />
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}

//AppLang is the root of our tree

/*STARTING POINT (#1)===== */
/*STARTING POINT (#6) = import Child component to connect all of the tree together*/
/*STARTING POINT (#8) = importing LangControls into AppLang */

/*UPDATING CONTEXT (#1) ====== */

/*Provider */
//When adding a Provider into a component tree
//Context provided by the provider is only avail. in the subtree
//e.g, any component that wants to read the context needs to be
// a descendant of the provider
//if we put provider in Lang controls = changes won't be avail in GGC
//because GGC isn't a subtree - so we put it in AppLang(common ancestor for both components)
//Steps:
//wrapped subtree that needs the updated context values in LanguageContext.Provider
//Error:
// By adding context provider - we've changed the value that was set inside
//createContext(value)
//Fix:
//we need to add the data back in by providing a called value
// to the provider with the same object we expect (line: 10-11)

/*Provider Part II */
//Inside ReactDevTools = Context.Provider is present with 2 props (value & children)
//In chromeDevTools = Provider isn't present (doesn't translate to an HTML element)
//Fix:
//Move the value into the component state so we can update it
// Adding Lines: 7-9 / 10-13 / 18 Removed Lines: 16-17

/*Provider Part III */
//After fix:
//With the value stored in some state
//We can use a callback prop - passed into LangControls.js
//To be triggered when a user clicks a button (lines: 11-13)
//Pass the callback prop to LangControls as a prop called onSetLang (line:26)
//Next part = AppLang.js ====> LangControls.js

/*Updating Deeply nested components (#1) ============ */

/*PART I */
//We need the class component that wraps a subtree in a provider instance
//To use its own state to implement the updater function
//createContext makes the context with 2pcs (value & updater function)
//Deeply nested components can read the value (listen to the headset)
//These componenents can also call the updater function (but it won't do anything)
//Stateful provider component intercepts the context for a subtree (2nd proccessing unit)
//It changes the context to make the updater function work by using its own state
//Overall shape of the context ovject remains exactly the same

/*Updating Deeply nested components (#6) ============ */
//AppLang will be the 2nd unit
//Using the provider to provide context to a subtree
//Can implement the setLang button using state
//We'll use the handleSetLang() to implement setLang on the context for the subtree (lines: 18, 24, 29)
//Now if you click the Klingon button the Language changes!!!!

/*Updating Deeply nested components (#7 OVERVIEW) ============ */
//Context doesn't provide a mechanism for deeply nested components
//to update the value stored within context
//For deeply nested compo to update context values
//A stateful provider comp needs to implement the updater callback function using state
//The implemented updater callback function needs to be avail. as part of the context's value
//So that consumers can call it
//Last: You could say that we need the context to piggyback off a components state
