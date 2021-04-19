import React, { useState } from 'react'

import { PopupContainer, StyledInput, ButtonWrapper, CancelButton, LaunchButton } from "./shared/styledComponents"

const AddRoverPopupForm = props => {

  const initialFormState = {id: null, name: "", state: ""}
  const [rover, setRover] = useState(initialFormState)

  const handleInputChange = event => {
  const {name, value} = event.target
    setRover({...rover, [name]: value})
  }

  const onHandleSubmit = event => {
    event.preventDefault()
    if(!rover.name || !rover.state) return
    props.addRover(rover)
    setRover(initialFormState)
  }

  return (
    <PopupContainer>
      <h3>New Rover</h3>
      <hr/>
      <form onSubmit={onHandleSubmit}>
        <label>Launch new Rover to Mars</label>
        <StyledInput
          type="text"
          name="name"
          placeholder={"Rover Name"}
          value={rover.name}
          onChange={handleInputChange}
        />
        <StyledInput
          type="text"
          name="state"
          placeholder={"Rover Status"}
          value={rover.state}
          onChange={handleInputChange}
        />
        <ButtonWrapper>
          <CancelButton onClick={props.handleButtonClose}>Cancel</CancelButton>
          <LaunchButton type="submit">Launch</LaunchButton>
        </ButtonWrapper>
    </form>
  </PopupContainer>
  )
}

export default AddRoverPopupForm
