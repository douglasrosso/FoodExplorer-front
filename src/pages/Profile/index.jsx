import {
  FiUser,
  FiMail,
  FiLock,
  FiCamera,
  FiShoppingBag,
  FiPlus,
} from "react-icons/fi";
import { Container, Content, Form, Avatar, Infos, Logo } from "./styles";
import { ThemeProvider } from "styled-components";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import GlobalStyles from "../../styles/global";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import { api } from "../../services/api";

export const Profile = () => {
  const { user, updateProfile, loading } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleProfileUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Content>
          <div className="card">
            <Form>
              <Avatar>
                <img src={avatar} alt="Foto do usuário" />
                <label htmlFor="avatar">
                  <FiCamera />
                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleChangeAvatar}
                  />
                </label>
              </Avatar>
              <div className="inputs">
                <label>
                  <FiUser size={20} />
                  <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  <FiMail size={20} />
                  <input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  <FiLock size={20} />
                  <input
                    type="password"
                    placeholder="Senha atual"
                    onChange={(e) => setPasswordOld(e.target.value)}
                  />
                </label>
                <label>
                  <FiLock size={20} />
                  <input
                    type="password"
                    placeholder="Nova senha"
                    onChange={(e) => setPasswordNew(e.target.value)}
                  />
                </label>
              </div>
              <Button
                title={loading ? "Salvando" : "Salvar"}
                onClick={handleProfileUpdate}
                disabled={loading}
              />
            </Form>
            {user.isAdmin ? (
              <Infos>
                <p>
                  Olá <span>{name}</span>, acesse a opção desejada:
                </p>
                <Link to="/createdish">
                  <Button title="Criar novo Prato" icon={FiPlus} />
                </Link>
              </Infos>
            ) : (
              ""
            )}
          </div>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
