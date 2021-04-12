import produce from "immer";
import {
	SET_HEADERVISIBILITY,
	SET_HEADERBTN,
	SET_HEADERBOTH,
	SET_HEADERMENUBTN,
	RESET_HEADERMENUBTN,
	SET_SHOW_DRAWER,
} from "../names";

const intialState = {
	visible: true,
	showBtn: true,
	menuBtn: null,
	drawer: null,
};

const reducer = (state = intialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case SET_HEADERVISIBILITY: {
				draft = {
					...state,
					...action.payload,
				};
				return draft;
			}
			case SET_HEADERBTN: {
				draft = {
					...state,
					...action.payload,
				};
				return draft;
			}
			case SET_HEADERBOTH: {
				draft = {
					...state,
					...action.payload,
				};
				return draft;
			}

			case SET_HEADERMENUBTN: {
				draft = {
					...state,
					...action.payload,
				};
				return draft;
			}

			case RESET_HEADERMENUBTN: {
				draft = {
					...state,
					menuBtn: null,
				};
			}

			case SET_SHOW_DRAWER: {
				draft = {
					...state,
					...action.payload,
				};
				return draft;
			}

			default:
				return state;
		}
	});
};

export default reducer;
