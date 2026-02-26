import styled from "styled-components";
import Section from "./Section";

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 60px;
  color: #0f172a;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Skill = styled.div`
  padding: 14px 24px;
  border-radius: 40px;
  background: #2563eb;
  color: white;
  font-weight: 600;
`;

export default function Skills() {
  return (
    <Section bg="#f1f5f9">
      <Title>Habilidades</Title>

      <Grid>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>TypeScript</Skill>
        <Skill>Next.js</Skill>
        <Skill>PWA</Skill>
        <Skill>Context API</Skill>
        <Skill>Inglês Corporativo</Skill>
      </Grid>
    </Section>
  );
}