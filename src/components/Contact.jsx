import styled from "styled-components";
import Section from "./Section";

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #0f172a;
`;

const Info = styled.div`
  font-size: 18px;
  color: #475569;
`;

export default function Contact() {
  return (
    <Section>
      <Title>Contato</Title>

      <Info>
        <p>Email: gabrielgoldonif@email.com</p>
        <p>GitHub: github.com/gabrielgoldonif-create</p>
      </Info>
    </Section>
  );
}