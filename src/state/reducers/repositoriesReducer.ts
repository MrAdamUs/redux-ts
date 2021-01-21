interface RepositorieState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: RepositorieState, action: Action): RepositorieState => {
  switch (action.type) {
    case 'search-repositories':
      return { loading: true, error: null, data: [] };
    case 'search-repositories_success':
      return { loading: false, error: null, data: action.payload };
    case 'search-repositories_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
