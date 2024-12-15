const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the content of Post 1",
    image: "https://via.placeholder.com/150",
    created_at: "2023-01-01",
    updated_at: "2023-01-02",
    user_id: 1,
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the content of Post 2",
    image: "https://via.placeholder.com/150",
    created_at: "2023-02-01",
    updated_at: "2023-02-02",
    user_id: 2,
  },

  {
    id: 3,
    title: "Mynah, common",
    content:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 3,
    created_at: "2022-03-29",
    updated_at: "2022-10-06",
  },
  {
    id: 4,
    title: "Ocelot",
    content:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 4,
    created_at: "2022-04-01",
    updated_at: "2022-10-02",
  },
  {
    id: 5,
    title: "Mockingbird, galapagos",
    content:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 5,
    created_at: "2022-09-18",
    updated_at: "2022-10-03",
  },
  {
    id: 6,
    title: "Cape Barren goose",
    content:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 6,
    created_at: "2022-04-28",
    updated_at: "2022-10-02",
  },
  {
    id: 7,
    title: "Godwit, hudsonian",
    content:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 7,
    created_at: "2022-05-23",
    updated_at: "2022-10-06",
  },
  {
    id: 8,
    title: "Jackrabbit, white-tailed",
    content:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 8,
    created_at: "2022-05-07",
    updated_at: "2022-10-04",
  },
  {
    id: 9,
    title: "Stork, jabiru",
    content:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 9,
    created_at: "2022-02-10",
    updated_at: "2022-10-04",
  },
];
