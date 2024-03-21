import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "../components/common/inputs";
import { FormEventHandler, useState } from "react";
import { browserSessionPersistence, createUserWithEmailAndPassword, getAuth, setPersistence, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

export const SignUp = () => {
  const [status, setStatus] = useState('idle')
  const navigate = useNavigate()

  const handleSigninWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    await setPersistence(auth, browserSessionPersistence)

    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/dashboard', {
          replace: true
        })
      })
      .catch((error) => {
        console.error(error)
        toast.error('Something went wrong')
        setStatus('idle')
      })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.target
    const auth = getAuth();
    //
    // @ts-ignore
    if (form.password.value !== form.re_password.value) {
      toast.error('Passwords do not match')
      return
    }

    setStatus('loading')
    const id = toast.loading('Creating account...')

    await setPersistence(auth, browserSessionPersistence)
    //@ts-ignore
    createUserWithEmailAndPassword(auth, form.email.value, form.password.value)
      .then(() => {
        toast.success('Account created')
        setStatus('idle')
        navigate('/dashboard', {
          replace: true
        })
      })
      .catch((error) => {
        console.error(error)
        const message = error.message.includes('user-not-found') ? 'User not found' :
          error.message.includes('wrong-password') ? 'Wrong password' : 'Something went wrong'

        toast.error(message)
        setStatus('idle')
      })
      .finally(() => {
        toast.dismiss(id)
      });
  }


  return (
    <div>
      <h2 className="text-neutral-500 font-medium text-[14px] text-center">Sign up with:</h2>
      <div className="flex justify-center items-center gap-8 md:gap-6 mt-6">
        <button onClick={handleSigninWithGoogle} className="bg-primary-400 rounded-md px-6 py-3 flex gap-2">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5556 9.7111C19.5556 9.07776 19.4444 8.33887 19.3333 7.8111H10V11.5055H15.3333C15.1111 12.6667 14.4444 13.6167 13.3333 14.3555V16.7833H16.6667C18.5556 15.0944 19.5556 12.5611 19.5556 9.7111Z" fill="#4285F4" />
            <path d="M10.0002 19C12.6669 19 15.0002 18.1556 16.6669 16.6778L13.3335 14.3556C12.4447 14.8834 11.3335 15.3056 10.0002 15.3056C7.44466 15.3056 5.22244 13.6167 4.44466 11.4H1.11133V13.7222C2.66688 16.8889 6.11133 19 10.0002 19Z" fill="#34A853" />
            <path d="M4.44444 11.2944C4.22222 10.7667 4.11111 10.1333 4.11111 9.49999C4.11111 8.86666 4.22222 8.23333 4.44444 7.70555V5.27777H1.11111C0.444444 6.54444 0 8.02222 0 9.49999C0 10.9778 0.333333 12.4555 1.11111 13.7222L4.44444 11.2944Z" fill="#FBBC05" />
            <path d="M10.0002 3.8C11.4447 3.8 12.778 4.32778 13.778 5.17222L16.6669 2.42778C15.0002 0.95 12.6669 0 10.0002 0C6.11133 0 2.66688 2.11111 1.11133 5.27778L4.44466 7.70556C5.22244 5.48889 7.44466 3.8 10.0002 3.8Z" fill="#EA4335" />
          </svg>
          <span className="text-neutral-white font-medium">Google</span>
        </button>


        <button className="bg-primary-400 rounded-md px-6 py-3 flex gap-2">
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2952 10.6619C11.294 9.50838 11.8377 8.42224 12.7613 7.733C12.8426 7.66917 12.8942 7.57481 12.9042 7.47188C12.9142 7.36894 12.8817 7.26639 12.8142 7.18808C12.1176 6.41384 11.1408 5.95061 10.1012 5.90148C8.82406 5.78039 7.60736 6.65831 6.95745 6.65831C6.30753 6.65831 5.24953 5.90148 4.19153 5.90148C2.7668 5.94608 1.47125 6.74008 0.783259 7.99032C-0.667713 10.5181 0.412959 14.2266 1.78836 16.3003C2.47606 17.2993 3.29979 18.4269 4.38802 18.3891C5.47625 18.3512 5.82387 17.7155 7.08592 17.7155C8.34796 17.7155 8.70315 18.3891 9.80649 18.3664C10.9098 18.3437 11.6731 17.3447 12.3684 16.3457C12.795 15.7172 13.1427 15.0385 13.4037 14.3249C13.4677 14.1492 13.3938 13.953 13.2299 13.8633C12.0388 13.2416 11.2927 12.0071 11.2952 10.6619Z" fill="white" />
            <path d="M8.38723 3.78685C8.91009 3.08843 9.21635 2.2182 9.2598 1.30742C9.26424 1.18414 9.21788 1.06543 9.13409 0.985529C9.0503 0.905626 8.9384 0.873416 8.83067 0.898192C8.05254 1.0987 7.34981 1.56725 6.8209 2.23821C6.29551 2.90881 5.98136 3.7547 5.92687 4.64543C5.9243 4.76055 5.96595 4.87136 6.04121 4.94967C6.11648 5.02797 6.21811 5.06621 6.32024 5.05466C7.12773 4.94184 7.86672 4.48858 8.38723 3.78685Z" fill="white" />
          </svg>
          <span className="text-neutral-white font-medium">Apple</span>
        </button>
      </div>

      <div className="text-neutral-500 flex justify-between gap-4 items-center my-4 w-full">
        <div className="h-[1px] w-[47%] bg-neutral-400" />
        <span className="font-medium text-neutral-500">Or</span>
        <div className="h-[1px] w-[47%] bg-neutral-400" />
      </div>

      <form onSubmit={handleSubmit} method="POST" className="flex flex-col">
        <div className="flex flex-col gap-6">
          <TextInput
            name="username"
            required
            minLength={6}
            maxLength={40}
            placeholder="Username" />

          <TextInput
            type="email"
            name="email"
            required
            placeholder="Email" />

          <TextInput
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 6 characters long"
            placeholder="Password" />

          <TextInput
            type="password"
            name="re_password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 6 characters long"
            placeholder="Retype Password" />
        </div>
        <p className="text-neutral-400 font-medium text-[11px] md:text-xs block w-full mt-2">6 or more characters, one number, one uppercase & one lower case</p>
        <button disabled={status === "loading"} type="submit" className="text-neutral-white bg-primary-400 rounded-full py-4 my-4 font-medium text-[14px] w-full disabled:opacity-70">Sign up with Email</button>
      </form>
      <Link to="/auth/login"
        className="text-primary-400 font-medium text-[14px] block w-full text-center my-4">
        <span className="text-neutral-500">Already have an account?</span> Log in
      </Link>
      <footer className="form-footer text-neutral-400 text-xs">
        <p className="text-center">
          By signing up, you agree to the <br />Scissors{" "}
          <span className="text-neutral-500">Terms of service, Privacy policy</span> and{" "}
          <span className="text-neutral-500">Acceptable use policy</span>
        </p>
      </footer>
    </div>
  );
};

