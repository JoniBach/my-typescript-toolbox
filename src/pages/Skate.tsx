import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Output } from "src/components";
import {
  FormContext,
  FormProvider,
} from "../contexts/form-context";

const PageContainer = styled(motion.div)``;

// type SkateProps = {
//   children: React.ReactNode;
// }

const dimensions = [
  { key: "Height", type: "number" },
  { key: "Shoe Size", type: "number" },
];

interface Props {
  height: number;
  shoe: number;
}

export const Skate = () => {
  const [size, setSize] = useState({ height: 0, shoe: 0 });
  const handleCalculations = () => {
    const length = () => {
      if (size.height == 0) return 0;
      else if (size.height < 140) return 70;
      else if (size.height < 150) return 78;
      else if (size.height < 160) return 80;
      else if (size.height < 170) return 81;
      else if (size.height < 180) return 82;
      else if (size.height < 190) return 83;
      else if (size.height > 190) return 84;
      else return 0;
    }
    const width = () => {
      if (size.height == 0) return 0; 
      else if (size.height < 140) return 18.0;
      else if (size.height < 150) return 20;
      else if (size.height < 160) return 22;
      else if (size.height < 170) return 22;
      else if (size.height < 180) return 22;
      else if (size.height < 190) return 22;
      else if (size.height > 190) return 22;
      else return 0; 
    }
    return {length: length(), width: width()}

  };

  return (
    <PageContainer>
      <Input
        label="Rider Height (cm)"
        type="number"
        value={size.height}
        onChange={(e: any) => setSize({ ...size, height: e.target.value })}
      />
            <Input
        label="Rider Shoe Size (cm)"
        type="number"
        value={size.height}
        onChange={(e: any) => setSize({ ...size, shoe: e.target.value })}
      />
      <Output
        label="Board length (cm)"
        value={handleCalculations().length}
        description="The length of the board from tip to tip in cm"
      />
      <Output
        label="Board width (cm)"
        value={handleCalculations().width}
        description="The Width of the board from edge to edge (down the midde) in cm"
      />
            <Output
        label="Board wheelbase (cm)"
        value={38}
        description="The distance between the trucks in cm"
      />
      <Output
        label="Truck Width (cm)"
        value={handleCalculations().width}
        description="The Width of the truck, measured from the tip of each end of the axel in cm"
      />
      <Output
        label="Truck Hanger Width (cm)"
        value={handleCalculations().width - 10}
        description="The Width of the center part of the truck, before the exelin cm"
      />
      <Output
        label="Truck Height/Clearence (cm)"
        value={5.5}
        description="the distance between the baseplate and hanger (i.e. between the wheels and the deck) in cm"
      />
    </PageContainer>
  );
};
