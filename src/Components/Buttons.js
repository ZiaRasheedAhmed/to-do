import React from "react";

const Buttons = (props) => {
    return(
        <input type="button" value= "Add" onclick={props.click} />
    );
}
export default Buttons;