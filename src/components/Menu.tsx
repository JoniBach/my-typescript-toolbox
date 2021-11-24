import styled from "styled-components";
import { motion } from "framer-motion";
export const SubMenu = styled(motion.div)`
  background: #ddd;
  width: 200px;
`;
export const MainMenu = styled(motion.div)`
box-shadow: 0 0 25px rgb(0 0 0 / 5%);
background: #eee;
width: 100%;
margin: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
border: 1mm ridge #dbdbdb32;
padding: 10px;
overflow-x: scroll;


  /* ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #0dceb3 0%, #765cf3 100%);
border-radius: 20px; */
}


`;
