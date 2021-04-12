import styled from "styled-components";

export const Container = styled.div`
	/* @keyframes fadeIn {
		0% {
			height: 0px;
		}
		100% {
			height: auto;
		}
	}

	@keyframes fadeOut {
		0% {
			height: auto;
		}
		100% {
			height: 0px;
		}
	} */

	width: 100%;
	height: ${(props) => (props.run !== null ? "auto" : "0px")};
	transition: 1s;

	/* animation: ${(props) =>
		(props.run === true
			? "fadeIn"
			: props.run === false
			? "fadeOut"
			: "none") + " 1s"};
	animation-fill-mode: forwards; */
`;
