import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import PropTypes from 'prop-types';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    let pageContext;
    const sheet = new ServerStyleSheet();

    const page = renderPage(

      Component => {
        const WrappedComponent = props => {
          pageContext = props.pageContext;
          return sheet.collectStyles(<Component {...props} />);
        };

        WrappedComponent.propTypes = {
          pageContext: PropTypes.object.isRequired,
        };

        return WrappedComponent;
      }

    );

    const styleTags = sheet.getStyleElement();
    return {
       ...page,
       styleTags,
       pageContext,
       styles: (
          <React.Fragment>
            <style
              id="jss-server-side"
              dangerouslySetInnerHTML={{ __html: pageContext ? pageContext.sheetsRegistry.toString() : '' }}
            />

          </React.Fragment>
       )
     };
  }

  render () {
    const { pageContext } = this.props;

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={pageContext ? pageContext.theme.palette.primary.main : ''} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="/static/css/grid-layout.css"
          />
          <link
            rel="stylesheet"
            href="/static/css/github.css"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
