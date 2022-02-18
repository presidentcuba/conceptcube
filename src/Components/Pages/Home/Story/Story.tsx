import "./Story.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}

const Story = ({ className }: Props) => {
  const { t } = useTranslation();
  const history = [
    {
      title: "2021",
      title1: "브랜드/편집 TVC 편집",
      conten1: "MOTION",
      title2: "브랜드/편집 TVC 편집편집",
      content2: "MOTION",
      title3: "Samsung Galaxy FAN Curator",
    },
  ];
  return (
    <div className={`panel story-page ${className}`}>
      <p className="story-text">History</p>
      <div className="story-list">
        <div className="story-box">
          <p className="story-heading">2021</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">
                브랜드/편집 <span>TVC</span> 편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                브랜드/편집 <span>TVC</span> 편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">Samsung Galaxy FAN Curator</p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                <span>Cha-pi CHINA</span> TVC 편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
          </div>
        </div>

        <div className="story-box">
          <p className="story-heading">2020</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">
                <span>LG Display Shocase</span> 편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                <span>SSG</span> 편집 <span>TVC</span> 편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                <span>Lineage 2M BI 편집</span>
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                <span>Netfflix TV Show "Kingdom" Title</span>편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
          </div>
        </div>

        <div className="story-box">
          <p className="story-heading">2019</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">
                팅 디자인 <span>"Untitle" M/V</span> 유지보수
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                편집<span>X lexus TVC</span>편집<span>M/V</span>편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">팅 디자인 유지보수 등 넓은</p>
              <p className="story-detail">ACADEMY</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                팅 디자인 <span>QLED TV</span> 유지보수 등 넓은
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                팅 디자인 <span>"Untitle" M/V</span> 유지보수
              </p>
              <p className="story-detail">MOTION</p>
            </div>
            <div className="story-item">
              <p className="story-title">
                편집<span>X lexus TVC</span>편집<span>M/V</span>편집
              </p>
              <p className="story-detail">MOTION</p>
            </div>
          </div>
        </div>

        <div className="story-box">
          <p className="story-heading">2018</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">팅 디자인 유지보수 등 넓은</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
