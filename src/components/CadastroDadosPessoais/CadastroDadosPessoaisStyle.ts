// src/pages/VoluntarioDadosPessoais/styles.ts
import styled from "styled-components";
import fundo from "../../assets/wallpaper.png";


// Container geral da página (abaixo do Header)
export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh; // ocupa ao menos a altura da tela
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 16px 40px; // espaço para não colar no topo
  /*background-color: #f4dfe4; // tom suave de rosa do tema*/
  background-image: url(${fundo});
    

  @media (min-width: 900px) {
    padding: 140px 40px 60px;
  }
`;

// "Card" branco centralizado
export const FormCard = styled.section`
  width: 100%;
  max-width: 960px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  padding: 32px 20px 28px;
  position: relative;
  overflow: hidden;

  @media (min-width: 900px) {
    padding: 40px 48px 32px;
  }
`;

// Título "DADOS PESSOAIS"
export const FormTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #222;

  @media (min-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
`;

// Grid das linhas de campos (2 colunas no desktop, 1 no mobile)
export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; // duas colunas
  }
`;

// Cada "bloco" label + input
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Label do campo
export const FieldLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

// Input de texto genérico
export const TextInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #d0c4c4;
  background-color: #f2f2f2;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: #f18aa2;
    box-shadow: 0 0 0 2px rgba(241, 138, 162, 0.35);
    background-color: #ffffff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

// Linha inteira ocupando as duas colunas (ex: Endereço completo)
export const FullWidthField = styled(FieldWrapper)`
  grid-column: 1 / -1; // ocupa de 1ª até última coluna
`;

// Wrapper do botão "Próximo"
export const ActionsRow = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
`;

// Base de botão reaproveitada (similar à que já usamos)
const BaseButton = styled.button`
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

// Botão principal "Próximo"
export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #ffffff;
`;
