import React from 'react'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import { navList } from '../path'

function HomePage() {
    return (
        <MainContainer>
            <Header title="Music" itemList={navList}/>
        </MainContainer>
    )
}

export default HomePage