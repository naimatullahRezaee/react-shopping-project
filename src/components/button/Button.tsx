import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

const Button = ({ children, variant, ...rest }: TButton) => {
  return (
    <button
      {...rest}
      style={{
        borderRadius: "6px",
        padding: "4px 8px",
        ...checkVarian(variant),
      }}
    >
      {children}
    </button>
  );
};

export default Button;

function checkVarian(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#6d6dff", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}
