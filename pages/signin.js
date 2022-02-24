import Link from "next/link";
import GithubSignin from "../components/authentication/GithubSignin";
import GoogleSignin from "../components/authentication/GoogleSignin";
import SigninForm from "../components/authentication/SigninForm";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const signin = () => {
  return (
    <Layout title="Sign in">
      <Header />
      <section className="bg-gray-100">
        <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-serif ">Sign in </h1>
            <p className="font-semibold py-1">
              {"Don't have an account? "}
              <Link href="/signup">
                <a className="text-blue-700 hover:underline"> Sign up</a>
              </Link>
            </p>

            {/* sign up form */}
            <SigninForm />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default signin;
