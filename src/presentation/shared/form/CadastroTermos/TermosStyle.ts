// src/pages/VoluntarioDeclaracao/styles.ts
import styled from "styled-components";

// Container geral da página
export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 16px 40px;
  background-color: #f4dfe4;

  @media (min-width: 900px) {
    padding: 140px 40px 60px;
  }
`;

// Card branco central
export const FormCard = styled.section`
  width: 100%;
  max-width: 960px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  padding: 32px 20px 28px;
  position: relative;

  @media (min-width: 900px) {
    padding: 40px 48px 32px;
  }
`;

// Título principal
export const FormTitle = styled.h1`
  font-size: 1.9rem;
  text-align: center;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #222;

  @media (min-width: 900px) {
    font-size: 2.1rem;
    margin-bottom: 32px;
  }
`;

// Bloco do texto do termo
export const TermsText = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  max-width: 820px;
  margin: 0 auto 28px auto;
  text-align: left;

  p + p {
    margin-top: 10px;
  }
`;

// Área dos botões de anexo / modelo PDF
export const AttachmentsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

// Base visual dos botões de "caixinha"
const BaseBoxButton = styled.button`
  min-width: 220px;
  padding: 12px 18px;
  border-radius: 10px;
  border: none;
  background-color: #f2f2f2;
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Botão para anexar arquivo (label para input file escondido)
export const UploadButton = styled(BaseBoxButton)`
  background-color: #f7e5ea;
`;

// Botão para baixar modelo PDF (pode ser <a> estilizado)
export const DownloadButton = styled(BaseBoxButton).attrs({ as: "a" })`
  text-decoration: none;
`;

// Linha dos botões Voltar / Enviar
export const ActionsRow = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

// Base dos botões redondos inferiores
const BaseRoundButton = styled.button`
  padding: 10px 32px;
  border-radius: 999px;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.03em;
  font-family: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// Voltar (secundário)
export const SecondaryButton = styled(BaseRoundButton)`
  background: #f7b8c0;
  color: #6a3a3a;
`;

// Enviar (primário)
export const PrimaryButton = styled(BaseRoundButton)`
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #ffffff;
`;

// Texto pequeno com nome do arquivo anexado
export const FileName = styled.p`
  margin-top: 8px;
  font-size: 0.85rem;
  color: #555;
  text-align: center;
`;
