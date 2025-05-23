// we can use the searchParams property of the URL object to get/set query parameters of the URL.

const url = new URL('https://shripal.com/posts?search=html&page=2');
const { searchParams } = url;

console.log(searchParams); // URLSearchParams { 'search' => 'html', 'page' => '2' }

const search = searchParams.get('search'); // 'html'

const page = searchParams.get('page'); // '2'

searchParams.set('search', 'css');
url.toString();
// 'https://shripal.com/posts?search=css&page=2'

searchParams.append('sortBy', 'publishedDate');
url.toString(); // https://shripal.com/posts?search=css&page=2&sortBy=publishDate