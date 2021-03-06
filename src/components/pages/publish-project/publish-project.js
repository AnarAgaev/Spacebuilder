import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FromContainer from "../../form"
import { jumpToTop } from "../../../utils";
import AbsoluteWrapper from "../../absolute-wrapper";
import { Helmet } from "react-helmet";
import './publish-project.scss';

class PublishProject extends Component {

  componentDidMount() {
    jumpToTop();
  }

  render() {
    return (
      <AbsoluteWrapper>
        <Helmet>
          <title>Опубилковать проект | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА.</title>
          <meta name="description" content="Как опубликовать свой проект на сайте designtalk.ru и в группах в социальных сетях." />
          <meta name="keywords" content="опубликовать проект, архитектура, дизайн интерьера, искусство" />
          <link rel="canonical" href="https://designtalk.ru/publish-project" />

          <meta name="og:title" content="Опубилковать проект | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta property="og:title" content="Опубилковать проект | Designtalk - это БЛОГ О ДИЗАЙНЕ ПРОСТРАНСТВА." />
          <meta name="og:description" content="Как опубликовать свой проект на сайте designtalk.ru и в группах в социальных сетях." />
          <meta property="og:description" content="Как опубликовать свой проект на сайте designtalk.ru и в группах в социальных сетях." />
          <meta name="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:image" content="https://designtalk.ru/images/cover.jpg" />
          <meta property="og:type" content="article" />
          <meta name="og:url" content="https://designtalk.ru/publish-project" />
          <meta property="og:url" content="https://designtalk.ru/publish-project" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Container>
          <Row>
            <Col lg={12}>
              <h1>Опубилковать проект</h1>
              <h3>
                Вы архитектор, дизайнер интерьеров или архитектурное бюро?
              </h3>
              <p>
                Мы будем рады опубликовать Ваш проект на страницах
                сайта <b>Designtalk.ru</b> и в наших аккаунтах в социальных сетях.
                Для того чтобы попасть к нам реализуйте проект, организуйте
                качественную фотосъемку и подайте заявку заполнив форму ниже.
                После отправки формы, редакция в двухнедельный срок рассмотрит
                Ваш проект и даст обратную связь. В случае положительного
                решения, мы сообщим даты публикации проекта на сайте и в
                социальных сетях.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={7}>
              <FromContainer
                author={{required: false}}
                phone={{required: true}}
                email={{required: true}}
                site={{required: false}}
                socials={{required: false}}
                photo={{required: false}}
                objectphotos={{required: false}}
                published={{required: false}}
                photographer={{required: false}}
                stylist={{required: false}}
                datefinish={{required: false}}
                city={{required: false}}
                area={{required: false}}
                things={{required: false}}
                description={{required: true}}

                url={'/scripts/handle-form-publish-project.php'}

                successMessage={
                  'Спасибо! Редакция рассмотрит Ваш проект и ' +
                  'в двухнедельный срок сообщит о решении.'
                }
              />
            </Col>
          </Row>
        </Container>
      </AbsoluteWrapper>
    );
  }
}

export default PublishProject;