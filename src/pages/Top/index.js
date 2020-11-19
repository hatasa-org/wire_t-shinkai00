import React from "react";
import { IonApp, IonButton } from "@ionic/react";

import "./index.css";

function Top() {
  return (
    <IonApp>
      <h1 className="app__name">App name</h1>
      <IonButton
        shape="round"
        expand="block"
        className="button"
        href="/tabs/waiting"
      >
        GMになる
      </IonButton>
      <IonButton shape="round" expand="block" className="button">
        Playerとして参加
      </IonButton>
      <IonButton shape="round" expand="block" className="button">
        キャラシートの作成
      </IonButton>
    </IonApp>
  );
}

export default Top;
