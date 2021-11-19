import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Button, Input } from ".";


const FormContainer = styled(motion.form)`

`;

type FormProps = {
  layoutData: any;
  values?: any;
  onSubmit?: any;
}

const FormComponents = ({ layoutData, values, onSubmit }: FormProps) => {
  // TODO: dynamically set this state and pass it back up

  const Multi = (input: any) => {
    const [active, setactive] = useState([])
    return <div>{input.key}<div style={{ display: 'flex' }}>{input.data.map((button: any) => <Button active={active === button.key} onClick={() => setactive(button.key)}>{button.key}</Button>)}</div></div>
  }

  const GetInput = (input: any) => {
    switch (input.type) {
      case 'text': return <Input onChange={() => console.log('change')} value={''} type='text' label={input.key} />
      case 'number': return <Input onChange={() => console.log('change')} value={''} type='number' label={input.key} />
      case 'file': return <Input onChange={() => console.log('change')} value={''} type='file' label={input.key} />
      case 'text-area': return <Input onChange={() => console.log('change')} value={''} type='text-area' label={input.key} />
      case 'toggle': return <Input onChange={() => console.log('change')} value={''} type='file' label={input.key} />
      case 'button': return <Button onClick={() => console.log('change')}  >{input.key}</Button>
      case 'options': return Multi(input)
      default: return <div>{input.key}: {input.type}</div>
    }
  }

  const MapInputs = () => {
    return layoutData.map((d: any, i: number) => (<div>
      {d.key}
      {d.data.map((input: any) => (GetInput(input)))}


    </div>))
  }

  return (
    <div>
      {MapInputs()}
    </div>
  );
};

export const Form = ({ layoutData }: FormProps) => {

  return (
    <FormContainer>
      {/* <FormProvider> */}
        <FormComponents layoutData={layoutData} />
      {/* </FormProvider> */}
    </FormContainer>
  );
};