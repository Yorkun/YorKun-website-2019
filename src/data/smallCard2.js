import smallCard3 from "../assets/index/smallCard-3.png";
import smallCard4 from "../assets/index/smallCard-4.png";
import smallCard1EN from "../assets/index/smallCard1-EN.png";
import smallCard1CN from "../assets/index/smallCard1-CN.png";
import smallCard2EN from "../assets/index/smallCard2-EN.png";
import smallCard2CN from "../assets/index/smallCard2-CN.png";

export default {
  cn: [
    {
      cardBg: "",
      isTag: false,
      bgImg: smallCard1CN,
      cover: smallCard3
    },
    {
      cardBg: "./smallCard2-bg.png",
      isTag: false,
      bgImg: smallCard2CN,
      cover: smallCard4
    }
  ],
  en: [
    {
      cardBg: "",
      isTag: false,
      bgImg: smallCard1EN,
      cover: smallCard3
    },
    {
      cardBg: "./smallCard2-bg.png",
      isTag: false,
      bgImg: smallCard2EN,
      cover: smallCard4
    }
  ]
};
