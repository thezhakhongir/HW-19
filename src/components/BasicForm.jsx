import { useRef, useState } from "react";

const BasicForm = (props) => {
  const nameInputRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(true);
  const [name, setName] = useState("");
  const [isTouched, setIsToushed] = useState(true);
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onBlurHandler = () => {
    const enteredName = nameInputRef.current.value;

    console.log("Losing focus");

    setNameIsValid(true);

    setIsToushed(true);

    if (enteredName.trim().length < 5) {
      setNameIsValid(false);

      setIsToushed(false);

      return;
    }
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);

    setNameIsValid(true);

    setIsToushed(true);

    const enteredName = nameInputRef.current.value;

    if (enteredName.trim().length < 5) {
      setNameIsValid(false);

      setIsToushed(false);

      return;
    }
  };

  const nameInputClasses = nameIsValid
    ? "form=control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
          {!nameIsValid && (
            <p className="error-text">Name should be more 5 character</p>
          )}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
          {!nameIsValid && (
            <p className="error-text">Name should be more 5 character</p>
          )}
        </div>
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValid && (
          <p className="error-text">Name should be more 5 character</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
