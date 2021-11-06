import { Container } from '@material-ui/core'
import React from 'react'
import ListeDesCandidatures from '../tables/ListeDesCandidatures' 
import ListeDesCandidaturesAvancee from '../tables/ListeDesCandidaturesAvancee'
export default function Candidature() {
    return (
        <body>
        <div>

            <Container>
            {/* <ListeDesCandidatures/> */}
            <ListeDesCandidaturesAvancee/>
            </Container>
        </div>
        </body>
    )
}
