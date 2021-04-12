import {
	SET_HEADERVISIBILITY,
	SET_HEADERBTN,
	SET_HEADERBOTH,
	SET_HEADERMENUBTN,
	RESET_HEADERMENUBTN,
	SET_SHOW_DRAWER,
} from "../names";

export const setHeaderVisibility = (visible = false) => ({
	type: SET_HEADERVISIBILITY,
	payload: { visible },
});

export const setHeaderButton = (showBtn = false) => ({
	type: SET_HEADERBTN,
	payload: { showBtn },
});

export const setHeaderBoth = (visible = false, showBtn = false) => ({
	type: SET_HEADERBOTH,
	payload: { showBtn, visible },
});

export const setHeaderMenuBtn = (menuBtn) => ({
	type: SET_HEADERMENUBTN,
	payload: { menuBtn },
});
export const resetHeaderMenuBtn = () => ({
	type: RESET_HEADERMENUBTN,
});

export const setDrawer = (drawer) => ({
	type: SET_SHOW_DRAWER,
	payload: { drawer },
});

export const getHeader = (state) => state.header;
