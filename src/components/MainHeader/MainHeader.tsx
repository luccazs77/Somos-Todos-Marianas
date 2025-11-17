import * as S from "./MainHeaderStyle";
import LogoMainHeader from "../../assets/LogoMainHeader.png";
import MarianaMainHeader from "../../assets/MarianaMainHeader.png";
import { Header } from "../../presentation/shared/Header/header";

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
