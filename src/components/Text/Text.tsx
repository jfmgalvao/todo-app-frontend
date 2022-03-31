import styled from "styled-components";
import { SpaceProps, typography, TypographyProps } from "styled-system";

type TextProps = TypographyProps & SpaceProps;

export const Text = styled.p<TextProps>`
  font-family: 14px;
  color: #fff;
  ${typography}
`;