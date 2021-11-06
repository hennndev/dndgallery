import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderContainer>
            <div className="container flex">
                <h2>Gallery</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding: 10px 15px;

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        li:not(:last-child) {
            margin-right: 15px;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    }
`;

export default Header
