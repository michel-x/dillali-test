import React from "react";
import styled from 'styled-components';

interface Props {
    id: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const Label = styled.label`
    margin-left: 5px;
`;

const Root = styled.span`
    display: flex;
    align-items: center;
`;


const Switch: React.FC<Props> = (props) => {
    return (
        <Root>
            <input type="radio" id={props.id} name={props.name} value={props.value} onChange={props.onChange} checked={props.checked}/>
            <Label htmlFor={props.id}>{props.children}</Label>
        </Root>
    );
};

export default Switch;