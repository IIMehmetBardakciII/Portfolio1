import Button from "../components/Button";
import TextAnimation from "../components/TextAnimation";

const Contact = () => {
  return (
    <section id="contact" className="w-full sm:mt-section_desktop_margin mt-[72px] sm:h-[543px] h-[404px]  flex items-center justify-center  ">
      <div className="flex items-center flex-col gap-10">
        <TextAnimation>
          <div>
            <p className="span sm:body text-accent text-center">
              are you ready for collaboration ?
            </p>
            <h2 className="sm:h2 h3 text-secondary text-center">
              contact with me
            </h2>
          </div>
        </TextAnimation>
        <Button variant="variant2" />
      </div>
    </section>
  );
};

export default Contact;
