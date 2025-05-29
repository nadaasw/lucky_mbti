import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";  

function AdvancedResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {}; // 전달받은 결과

  const [character, setCharacter] = useState("");
  const [summary, setSummary] = useState("");
  const [mbtiGuess, setMbtiGuess] = useState("");
  const [music, setMusic] = useState("");

  useEffect(() => {
    if (result) {
      setCharacter(result.character);
      setSummary(result.summary);
      setMbtiGuess(result.mbtiGuess);
      setMusic(result.recommand_music);
    }
  }, [result]);

  return (
    <div className="result-page">
      <h1>🧠 성격 테스트 결과</h1>

      {/* 이미지 보여주기 */}
      <img
        src={`/images/${character}.png`} // public/images/리락쿠마.png 있을 경우
        alt={character}
        style={{ width: "200px", marginBottom: "10px" }}
      />

      <h2>당신과 닮은 캐릭터: "{character}"</h2>
      <p><strong>예상되는 MBTI 유형:</strong> {mbtiGuess}</p>
      <p>🎧 어울리는 아티스트: {music}</p>
      <p style={{ marginTop: "20px", lineHeight: "1.5" }}>{summary}</p>

      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
    </div>
  );
}

export default AdvancedResult; // ✅ 이 줄이 꼭 필요함!