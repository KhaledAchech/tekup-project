import React from 'react';
import { Container } from '@material-ui/core'

import ListeDesCandidats from '../tables/ListeDesCandidats'

export default function Candidats() {
    return (
        <div>
            <Container>
            <ListeDesCandidats/>
            </Container>
        </div>
    )
}
