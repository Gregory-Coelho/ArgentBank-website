import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button } from "./Button";

interface AccountCardProps {
  title: string;
  amount: number;
  description: string;
}

const onClick = () => {
  alert("Transaction");
};

export const Account = ({ title, amount, description }: AccountCardProps) => {
  const isEditing = useSelector((state: RootState) => state.user.isEditing);

  return (
    <section className={isEditing ? "account account-isEditing" : "account"}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          type={
            isEditing ? "transaction-button-isEditing" : "transaction-button"
          }
          message="View transactions"
          onClick={onClick}
        />
      </div>
    </section>
  );
};
