import React from "react";
import "./Category.scss";
import { useTranslation } from "react-i18next";
import img1 from "../../../../Assets/Images/bg1.png";
import img11 from "../../../../Assets/Images/bg11.png";
import img2 from "../../../../Assets/Images/bg2.png";
import img22 from "../../../../Assets/Images/bg22.png";
import img3 from "../../../../Assets/Images/bg3.png";
import img33 from "../../../../Assets/Images/bg33.png";
import img4 from "../../../../Assets/Images/bg4.png";
import img44 from "../../../../Assets/Images/bg44.png";
import { Row, Col } from "antd";

interface Props {
  className: string;
}
const Category = ({ className }: Props) => {
  const { t } = useTranslation();
  const category = [
    {
      title: "Game Development",
      url1: img1,
      url2: img11,
      content:
        "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다.",
    },
    {
      title: "UI design",
      url1: img2,
      url2: img22,
      content:
        "UI/UX, 브랜드/편집/그래픽/산업디자인 및 뉴미디어, 컴퍼니/브랜드/소셜/마케팅 디자인 유지보수 등 넓은 바운더리와 다양한 경험으로 많은 기업들과 브랜드 디자인을 진행하고 있습니다. 고객과 기업의 니즈를 맞추고 조율하여 최상의 결과물을 도출할 수 있게 합니다.",
    },
    {
      title: "SI",
      url1: img3,
      url2: img33,
      content:
        "개발 영역은 각 단계를 차근히 밟으며 안정적으로 증명을 거쳐 그 다양성과 안정성을 인정받고 있습니다. 트렌디하면서 안정성있는 개발을 위해 언제나 고민하고 노력하는 개발팀은 기업과의 협업 업무부터 자체 플랫폼 개발 등 다양한 업무 를 진행합니다.",
    },
    {
      title: "Game Marketing",
      url1: img4,
      url2: img44,
      content:
        "다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며 참여하는 것이 얼마나 큰 힘이 되는지, 사람을 이어주는 문화사업이 얼마나 많은 행복을 주는지 알고 있습니다. Concept cube는 뮤직, 세미나 등 다양한문화 행사를 만들고 함께 나누려 노력합니다.",
    },
  ];
  return (
    <div className={`category ${className}`}>
      {category.map((categoryItem: any, index: number) => (
        <div className="category-item">
          <div className="category-item-box">
            <div className="category-title">{categoryItem.title}</div>
            <div className="category-image">
              <img className="img-one img" src={categoryItem.url1}></img>
              <img className="img-two img" src={categoryItem.url2}></img>
            </div>
            <div className="category-thread"> {categoryItem.title}</div>
            <div className="category-content">{categoryItem.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
