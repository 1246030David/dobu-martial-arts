import { Form } from "@remix-run/react";
import BlueButtonLink from "./BlueButtonLink";

type LoginButtonProps = {
  loggedin: boolean;
};

const LoginButtons = ({ loggedin }: LoginButtonProps) => {
  return (
    <div>
      {loggedin ? (
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded border-2 border-blue-400 bg-white px-6 py-2   text-blue-500 hover:bg-gray-200 "
          >
            Log out
          </button>
        </Form>
      ) : (
        <div className="px-2 lg:px-6">
          <BlueButtonLink url="/login">Log in</BlueButtonLink>
          <BlueButtonLink url="/join">Register</BlueButtonLink>
        </div>
      )}
    </div>
  );
};

export default LoginButtons;
