const BASE_URL = "http://127.0.0.1:8000";  // FastAPI 백엔드 URL

export const getTodayFortuneByMBTI = async (mbti) => {
  console.log(`🚀 API 요청 실행됨: ${mbti}`);  // API 요청 실행 확인

  try {
    const response = await fetch(`http://127.0.0.1:8000/fortune/today/mbti?mbti=${mbti}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API 응답 받음:", data);
    return data;
  } catch (error) {
    console.error("🚨 API 요청 실패:", error);
    return null;
  }
};

// ✅ 생년월일 기반 오늘의 운세 요청
export const getTodayFortuneByBirthday = async (birthday) => {
  try {
    const response = await fetch(`${BASE_URL}/fortune/today/birthday?birthday=${birthday}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching Birthday fortune:", error);
    return null;
  }
};