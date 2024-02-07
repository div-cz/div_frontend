import { MouseEventHandler } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "default";
type ButtonType = "button" | "submit" | "reset" | "link";

type ButtonProps = {
  title: string;
  size?: ButtonSize;
  type?: ButtonType;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
};

export function Button(props: ButtonProps) {
  const buttonContent = (
    <>
      {props.isLoading && "Tady bude loader"}
      {props.title}
    </>
  );

  const getVariantStyles = (variant?: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-600";
      case "secondary":
        return "bg-gray-500 text-black hover:bg-gray-600";
      case "tertiary":
        return "bg-green-500 text-white hover:bg-green-600";
      default:
        return "bg-blue-500 text-white hover:bg-blue-600";
    }
  };

  const getSizeStyles = (size?: ButtonSize) => {
    switch (size) {
      case "small":
        return "px-2 py-1";
      case "default":
        return "px-3 py-1.5";
      default:
        return "px-3 py-1.5";
    }
  };

  const getButtonStyle = `rounded cursor-pointer shadow ${getSizeStyles(props.size)} ${getVariantStyles(props.variant)}`;

  return (
    <>
      {props.type === "link" ? (
        <Link className={getButtonStyle} href={props.href || "/"}>
          {buttonContent}
        </Link>
      ) : (
        <button
          className={getButtonStyle}
          onClick={props.onClick}
          disabled={props.isDisabled}
          type={props.type || "button"}
        >
          {buttonContent}
        </button>
      )}
    </>
  );
}
