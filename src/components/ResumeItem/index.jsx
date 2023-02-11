import { Container } from "./styles";


export function ResumeItem({ title, Icon, value }) { 
  return (
    <Container>
      <div className="header">
        <p>{title}</p>
        <Icon/>
      </div>
      <span>{value}</span>
    </Container>
  )
}