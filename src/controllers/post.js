let Posts = [
    { id: 1, title: "lap top", content: "gygabyte" },
    { id: 2, title: "dien thoai", content: "iphone" },
    { id: 3, title: "dien thoai 2", content: "redminote 11pro" },
    { id: 4, title: "Bai viet 4", content: "Noi dung bai viet 4" },
];

export function getPosts(req, res) {
    res.json(posts);
};

export function getPostById() {}
export function addPost() {}
export function updatePost() {}
export function deletePost() {}