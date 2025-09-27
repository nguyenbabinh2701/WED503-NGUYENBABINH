let Posts = [
    { id: 1, title: "Bai viet 1", content: "Noi dung bai viet 1" },
    { id: 2, title: "Bai viet 2", content: "Noi dung bai viet 2" },
    { id: 3, title: "Bai viet 3", content: "Noi dung bai viet 3" },
    { id: 4, title: "Bai viet 4", content: "Noi dung bai viet 4" },
];

export function getPosts(req, res) {
    res.json(posts);
}

export function getPostById() {}
export function addPost() {}
export function updatePost() {}
export function deletePost() {}