const initialState = {
  employees: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM_DATA":
      return {
        ...state,
        employees: [...state.employees, action.payload], // Ajoute le nouvel employé à la liste des employés existants
      };
    default:
      return state;
  }
};

export default formReducer;
