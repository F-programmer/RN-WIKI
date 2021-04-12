// libs
import React, { useEffect, useState } from "react";

// componentes
import Animator from "components/Animator";
import UIView from "components/UI/View";

// router
import { useNavigation } from "@react-navigation/native";

// animations data
import loader from "modules/animations/loader.json";

// redux
import { useDispatch } from "react-redux";
import { setHeaderButton } from "store/modules/rootActions";

export default function SplashSreen() {
	const router = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setHeaderButton(false));
	}, []);

	const [current, setCurrent] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			setCurrent({
				...current,
				loop: false,
				animationData: loader,
			});
			setTimeout(() => {}, 3000);
		}, 2000);
	}, []);

	return (
		<UIView>
			<Animator
				bgcolor="#3490dc"
				width={400}
				height={400}
				onComplete={() => router.push("home")}
				config={current}
			/>
		</UIView>
	);
}
