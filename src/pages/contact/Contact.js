import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/Footer";

const Contact = ({ name, email, location }) => {
  return (
    <>
      <section className="contact container">
        <PageHeader title="Contact" description="Get in touch" />
        <div className="contactWrap container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Form />
            </div>
            <div className="col-12 col-lg-6">
              <ContactInfo name={name} location={location} email={email} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
