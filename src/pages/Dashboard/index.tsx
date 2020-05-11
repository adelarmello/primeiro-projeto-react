import React from 'react';

import { FiChevronRight} from 'react-icons/fi'

import logoImg from  '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/30738742?s=460&u=dedc3f9ccc4718145fe4567e668042473e95146b&v=4"
          alt="Nome"
          />

          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/30738742?s=460&u=dedc3f9ccc4718145fe4567e668042473e95146b&v=4"
          alt="Nome"
          />

          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/30738742?s=460&u=dedc3f9ccc4718145fe4567e668042473e95146b&v=4"
          alt="Nome"
          />

          <div>
            <strong>Título do repo</strong>
            <p>Descrição do repo</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
