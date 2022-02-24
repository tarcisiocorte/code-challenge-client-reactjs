import styled from "styled-components";

export const TableContent = styled.table`  
  width: 50%;  
  margin: auto;
  min-width: 300px;
  margin-top: 50px;
  tr:nth-child(odd) {
    background-color: #fff;
}
tr:nth-child(even) {
    background-color: #f1f1f1;
}

tr {
    border-bottom: 1px solid #ddd;
}

th:first-child, 
td:first-child {
    padding-left: 16px;
}


td, 
th {
    padding: 8px 8px;
    display: table-cell;
    text-align: left;
    vertical-align: top;
}

th {
    font-weight: bold;
}
 
{
    font-size: 13px!important;
    border: 1px solid #ccc;
    border-collapse: collapse;
    border-spacing: 0;
    width: 60%;
    display: table;
}
`;