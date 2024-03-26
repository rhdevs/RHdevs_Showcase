import Wrapper from "../_components/wrapper";
import LoginForm from "../_components/login-form";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  return (
    <Wrapper>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src="rhdevs.svg" alt="" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? Click{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-blue-500 hover:text-blue-700"
            >
              here
            </a>{" "}
            to sign up!
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
