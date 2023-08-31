import { useTheme } from "styled-components";
import {
  Content,
  Contianer,
  Description,
  Header,
  Image,
  Message,
} from "./errorpage.styles";

const ErrorPage = () => {
  const { translations } = useTheme();
  return (
    <Contianer>
      <Header>
        <Image src="/images/pro2.webp" alt=" logo" />
      </Header>
      <Content>
        <Image src="/images/404_error.png" alt="page Not found" />
        <Message>{translations?.pagenotfound.message}</Message>
        <Description>{translations?.pagenotfound.description}</Description>
      </Content>
    </Contianer>
  );
};
export default ErrorPage;
