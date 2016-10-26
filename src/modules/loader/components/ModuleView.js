import React, { PropTypes } from 'react';

import SystemJS from 'systemjs';

SystemJS.config({
  map: {
    react: React,
    PropTypes: React.PropTypes
  }
})

//<div>{`${module.identifier}@${module.version}`}</div>
//dist/${module.identifier}@${module.version}.js
const ModuleView = ({ module }) => {
  SystemJS.import(`https://cdn.rawgit.com/lucasschejtman/misc/master/systemjs/components/ListComponent.js`)
    .then(c => {
      console.log(`First then: ${JSON.stringify(c)}`);
      return System.import('components/ListComponent.js');
    })
    .then(c => console.log(`Second then: ${c}`))
    .catch(err => console.log(`Error in import: ${err}`));

  return <div>{`${module.identifier}@${module.version}`}</div>;
};

ModuleView.propTypes = {
  module: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired
  }).isRequired
};

export default ModuleView;
