import styled from "styled-components";
import backgroundImage from "../public/pictures/background.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: fixed;
  background-image: url(${backgroundImage.src});
  overflow: auto;
`;

export default Background;
