import React, { useState } from "react"

import AddRoverPopupForm from "./components/addRoverPopupForm"

import { AppContentContainer, PageHeading, DisplayFlex, RoverContentContainer, PopUpFormContainer, StyledButton } from "./components/shared/styledComponents"

import allRovers  from "./data/rovers"


function App() {

    const [isOpen, setIsOpen] = useState(false)
    const [rovers, setRovers]= useState(allRovers)

    const togglePopup = () => {
      setIsOpen(!isOpen)
    }

    const addRover = (rover) => {
      rover.id = rovers.length + 1
      setRovers([...rovers, rover])
    }

  return (
      <AppContentContainer>
        <PageHeading>Mars Rovers</PageHeading>
        <hr/>
        <DisplayFlex>
          {!rovers && <div>There are no rovers added.</div>}
          {rovers && rovers.length > 0 &&
            rovers.map((rover => {
              return (
                <RoverContentContainer key={rover.id}>
                  <h3 style={{whiteSpace: "nowrap"}}>Rover Name: {rover.name}</h3>
                  <hr/>
                  <p>Rover Status: {rover.state}</p>
                  <br/>
              </RoverContentContainer>
              )
            }))}
            <PopUpFormContainer>
          {
            isOpen && <AddRoverPopupForm
            handleButtonClose={togglePopup}
            addRover={addRover}/>
          }
          </PopUpFormContainer>
        </DisplayFlex>
        <hr/>
        <StyledButton onClick={togglePopup}>New Rover</StyledButton>
      </AppContentContainer>
  );
}

export default App;
