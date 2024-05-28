import facebook from "../../public/icons/facebook.png";
import github from "../../public/icons/github.png";
import linkedin from "../../public/icons/linkedin.png";

export default function SocialButton() {
  const tamaño = { width: "40px" };

  return (
    <>
      <a href="www.facebook.com">
        <img
          src={facebook}
          alt="Facebook"
          style={tamaño}
          className="border"
        />
      </a>
      <a href="www.github.com">
        <img
          src={github}
          alt="Github"
          style={tamaño}
          className="border"
        />
      </a>
      <a href="www.linkedin.com">
        <img
          src={linkedin}
          alt="Linkedin"
          style={tamaño}
          className="border"
        />
      </a>
     
    </>
  );
}
