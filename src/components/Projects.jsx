import styled from "styled-components";
import Section from "./Section";

const Wrapper = styled.div`
  position: relative;
`;

const BackgroundArc = styled.div`
  position: absolute;
  top: -200px;
  left: -200px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  opacity: 0.15;
`;

const Title = styled.h2`
  font-size: 72px;
  margin-bottom: 80px;
  color: white;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Grid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Card = styled.a`
  background: white;
  padding: 50px 40px;
  border-radius: 30px;
  text-decoration: none;
  color: #0f172a;
  box-shadow: 0 25px 60px rgba(0,0,0,0.2);
  transition: 0.4s ease;

  &:hover {
    transform: translateY(-12px) scale(1.02);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    margin-bottom: 12px;
    color: #475569;
  }

  small {
    font-weight: 600;
    color: #1e3a8a;
  }
`;

export default function Projects() {
  return (
    <Section bg="#0f172a">
      <Wrapper>
        <BackgroundArc />

        <Title>Projetos</Title>

        <Grid>
          <Card
            href="https://github.com/gabrielgoldonif-create/barbearia"
            target="_blank"
          >
            <h3>Site Barbearia</h3>
            <p>Landing page moderna com layout responsivo.</p>
            <small>HTML • CSS • JavaScript</small>
          </Card>

          <Card
            href="https://github.com/gabrielgoldonif-create/cardproduto"
            target="_blank"
          >
            <h3>Catálogo de Produtos</h3>
            <p>Catálogo interativo desenvolvido com React.</p>
            <small>React • Vite • Styled Components</small>
          </Card>

          <Card
            href="https://github.com/gabrielgoldonif-create/listadelivros"
            target="_blank"
          >
            <h3>Lista de Livros</h3>
            <p>CRUD completo com integração a API externa.</p>
            <small>React • TypeScript • Axios</small>
          </Card>

          <Card
            href="https://github.com/gabrielgoldonif-create/tarefas-next-testes"
            target="_blank"
          >
            <h3>Lista de Tarefas</h3>
            <p>Aplicação com Context API e testes.</p>
            <small>Next.js • Context API • Testes</small>
          </Card>

          <Card
            href="https://github.com/gabrielgoldonif-create/diariodebordo"
            target="_blank"
          >
            <h3>Diário de Bordo</h3>
            <p>PWA com armazenamento local e offline.</p>
            <small>JavaScript • PWA • Service Worker</small>
          </Card>
        </Grid>
      </Wrapper>
    </Section>
  );
}