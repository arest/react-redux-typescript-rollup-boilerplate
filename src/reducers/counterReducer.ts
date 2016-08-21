interface Action {
  type: string
}

export const counter = (state: number = 0, action: Action) => {
  switch (action.type) {
    case "INCR":
      return state + 1;
    case "DECR":
      return state - 1;
    default:
      return state
  }
}

export default counter;