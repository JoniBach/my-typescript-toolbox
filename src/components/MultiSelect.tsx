import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { formBuilderData } from "src/configs/formBuilder";
import styled from "styled-components";
import { Button, MultiPage } from ".";

const Container = styled(motion.select)`
  width: 100%;
  border: hidden;
  box-sizing: border-box;

  position: relative;
  display: inline-block;
  transition: all 0.3s ease-out;
  /* margin-bottom: 2px; */

  background: #fff;

  background-size: 100% 200%;
  /* background-image: linear-gradient(to right, white 50%, #0dceb3 0%, #765cf3 100%); */
  background-image: linear-gradient(to top, #ddd 50%, white 50%);

  height: 30px;
  flex-shrink: 0;

  cursor: pointer;

  .slider {
    position: absolute;
    display: block;
    left: 0;
    top: 90%;
    margin: 0 auto;
    height: 2px;
    background: linear-gradient(135deg, #0dceb3 0%, #765cf3 100%);
    width: 0%;
    transition: width 0.5s ease;
  }
  &:hover .slider {
    width: 100%;
  }
`;
const Label = styled(motion.div)`
  overflow: hidden;
  height: 0px;
  color: #444;
  margin-top: 5px;
`;

type MultiSelectTypes = {
  data: any;
  label: string;
  width?: string;
  onChange: any;
  value: any;
};

const MultiSelect = ({ label, data, width, onChange, value }: MultiSelectTypes) => {

const handleChange = (e:any) => {
  onChange(e.target.value)
}
  return (
    <div style={{ width: width || "100%" }}>
      <Label className="label" animate={{ height: 20 }}>
        <span>{label}</span>
      </Label>
      <Container value={value} onChange={(e:any) => handleChange(e)}>
        {data.map((d: any) => (
          <option value={d}>{d}</option>
        ))}
        <div className="slider" style={{ maxWidth: width || "100%" }} />
      </Container>
    </div>
  );
};

const SingleSelect = ({ label, data, width, onChange, value }: MultiSelectTypes) => {

  const handleChange = (e:any) => {
    onChange(e.target.value)
  }
    return (
      <div style={{ width: width || "100%" }}>
        <Label className="label" animate={{ height: 20 }}>
          <span>{label}</span>
        </Label>
        <Container value={value} onChange={(e:any) => handleChange(e)}>
          {data.map((d: any) => (
            <option value={d}>{d}</option>
          ))}
          <div className="slider" style={{ maxWidth: width || "100%" }} />
        </Container>
      </div>
    );
  };

export  {MultiSelect, SingleSelect}