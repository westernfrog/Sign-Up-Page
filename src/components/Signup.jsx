import React from "react";
import $ from "jquery";

export default function Signup() {
  function handleclick(e) {
    e.preventDefault();
    if ($(".input1").val()) {
      $(".input1").removeClass("is-invalid");
      $(".input1").addClass("is-valid");
    } else {
      $(".input1").removeClass("is-valid");
      $(".input1").addClass("is-invalid");
    }

    if ($(".input2").val()) {
      $(".input2").removeClass("is-invalid");
      $(".input2").addClass("is-valid");
    } else {
      $(".input2").removeClass("is-valid");
      $(".input2").addClass("is-invalid");
    }
  }

  return (
    <div className="form-signin text-center my-5 text-dm">
      <form className="needs-validation" novalidate>
        <img
          className="mb-4"
          src="https://cdn-icons-png.flaticon.com/512/8738/8738622.png"
          alt="for Signup"
          width="55"
          height="55"
        />

        <div className="form-floating">
          <input
            type="text"
            className="form-control input1"
            id="validationCustomUsername"
            placeholder="@username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <label for="floatingInput">Username</label>
          <div class="valid-feedback text-start my-1">Looks good!</div>
          <div class="invalid-feedback text-start my-1">
            Please choose a username.
          </div>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control input2"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label for="floatingPassword">Password</label>
          <div class="valid-feedback text-start my-1">Looks good!</div>
          <div class="invalid-feedback text-start my-1">
            Your password should be more than 8 characters and must include
            special characters and symbols.
          </div>
        </div>

        <div className="checkbox mb-3 text-start">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          id="btn"
          onClick={handleclick}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
