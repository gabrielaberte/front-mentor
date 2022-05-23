import styled from "styled-components";
import image from "../../components/assets/image.png";

export const BackgroundDiv = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: space-evenly;

  h1 {
    font-size: 100px;
    margin-left: 40px;
  }

  div {
    height: 750px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
  }

  div div {
    color: grey;
    width: 550px;

    button {
      margin-top: 50px;
      margin-bottom: 100px;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 25px;
      padding-right: 25px;
      color: black;
      border: 3px solid #000000;
      font-size: 30px;
      border-radius: 15px 15px 15px 15px;
      background-color: black;
      color: white;

      &:hover {
        background-color:white;
        color: black;
      }
    }
  }
  svg {
    margin-left: 40px;
    
  }
`;
