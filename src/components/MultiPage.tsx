// make a multi page type thing here with a progressable number and pagination. multi step esc. for the wizard
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from ".";
import { Group } from "./Group";
import React from 'react';

const MultiPageContainer = styled(motion.div)`
width: 100%;
height: 100px;

margin-top: 10px;
`;

const MultiPageHeader = styled(motion.div)`
display: flex;
overflow: scroll;
width: 100%;
border-top-left-radius: 10px;
border-top-right-radius: 10px;


`;
const ContentBody = styled(motion.div)`
background: #ddd;
min-height: 100%;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`;

type MultiPageProps = {
  data: any;
};

export const MultiPage = ({ data }: MultiPageProps) => {
  const [activePage, setActivePage] = useState<number>(0)

  return (
    <MultiPageContainer>
      <MultiPageHeader>
        {data.map((h: any, hi: number) => (
          <Button style={{width: 100}} selected={activePage === hi} onClick={() => setActivePage(hi)}>{h.key}</Button>
        ))}
      </MultiPageHeader>
      <ContentBody>
      <Form layoutData={[data[activePage]]} />
      {console.log(data[activePage].data)}
      </ContentBody>
    </MultiPageContainer>
  );
};
