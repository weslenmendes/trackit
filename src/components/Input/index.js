// import { useState } from "react";
import styled from "styled-components";
// import { IoEye, IoEyeOff } from "react-icons/io5";

const Input = (props) => {
  // const [show, setShow] = useState(false);
  // const [focus, setFocus] = useState(false);

  // if (props.type === "password") {
  //   return (
  //     <Container focus={focus}>
  //       <input
  //         {...props}
  //         type={show ? "text" : "password"}
  //         onFocusOut={() => setFocus(!focus)}
  //         onFocus={() => setFocus(!focus)}
  //       />
  //       {show ? (
  //         <IoEyeOff
  //           color="#d4d4d4"
  //           className="icon"
  //           title="hide"
  //           onClick={() => setShow(!show)}
  //         />
  //       ) : (
  //         <IoEye
  //           color="#d4d4d4"
  //           className="icon"
  //           title="show"
  //           onClick={() => setShow(!show)}
  //         />
  //       )}
  //     </Container>
  //   );
  // }

  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0px 11px;
  margin-top: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  &:disabled {
    color: #afafaf;
    background-color: #f2f2f2;
    border-color: #d4d4d4;
    opacity: 0.8;
    pointer-events: none;
  }

  &::placeholder-shown {
    background-color: #fff;
  }

  &::placeholder {
    color: #dbdbdb;
  }
`;

// const Container = styled.div`
//   width: 100%;
//   height: 45px;
//   margin-top: 5px;
//   font-family: "Lexend Deca", sans-serif;
//   font-size: 20px;
//   border: ${(props) => (props.focus ? "1px solid #d5d5d5" : "2px solid #333")};
//   border-radius: 5px;
//   display: flex;
//   align-items: center;

//   input {
//     margin-left: 2px;
//     padding-left: 9px;
//     padding-right: 11px;
//     width: 87%;
//     height: 97%;
//     border: none;
//     font-size: 20px;
//     font-family: "Lexend Deca", sans-serif;
//     outline: none;

//     &::placeholder {
//       color: #dbdbdb;
//     }
//   }

//   .icon {
//     margin-left: 15px;
//     margin-right: 11px;
//     height: 100%;
//     cursor: pointer;
//   }
// `;

export { Input };
