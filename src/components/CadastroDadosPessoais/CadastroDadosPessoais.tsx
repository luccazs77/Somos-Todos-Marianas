// src/pages/VoluntarioDadosPessoais/index.tsx
import React, { useState, type FormEvent } from "react";
import {
  PageContainer,
  FormCard,
  FormTitle,
  FieldsGrid,
  FieldWrapper,
  FieldLabel,
  TextInput,
  FullWidthField,
  ActionsRow,
  PrimaryButton,
} from "./CadastroDadosPessoaisStyle";

// Tipo dos dados do formulário 
type DadosPessoaisForm = {
  nomeCompleto: string;
  cidade: string;
  dataNascimento: string;
  bairro: string;
  cpf: string;
  cep: string;
  email: string;
  enderecoCompleto: string;
  telefone: string;
  idade: string;
};

export function VoluntarioDadosPessoais() {
  // Estado único com todos os campos (controlados)
  const [formData, setFormData] = useState<DadosPessoaisForm>({
    nomeCompleto: "",
    cidade: "",
    dataNascimento: "",
    bairro: "",
    cpf: "",
    cep: "",
    email: "",
    enderecoCompleto: "",
    telefone: "",
    idade: "",
  });

  // Atualiza qualquer campo baseado no "name"
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Submissão do formulário (aqui só evita reload e loga no console)
  function DadosPessoais(event: FormEvent) {
    event.preventDefault();

    // Aqui você pode enviar para API, contexto, próxima etapa, etc.
    console.log("Dados pessoais do voluntário:", formData);

    // Exemplo: redirecionar para próxima etapa do cadastro
    // navigate("/voluntario/endereco"); // se usar react-router
  }

  return (
    <PageContainer>
      {/* Formulário semântico */}
      <FormCard as="form" onSubmit={DadosPessoais}>
        <FormTitle>DADOS PESSOAIS</FormTitle>

        <FieldsGrid>
          {/* Nome completo */}
          <FullWidthField>
            <FieldLabel htmlFor="nomeCompleto">Nome completo:</FieldLabel>
            <TextInput
              id="nomeCompleto"
              name="nomeCompleto"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
            />
          </FullWidthField>

          {/* Cidade */}
          <FieldWrapper>
            <FieldLabel htmlFor="cidade">Cidade:</FieldLabel>
            <TextInput
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Ex.: São Luís"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* Data de nascimento */}
          <FieldWrapper>
            <FieldLabel htmlFor="dataNascimento">
              Data de nascimento:
            </FieldLabel>
            <TextInput
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* Bairro */}
          <FieldWrapper>
            <FieldLabel htmlFor="bairro">Bairro:</FieldLabel>
            <TextInput
              id="bairro"
              name="bairro"
              type="text"
              placeholder="Informe seu bairro"
              value={formData.bairro}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* CPF */}
          <FieldWrapper>
            <FieldLabel htmlFor="cpf">CPF:</FieldLabel>
            <TextInput
              id="cpf"
              name="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* CEP */}
          <FieldWrapper>
            <FieldLabel htmlFor="cep">CEP:</FieldLabel>
            <TextInput
              id="cep"
              name="cep"
              type="text"
              placeholder="00000-000"
              value={formData.cep}
              onChange={handleChange}
            />
          </FieldWrapper>

          {/* E-mail */}
          <FieldWrapper>
            <FieldLabel htmlFor="email">E-mail:</FieldLabel>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* Telefone */}
          <FieldWrapper>
            <FieldLabel htmlFor="telefone">Telefone:</FieldLabel>
            <TextInput
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* Endereço completo (linha inteira) */}
          <FullWidthField>
            <FieldLabel htmlFor="enderecoCompleto">
              Endereço completo:
            </FieldLabel>
            <TextInput
              id="enderecoCompleto"
              name="enderecoCompleto"
              type="text"
              placeholder="Rua, número, complemento"
              value={formData.enderecoCompleto}
              onChange={handleChange}
              required
            />
          </FullWidthField>

          {/* Idade */}
          <FieldWrapper>
            <FieldLabel htmlFor="idade">Idade:</FieldLabel>
            <TextInput
              id="idade"
              name="idade"
              type="number"
              min={0}
              placeholder="Ex.: 25"
              value={formData.idade}
              onChange={handleChange}
            />
          </FieldWrapper>
        </FieldsGrid>

        <ActionsRow>
          <PrimaryButton type="submit">Próximo</PrimaryButton>
        </ActionsRow>
      </FormCard>
    </PageContainer>
  );
}
