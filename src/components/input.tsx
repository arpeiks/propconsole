import styled from "styled-components";

const InputRoot = styled.div`
  width: 100%;

  & .inp {
    position: relative;
  }

  & svg {
    top: 0;
    right: 20px;
    cursor: pointer;
    position: absolute;

    &:hover {
      color: black !important;
      stroke: black !important;
    }
  }
`;

const Label = styled.label`
  margin: 0;
  padding: 0;
  display: block;
  color: #999999;
  margin-bottom: 1em;
  margin-bottom: 6px;
  align-self: flex-start;
`;

const TextField = styled.input<any>`
  &::placeholder {
    color: #999999;
    font-weight: 300;
  }

  outline: 0;
  color: #333;
  height: 47px;
  border-radius: 5px;
  padding-left: 1.5em;
  margin-bottom: 1.5em;
  font-family: Poppins;
  padding-right: 1.5em;
  box-sizing: border-box;
  border: 1px solid #f1f1f1;

  background: ${({ variant }) =>
    variant === "code" ? "transparent" : "#fafafa"};
  width: ${({ variant }) => (variant === "code" ? "120px" : "100%")};
`;

const Input = ({
  type,
  label,
  value,
  style,
  placeholder,
  variant,
  icon,
}: any) => {
  return (
    <InputRoot>
      <Label>{label}</Label>
      <span className="inp">
        <TextField
          type={type}
          value={value}
          style={style}
          variant={variant}
          placeholder={placeholder}
        />
        {icon}
      </span>
    </InputRoot>
  );
};

export default Input;
