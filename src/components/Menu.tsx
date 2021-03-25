import React from "react";
import styled from "styled-components";

interface Props {
    labels: string[];
    activeMenu?: string;
    darkBackground: boolean;
    onClickItem: (str: string) => any;
    className?: string;
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border: 2px solid black;
    width: 100%;
    height: 400px;
`;

const Item = styled.span`
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #333;
    border-top: none;
    background-color: ${(props: any) => props.className === 'active' ? '#aaa' : 'inherit'};
    cursor: pointer;
    &:hover {
        background-color: ${(props: any) => props.className === 'active' ? '#aaa' : '#ccc'};
    };
    &:first-child {
        border-top: 1px solid #333;
    }
`;

const Menu: React.FC<Props> = ({labels, activeMenu, className, onClickItem}) => {
    return (
        <Root className={className}>
            {
                labels.map((label, index) => (
                    <Item 
                        onClick={() => onClickItem(label)}
                        key={index}
                        className={activeMenu === label ? 'active' : 'disabled'}
                    >
                        {label}
                    </Item>
                ))
            }
        </Root>
    );
};

export default Menu;