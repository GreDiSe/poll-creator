import React from 'react';
import { LoaderContainer, Spinner } from './Loader.styles';

const Loader: React.FC = () => (
    <LoaderContainer>
        <Spinner />
    </LoaderContainer>
);

export default Loader;
