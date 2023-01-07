// eslint-disable-next-line
import React, { useContext } from "react";
import StylesContext from "./StylesContext"


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <br />
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}