"use client";

import React from "react";
import KakaoMap from "../../components/KakaoMap/KakaoMap";
import styled from "styled-components";

// 맵 페이지 컨테이너에 명시적 크기 지정
const MapPageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export default function Map() {
  return (
    <MapPageContainer>
      <KakaoMap />
    </MapPageContainer>
  );
}
