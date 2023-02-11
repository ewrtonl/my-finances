import { Container } from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

export function GridItem({ item, onDelete }) { 
  return (
    <Container>
        <td>{item.desc}</td>
        <td>R$ {item.amount}</td>
        <td>
          {item.expense ? (
            <FaRegArrowAltCircleDown color="red" />
          ) : (
            <FaRegArrowAltCircleUp color="green" />
          )}
        </td>
        <td>
          <FaTrash onClick={() => onDelete(item.id)} />
        </td>
    </Container>
  )
}