import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Output } from "../components";
import {
    form,
    FormContext,
    FormProvider,
} from "../contexts/form-context";

const PageContainer = styled(motion.div)``;


interface Props {
    height: number;
    shoe: number;
}

const layout = [
    {
        key: 'test 1',
        data: [
            { key: 'text', type: 'text' },
            { key: 'no', type: 'number' },
            { key: 'file', type: 'file' },
            { key: 'button', type: 'button' },
            { key: 'options', type: 'options', data: [{key: 'option 1'},{key: 'option 2'}, {key: 'option 3'}], },
            { key: 'text area', type: 'text-area' },
        ],
    },
    {
        key: 'test 2',
        data: [
            { key: 'text 1', type: 'text' },
            { key: 'text 2', type: 'text' },
            { key: 'text 3', type: 'text' },
        ],
    },
]

// console.log(useForm())

export const Test = () => {


    return (
        <PageContainer>
            {/* <button onClick={() => form({key: 'test', data: ['another test']}).create()}>test</button> */}
            <Form layoutData={layout} />
        </PageContainer>
    );
};
