import Styled from "styled-components";
export const LoginDiv = Styled.div`
    border: 1px solid #ccc;
    width: 90%;
    max-width: 500px;
    margin: 15% auto;
    padding: 25px 0;
    background-color: green;
   
`;
export const HomeDiv = Styled.div`
    margin: 5% auto;
`;
export const SearchDiv = Styled.div`
    border: 1px solid #ccc;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 25px 0;
    background-color: green;
    
`;
export const Table = Styled.table`
    border: 2px solid #ccc;
    
    width: 95%;
    margin: 20px 30px;
`;

export const Tr = Styled.tr`
    border: 1px solid white;
    
    &:nth-child(even){
        background-color: green;
    }
`;

export const Th = Styled.th`
    background-color: grey;
    border-radius: 5px;
    color: white;
`;
export const Td = Styled.td`
    &:last-child{
        background-color: white;
    }
    border-radius: 5px;
`;
export const Input = Styled.input`
    border: 1px solid #ccc;
    width: 350px;
    height: 30px;
    font-size: 20px;
    margin: 15px 0;
    margin-left: 75px;
    background-color: grey
    
   
`;
export const Button = Styled.button`
    width: 80%;
    max-width: 150px;
    min-width: 100px;
    height: 25px;
    background-color: red;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 25px;
`;
export const Select = Styled.select`
    margin: 20px;
    border: 1px solid #ccc;
    width: 150px;
    height: 30px;
    font-size: 18px;
    margin: 15px 0;
    
    
    
`;
