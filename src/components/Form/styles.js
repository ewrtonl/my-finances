import styled from 'styled-components'

export const Container = styled.div`
  max-width: 112rem;
  margin: 4rem auto;
  width: 98%;
  background-color: #fff;
  box-shadow: .6rem .7rem .7rem rgba(0, 0, 0, 0.06);
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3rem 2rem;
  gap: 1.5rem;

  .input-content {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.3rem;
  }

  input {
    outline: none;
    border-radius: .5rem;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    border: .1rem solid #ccc;
  }

  .radio-group {
    display: flex;
    align-items: center;

    > input {
      margin-left: 2rem;
      margin-right: .5rem;
      accent-color: black;
      margin-top: 0;
    }
  }

  button {
    padding: 1.5rem 3rem;
    border: none;
    border-radius: 1rem;
    
    color: white;
    background-color: rgb(0,128,128);

    cursor: pointer;
    transition: background .3s;
  }

  button:hover {
    background: rgba(0,128,128, .8);
  }

  @media (max-width: 760px) {
    display: grid;
  }

`