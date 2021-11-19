import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "src/components/Button"

const GroupContainer = styled(motion.div)`
  display: inline-block;
  overflow: hidden;

 

`;

const ContentBox = styled(motion.div)`
  margin: 5px;
  padding: 10px;
  border: 5px dotted #aaa;
  border-radius: 20px;

`;

type InputProps = {
  label: string,
  children: any,
}

export const Group = ({ label, children }: InputProps) => {
  return (
    <GroupContainer>
        {label}
        
        <ContentBox>
            {children}
        </ContentBox>
    </GroupContainer>
  );
};
