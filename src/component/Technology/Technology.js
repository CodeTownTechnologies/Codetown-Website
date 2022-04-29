import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "../Technology/portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import {AcUnit} from "@mui/icons-material/AcUnit"

export default function Portfolio() {
  const [selected, setSelected] = useState("mobile");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "frontend",
      title: "Front End",
    },
    {
      id: "database",
      title: "Data base",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "cms",
      title: "CMS",
    },
    {
      id: "infra",
      title: "Infra And DeveOps",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "mobile":
        setData(featuredPortfolio);
        break;
      case "frontend":
        setData(webPortfolio);
        break;
      case "database":
        setData(mobilePortfolio);
        break;
      case "backend":
        setData(designPortfolio);
        break;
      case "cms":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div style={{marginTop:"120px",height:"240px"}} className="portfolio" id="portfolio">
      <h2>Technologies We Work With</h2>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <span style={{color:"black", fontSize:"17px"}}>{d.img}</span>
           
          </div>
        ))}
      </div>
    </div>
  );
}
