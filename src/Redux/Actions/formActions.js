export const submitFormData = (data) => {
  return {
    type: "SUBMIT_FORM_DATA",
    payload: data,
  };
};
