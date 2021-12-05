import { motion } from "framer-motion";
import { formBuilderData } from "src/configs/formBuilder";
import styled from "styled-components";
import { MultiPage } from ".";

const Container = styled(motion.div)``;


export const Template = () => {
  return (
    <Container>
      <MultiPage data={formBuilderData} />
        
    </Container>
  );
};
