import * as S from "./MainHeaderStyle";
import LogoMainHeader from "../../assets/FundoInicio.png";
import MarianaMainHeader from "../../assets/FotoMarianaInicio.png";

export function MainHeader() {
  return (
    <S.ContainerPai>
      <S.ContainerMae>
        <S.BgLogo src={LogoMainHeader} alt="background Marianas" />
        <S.FotoMariana src={MarianaMainHeader} alt="foto Mariana" />
      </S.ContainerMae>
    </S.ContainerPai>
  );
}
