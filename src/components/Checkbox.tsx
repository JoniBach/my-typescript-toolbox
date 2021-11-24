import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CheckboxContainer = styled(motion.button)`
  border: 1px solid grey;
  border-radius: 2px;
  width: 20px;
  height: 20px;
  margin: 5px;
  transition: 0.5s;
  background-size: 200% 200%;
  cursor: pointer;

  ${(e: { fill: any }) => {
    if (e.fill) {
      return `
      background: linear-gradient(135deg, #0dceb3 0%, #765cf3 100%);

      `;
    } else {
      return ` 
      background: linear-gradient(135deg, #fff 0%, #fff 100%);

      `;
    }
  }}
`;
type CheckboxProps = {
  label: string;
  value: any;
  onChange: (event: boolean) => void;
};

export const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  const [checkboxActive, setcheckboxActive] = useState(value);
  useEffect(() => {
    onChange(checkboxActive);
  }, [checkboxActive]);
  return (
    <>
      <label>
        <CheckboxContainer
          onClick={() => setcheckboxActive(!checkboxActive)}
          fill={checkboxActive}
        >
          {" "}
        </CheckboxContainer>
        {label}
      </label>
    </>
  );
};
