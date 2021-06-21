import styled  from 'styled-components';

export const Global = styled.div`
display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
`;

export const Card = styled.div`
 margin-top: 15px;
 padding: 2rem;
 min-width: 50vh;
 max-width: 350px;
 border-radius: 10px;
 box-sizing: border-box;
 box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
 font-family: 'Poppins';
 justify-content: center;
 align-items: center;
 background-color: #1C1C1C;
 color: white;
`;

export const Button = styled.button`
background-color: #ffff00;
 font-size: .9rem;
 border: 0;
 border-radius: 5px;
 height: 40px;
 width: 100%;
 padding: 0 20px;
 cursor: pointer;
 box-sizing: border-box;
 outline: none;
 color: white;
 font-family: 'Poppins';
`;

