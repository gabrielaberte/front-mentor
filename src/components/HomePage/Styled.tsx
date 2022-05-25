import styled from "styled-components";

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
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    align-items: center;
  }

  div div {
    color: grey;
    width: 700px;

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
        background-color: white;
        color: black;
      }
    }
  }

  img {
    height: 1000px;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse !important;
    display: flex !important;
    font-size: 12px !important;
    width: 100vw !important;
    justify-content: space-evenly !important;
    height: fit-content !important;

    div {
      text-align: -webkit-center;
    }

    h1 {
      margin: 3px;
      font-size: 30px;
    }
    img {
      width: 500px;
      height: 600px;
    }

    div div {
      color: grey;
      width: 200px;
      display: flex;
      flex-direction: column;

      button {
        margin-top: 50px;
        margin-bottom: 100px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 25px;
        padding-right: 25px;
        color: black;
        border: 3px solid #000000;
        font-size: 20px;
        border-radius: 15px 15px 15px 15px;
        background-color: black;
        color: white;

        &:hover {
          background-color: white;
          color: black;
        }
      }
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      width: 290px;
      margin: 1px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse !important;
    display: flex !important;
    font-size: 12px !important;
    width: 100vw !important;
    justify-content: space-evenly !important;
    height: fit-content !important;

    div {
      text-align: -webkit-center;
    }

    h1 {
      margin: 3px;
      font-size: 30px;
    }
    img {
      width: 300px;
      height: 300px;
    }

    div div {
      color: grey;
      width: 200px;
      display: flex;
      flex-direction: column;

      button {
        margin-top: 50px;
        margin-bottom: 100px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 25px;
        padding-right: 25px;
        color: black;
        border: 3px solid #000000;
        font-size: 20px;
        border-radius: 15px 15px 15px 15px;
        background-color: black;
        color: white;

        &:hover {
          background-color: white;
          color: black;
        }
      }
    }

    p {
      display: flex;
    }

    h2 {
      width: 290px;
      margin: 1px;
    }
  }
`;

export const ContainerDiv = styled.div`
  diplay: flex !important;
  justify-content: center;

  margin-right: 50px;
  margin-top: 20px;
  align-items: center;
  flex-direction: row !important;
  svg {
    flex-direction: row !important;

    margin-top: 90px;
    width: 130px;
  }

  @media (max-width: 500px) {
    diplay: flex;
    justify-content: center;
    margin: 1px !important;
    justify-content: center;
    flex-direction: row !important;

    svg {
      padding-left: 2px !important;
      margin-top: 1px;

      display: flex;
    }
    path {
      height: 10px;
      width: 10px;
    }
  }
`;
