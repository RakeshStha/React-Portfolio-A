import React from 'react'

import styled from 'styled-components';

const Styles = styled.div`
.footer {
    text-align: center;
    background-color: grey;
    margin:auto;
}

`
export const Footer = () => (
    <Styles>   
            <p className="footer"><b>Portfolio 2020 Copyright All Right Reserved | Design and developed by <a href="https://www.shrestharakesh.com.np">Rakesh Shrestha</a>.</b></p>     
    </Styles>
    
)