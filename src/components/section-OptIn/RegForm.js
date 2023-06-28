import "./regForm.scss";
import { useEffect, useState } from "react";

function RegForm() {
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [subjectValid, setSubjectValid] = useState(false);

  const handleValidation = () => {
    setFirstNameDirty(true);
    setLastNameDirty(true);
    setEmailDirty(true);
    setPhoneDirty(true);
    setSubjectDirty(true);

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      subjectError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };




  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [subjectDirty, setSubjectDirty] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [firstNameError, setFirstNameError] = useState("field must be filled");
  const [lastNameError, setLastNameError] = useState("field must be filled");
  const [emailError, setEmailError] = useState("field must be filled");
  const [phoneError, setPhoneError] = useState("field must be filled");
  const [subjectError, setSubjectError] = useState("field must be filled");


  const blurHandler = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "subject":
        setSubjectDirty(true);
        break;
    }
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    const regularFirstName = /^[A-Za-z]{2,50}$/;

    if (e.target.value === "") {
      setFirstNameError("field must be filled");
    } else if (!regularFirstName.test(e.target.value)) {
      setFirstNameError("incorrect first name");
    } else {
      setFirstNameError("");
    }
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    const regularLastName = /^[A-Za-z]{2,50}$/;
    if (e.target.value === "") {
      setLastNameError("field must be filled");
    } else if (!regularLastName.test(e.target.value)) {
      setLastNameError("incorrect last name");
    } else {
      setLastNameError("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regularEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value === "") {
      setEmailError("field must be filled");
    } else if (!regularEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError("invalid email");
    } else {
      setEmailError("");
    }
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const regularPhone = /^0\d{9}$/;

    if (e.target.value === "") {
      setPhoneError("field must be filled");
    } else if (!regularPhone.test(e.target.value)) {
      setPhoneError("invalid phone number");
    } else {
      setPhoneError("");
    }
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);

    const regularSubject = /^[A-Za-z]{2,50}$/;

    if (e.target.value === "") {
      setSubjectError("field must be filled");
    } else if (!regularSubject.test(e.target.value)) {
      setSubjectError("incorrect subject");
    } else {
      setSubjectError("");
    }
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form id="regForm" onSubmit={handleSubmit}>
      <div className="titleForm">
        <h2>JOIN HYDRA</h2>
        <div></div>
        <h3>Let's Build Your VR Experience</h3>
      </div>

      <div className="inputsCon" id="scrollTo">
        <div className="formGroup">
          <div className="input">
            <input
              style={
                firstNameDirty && firstNameError && !firstNameValid ? { borderColor: "red" } : {}
              }
              value={firstName}
              onChange={(e) => firstNameHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            ></input>
            {firstNameDirty && firstNameError && !firstNameValid && <p>{firstNameError}</p>}
          </div>

          <div className="input">
            <input
              style={
                lastNameDirty && lastNameError && !lastNameValid ? { borderColor: "red" } : {}
              }
              value={lastName}
              onChange={(e) => lastNameHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            ></input>
            {lastNameDirty && lastNameError && !lastNameValid && <p>{lastNameError}</p>}
          </div>
        </div>

        <div className="formGroup">
          <div className="input">
            <input
              style={emailDirty && emailError && !emailValid ? { borderColor: "red" } : {}}
              value={email}
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
            {emailDirty && emailError && !emailValid && <p>{emailError}</p>}
          </div>

          <div className="input">
            <input
              style={phoneDirty && phoneError && !phoneValid ? { borderColor: "red" } : {}}
              value={phone}
              onChange={(e) => phoneHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
            {phoneDirty && phoneError && !phoneValid && <p>{phoneError}</p>}
          </div>
        </div>

        <div className="inputsBelow">
          <div className="input">
            <input
              style={subjectDirty && subjectError && !subjectValid ? { borderColor: "red" } : {}}
              value={subject}
              onChange={(e) => subjectHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            ></input>
            {subjectDirty && subjectError && !subjectValid && (
              <p className="invalidInput">{subjectError}</p>
            )}
          </div>

          <textarea
            value={text}
            onChange={(e) => textHandler(e)}
            id="tell_us"
            name="tell-us"
            placeholder="Tell Us Something..."
          ></textarea>
        </div>
      </div>

      <button type="submit">SEND TO HYDRA</button>
    </form>
  );
}

export default RegForm;
