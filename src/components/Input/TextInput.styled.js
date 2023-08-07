import { styled } from "styled-components";
import { Colors } from "../Colors/Colors";


export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  color: ${Colors.neutral_color.color900};
  align-self: stretch;
  flex-grow: 0;
`;