import React, { Component } from "react";
import languageSpecifyCopy from "../languageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;
  render() {
    const copy = languageSpecifyCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button onClick={() => this.context.setLang("klingon")}>
          Klingon! {/* yes I know it's a vulcan salut but star-wars */}
          <span role="img" aria-label="klingon">
            🖖
          </span>
        </button>
      </section>
    );
  }
}

export default GreatGrandChild;

/*SETTING UP OUR STARTING POINT (#4) =====  */

//imported lSC so we can use it as a prop inside our section
//Similar to defaultProps but lSC isn't a prop so we can't use defaultProps

/*Why we won't use defaultProps */
//If we attempt to specify a key inside lSC object that doesn't exist = it could return undefined
//if copy === undefined - our app could throw errors (undefined.title & undefined.body)

/*Why we're using || {} logic */
//it's giving us a safety net to avoid dealing with undefined
//& instead use an empty {} in the worst case
//{}.title & {}.body won't throw an error if key doesn't exist

/*CREATING CONTEXT (#2) =========== */

/*static contextType */
//We imported context (LanguageContext.js)
//With it imported we can attach it to our class component
//We can assign our context to a static property = contextType
//This will give us a new instance property (this.context)
//Now we're able to switch out the hardcoded string (['en-US'])
//For the value inside context (window.navigator.language)

/*NOTE */
//static ContextType doesn't work in every sitatuion
//can't be used by function components (only class)
//Alternative = render props
//More about render props inside LangControls.js

/*Updating Deeply nested components (#3) ============ */
// added the btton we intend to add to this new feature (lines: 13-17)
//We have the handleSetLang(AppLang.js)
//How can we get that function into GGC
//Issue:
//We don't want to prop drill the method as a callback prop
//through both the Child and the GrandChild = cumbersome
//Fix:
//Solution is to "piggy-back" on the context
// GGC.js ===> LanguageContext.js

/*Updating Deeply nested components (#5) ============ */
//With the shape of the updater function in place (LanguageContext.js)
//We can use the updater function with the button in GGC.js (line: 13)
//Because setLang function is on context
//We can try to call it when te button is clicked & try to change the language to Klingon
//What happens:
//If you try to click the klingon button (nothing changes)
//But more importantly nothing breaks!
//Issue:
//If you go into LanguageContext.js & comment out setLang()
//It'll cause a TypeError: '_this.context.setLang is not a function
//Solution:
//We need the updater function in place
//Even when it's not doing anything (prevent potential errors)
//In a more broad concept this is called "contract"
// GGC.js ===> AppLang.js
