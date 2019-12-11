import React from 'react';
import Directory from '../../components/directory/directory.component';
import styled from 'styled-components'

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomePage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
);

export default HomePage;