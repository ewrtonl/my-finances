import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  box-shadow: .6rem .7rem .7rem rgba(0, 0, 0, 0.03);

  border-radius: .5rem;
  padding: .5rem 1rem 2rem 1rem;
  width: 29rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 1.5rem 1.5rem .5rem 1.5rem;

    border-bottom: .2rem dotted rgba(0, 0, 0, .1);

    > svg {
      color: black;
      width: 2rem;
      height: 2rem;
    }

    > p {
      font-size: 2rem;
    }
  }

  span {
    padding-top: 1rem;
    font-size: 3rem;
    font-weight: bold;
  }

`