import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { GoogleProvider } from './ContextProviders/GoogleContext';
import { LinkProvider } from './ContextProviders/LinkContext';
import { HomePageProvider } from './ContextProviders/HomePageContext';
import { CommentCountsProvider } from './ContextProviders/CommentCountsContext';
import { TabProvider } from './ContextProviders/TabContext';
import { RawDatasetsMetadataProvider } from './ContextProviders/RawDatasetsMetadataContext';

ReactDOM.render(
  <React.StrictMode>
    <GoogleProvider>
      <HomePageProvider>
        <CommentCountsProvider>
          <RawDatasetsMetadataProvider>
            <LinkProvider>
              <TabProvider>
                <App />
              </TabProvider>
            </LinkProvider>
          </RawDatasetsMetadataProvider>
        </CommentCountsProvider>
      </HomePageProvider>
    </GoogleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
