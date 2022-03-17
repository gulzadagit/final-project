import React from "react";
import "../Footer/Footer.css";
// import Facebook from "../../components/assets/imagesFooter/Facebook.png";
// import Github from "../../components/assets/imagesFooter/GitHub.png";
// import Google from "../../components/assets/imagesFooter/Google.png";
// import YouTube from "../../components/assets/imagesFooter/YouTube.png";
// import Instagram from "../../components/assets/imagesFooter/Instagram.png";
// import Telegram from "../../components/assets/imagesFooter/Telegram.png";
// import WhatsApp from "../../components/assets/imagesFooter/WhatsApp.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_contact">
          <div className="footer__text">
            <div className="footer_logo">
              <img
                id="logo_footer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8kqZTMZw0AJVQm5jqD6fqbzmkb0KG385jQ&usqp=CAU"
                alt=""
              />
            </div>
            <div className="footer__text_item text_min">
              <ul>
                <ol>Бренды</ol>
                <br />
                <a className="teg_a" href="/home">
                  Apple
                </a>
                <br />
                <a className="teg_a" href="/home">
                  Acer
                </a>
                <br />
                <a className="teg_a" href="/home">
                  Asus
                </a>
                <br />
                <a className="teg_a" href="/products">
                  Dell
                </a>
                <br />
                <a className="teg_a" href="/contacts"></a>
              </ul>
            </div>

            <div className="footer__text_item first">
              <ul>
                <ol>Информация</ol>
                <br />
                <a className="teg_a" href="/home">
                  О нас
                </a>
                <br />
                <a className="teg_a" href="/home">
                  Контакты
                </a>
                <br />
                <a className="teg_a" href="/home">
                  Сервис
                </a>
                <br />
              </ul>

              {/* <ul>
                <ol>PARTNERS</ol>
                <br />
                <a target="_blank" href="https://www.optima.com/">
                  <li>Optima bank</li>
                </a>
                <br />
                <a target="_blank" href="https://www.coca-cola.com/">
                  <li>CocaCola</li>
                </a>
                <br />
                <a target="_blank" href="https://www.tesla.com/">
                  <li>Tesla</li>
                </a>
              </ul> */}
            </div>

            <div className="footer__text_item second">
              <ul>
                <br />
                <a target="_blank" href="https://www.spacex.com/">
                  <li>Гарантия</li>
                </a>
                <br />
                <a target="_blank" href="https://amazonka-shop.com.ua/">
                  <li>Новости</li>
                </a>
                <br />
                <a target="_blank" href="https://www.apple.com/">
                  <li>Рассрочка</li>
                </a>
              </ul>
            </div>

            <div className="footer__text_item text_min">
              <ul>
                <ul>
                  <ol>Контакты</ol>
                  <br />
                  <li>Phone:: +99655427**80</li>
                  <br />
                  <li>Email: podfrontilo_16@gmail.com</li>
                  <br />
                  <li>Address: г.Бишкек ул Табышалиева 29</li>
                </ul>
              </ul>
            </div>
          </div>
          {/* <div className="icon">
            <a target="_blank" href="https://www.instagram.com/" class="card">
              <i class="fab fa-instagram"></i>
              <img src={Instagram} alt="" />
            </a>
            <a target="_blank" href="https://ru-ru.facebook.com/" class="card1">
              <i class="fab fa-facebook"></i>
              <img src={Facebook} alt="" />
            </a>
            <a target="_blank" href="https://www.google.com/" class="card3">
              <i class="fab fa-google"></i>
              <img src={Google} alt="" />
            </a>
            <a target="_blank" href="https://github.com/" class="card2">
              <i class="fab fa-git"></i>
              <img src={Github} alt="" />
            </a>
            <a target="_blank" href="https://web.telegram.org/k/" class="card4">
              <i class="fab fa-telegram"></i>
              <img src={Telegram} alt="" />
            </a>
            <a target="_blank" href="https://www.whatsapp.com/" class="card5">
              <i class="fab fa-whatsApp"></i>
              <img src={WhatsApp} alt="" />
            </a>
            <a target="_blank" href="https://www.youtube.com/" class="card6">
              <i class="fab fa-youTube"></i>
              <img src={YouTube} alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
