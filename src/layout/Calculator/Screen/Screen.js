import React from 'react';
import ResultScreen from './ResultScreen.js/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

const Screen = (props) => (
    <section className="screen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen> 
    </section>
)

export default Screen;