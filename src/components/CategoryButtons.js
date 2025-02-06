import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ✅ 스타일 import 추가!

function CategoryButtons() {
  const navigate = useNavigate();
  
  // ✅ 버튼 클릭 시 로그 출력
  const handleNavigation = (path) => {
    console.log(`✅ 버튼 클릭됨: ${path} 페이지 이동`);
    navigate(path);
  };


  return (
    <div className="fortune-buttons">
      <button onClick={() => handleNavigation("/daily")}>오늘의 운세 보기</button>
      <button onClick={() => handleNavigation("/yearly")}>올해의 운세 보기</button>
    </div>
  );
}

export default CategoryButtons;