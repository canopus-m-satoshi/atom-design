import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDL>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
});

const SDL = styled.dl`
  text-align: left;
  margin: 0;

  dt {
    float: left;
  }
  dd {
    padding: 0 0 8px 32px;
    overflow-wrap: break-word;
  }
`;
