import React, { useState, type FormEvent } from "react";
import emailjs from "emailjs-com"; 
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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function DadosPessoais(event: FormEvent) {
    event.preventDefault();

   emailjs.send(
  "service_5kizrvo",
  "template_86pxx5i",
  formData,
  "WLr22p3KbTuXUWgBw"
)
.then(() => alert("formulário foi enviado com sucesso!!"))
.catch((err) => console.log("Erro:", err));
  }

  return (
    <PageContainer>
      <FormCard as="form" onSubmit={DadosPessoais}>
        <FormTitle>DADOS PESSOAIS</FormTitle>

        <FieldsGrid>
          <FullWidthField>
            <FieldLabel>Nome completo:</FieldLabel>
            <TextInput
              name="nomeCompleto"
              placeholder="Digite seu nome completo"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
            />
          </FullWidthField>

          <FieldWrapper>
            <FieldLabel>Cidade:</FieldLabel>
            <TextInput
              name="cidade"
              placeholder="São Luís"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>Data de nascimento:</FieldLabel>
            <TextInput
              name="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>Bairro:</FieldLabel>
            <TextInput
              name="bairro"
              placeholder="Informe seu bairro"
              value={formData.bairro}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>CPF:</FieldLabel>
            <TextInput
              name="cpf"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>CEP:</FieldLabel>
            <TextInput
              name="cep"
              placeholder="00000-000"
              value={formData.cep}
              onChange={handleChange}
            />
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>E-mail:</FieldLabel>
            <TextInput
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          <FieldWrapper>
            <FieldLabel>Telefone:</FieldLabel>
            <TextInput
              name="telefone"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          <FullWidthField>
            <FieldLabel>Endereço completo:</FieldLabel>
            <TextInput
              name="enderecoCompleto"
              placeholder="Rua, número, complemento"
              value={formData.enderecoCompleto}
              onChange={handleChange}
              required
            />
          </FullWidthField>

          <FieldWrapper>
            <FieldLabel>Idade:</FieldLabel>
            <TextInput
              name="idade"
              type="number"
              placeholder="Ex.: 25"
              value={formData.idade}
              onChange={handleChange}
            />
          </FieldWrapper>
        </FieldsGrid>

        <ActionsRow>
         <PrimaryButton type="submit">Enviar</PrimaryButton>
        </ActionsRow>
      </FormCard>
    </PageContainer>
  );
}
