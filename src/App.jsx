function Logo() {
  return (
    <div className="mb-8 flex justify-center font-poppins text-4xl tracking-wide text-primary-500">
      <span className="font-bold">FINE</span>
      <span>bank</span>
      <span className="font-bold">.IO</span>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.805 12.23c0-.79-.07-1.55-.2-2.28H12v4.31h5.5a4.7 4.7 0 0 1-2.04 3.08v2.55h3.3c1.93-1.78 3.05-4.4 3.05-7.66Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.76 0 5.08-.92 6.77-2.5l-3.3-2.55c-.92.62-2.1.99-3.47.99-2.67 0-4.93-1.8-5.74-4.22H2.85v2.63A10.22 10.22 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.26 13.72A6.14 6.14 0 0 1 5.94 12c0-.6.11-1.18.32-1.72V7.65H2.85A10.22 10.22 0 0 0 1.78 12c0 1.65.4 3.2 1.07 4.35l3.41-2.63Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.06c1.5 0 2.85.52 3.91 1.54l2.93-2.93C17.08 2.99 14.76 2 12 2a10.22 10.22 0 0 0-9.15 5.65l3.41 2.63C7.07 7.86 9.33 6.06 12 6.06Z"
        fill="#EA4335"
      />
    </svg>
  )
}

function FormField({ id, label, type, placeholder, autoComplete }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-neutral-600" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-md border border-neutral-400 bg-page px-3 py-2 text-sm text-ink focus:border-ink focus:outline-none focus:ring-0"
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        required
      />
    </div>
  )
}

const fields = [
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'hello@example.com',
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '************',
    autoComplete: 'current-password',
  },
]

function LoginForm() {
  return (
    <form className="space-y-5">
      {fields.map((field) => (
        <FormField key={field.id} {...field} />
      ))}

      <label className="flex items-center gap-2 text-sm text-neutral-600" htmlFor="remember">
        <input
          className="h-4 w-4 accent-primary-500"
          id="remember"
          name="remember"
          type="checkbox"
        />
        Keep me signed in
      </label>

      <button
        className="w-full rounded-md bg-primary-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 active:bg-primary-700"
        type="submit"
      >
        Login
      </button>
    </form>
  )
}

function SocialLoginButton() {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary-200 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-secondary-300 active:bg-secondary-400"
      type="button"
    >
      <GoogleIcon />
      Continue with Google
    </button>
  )
}

function SignInDivider() {
  return (
    <div className="relative my-7 flex items-center justify-center text-xs text-neutral-500">
      <div className="w-full border-t border-neutral-300" />
      <span className="absolute bg-page px-3">or sign in with</span>
    </div>
  )
}

function CreateAccountLink() {
  return (
    <div className="mt-7 flex justify-center">
      <a className="text-sm font-bold text-primary-500 hover:text-primary-600" href="#create-account">
        Create an account
      </a>
    </div>
  )
}

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-page px-6 py-10">
      <div className="w-full max-w-sm">
        <Logo />
        <LoginForm />
        <SignInDivider />
        <SocialLoginButton />
        <CreateAccountLink />
      </div>
    </main>
  )
}

export default App
