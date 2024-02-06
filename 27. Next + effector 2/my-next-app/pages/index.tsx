import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import {
  Panel,
  Group,
  CardGrid,
  Card,
  Div,
  Avatar,
  Title,
  Text,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { getCharacterFx } from "@/api/character";
import { charactersStore } from "@/store/charactersStore";

export default function Home() {
  // Используем useUnit для автоматического выполнения эффекта и подписки на стор
  const characters = useUnit({
    characters: charactersStore,
    getCharacterFx: getCharacterFx,
  });

  useEffect(() => {
    characters.getCharacterFx();
  }, [characters.getCharacterFx]);

  return (
    <Panel>
      <Group title="Rick and Morty Characters">
        <CardGrid size="l">
          {characters.characters.map((character: any) => (
            <Card key={character.id} style={{ padding: "20px" }}>
              <Div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Avatar
                  src={character.image}
                  size={80}
                  style={{ marginRight: "20px" }}
                />
                <div>
                  <Title level="2" style={{ marginBottom: "10px" }}>
                    {character.name}
                  </Title>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Status: ${character.status}`}</Text>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Species: ${character.species}`}</Text>
                  <Text>{`Gender: ${character.gender}`}</Text>
                </div>
              </Div>
            </Card>
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
}
