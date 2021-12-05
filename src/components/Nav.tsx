import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "src/components/Button";
import { Link } from "@reach/router";

const NavContainer = styled(motion.label)`
  flex-direction: row;
  background: transparent;
  .nav-button {
    background: transparent;
  }
  .menu {
    overflow: hidden;
    background: grey;
    margin: 20;
  }


`;

type NavProps = {
  buttons: any;
};
type BtnProps = {
  link: string;
  label: string;
};

const buttonStyle = {
}

export const Nav = ({ buttons }: NavProps) => {
  const [state, setstate] = useState<boolean>(false)
  return (
    <NavContainer>
      <Button initial={{width: 0}} animate={{width: state ? 100 : 30, borderRadius: '50px'}} onClick={() => setstate(!state)}>{state? 'close' : '+'}</Button>
      <motion.div className='menu'  animate={{width: state ? 100 : 0}}>
      {buttons.map(({ label, link }: BtnProps) => (
        <Link to={link}>
          <Button onClick={() => null} style={buttonStyle}>{label}</Button>
        </Link>
      ))}
        </motion.div>
 
    </NavContainer>
  );
};
