import styled from "styled-components";

const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 80px 10%;
  background: #f8fafc;
  overflow: hidden;
`;

const TextContainer = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const Name = styled.h1`
  font-size: 64px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #475569;
  line-height: 1.6;
`;

const BlueArc = styled.div`
  position: absolute;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #2563eb, #1e3a8a);
  border-radius: 50%;
  z-index: 1;
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <TextContainer>
        <Name>Gabriel Goldoni Flores</Name>
        <Subtitle>
          Desenvolvedor Front-End.
        </Subtitle>
      </TextContainer>

      <BlueArc />
    </HeroWrapper>
  );
}