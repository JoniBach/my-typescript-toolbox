import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Output } from "src/components";

import { layout } from "src/configs/test";

const PageContainer = styled(motion.div)``;

interface Props {
  height: number;
  shoe: number;
}

// console.log(useForm())

export const Test = () => {
  return (
    <PageContainer>
      {/* <button onClick={() => form({key: 'test', data: ['another test']}).create()}>test</button> */}
      <Form layoutData={layout} />
    </PageContainer>
  );
};
