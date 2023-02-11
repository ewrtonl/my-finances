import styled from 'styled-components'

export const Container = styled.table`

  width: 98%;
  background-color: #fff;
  padding: 2rem;
  box-shadow: .6rem .7rem .7rem rgba(0, 0, 0, 0.06);
  border-radius: .5rem;
  max-width: 112rem;
  margin: 2rem auto;

  th {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: .1rem;

    border-bottom: inset;
    padding-bottom: .5rem;
    text-align: start;
  }

  th:nth-child(3) {
    width: 15%;
  }

  th:nth-child(4) {
    width: 5%;
  }
  
`