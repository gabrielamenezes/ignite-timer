import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.5rem;
  overflow: auto;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow-y: scroll;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${props => props.theme['gray-600']};
      text-align: left;
      color: ${props => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${props => props.theme['gray-700']};
      border-top: 4px solid ${props => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`