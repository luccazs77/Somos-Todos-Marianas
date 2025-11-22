import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const StyledButtonLink = styled(Link)<{ $variant: "outlined" | "filled" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  line-height: 1;
  margin-top: 10%;


  ${({ $variant }) =>
    $variant === "outlined"
      ? css`
          padding: 15px 25px;
          font-size: 16px;
          background-color: #f5e0de;
          color: #b45f5f;
          border: 2px solid #b45f5f;

          &:hover {
            background-color: #b45f5f;
            color: #fff;
            transform: translateY(-2px);
          }
        `
      : css`
          padding: 15px 25px;
          font-size: 16px;
          background-color: #b45f5f;
          color: #fff;
          border: 2px solid #b45f5f;

          &:hover {
            background-color: #9e4747;
            transform: translateY(-2px);
          }
        `}
  
  @media (max-width: 768px) {
    ${({ $variant }) =>
      $variant === "outlined"
        ? css`
            padding: 8px 18px;
            font-size: 15px;
          `
        : css`
            padding: 12px 30px;
            font-size: 16px;
          `}
  }
`;
