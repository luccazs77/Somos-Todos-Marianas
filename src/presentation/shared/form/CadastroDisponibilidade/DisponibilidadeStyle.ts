// src/pages/VoluntarioDisponibilidade/styles.ts
import styled from "styled-components";
import fundo from "../../assets/wallpaper.png";

// Container geral da página
export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 16px 40px;
  background-image: url(${fundo});

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

// Título "DISPONIBILIDADE"
export const FormTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 28px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #222;

  @media (min-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 36px;
  }
`;

// Wrapper do campo "Dias da semana disponíveis"
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// Label genérico
export const FieldLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

// Input de texto (dias da semana, etc.)
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

// Bloco de grupo (Turnos / Modalidade)
export const GroupWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 24px;
`;

// Título do grupo (TURNOS:, MODALIDADE:)
export const GroupTitle = styled.p`
  font-size: 0.98rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

// Linha com opções (texto + círculo)
export const OptionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
`;

// Texto da opção (ex.: MANHÃ:, TARDE:, NOITE:)
export const OptionLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
`;

// Par (texto + círculo)
export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Círculo selecionável
export const OptionCircle = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  background: ${({ active }) => (active ? "#f18aa2" : "#e4dcdc")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.22);
  }
`;

// Linha dos botões Voltar / Próximo
export const ActionsRow = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

// Base de botão reaproveitada
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

// Botão principal
export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #ffffff;
`;

// Botão secundário
export const SecondaryButton = styled(BaseButton)`
  background: #f7b8c0;
  color: #6a3a3a;
`;
