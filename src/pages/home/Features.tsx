import React from "react";
import { FeatureItem } from "../../components/FeatureItem.tsx";

import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";

export const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        source={iconChat}
        alt="Chat icon"
        title="You are our #1 priority"
        message="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        source={iconMoney}
        alt="Money icon"
        title="More savings means higher rates"
        message="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        source={iconSecurity}
        alt="Security icon"
        title="Security you can trust"
        message="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};
