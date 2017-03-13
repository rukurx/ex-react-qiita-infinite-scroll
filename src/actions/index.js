// 投稿を追加する
export const successGetMorePosts = (posts) => {
    return {
        type: 'SUCCESS_GET_MORE_POSTS',
        posts: posts
    }
}

// Ajaxで投稿一覧を取得する
export const getMorePosts = () => {
    return {
        type: 'GET_MORE_POSTS'
    };
}
