import React from "react";
import styled from "styled-components";
import Items from "../Items";

const Item = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
export default ({ type, from, value }) => {
    return (
        <Item>
            <span>{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Item>
    )
}