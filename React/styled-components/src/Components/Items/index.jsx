import React from "react";
import styled from "styled-components";
import Item from "../item";
import ImageFilter from "../ImageFilter";

const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 4px 4px 20px 0 rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px;
    padding: 10px;
    font-size: 12px;
`
export default function Items(props) {
    return (
        <ItemsContainer>
            {ImageFilter(props.type)}
            <Item {...props} />
            <span>{props.date}</span>
        </ItemsContainer>
    )
}