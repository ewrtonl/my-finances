import styled from 'styled-components'

export const Container = styled.tr`

  td {
    padding-top: 1.5rem;
    text-align: start;
    word-break: break-all;
    font-size: 1.4rem;

    svg {
      width: 1.8rem;
      height: 1.8rem;

      cursor: pointer;
      transition: .2s;
    }

  }

  td:nth-child(4) {
    svg:hover {
      color: #990000;
    }
  }
  
`