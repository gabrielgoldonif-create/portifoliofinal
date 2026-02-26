import styled from "styled-components";
import Section from "./Section";
import foto from "../assets/foto.jpg";

const Container = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Photo = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #2563eb;
`;

const Text = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #475569;
`;

export default function About() {
  return (
    <Section bg="#f1f5f9">
      <Container>
        <Photo src={foto} alt="Gabriel Goldoni" />

        <Text>
          <Title>Sobre Mim</Title>

          <Paragraph>
            Sou programador front-end. Com habilidades no desenvolvimento de HTML, CSS, JavaScript, React, TypeScrit, Next.js, entre outras.
          </Paragraph>

          <Paragraph>
            Busco desenvolver interfaces simples e responsivas que auxiliem nas tarefas do cotidiano e do trabalho.
          </Paragraph>
        </Text>
      </Container>
    </Section>
  );
}