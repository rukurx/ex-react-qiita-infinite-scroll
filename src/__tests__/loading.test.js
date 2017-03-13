import React from 'react';
import loading from '../reducers/loading';

describe('Reducers loading', () => {

    it('SHOW_LOADING', () => {
        expect(loading({isActive: false}, { type: 'SHOW_LOADING' })).toEqual({
            isActive: true
        });
    });

    it('HIDE_LOADING', () => {
        expect(loading({isActive: true}, { type: 'HIDE_LOADING' })).toEqual({
            isActive: false
        });
    });

    it('INIT', () => {
        expect(loading({}, { type: ''})).toEqual({
        });
    });

});

