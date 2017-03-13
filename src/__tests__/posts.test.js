import posts from '../reducers/posts';

describe('Reducers posts', () => {

    it('SUCCESS_GET_MORE_POSTS', () => {
        const state = [{id: 1, title: 'タイトル１', body: '本文１'}];
        const action = { type: 'SUCCESS_GET_MORE_POSTS', posts: [{id: 2, title: 'タイトル2', body: '本文2'}] };
        expect(posts(state, action)).toEqual(
          [{"body": "本文１", "id": 1, "title": "タイトル１"}, {"body": "本文2", "id": 2, "title": "タイトル2"}]
        );
    });

    it('INIT', () => {
        expect(posts({}, { type: ''})).toEqual({
        });
    });

});

