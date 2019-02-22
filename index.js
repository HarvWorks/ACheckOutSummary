/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { appSettings } from './src/settings';


AppRegistry.registerComponent(appSettings.appName, () => App);
