function mapUsers(users) {
  return{
    data: users, //mengambil data users
    count: users.length, //menjumlah data users
  }
}

//export named di function sesuai deksripsi
export function mapArticles(articles) {
  return{
    data: articles, // mengambil data articles
    count: articles.length, // mengambil jumlah data articles
  }
}

export default mapUsers;