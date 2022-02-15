import styled from "styled-components";
import { Stack } from "@mui/material";

const Section = styled(Stack)`
    background: ${(props) => props.color};
    height: 15px;
    width: 100vw;
    @media (max-width: 700px) {
        background: red;
    }
`;

export default Section;
