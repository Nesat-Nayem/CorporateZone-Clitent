import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useFirebase from "../../redux/slices/user/useFirebase";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";

const SigninForm = () => {
  const { logInWithEmailAndPassword } = useFirebase();
  const router = useRouter();
  const error = useSelector((state) => state.user.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logInWithEmailAndPassword(data.email, data.password);

    //  router.push("/");
    cogoToast.error(error ? error : "authentication failed");
  };
  return (
    <>
      <form className="md:w-96 my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <input
            className="w-full block  border-b-2 border-black  py-2  text-black focus:outline-none placeholder:text-black px-2"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-sm text-red-500 block">
              email is required
            </span>
          )}
        </div>
        <div className="my-4">
          <input
            className="w-full block  border-b-2 border-black  py-2  text-black focus:outline-none placeholder:text-black px-2"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
          />
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "pattern" &&
              "password must be 6 characters"}
          </span>
        </div>
        <div className="text-center py-2">
          <input
            className="  py-2 border  border-blue-500 text-blue-500 px-7 rounded-full font-medium text-xl focus:outline-none cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default SigninForm;
