API Routes
========

`http://localhost:8000/bike/add` - добавить один байк.
`http://localhost:8000/bike/add/random` - добавить один байк, созданный рандомным способом.
`http://localhost:8000/bike/add/list` - добавить список байков.
`http://localhost:8000/bike/add/list/random/:count` - добавить cсписок байков, созданный рандомным способом, где аргумент **count** устанавливает колличество новых записей. Диапозон допустимх значений от 1 до 5000.
`http://localhost:8000/bike/get/:id` - получить байк по идентификатору id.
`http://localhost:8000/description/get` - получим заголовки разделов и дополнительные описания