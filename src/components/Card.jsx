import { motion } from "framer-motion";
import styled from "styled-components";
import { query } from "../../utils/utils";

export const Card = styled(motion.div)`
  background: #fff;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  overflow: hidden;
  position: relative;

  cursor: pointer;

  &:hover .slider {
    width: 20px;
  }

  .slider {
    display: block;
    left: 0;
    top: 90%;
    margin: 0 auto;
    background: linear-gradient(135deg, #0dceb3 0%, #765cf3 100%);
    width: 0%;
    transition: width 0.5s ease;
  }
  .card-content {
    padding: 10px;
    flex-direction: column;
    width: 100%;
  }
`;
