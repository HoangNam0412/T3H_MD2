async function login() {
    const email = prompt("Nhập email:");
    const password = prompt("Nhập password:");

    if (!email || !password) {
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }

    // Lấy danh sách người dùng
    const usersFromStorage = await getUsers();

    const user = usersFromStorage.find(user => user.email === email && user.password === password);
    if (user) {
        document.getElementById('output').innerText = `Xin chào ${user.first_name} ${user.last_name}`;
    } else {
        document.getElementById('output').innerText = "Thông tin tài khoản không chính xác";
    }
}

async function register() {
    const first_name = prompt("Nhập first name:");
    const last_name = prompt("Nhập last name:");
    const email = prompt("Nhập email:");
    const password = prompt("Nhập password:");

    if (!first_name || !last_name || !email || !password) {
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }

    // Lấy danh sách người dùng
    const usersFromStorage = await getUsers();

    const existingUser = usersFromStorage.find(user => user.email === email);
    if (existingUser) {
        document.getElementById('output').innerText = "Email này đã có tài khoản";
        return;
    }

    // Tạo user mới
    const newUser = {
        id: usersFromStorage.length + 1,
        first_name,
        last_name,
        email,
        password
    };
    usersFromStorage.push(newUser);

    // Lưu lại danh sách người dùng
    await saveUsers(usersFromStorage);

    document.getElementById('output').innerText = "Đăng ký thành công!";
}

async function viewUsers() {
    const keyword = prompt("Nhập từ khóa tìm kiếm (để trống để xem tất cả):") || "";

    // Lấy danh sách người dùng
    const usersFromStorage = await getUsers();

    const filteredUsers = usersFromStorage.filter(user =>
        user.first_name.includes(keyword) ||
        user.last_name.includes(keyword) ||
        user.email.includes(keyword)
    );

    const output = filteredUsers.map(user => `${user.id}. ${user.first_name} ${user.last_name} - ${user.email}`).join('\n');
    document.getElementById('output').innerText = output || "Không có kết quả phù hợp";
}

async function viewPosts() {
    const usersFromStorage = await getUsers();

    const output = posts.map(post => {
        const user = usersFromStorage.find(user => user.id === post.user_id);
        return `${post.id}. ${post.title} - ${user.first_name} ${user.last_name} (${post.created_at})`;
    }).join('\n');
    document.getElementById('output').innerText = output;
}

async function viewPostDetails() {
    const id = parseInt(prompt("Nhập ID của post:"));
    const post = posts.find(post => post.id === id);

    if (!post) {
        document.getElementById('output').innerText = "Không tìm thấy bài viết";
        return;
    }

    const usersFromStorage = await getUsers();
    const user = usersFromStorage.find(user => user.id === post.user_id);

    document.getElementById('output').innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <img src="${post.image}" alt="${post.title}" />
        <p>Người tạo: ${user.first_name} ${user.last_name}</p>
        <p>Ngày tạo: ${post.created_at}</p>
        <p>Ngày sửa đổi: ${post.updated_at}</p>
    `;
}

async function searchPostsByUser() {
    const email = prompt("Nhập email của user:");

    // Lấy danh sách người dùng
    const usersFromStorage = await getUsers();

    const user = usersFromStorage.find(user => user.email === email);

    if (!user) {
        document.getElementById('output').innerText = "Không tìm thấy user";
        return;
    }

    const userPosts = posts.filter(post => post.user_id === user.id);
    const output = userPosts.map(post => `${post.id}. ${post.title} (${post.created_at})`).join('\n');
    document.getElementById('output').innerText = output || "User này chưa có bài viết nào";
}

// Hàm giả lập lấy danh sách người dùng từ Local Storage
async function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            const usersFromStorage = JSON.parse(localStorage.getItem('users')) || users;
            resolve(usersFromStorage);
        }, 100); // Giả lập độ trễ
    });
}

// Hàm giả lập lưu danh sách người dùng vào Local Storage
async function saveUsers(updatedUsers) {
    return new Promise(resolve => {
        setTimeout(() => {
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            resolve();
        }, 100); // Giả lập độ trễ
    });
}
