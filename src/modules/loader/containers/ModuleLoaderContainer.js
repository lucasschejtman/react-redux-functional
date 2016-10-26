import { ModuleView, ModuleList } from '../components';
import { actions } from '../index';

//import ListComponent from '../components/ListComponent';

import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';

const mapStateToProps = (state) => pick(['module', 'modules'], state.loader);
const mapDispatchToProps = (dispatch) => ({	onModuleClick: (module) => dispatch(actions.load(module)) });

const ModuleLoaderContainer = ({ module, modules, onModuleClick }) => (
 	<div className="col-1-1">
 		<div className="col-6-12">
 			<ModuleList modules={modules} onModuleClick={onModuleClick} />
		</div>
    <div className="col-6-12">
      {/* { Object.keys(module.props).length > 0 && <ListComponent {...module.props} /> } */}
      { Object.keys(module.props).length > 0 && <ModuleView module={module} /> }
    </div>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(ModuleLoaderContainer);
