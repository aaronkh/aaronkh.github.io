import {
  FiGithub,
  FiMail,
  FiInstagram,
  FiPhone,
  FiLinkedin,
} from "react-icons/fi";
import styled from "styled-components";
import { Code } from "../common/Text";
import _Link from "../common/Link";

const linkData = [
  {
    name: "huang.aaron03@",
    icon: FiMail,
    to: "mailto:huang.aaron03@gmail.com",
  },
  {
    name: "+1(415)812-6317",
    icon: FiPhone,
    to: "tel:415-812-6317",
  },
  {
    name: "aaronkh",
    icon: FiGithub,
    to: "https://www.github.com/aaronkh",
  },
  {
    name: "aaronkh",
    icon: FiLinkedin,
    to: "https://www.linkedin.com/in/aaronkh",
  },
  {
    name: "ig.aahuang",
    icon: FiInstagram,
    to: "https://www.instagram.com/ig.aahuang",
  },
];

const LinkContainer = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
  display: inline-block;
  margin-left: 16px;
  white-space: nowrap;
  font-weight: bold;

  svg {
    margin-bottom: -2px;
    margin-right: 8px;
  }
`;

const Link = ({ name, icon, to, style }) => (
  <LinkContainer style={style}>
    <Code>
      <_Link to={to} highlight>
        {icon()}
        {name}
      </_Link>
    </Code>
  </LinkContainer>
);

const Container = styled.div``;

const Socials = ({ style, itemStyle }) => (
  <Container style={style}>
    {linkData.map((v) => (
      <Link key={v.to} {...v} style={itemStyle} />
    ))}
  </Container>
);

export default Socials;
