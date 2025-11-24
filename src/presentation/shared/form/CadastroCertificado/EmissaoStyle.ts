// src/pages/VoluntarioCertificado/styles.ts
import styled from "styled-components";

// Container geral da página (abaixo do Header)
export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 16px 40px;
  background-color: #f4dfe4; // mesmo tom das outras telas

  @media (min-width: 900px) {
    padding: 140px 40px 60px;
  }
`;

// Card central branco
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

// Título "DADOS PARA EMISSÃO..."
export const FormTitle = styled.h1`
  font-size: 1.9rem;
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #222;

  @media (min-width: 900px) {
    font-size: 2.1rem;
    margin-bottom: 40px;
  }
`;

// Wrapper do campo de nome
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // centraliza o label e o input
  margin-top: 8px;
`;

// Label "Nome completo:"
export const FieldLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

// Input de nome, no centro, com largura limitada
export const TextInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px 12px;
  border-radius: 6px;
  border: none;                 // para simular a linha fina do layout
  border-bottom: 2px solid #b0a4a4;
  background-color: transparent;
  font-size: 1rem;
  font-family: inherit;
  text-align: center;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-bottom-color: #f18aa2;
    box-shadow: 0 4px 8px rgba(241, 138, 162, 0.25);
    background-color: #ffffff;
  }

  &::placeholder {
    color: #bbb;
  }
`;

// Linha dos botões "voltar" / "próximo"
export const ActionsRow = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

// Base de botão (mesma das outras telas)
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

// Botão principal (Próximo)
export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #ffffff;
`;

// Botão secundário (Voltar)
export const SecondaryButton = styled(BaseButton)`
  background: #f7b8c0;
  color: #6a3a3a;
`;
