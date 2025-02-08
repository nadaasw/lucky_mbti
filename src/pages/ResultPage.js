import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

const BASE_URL = "https://mbti-api-pp4g.onrender.com";  // 배포된 FastAPI 서버 URL

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [fortune, setFortune] = useState("");
  const [loading, setLoading] = useState(true);

  const { category, type, value } = location.state || {};

  useEffect(() => {
    if (!category || !type || !value) {
      navigate("/"); // 데이터가 없으면 루트 페이지로 이동
      return;
    }

    const fetchFortune = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/fortune/${category}/${type}?${type}=${value}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

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
        처음으로
      </button>
    </div>
  );
}

export default Result;