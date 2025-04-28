"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";
import { useRouter } from "next/navigation"; // next/router 대신 next/navigation 사용

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f4f6;
  border-radius: 9999px;
  padding: 8px 16px;
  margin: 12px 16px;
  width: 100%;
`;

const SearchInput = styled.input`
  margin-left: 8px;
  background-color: transparent;
  width: 100%;
  outline: none;
  border: none;
  font-size: 14px;
  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchIcon = styled.div`
  cursor: pointer;
`;

export default function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어 입력 처리 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // 검색 실행 함수
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // 검색어가 있을 경우 Map 페이지로 이동하고 query parameter로 검색어 전달
      router.push(`/map?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Enter 키 입력 처리 (onKeyPress 대신 onKeyDown 사용)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="지역, 식당 검색하기"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // onKeyPress 대신 onKeyDown 사용
      />
      <SearchIcon onClick={handleSearch}>
        <IoIosSearch size={18} color="gray" />
      </SearchIcon>
    </SearchContainer>
  );
}
