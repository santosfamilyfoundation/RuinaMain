import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
configure({ adapter: new Adapter() });
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
