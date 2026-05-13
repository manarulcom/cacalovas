const http = require('http');

http.get('http://localhost:3000/api/admin/blog', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const posts = JSON.parse(data);
    const post = posts.find(p => p.slug === 'tips-makeup-mata-lebih-besar');
    if (post) {
      const req = http.request(`http://localhost:3000/api/admin/blog/${post.id}`, { method: 'DELETE' }, (res2) => {
        console.log('Deleted post:', post.id);
      });
      req.end();
    } else {
      console.log('Post not found');
    }
  });
});
