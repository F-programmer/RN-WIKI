import styled from "styled-components";

export const Container = styled.div`
	@keyframes open {
		0% {
			width: 0px;
		}
		100% {
			width: ${(props) => props.width};
		}
	}

	@keyframes close {
		0% {
			width: ${(props) => props.width};
		}
		100% {
			width: 0px;
			display: none;
		}
	}

	animation: ${(props) => (props.show ? "open" : "close")} 0.1s linear;
	width: ${(props) => (props.show ? (props) => props.width : "0px")};
	position: absolute;
	height: 100%;
	background-color: ${(props) => props.bgcolor};
`;
