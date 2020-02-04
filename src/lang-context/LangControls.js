import React from "react";
import LanguageContext from "./LanguageContext";

//console.log(LanguageContext)

export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {/*{function renderProp() { */}
      {value => {
        //console.log(value)
        return (
          <>
            <button
              disabled={value.lang === "en-GB"}
              onClick={() => props.onSetLang("en-GB")}
            >
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button
              disabled={value.lang === "en-US"}
              onClick={() => props.onSetLang("en-US")}
            >
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button
              disabled={value.lang === "ko"}
              onClick={() => props.onSetLang("ko")}
            >
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}

/*SETTING UP OUR STARTING POINT (#7)==== */

//LangControls contains buttons to switch to the desired language
//Is the child of AppLang

/*READING CONTEXT W/ RENDER PROPS (#1) ============*/

/*Render Props */
//This is an alternative to static contextType - as it can be used function components
//We combine context (LanguageContext.js) with render props to read out data out of the context
//The method is to use context consumer
//Every context you create has a component called Consumer
//That we can use with JSX

/*Note */
//render props is a prop that is a function (like a callback)
//Which we return JSX from
//It can me an any named prop (LanguageContext.Consumer)

/*Consumer */
// LanguageContext.Consumer is a component
// it has children prop = a function that returns more JSX (renderProp())
//It is like mix of callbackProp and childrenProp
//We've moved the JSX we want to return into the return from the render prop
//To get the value out of the consumer = we accept as an argument to the render prop
//We'll also refactored it to an arraw function (more terse)

/*Consumer Part II */
//In DevTools = it's logging the object inside the context
//we now have access to the value inside context in the function component
//So we use the value to disable the active button feature

/*Updating Context (#2) ============ */

/*Provider Part IIII */
//Now update LangControls.js to trigger props.onSetLang
//when buttons are clicked (Lines: 16, 25, 34 )
//Now the language switcher is working in full! <3

/*Provider Part 5 (overview) */
//Clicking on button triggers onClick
//which then fires props.onSetLang with a language
//which then fires handleSetLang inside AppLang = updating the state with the new lang
//After state is updated - a new render is triggered
//passing the new value to the provider
//which the GGC component will read to display the current language
