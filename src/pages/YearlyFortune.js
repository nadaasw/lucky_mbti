import { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ 페이지 이동을 위한 useNavigate 추가
import Header from "../components/Header";
import "../App.css";  

function YearlyFortune() {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [selectedMBTI, setSelectedMBTI] = useState(""); 
  const [birthday, setBirthday] = useState(""); 

  const navigate = useNavigate();  // ✅ 페이지 이동을 위한 훅

  const mbtiTypes = [
    "ISTJ", "ISFJ", "INFJ", "INTJ", 
    "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESFP", "ENFP", "ENTP",
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"
  ];

  // ✅ MBTI 선택 시 -> 백엔드 API 요청 후 result 페이지로 이동
  const handleMBTIClick = async (type) => {
    setSelectedMBTI(type);

    // 🚀 API 요청 후 result 페이지로 이동
    try {
      navigate("/result", { state: { category: "year" ,type: "MBTI", value: type } });
    } catch (error) {
      console.error("🚨 운세 요청 중 오류 발생:", error);
    }
  };

  // ✅ 생년월일 입력 후 버튼 클릭 시 -> 백엔드 API 요청 후 result 페이지로 이동
  const handleBirthdaySubmit = async () => {
    if (!birthday) {
      alert("생년월일을 입력해주세요!");
      return;
    }

    // 🚀 API 요청 후 result 페이지로 이동
    try {
      navigate("/result", { state: { category: "year" ,type: "Birthday", value: birthday } });
    } catch (error) {
      console.error("🚨 운세 요청 중 오류 발생:", error);
    }
  };

  return (
    <div className="fortune-page">
      <Header />
      <h1>📅 올해의 운세</h1>
      <p>🔮 운세를 보는 방법을 선택하세요.</p>

      {/* 선택 버튼 */}
      <div className="fortune-buttons">
        <button 
          className={selectedOption === "MBTI" ? "selected" : ""}
          onClick={() => setSelectedOption("MBTI")}
        >
          MBTI로 알아보기
        </button>
        <button 
          className={selectedOption === "Birthday" ? "selected" : ""}
          onClick={() => setSelectedOption("Birthday")}
        >
          생년월일로 알아보기
        </button>
      </div>

      {/* MBTI 버튼 목록 (MBTI 선택 시만 보임) */}
      {selectedOption === "MBTI" && (
        <div className="mbti-buttons">
          {mbtiTypes.map((type) => (
            <button 
              key={type} 
              className={`mbti-button ${selectedMBTI === type ? "active" : ""}`} 
              onClick={() => handleMBTIClick(type)}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {/* 생년월일 입력 (생년월일 선택 시만 보임) */}
      {selectedOption === "Birthday" && (
        <div className="birthday-input">
          <input 
            type="date" 
            value={birthday} 
            onChange={(e) => setBirthday(e.target.value)} 
          />
          <button onClick={handleBirthdaySubmit}>운세 보기</button>
        </div>
      )}
      <button className="home-button" onClick={() => navigate("/")}>
        처음으로
      </button>
    </div>
  );
}

export default YearlyFortune;