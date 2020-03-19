import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorBoundary from "../error-boundary";
import './last-article.scss';

export default class LastArticle extends Component {

  _baseUrl = 'https://spacebuilder.ru';

  state = {
    isTitleHover: false
  };

  handleTitleOver = () => {
    this.setState({
      isTitleHover: true
    });
  };

  handleTitleOut = () => {
    this.setState({
      isTitleHover: false
    });
  };

  render() {
    const { isTitleHover } = this.state;
    const { rubric = { link: null, name: null },
      ...article } = this.props.lastArticle;
    const urlArticle = '/articles/' + article.url;
    const urlRubric = '/articles/?filter=true&rubric=' + rubric.link;

    return (
      <ErrorBoundary>
        <Container>
          <Row>
            <Col lg={6} style={{zIndex: '1'}}>
              <div className="last-article">
                <Link to={ urlRubric } className="last-article__link">{ rubric.name }</Link>
                <Link to={ urlArticle } className="last-article__title">
                  <span className={ isTitleHover ? 'hover' : null }>{ article.title }</span>
                </Link>
                <p className="last-article__description">{ article.preview }</p>
                <Link to={ urlArticle } className="button">Читать</Link>
              </div>
            </Col>
            <Col lg={6}>
              <Link to={ urlArticle } className="last-article__picture">
                <img
                  src={ this._baseUrl + '/images/' + article.picture }
                  alt={ article.title }
                  onMouseOut={ this.handleTitleOut }
                  onMouseOver={ this.handleTitleOver } />
              </Link>
            </Col>
          </Row>
        </Container>
      </ErrorBoundary>
    );
  }
};