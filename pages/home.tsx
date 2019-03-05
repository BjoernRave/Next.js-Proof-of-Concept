import React from 'react';
import Header from 'components/Header';
import styled from '@emotion/styled';

const Home = styled.div`
  background-color: lightgray;
`;

const TestText = styled.p`
  font-size: 30px;
  padding: 50px;
`;

function Homepage() {
  return (
    <Home>
      <Header />
      <TestText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam enim saepe laborum quis doloremque harum
        obcaecati quam animi eos cupiditate in modi, rerum natus earum placeat omnis fuga veritatis. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Magni, nam enim saepe laborum quis doloremque harum obcaecati quam animi
        eos cupiditate in modi, rerum natus earum placeat omnis fuga veritatis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni, nam enim saepe laborum quis doloremque harum obcaecati quam animi eos cupiditate in
        modi, rerum natus earum placeat omnis fuga veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magni, nam enim saepe laborum quis doloremque harum obcaecati quam animi eos cupiditate in modi, rerum natus
        earum placeat omnis fuga veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam enim
        saepe laborum quis doloremque harum obcaecati quam animi eos cupiditate in modi, rerum natus earum placeat omnis
        fuga veritatis.
      </TestText>
      <TestText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam enim saepe laborum quis doloremque harum
        obcaecati quam animi eos cupiditate in modi, rerum natus earum placeat omnis fuga veritatis. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Magni, nam enim saepe laborum quis doloremque harum obcaecati quam animi
        eos cupiditate in modi, rerum natus earum placeat omnis fuga veritatis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magni, nam enim saepe laborum quis doloremque harum obcaecati quam animi eos cupiditate in
        modi, rerum natus earum placeat omnis fuga veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magni, nam enim saepe laborum quis doloremque harum obcaecati quam animi eos cupiditate in modi, rerum natus
        earum placeat omnis fuga veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam enim
        saepe laborum quis doloremque harum obcaecati quam animi eos cupiditate in modi, rerum natus earum placeat omnis
        fuga veritatis.
      </TestText>
    </Home>
  );
}

export default Homepage;
