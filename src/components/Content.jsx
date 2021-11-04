import styled from "styled-components";
import { motion } from "framer-motion";
export const Content = styled(motion.div)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: white;

width: 80vw;
height: 80vh;
border-radius: 20px;
box-shadow: 0 0 25px rgb(0 0 0 / 5%);

display: flex;

overflow: hidden;
`;
