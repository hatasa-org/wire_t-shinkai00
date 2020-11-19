import {
  IonButton,
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";

import { maleOutline, femaleOutline } from "ionicons/icons";

function Waiting() {
  // const players = [];
  const players = [
    { name: "ふうが", age: 14, gender: "male", occupation: "消防士" },
    { name: "たつみ", age: 21, gender: "female", occupation: "シェフ" },
    { name: "ゆうき", age: 34, gender: "male", occupation: "警察官" },
  ];
  const roomNumber = 45431;
  return (
    <IonApp className="ion-items-center">
      <h1>部屋番号: {roomNumber}</h1>
      {players.map((player) => (
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h3>{player.name}</h3>
              </IonCol>
              <IonCol>
                <h5>年齢: {player.age}</h5>
              </IonCol>
              {player.gender === "male" ? (
                <div>
                  <IonCol>
                    <h5>
                      性別:
                      <IonIcon icon={maleOutline} />
                    </h5>
                  </IonCol>
                </div>
              ) : (
                <div>
                  <IonCol>
                    <IonIcon icon={femaleOutline} />
                  </IonCol>
                </div>
              )}
              <IonCol>
                <h5>職業:{player.occupation}</h5>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      ))}
      {players.length === 0 ? (
        <div>
          <h3>待機中です。</h3>
          <IonButton disabled>ゲームを始める</IonButton>
        </div>
      ) : (
        <div>
          <h3>プレイヤー: {players.length}</h3>
          <IonButton>ゲームを始める</IonButton>
        </div>
      )}
    </IonApp>
  );
}

export default Waiting;
