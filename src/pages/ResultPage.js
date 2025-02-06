import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [fortune, setFortune] = useState(""); 
  const [loading, setLoading] = useState(true); 

  const { category, type, value } = location.state || {}; 
  // 🔹 category: "today" or "yearly"
  // 🔹 type: "mbti" or "birthday"
  // 🔹 value: 실제 MBTI 값(EX: "ISTJ") 또는 생년월일(EX: "1995-07-20")

  useEffect(() => {
    if (!category || !type || !value) {
      navigate("/"); // 데이터가 없으면 다시 입력 페이지로 이동
      return;
    }

    // ✅ API 요청 (백엔드에서 운세 가져오기)
    const fetchFortune = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/fortune/${category.toLowerCase()}/${type.toLowerCase()}?${type.toLowerCase()}=${value}`
        );
        const data = await response.json();
        setFortune(data.fortune);
      } catch (error) {
        console.error("🚨 운세를 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFortune();
  }, [category, type, value, navigate]);

  return (
    <div className="fortune-page">
      <Header />
      <h1>🔮 운세 결과</h1>

      {loading ? (
        <p>🔄 점술가가 열심히 운세를 분석 중입니다...</p>
      ) : (
        <div className="fortune-result">
          <h2>✨ 당신의 운세</h2>
          <p>{fortune}</p>
        </div>
      )}

      <button className="back-button" onClick={() => navigate("/")}>
        다시 보기
      </button>
    </div>
  );
}

export default Result;