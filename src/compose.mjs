import composer from 'module-composer';
import modules from './modules/index.mjs';
import defaultConfig from './default-config.mjs';

export default ({ configs }) => {

    const { compose, config } = composer(modules, { defaultConfig, configs });
    const { menu } = config;
    const { util } = compose('util');
    const { menuReader } = compose('menuReader', { menu, util });
    const { pureComponents } = compose('pureComponents', { menuReader, util, config });
    compose('components', { pureComponents, menuReader });
    return compose.end();

};
