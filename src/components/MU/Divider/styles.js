import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => (props.direction === "v" ? "1px" : "100%")};
	height: ${(props) => (props.direction === "v" ? "100%" : "1px")};
	margin-top: ${(props) => (props.direction === "v" ? "none" : ".3rem")};
	margin-left: ${(props) => (props.direction === "v" ? ".3rem" : "none")};
	background: #0001;
`;
