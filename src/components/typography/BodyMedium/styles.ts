import styled from "styled-components";

interface ParagraphProps {
  bold?: boolean;
  color?: any;
}

export const Paragraph = styled.p<ParagraphProps>`
	font-size: 1rem;
	line-height: 24px;
	font-weight: ${props => (props.bold ? "700" : "400")};
    color: ${props => props.theme.colors['light-high']};
`;
