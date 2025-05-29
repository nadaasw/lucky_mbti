import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AdvanceResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const result = state?.result;

  if (!result) {
    return <p>결과가 없습니다. 다시 시도해주세요.</p>;
  }

  return (
    <div className="result-page">
      <Header />
      <h1>🔍 당신의 성향 분석 결과</h1>
      <p className="result-description">{result.description}</p>

      {result.character && (
        <div className="character-result">
          <h2>🎭 어울리는 캐릭터: {result.character}</h2>
          {result.imageUrl && (
            <img src={result.imageUrl} alt="캐릭터 이미지" style={{ width: "200px" }} />
          )}
        </div>
      )}

      <button onClick={() => navigate("/")}>처음으로</button>
    </div>
  );
}

export default AdvanceResult;