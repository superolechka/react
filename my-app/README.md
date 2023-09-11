Реализуйте компонент <PostCatalog />, который представляет собой вывод статей полученных из внешнего сервера

Список постов можно получить сделав запрос на сервер :
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(res.data);

Структура на которую вы должны получить на выходе :
<div class="posts">
    <ul class="posts__list">
        <li class="posts_single-post" data-post-id="Id поста">
            <h3 class="posts__post-title">Заголовок поста</h3>
            <p class="posts__post-description">Контент поста</p>
        </li>

        <li class="posts_single-post" data-post-id="Id следующего поста">
            <h3 class="posts__post-title">Заголовок поста</h3>
            <p class="posts__post-description">Контент поста</p>
        </li>
    </ul>
</div>

Каждый следующий li это отдельный пост
