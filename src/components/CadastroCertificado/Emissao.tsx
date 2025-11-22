// src/pages/VoluntarioCertificado/index.tsx
import React, { useState, type FormEvent } from "react";
import {
  PageContainer,
  FormCard,
  FormTitle,
  FieldWrapper,
  FieldLabel,
  TextInput,
  ActionsRow,
  PrimaryButton,
  SecondaryButton,
} from "./EmissaoStyle";

// Tipo dos dados dessa etapa (apenas um campo)
type CertificadoForm = {
  nomeCertificado: string;
};

export function VoluntarioCertificado() {
  // Estado local (controlado) do campo de nome
  const [formData, setFormData] = useState<CertificadoForm>({
    nomeCertificado: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({ nomeCertificado: event.target.value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("Dados para emissão de certificado:", formData);

    // Aqui você decide:
    // - se nome estiver vazio → segue sem certificado
    // - se tiver preenchido → salva junto com o restante da inscrição
    // e navega para tela final / resumo
  }

  function handleBack() {
    // Exemplo com react-router:
    // navigate("/voluntario/disponibilidade");
    console.log("Voltar para etapa de disponibilidade");
  }

  return (
    <PageContainer>
      <FormCard as="form" onSubmit={handleSubmit}>
        <FormTitle>DADOS PARA EMISSÃO DE CERTIFICADO (opcional)</FormTitle>

        <FieldWrapper>
          <FieldLabel htmlFor="nomeCertificado">
            Nome completo:
          </FieldLabel>

          <TextInput
            id="nomeCertificado"
            name="nomeCertificado"
            type="text"
            placeholder="Digite o nome exatamente como deve aparecer no certificado"
            value={formData.nomeCertificado}
            onChange={handleChange}
          />
        </FieldWrapper>

        <ActionsRow>
          <SecondaryButton type="button" onClick={handleBack}>
            Voltar
          </SecondaryButton>

          <PrimaryButton type="submit">Próximo</PrimaryButton>
        </ActionsRow>
      </FormCard>
    </PageContainer>
  );
}
