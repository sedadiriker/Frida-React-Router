import "./About.scss";
import { useEffect, useState } from "react";
const About = () => {
  const[showName,setShowName] = useState(false)

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setShowName(true)
    },2000)
    return () => clearTimeout(timer)
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const kronoloji = document.querySelector('.kronoloji');
      const paragraphs = document.querySelectorAll('.kronoloji p');

      paragraphs.forEach(paragraph => {
        if (window.scrollY > kronoloji.offsetTop) { //kronoloji.offsetTop:belirlenen üst kenarının, en yakın üst seviyedeki (genellikle bir üst öğe veya sayfanın üstü) üst kenarına olan mesafesini piksel cinsinden verir.
          paragraph.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="about">
      <div className="about-1"></div>
      <div className="about-2"></div>
      <div className="about-2"></div>
      <div className="about-text">
        <h3 className="about-title">About Me</h3>
        <p>
          Hello, I'm Frida Kahlo, one of the most influential painters of the
          20th century. My art, shaped by Mexican culture and the female
          experience, explores the intersections of reality and imagination with
          a surrealist style. My works reflect my emotional pains and a strong
          feminist perspective. Art has been my sanctuary and means of
          expression through life's challenges. By honoring my body and
          emotions, I give voice to social issues. Preserving my cultural
          heritage and conveying its impact is crucial to me. I hope my art
          contributes to a better world. Thank you for joining me on this
          journey of art and self-discovery.
        </p>
        <p className="finish-title">With love and art... </p>
        {showName && <p className="name-title">Frida Kahlo</p>}

        <div className="kronoloji">
          <p>
            <span>1907: </span>I entered this world in the vibrant city of Coyoacán, Mexico.
          </p>
          <p>
            <span>1925: </span>Unfortunately, a tragic accident befell me, leaving me with
            enduring physical pain.{" "}
          </p>
          <p>
            <span>1926: </span> It was during my prolonged recovery that I found solace and
            expression in painting.
          </p>
          <p>
            <span>1929: </span>My artwork was showcased for the first time in a solo
            exhibition at Galería de Arte Contemporáneo in Mexico.
          </p>
          <p>
            <span>1930s: </span>My paintings started resonating beyond borders, garnering
            international attention.
          </p>
          <p>
            <span>1939: </span>I was honored to exhibit my work at the San Francisco World's
            Fair.
          </p>
          <p>
            <span>1940s: </span>Despite battling deteriorating health, I continued to paint
            and create.
          </p>
          <p>
            <span>1954: </span>At the age of 47, I departed from this world, leaving behind a
            legacy that would endure.
          </p>
          <p>
            <span>1970s: </span>My art experienced a revival, embraced by the feminist and
            Chicano movements.
          </p>
          <p>
            <span>2000s: </span>My paintings continue to captivate hearts worldwide,
            perpetuating my spirit and vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
