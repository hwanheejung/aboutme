import MainContact from "@/components/Contact/MainContact";

const Contact = () => (
  <div className="flex items-center justify-center gap-8 py-10 pl-3">
    <div className="h-px flex-1 bg-primary/20" />
    <MainContact />
    <div className="h-px flex-1 bg-primary/20" />
  </div>
);

export default Contact;
