import styled from "styled-components";

const Wrapper = styled.section`
  padding: 100px 10%;
  background: ${(props) => props.bg || "#ffffff"};
`;

export default function Section({ children, bg }) {
  return <Wrapper bg={bg}>{children}</Wrapper>;
}