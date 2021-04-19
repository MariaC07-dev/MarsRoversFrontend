import styled from "styled-components";

export const AppContentContainer = styled.div`
  border: 1px solid black;
  margin-top: 90px;
  margin-left:10%;
  width: 80%;
`;

export const PageHeading = styled.h1`
  text-align: center
`;

export const RoverContentContainer = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 200px;
  height: 200px;
  margin: 40px;
  position: relative;
`;

export const PopupContainer = styled.div`
  border: 1px solid black;
  padding: 15px;
  cursor: pointer;
  width: 250px;
  height: 250px;
`;

export const PopUpFormContainer = styled.div`
  position: absolute;
  top: 21%;
  left: 75%;
  flex-wrap: wrap;
  flex: 200px;
`;

export const DisplayFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 200px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 7px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color:#a9a9a9;
  padding: 2px ;
  margin-left: 90%;
  margin-bottom: 10px;
  padding:15px;
`;

export const CancelButton = styled.button`
  background-color:#a9a9a9;
  margin-right: 120px;
  padding: 7px;
`;

export const LaunchButton = styled.button`
  background-color:#a9a9a9;
`;

export const StyledInput = styled.input`
  cursor: pointer;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #dedede;
  background-color:#a9a9a9;
`;
