// make a multi page type thing here with a progressable number and pagination. multi step esc. for the wizard
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from ".";
import { Group } from "./Group";
import React from "react";

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
  box-sizing: border-box;
`;

const Actions = styled(motion.div)`
  display: flex;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  justify-content: space-between;
`;

type MultiPageProps = {
  data: any;
  actions?: boolean;
};

export const MultiPage = ({ data, actions }: MultiPageProps) => {
  const [activePage, setActivePage] = useState<number>(0);
  
  const canProgress = data.length >= activePage + 2;
  const cantRegress = activePage !== 0;
  const canComplete = data.length === activePage + 1

  const storyMode = true;


  const handleNext = () => {
    if (canProgress) {
      setActivePage(activePage + 1);
    }
  };

  const handleBack = () => {
    if (cantRegress) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <MultiPageContainer>
      <MultiPageHeader>
        {data.map((h: any, hi: number) => (
          <Button
            style={{ width: 100 }}
            selected={activePage === hi}
            onClick={() => setActivePage(hi)}
            // disabled
          >
            {h.key}
          </Button>
        ))}
      </MultiPageHeader>
      <ContentBody>
        <Form layoutData={[data[activePage]]} />
        <Actions>
          <Button
            style={{ width: "50%", maxWidth: 100, flexAlign: "left" }}
            onClick={() => handleBack()}
          disabled={!cantRegress}
          >
            {'<'}
          </Button>
          <Button
            style={{ width: "50%", maxWidth: 100, flexAlign: "right" }}
            onClick={() => handleNext()}
          >
           {canComplete ? 'Finish' : '>'} 
          </Button>
        </Actions>
      </ContentBody>
    </MultiPageContainer>
  );
};
