import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    background: red;
    border: 1px solid blue;
    color: blue;
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Button;
