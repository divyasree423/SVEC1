import React from 'react'
import CorporationBank from './CorporationBank'
import AndhraBank from './AndhraBank';

function UnionBank() {
    return (
        <div>
            <h1>UnionBank</h1>
            <AndhraBank  location="Vijayawada"/>
            <CorporationBank location="Tirupathi"/>
        </div>
    )
}

export default UnionBank;
