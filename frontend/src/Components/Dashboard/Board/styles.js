import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #b8b8b8;
  border-radius: 25px;
  padding: 25px;
`;

export const MoviesTitle = styled.div `
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`

export const Movies = styled.div`
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 100%;
`;

export const NameMovie = styled.div`
  font-size: 20px;
  width: 40%;
`;
export const YearMovie = styled.div`
  width: 40%;
`;
export const MovieActions = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 10%;
  svg {
    cursor: pointer;
  }
`;
