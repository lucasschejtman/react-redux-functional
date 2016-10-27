import React, { PropTypes } from 'react';

import SystemJS from 'systemjs';
SystemJS.config({
  map: {
    react: React,
    //PropTypes: React.PropTypes,
    //'plugin-babel': 'import ',
    //'babel-plugin-transform-react-jsx': 'node_modules/babel-plugin-transform-react-jsx/lib/index.js'
  },
  //transpiler: 'plugin-babel'
});

// /components/ListComponent.js
// dist/${module.identifier}@${module.version}.js
const ModuleView = ({ module }) => {
  SystemJS.import(`https://rawgit.com/lucasschejtman/misc/fd44fa040cce8dad84244433f1a0599ee0c45834/systemjs/dist/${module.identifier}@${module.version}.js`)
    .then(m => {
      console.log(m);
      //return <component {...module.props} />;
    })
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
