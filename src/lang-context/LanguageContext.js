import React from "react";

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  setLang: () => {}
});

export default LanguageContext;

/*CREATING CONTEXT (#1) */

//createContext = what we use to make our context
// we supplied a default value as an argument
// that default value = window.navigator.language
// this will ouput the current language your broswer is set to
//This will be imported into GGC

/*NOTE */
//Context sits in its own file so that it can be directly
//imported from anywhere

/*Updating Deeply nested components (#4) ============ */
//Let's change the shate of our context (lines: 5-7)
//We can't use this.setState because it isn't a component
//There is no capability at this point to update the lang value
//Important: At least we have the shape (1st unit)(ipdater function)
//LanguageContext.js ===> GGC.js
