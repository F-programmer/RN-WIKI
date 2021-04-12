import React, { useEffect, useState } from "react";

// animations
import Lottie from "react-lottie";
import plane from "modules/animations/paperplane.json";

// layouts
import Box from "components/MU/Box";

export default function Animator({
	bgcolor = "none",
	width,
	height,
	onComplete = () => {},
	config,
}) {
	const [showAnimation, setShowAnimation] = useState(true);

	useEffect(() => {
		if (!showAnimation) onComplete();
	}, [showAnimation]);

	return (
		<Box width="100%" height="100%" bgcolor={bgcolor}>
			<Box
				position="absolute"
				top="0"
				left="0"
				right="0"
				bottom="0"
				m="auto"
				width="min-content"
				height="min-content"
				moreStyles="pointer-events: none;"
			>
				<Lottie
					options={
						config || {
							loop: true,
							autoplay: true,
							animationData: plane,
							rendererSettings: {
								preserveAspectRatio: "xMidYMid slice",
							},
						}
					}
					width={width}
					height={height}
					isStopped={false}
					isPaused={false}
					eventListeners={[
						{
							eventName: "complete",
							callback: () => setShowAnimation(false),
						},
					]}
				/>
			</Box>
		</Box>
	);
}
