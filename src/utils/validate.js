export const isValid = (sign, email, password, name) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  if (!sign) {
    const validName = /^[A-Za-z ]{2,50}$/.test(name);
    if (!validName) {
      return "Invalid Name";
    }
  }
  if (!validEmail) {
    return "Invalid Email";
  }
  if (!validPassword) {
    return "Invalid Password";
  }
  return null;
};
