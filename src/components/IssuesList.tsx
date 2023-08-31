import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Issue } from 'types/Issue';

interface ListType {
  list: Issue;
}

const IssuesList = ({ list }: ListType) => {
  const navigate = useNavigate();
  const createDate = list.created_at?.split('T')[0];

  return (
    <ListContent>
      <TopContent>
        <Number>#{list.number}</Number>
        <Title
          onClick={() => navigate(`/detail/${list.id}`, { state: list.number })}
        >
          {list.title}
        </Title>
        <Conmment>코멘트: {list.comments}</Conmment>
      </TopContent>

      <BottomContent>
        <span>작성자: {list.user.login}</span>
        <span>작성일: {createDate}</span>
      </BottomContent>
    </ListContent>
  );
};

export default IssuesList;

const ListContent = styled.div`
  padding: 10px 0;
  margin: 10px 0;
  width: 100%;
  border-bottom: 1px solid #6e6e6e;
  cursor: pointer;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const BottomContent = styled.div`
  display: flex;
  gap: 10px;
`;

const Number = styled.span`
  font-weight: 500;
`;

const Title = styled.span`
  display: inline-block;
  width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Conmment = styled.span`
  display: inline-block;
  text-align: right;
  width: 15%;
`;
