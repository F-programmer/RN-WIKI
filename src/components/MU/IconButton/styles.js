import styled from "styled-components";

const defaultStyles = `
	border: none;
	border-radius: 50%;
`;

const defaultPseudo = `
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	${defaultStyles}
`;

export const Container = styled.button`
	// reset
	position: relative;
	outline: none;
	overflow: hidden;
	box-shadow: none;
	margin: none;
	// styles
	background: none;
	padding: 0.5rem;
	transition: color 0.5s, transform 0.2s, background-color 0.2s;
	cursor: pointer;
	animation: none;

	// centralizando
	display: flex;
	justify-content: center;
	align-items: center;

	${defaultStyles}
	width: ${(props) => props.size};
	height: ${(props) => props.size};

	::after {
		${defaultPseudo}
		width: ${(props) => props.size};
		height: ${(props) => props.size};

		transform: ${(props) => `translate(0px, ${props.size})`};
		background: #fff3;
		z-index: 1;
		opacity: 0.5;
		transition: transform 0.3s ease;
	}
	::before {
		${defaultPseudo}
		width: ${(props) => props.size};
		height: ${(props) => props.size};

		background: #fff1;
		transform: scale(0);
		transition: all 0.1s ease;
	}

	@keyframes fadeIn {
		0% {
			transform: scale(0) translate(0px, 0px);
		}
		100% {
			transform: scale(1) translate(0px, 0px);
		}
	}

	:focus::after {
		animation: fadeIn 0.3s;
		/* animation-fill-mode: forwards; */
	}

	:hover::before {
		transform: scale(1);
	}
`;
