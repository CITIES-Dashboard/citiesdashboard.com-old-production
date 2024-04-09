export const Events = {
  internalNavigation: 'internal_navigation',
  externalNavigation: 'external_navigation',
  themeChange: 'theme_change',
  rawDatasetButtonClicked: 'raw_dataset_button_clicked',
  rawDatasetDownloaded: 'raw_dataset_downloaded',
  expandSampleData: 'expand_sample_data',
  collapseSampleData: 'collapse_sample_data',
  openContactFormInExternalTab: 'open_contact_form_in_external_tab'
};

export const sendEventAnalytics = (eventName, options) => {
  if (window.location.hostname === 'citiesdashboard.com') window.gtag('event', eventName, options);
};
