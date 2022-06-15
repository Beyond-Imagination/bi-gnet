import {atom, selector} from 'recoil';

export const provinceState = atom({
    key: 'provinceState', // unique ID (with respect to other atoms/selectors)
    default: '경기도', // default value (aka initial value)
});

// export const getSelectedProvince = selector({
//     key: 'getSelectedProvince', // unique ID (with respect to other atoms/selectors)
//     get: ({get}) => {
//         return get(provinceState);
//     },
// });
