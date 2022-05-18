import { 
  GET_DATA, 
  GET_SONG,
  CLOSE_PLAYER, 
  ON_PLAYER, 
  OFF_PLAYER, 
} from "@context/types";

// eslint-disable-next-line import/no-anonymous-default-export
export const dataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case GET_SONG:
      return {
        ...state,
        selectedSong: payload,
        activeSong: true
      };
    case ON_PLAYER:
      return {
        ...state,
        isPlaying: true
      }
    case OFF_PLAYER:
      return {
        ...state,
        isPlaying: false
      }    
    case CLOSE_PLAYER:
      return {
        ...state,
        activeSong: false
      }
    default:
      return state;
  }
};
