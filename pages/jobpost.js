import JobPost from "../components/Dashboard/PostJob/JobPost";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const PostJobs = () => {
  return (
    <Layout title="Post your job">
      <Header />
      <JobPost />
      <Footer />
    </Layout>
  );
};

export default PostJobs;
