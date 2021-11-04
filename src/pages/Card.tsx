import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Output } from "../components";
import { form, FormContext, FormProvider } from "../contexts/form-context";

import blank from "../utils/CardImages/yugioh-card-template_base.png";
import trapFilter from "../utils/CardImages/yugioh-card-template_trap.png";
import spellFilter from "../utils/CardImages/yugioh-card-template_spell.png";
import monsterFilter from "../utils/CardImages/yugioh-card-template_monster.png";
import star from "../utils/CardImages/star.png";

import html2canvas from "html2canvas";

import dark from "../utils/CardImages/DARK.png";
import light from "../utils/CardImages/LIGHT.png";
import trap from "../utils/CardImages/TRAP.png";
import spell from "../utils/CardImages/SPELL.png";
import earth from "../utils/CardImages/EARTH.png";
import wind from "../utils/CardImages/WIND.png";
import water from "../utils/CardImages/WATER.png";
import fire from "../utils/CardImages/FIRE.png";
import { Checkbox } from "../components/Checkbox";

const PageContainer = styled(motion.div)``;
const Div = styled(motion.div)``;

const CardContainer = styled(motion.div)`
  position: relative;
  width: 250px;
  height: 370px;
`;

const Art = styled(motion.div)`
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  width: 90%;
  height: 60%;
  top: 17%;
`;

const CardTemplate = styled(motion.div)`
  position: absolute;
  background-repeat: no-repeat;
  background-size: auto 100%;
  width: 100%;
  height: 100%;
  background-image: url(${blank});
`;

const CardFilter = styled(motion.div)`
  position: absolute;
  background-repeat: no-repeat;
  background-size: auto 100%;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const TextContent = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;


`;

const Title = styled(motion.div)`
  position: absolute;
  text-align: left;
  padding: 2%;
  width: 75%;
  height: 4%;
  top: 4%;
  left: 8%;
  /* background: blue; */
  overflow: hidden;
`;
const Description = styled(motion.div)`
  position: absolute;
  /* background: blue; */
  padding: 2%;
  width: 84%;
  height: 16%;
  bottom: 6%;
  left: 8%;
  overflow: hidden;
  font-size: 8px;
`;
const Stats = styled(motion.div)`
  position: absolute;
  /* background: blue; */
  border-top: 1px solid black;
  padding: 2%;
  width: 80%;
  height: 2%;
  bottom: 6%;
  left: 8%;
  overflow: hidden;
  font-size: 8px;
  text-align: right;
`;
const Attribute = styled(motion.div)`
  /* background: blue; */

  position: absolute;
  /* background: blue; */
  top: 4.8%;
  right: 5.9%;
  height: 6.8%;
  width: 12%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
`;
const StarContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  /* background: blue; */
  bottom: 6%;
  top: 12%;
  right: 8%;
  width: 80%;
  height: 5%;
  /* overflow: hidden; */
`;
const Star = styled(motion.div)`
  /* background: blue; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  width: 11%;
  overflow: hidden;
  border-radius: 50%;
  background-image: url(${star});
`;
const Flex = styled(motion.div)`
display: flex;
align-items: center;
`;

export const Card = () => {
    const [attribute, setattribute] = useState('light');
    const [filter, setfilter] = useState(monsterFilter);

    useEffect(() => {
        if (attribute === 'trap') {
            setfilter(trapFilter)

        } else if (attribute === 'spell') {
            setfilter(spellFilter)

        } else {
            setfilter(monsterFilter)

        }
    }, [attribute])

    const handleCardType = (type: string) => {
        switch (type) {
            case "trap":
                return { type: type, filter: trapFilter, attribute: type };
            case "spell":
                return { type: type, filter: spellFilter, attribute: type };
            case "monster":
                return { type: type, filter: monsterFilter, attribute: attribute };
            default:
                return { type: "monster", filter: monsterFilter };
        }
    };

    const handleCardAttribute = (type: string) => {
        switch (type) {

            case "dark":
                return dark;
            case "light":
                return light;
            case "spell":
                return spell;
            case "trap":
                return trap;
            case "earth":
                return earth;
            case "wind":
                return wind;
            case "water":
                return water;
            case "fire":
                return fire;

            default: return trap
        }
    };
    const [cardType, setCardType] = useState(handleCardType(""));
    //   "https://news.otakukart.com/wp-content/uploads/2019/07/onepunchmanblogroll-1554773020601.jpg"
    const [art, setArt] = useState<any | null>();
    const [description, setDescription] = useState('description');
    const [title, setTitle] = useState("title");
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [level, setLevel] = useState(1);
    
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= level; i++) {
        stars.push(<Star />);
    }

    
    const handleSave = () => {
        const capture = document.querySelector("#capture") as HTMLCanvasElement;
        if (capture) {
            html2canvas(capture).then(canvas => {
                const newFile = canvas.toDataURL('png');
                var a = document.createElement('a')
                a.href = newFile;
                a.download = title + '.png';
                a.click();
            });
        }

    }
    const [type, setType] = useState('dragon');
    const [effect, setEffect] = useState(true);

    return (
        <Div>
            <CardContainer id="capture">
                {art && <Art style={{ backgroundImage: `url(${URL.createObjectURL(art)})` }} />}

                <CardTemplate />
                <CardFilter style={{ backgroundImage: `url(${filter})` }} />
                <TextContent>
                    <Title>{title}</Title>
                    <Description>
                        <strong>
                            [{type}{type && '/Effect'}]
                        </strong>
                        <br/>
                        {description}</Description>
                    {cardType.type === 'monster' && <Stats>ATK/{atk} DEF/{def}</Stats>}

                    <Attribute style={{ backgroundImage: `url(${handleCardAttribute(attribute)})` }} />
                    <StarContainer>
                        {cardType.type === 'monster' && stars}
                    </StarContainer>
                </TextContent>
            </CardContainer>
            Attributes
            <Flex>
                <Button onClick={() => setattribute('light')}>Light</Button>
                <Button onClick={() => setattribute('dark')}>Dark</Button>
                <Button onClick={() => setattribute('wind')}>Wind</Button>
                <Button onClick={() => setattribute('earth')}>Earth</Button>
                <Button onClick={() => setattribute('water')}>Water</Button>
                <Button onClick={() => setattribute('fire')}>Fire</Button>
                <Button onClick={() => setattribute('spell')}>Spell</Button>
                <Button onClick={() => setattribute('trap')}>Trap</Button>
            </Flex>

            <br />

            {/* <input value={inputArt} placeholder='cover art url' onChange={(e) => setInputArt(e.target.value)} />
<button onClick={() => setArt(inputArt)}>upload</button> */}
            <Input type='text' label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input label='Description' type='text-area' value={description} onChange={(e) => setDescription(e.target.value)} />
            <Input type='text' label='Type' value={type} onChange={(e) => setType(e.target.value)} />
            <Checkbox label='Effect' value={effect} onChange={(e: boolean) => setEffect(e)} />
            <br />
            <Input type='number' label='level' value={level} onChange={(e: any) => setLevel(e.target.value)} />

            <Flex>
                <Button onClick={() => setLevel(level - 1)}>-</Button>
                <Button onClick={() => setLevel(level + 1)}>+</Button>
            </Flex>

            <br />
            <Flex>
                <Input value={atk} type='number' label='Attack' onChange={(e) => setAtk(e.target.value)} />
                <Input value={def} type='number' label='Defence' onChange={(e) => setDef(e.target.value)} />

            </Flex>

            <Input
                label='Upload Image'
                type='file'
                // value={art}
                onChange={(e: any) => setArt(e)} />

            <Button onClick={() => handleSave()}>save</Button>


        </Div>
    );
};
