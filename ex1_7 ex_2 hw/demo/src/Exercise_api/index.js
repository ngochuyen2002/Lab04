import { useEffect, useState } from "react";
import request from "./services/request";
import "./style.scss";

const Shop = () => {
  const { getAvatar } = request();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar().then((res) => {
      setAvatar(res[0]);
    });
  }, []);

  return (
    <div className="shop-page">
      {!avatar ? null : (
        <>
          <div className="title">Thể Loại</div>
          <ul className="list-group">
            {avatar.genres.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
          <hr />
          <div className="title"></div>
          <div>{avatar.synopsis}</div>
          <hr />
          <div className="title"></div>
          <div>{avatar.yearsAired}</div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Shop;
