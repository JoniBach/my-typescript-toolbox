import styled from "styled-components";
import { motion } from "framer-motion";

const GroupContainer = styled(motion.div)`
  display: inline-block;
  overflow: hidden;
`;

const ContentBox = styled(motion.div)`
  margin: 5px;
  padding: 10px;
  border-radius: 20px;
`;

type InputProps = {
  label: string;
  children: any;
};

export const Group = ({ label, children }: InputProps) => {
  return (
    <GroupContainer>
      <ContentBox>{children}</ContentBox>
    </GroupContainer>
  );
};
