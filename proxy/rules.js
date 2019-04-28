mysqlx = require('@mysql/xdevapi');
// Connect to server on localhost
mysqlx.getSession({
    user: 'root',
    password: '',
    host: 'localhost',
    port: '33060'
  }).then(function (session) {
    db = session.getSchema('Guild');
    // Use the collection 'my_collection'
    myColl = db.getCollection('my_collection');
    // Specify wich document to find with Collection.find() and
    // fetch it from the database with .execute()
    return myColl
      .find('name like :param')
      .limit(1)
      .bind('param', 'S%')
      .execute(function (doc) {
        console.log(doc);
      });
  })
  .catch(function (err) {
    // Handle error
  });