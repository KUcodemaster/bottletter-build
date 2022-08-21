import React from "react";
import { StyledButton } from "../styledComponent/style";

export function Button({ children, color, background }) {
    return (
        <StyledButton color={color} background={background} Î>
            {children}
        </StyledButton>
    );
}


