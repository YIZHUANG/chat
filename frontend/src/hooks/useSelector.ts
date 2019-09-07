import { useSelector as officialUseSelector } from "react-redux";
import { AppState } from "../reducers";

// useSelector comes from redux is not type aware, therefore making a wrapper around it to give it type.
function useSelector<S>(selector: (state: AppState) => S): S {
  return officialUseSelector((state: AppState) => selector(state));
}

export default useSelector;
